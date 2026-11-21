(function () {
  "use strict";
  const T = window.TRIP;
  const $ = (s, r = document) => r.querySelector(s);
  const el = (tag, attrs = {}, ...kids) => {
    const n = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs)) {
      if (v == null || v === false) continue;
      if (k === "class") n.className = v;
      else if (k === "html") n.innerHTML = v;
      else if (k.startsWith("on")) n.addEventListener(k.slice(2), v);
      else n.setAttribute(k, v === true ? "" : v);
    }
    for (const k of kids.flat()) if (k != null && k !== false) n.append(k.nodeType ? k : document.createTextNode(String(k)));
    return n;
  };

  /* ---------- 本地存储（失败时退回内存） ---------- */
  const mem = {};
  const store = {
    get(k, d) { try { const v = localStorage.getItem("rn26:" + k); return v == null ? d : JSON.parse(v); } catch (e) { return k in mem ? mem[k] : d; } },
    set(k, v) { mem[k] = v; try { localStorage.setItem("rn26:" + k, JSON.stringify(v)); } catch (e) {} }
  };
  /* 12/5–13 新行程：换了一套存储键，旧行程的勾选和选择不会带过来 */
  let done = store.get("done2", {});
  let chosen = store.get("chosen2", {});
  /* 默认选中 data.js 里 pick 指定的住处；用户取消后存 null，不再自动选回 */
  T.stays.forEach(st => { if (st.pick && !(st.id in chosen)) chosen[st.id] = st.pick; });

  const P = T.budget.people;
  const CITY = { rome: "罗马", naples: "那不勒斯" };
  const COLOR = { rome: "var(--rome)", naples: "var(--naples)" };
  const TAG = { book: "需预订", decide: "待决定", photo: "拍照点" };

  /* ---------- 首屏 ---------- */
  $("#title").textContent = T.title;
  $("#range").textContent = T.range;
  $("#people").textContent = T.people;
  $("#updated").textContent = T.updated;

  const strip = $("#strip");
  T.days.forEach(d => {
    const li = el("li", { class: d.city });
    if (d.city === "transit") { li.style.setProperty("--from", COLOR[d.from]); li.style.setProperty("--to", COLOR[d.to]); }
    const cityName = d.city === "transit" ? CITY[d.from] + "→" + CITY[d.to] : CITY[d.city];
    li.append(el("a", { href: "#" + d.id },
      el("span", { class: "num" }, d.date),
      el("span", { class: "dow" }, d.dow),
      el("span", { class: "cty" }, cityName)));
    strip.append(li);
  });

  /* ---------- 图片：维基百科摘要接口 ---------- */
  const imgCache = store.get("img2", {});
  function fillImage(box, spot) {
    const key = spot.wiki;
    const put = (info) => {
      box.innerHTML = "";
      if (!info || !info.src) { box.append(el("span", { class: "alt" }, spot.name)); return; }
      const img = el("img", { src: info.src, alt: spot.name, loading: "lazy", referrerpolicy: "no-referrer" });
      img.addEventListener("error", () => { delete imgCache[key]; store.set("img2", imgCache); box.innerHTML = ""; box.append(el("span", { class: "alt" }, spot.name)); });
      box.append(img);
      const credit = box.nextElementSibling;
      if (credit && credit.classList.contains("credit")) {
        credit.innerHTML = "";
        credit.append("图片：", el("a", { href: info.page, target: "_blank", rel: "noopener" }, "Wikipedia / Wikimedia Commons"));
      }
    };
    if (imgCache[key]) return put(imgCache[key]);
    box.append(el("span", { class: "alt" }, spot.name));
    /* 依次尝试：英文维基 → 意大利语维基备用词条 → 意大利语原名。
       用 MediaWiki 自己生成的 500px 缩略图（维基对非标准尺寸的外链会拒绝） */
    const tries = [["en", key]];
    if (spot.itwiki) tries.push(["it", spot.itwiki]);
    tries.push(["it", spot.it.split(" / ")[0]]);
    const attempt = (i) => {
      if (i >= tries.length) return commons();
      const [lng, title] = tries[i];
      const api = "https://" + lng + ".wikipedia.org/w/api.php?action=query&format=json&origin=*&redirects=1&prop=pageimages&piprop=thumbnail&pithumbsize=500&titles=" + encodeURIComponent(title);
      fetch(api)
        .then(r => r.ok ? r.json() : null)
        .then(j => {
          const pages = j && j.query && j.query.pages;
          const pg = pages && Object.values(pages)[0];
          if (!pg || !pg.thumbnail) return attempt(i + 1);
          const info = { src: pg.thumbnail.source, page: "https://" + lng + ".wikipedia.org/wiki/" + encodeURIComponent(title) };
          imgCache[key] = info; store.set("img2", imgCache); put(info);
        })
        .catch(() => attempt(i + 1));
    };
    /* 最后兜底：在 Wikimedia Commons 里按关键词搜一张图 */
    const commons = () => {
      const q = (spot.commons || spot.it.split(" / ")[0]) + " filetype:bitmap";
      const api = "https://commons.wikimedia.org/w/api.php?action=query&format=json&origin=*&generator=search&gsrnamespace=6&gsrlimit=1&gsrsearch=" + encodeURIComponent(q) + "&prop=imageinfo&iiprop=url&iiurlwidth=500";
      fetch(api)
        .then(r => r.ok ? r.json() : null)
        .then(j => {
          const pages = j && j.query && j.query.pages;
          const pg = pages && Object.values(pages)[0];
          const ii = pg && pg.imageinfo && pg.imageinfo[0];
          if (!ii || !ii.thumburl) return put(null);
          const info = { src: ii.thumburl, page: ii.descriptionurl || "https://commons.wikimedia.org" };
          imgCache[key] = info; store.set("img2", imgCache); put(info);
        })
        .catch(() => put(null));
    };
    attempt(0);
  }
  const io = "IntersectionObserver" in window ? new IntersectionObserver((ents) => {
    ents.forEach(e => { if (e.isIntersecting) { io.unobserve(e.target); fillImage(e.target, T.spots[e.target.dataset.spot]); } });
  }, { rootMargin: "200px" }) : null;
  function photoBox(id) {
    const box = el("div", { class: "ph", "data-spot": id });
    if (io) io.observe(box); else fillImage(box, T.spots[id]);
    return box;
  }
  function spotText(s) {
    return el("div", { class: "bg-text" },
      el("p", { class: "it" }, s.it),
      el("p", {}, s.bg),
      s.photo ? el("p", { class: "shot" }, "拍照：" + s.photo) : null);
  }

  /* ---------- 行程 ---------- */
  function stayName(stayId) {
    const st = T.stays.find(s => s.id === stayId);
    if (!st) return null;
    const pick = st.options.find(o => o.id === chosen[stayId]);
    return pick ? pick.name : "待定（" + st.options.map(o => o.name).join(" / ") + "）";
  }
  const daysBox = $("#days");
  T.days.forEach(d => {
    const c1 = d.city === "transit" ? COLOR[d.from] : COLOR[d.city];
    const c2 = d.city === "transit" ? COLOR[d.to] : c1;
    const date = el("div", { class: "day-date" },
      el("span", { class: "num" }, d.date),
      el("span", { class: "dow" }, "12 月，" + d.dow),
      el("span", { class: "bar-c" + (c1 !== c2 ? " split" : ""), style: `--c1:${c1};--c2:${c2}` }));
    const body = el("div", { class: "day-body" }, el("div", { class: "day-title" }, d.title));
    if (d.stay) body.append(el("div", { class: "day-stay", "data-stay": d.stay }));
    const ul = el("ul", { class: "items" });
    d.items.forEach((it, i) => {
      const tags = el("span", { class: "tags" });
      if (it.tag) tags.append(el("span", { class: "tag " + it.tag }, TAG[it.tag]));
      if (it.jojo) tags.append(el("span", { class: "tag jojo", title: "JoJo 打卡点" }, "JoJo"));
      const txt = el("div", { class: "txt" });
      if (it.spot && T.spots[it.spot]) {
        const pid = `p-${d.id}-${i}`;
        const panel = el("div", { class: "spot-panel", id: pid, hidden: true });
        const btn = el("button", { class: "spot-btn", type: "button", "aria-expanded": "false", "aria-controls": pid, onclick: () => {
          const open = btn.getAttribute("aria-expanded") === "true";
          btn.setAttribute("aria-expanded", String(!open));
          panel.hidden = open;
          if (!open && !panel.childElementCount) {
            const s = T.spots[it.spot];
            panel.append(el("div", {}, photoBox(it.spot), el("div", { class: "credit" })), spotText(s));
            convertIfNeeded(panel);
          }
        } }, it.text);
        txt.append(btn, tags, panel);
      } else {
        txt.append(it.text, tags);
      }
      ul.append(el("li", { class: "item" }, el("span", { class: "t" }, it.t), txt));
    });
    body.append(ul);
    daysBox.append(el("article", { class: "day", id: d.id }, date, body));
    if (d.note) daysBox.lastChild.append(el("p", { class: "day-note", style: "grid-column:1/-1" }, d.note));
  });
  function renderDayStays() {
    document.querySelectorAll(".day-stay").forEach(n => {
      n.innerHTML = "";
      n.append("住：", el("a", { href: "#" + n.dataset.stay }, stayName(n.dataset.stay)));
      convertIfNeeded(n);
    });
  }

  /* ---------- 待办 ---------- */
  const todoBox = $("#todos");
  const stayTodo = {}; T.todos.forEach(t => { if (t.anchor) stayTodo[t.anchor] = t.id; });
  Object.entries(stayTodo).forEach(([sid, tid]) => { if (chosen[sid] && !(tid in done)) done[tid] = true; });
  function renderTodos() {
    todoBox.innerHTML = "";
    [["decide", "需要决定"], ["book", "必须提前预订"]].forEach(([type, label]) => {
      const g = el("div", { class: "todo-group" }, el("h3", {}, label));
      T.todos.filter(t => t.type === type).forEach(t => {
        const isDone = !!done[t.id];
        const cb = el("input", { type: "checkbox", id: "cb-" + t.id, checked: isDone, onchange: (e) => {
          done[t.id] = e.target.checked; store.set("done2", done); renderTodos(); renderStatus();
        } });
        let note = t.note || "";
        if (t.anchor) { const nm = chosen[t.anchor] && stayName(t.anchor); note = nm ? "已选：" + nm : "还没选，去住宿候选里比较。"; }
        const main = el("label", { for: "cb-" + t.id, class: "main" }, t.text);
        g.append(el("div", { class: "todo" + (isDone ? " checked" : "") }, cb,
          el("div", {},
            main,
            el("div", { class: "meta" }, el("span", { class: "cat" }, t.cat), "时间：" + t.due,
              t.link ? el("span", {}, "，", el("a", { href: t.link, target: "_blank", rel: "noopener" }, "官方链接")) : null,
              t.anchor ? el("span", {}, "，", el("a", { href: "#" + t.anchor }, "看候选")) : null),
            note ? el("div", { class: "note" }, note) : null)));
      });
      todoBox.append(g);
    });
    convertIfNeeded(todoBox);
  }
  function renderStatus() {
    const left = T.todos.filter(t => !done[t.id]);
    const b = left.filter(t => t.type === "book").length, d = left.filter(t => t.type === "decide").length;
    const s = $("#status"); s.innerHTML = "";
    if (!b && !d) s.append("所有预订和决定都已完成。");
    else s.append(el("a", { href: "#todo" }, `还有 ${d} 项待决定、${b} 项需预订`));
    convertIfNeeded(s);
  }

  /* ---------- 住宿：每段一张对比表 ---------- */
  const stayBox = $("#stays");
  let staySort = store.get("staySort", "price");
  const openRows = new Set();
  const nightsOf = st => st.n || 1;
  const rnum = r => { const m = String(r).match(/\d+(\.\d+)?/); return m ? parseFloat(m[0]) : 0; };
  /* 住宿价格口径：可免费取消 / 最低价（不可退）。住宿表和预算共用这一个设置 */
  let rate = store.get("rate", "flex");
  const isFlex = o => rate === "flex" && o.flex != null;
  const priceOf = o => isFlex(o) ? o.flex : o.min;
  const byPrice = (a, b) => priceOf(a) - priceOf(b);
  const stayPick = st => st.options.find(o => o.id === chosen[st.id]) || null;
  const stayUsed = st => stayPick(st) || st.options.slice().sort(byPrice)[0];
  const stayTax = (st, o) => o.tax * nightsOf(st) * P;
  function setRate(r) { rate = r; store.set("rate", r); renderStays(); renderBudget(); }
  const rateSeg = () => el("div", { class: "seg", role: "group", "aria-label": "价格口径" },
    [["flex", "可免费取消"], ["min", "最低价（不可退）"]].map(([id, label]) => el("button", { type: "button", "aria-pressed": String(rate === id), onclick: () => setRate(id) }, label)));
  function pickStay(st, o) {
    if (chosen[st.id] === o.id && !arguments[2]) chosen[st.id] = null; else chosen[st.id] = o.id;
    store.set("chosen2", chosen);
    if (stayTodo[st.id]) { done[stayTodo[st.id]] = !!chosen[st.id]; store.set("done2", done); }
    renderStays(); renderTodos(); renderStatus(); renderDayStays(); renderBudget();
  }
  function renderStays() {
    stayBox.innerHTML = "";
    stayBox.append(el("div", { class: "stay-tools" }, el("span", { class: "muted" }, "排序"),
      el("div", { class: "seg", role: "group", "aria-label": "排序" },
        [["price", "按价格"], ["rating", "按评分"]].map(([id, label]) => el("button", { type: "button", "aria-pressed": String(staySort === id),
          onclick: () => { staySort = id; store.set("staySort", id); renderStays(); } }, label))),
      el("span", { class: "muted" }, "价格按"), rateSeg()));
    T.stays.forEach(st => {
      const pick = chosen[st.id], n = nightsOf(st);
      const opts = st.options.slice().sort((x, y) => staySort === "price" ? byPrice(x, y) : rnum(y.rating) - rnum(x.rating));
      const minP = Math.min(...st.options.map(priceOf));
      const used = stayUsed(st), pk = stayPick(st);
      const maxR = Math.max(...st.options.map(o => rnum(o.rating)));
      const head = el("div", { class: "stay-head", style: `--c:${COLOR[st.city]}` },
        el("h3", {}, st.label), el("span", { class: "n" }, st.nights),
        el("span", { class: "chosen-label" + (pk ? "" : " is-none") }, pk
          ? `已定：${pk.name}，预算计 ${priceOf(pk)}€ + 城市税 ${stayTax(st, pk)}€`
          : `未决定，预算暂按最便宜的 ${used.name} ${priceOf(used)}€ 算`));
      const tbody = el("tbody");
      opts.forEach(o => {
        const isPick = pick === o.id, key = st.id + ":" + o.id, isOpen = openRows.has(key);
        const pr = priceOf(o), pp = pr / P / n;
        const other = rate === "flex"
          ? (o.flex == null ? "没有可退价" : o.flex === o.min ? "" : "不可退 " + o.min + "€")
          : (o.flex != null && o.flex !== o.min ? "可退 " + o.flex + "€" : "");
        const bedCell = el("td", {}, o.bed, o.beds3 === false ? el("span", { class: "warn" }, "两人合睡") : null);
        tbody.append(el("tr", { class: "s-row" + (isPick ? " is-chosen" : "") },
          el("td", { class: "s-name" },
            el("button", { type: "button", class: "s-toggle", "aria-expanded": String(isOpen), onclick: () => { isOpen ? openRows.delete(key) : openRows.add(key); renderStays(); } }, o.name),
            el("div", { class: "s-sub" }, o.area), el("div", { class: "s-sub" }, o.src)),
          el("td", { class: "r" }, el("div", { class: pr === minP ? "best" : "" }, pr + "€"),
            el("div", { class: "s-sub" }, isFlex(o) ? o.flexNote : o.minNote),
            other ? el("div", { class: "s-sub" }, other) : null),
          el("td", { class: "r" + (pr === minP ? " best" : "") }, Math.round(pp) + "€"),
          el("td", {}, el("span", { class: rnum(o.rating) === maxR ? "best" : "" }, o.rating), o.ratingN ? el("div", { class: "s-sub" }, o.ratingN + " 条") : null),
          el("td", {}, o.near, o.loc ? el("div", { class: "s-sub" }, "位置评分 " + o.loc) : null),
          bedCell,
          el("td", {}, o.breakfast),
          el("td", { class: "s-act" }, el("button", { type: "button", class: "btn", "aria-pressed": String(isPick), onclick: () => pickStay(st, o) }, isPick ? "已选" : "定这家"))));
        if (isOpen) tbody.append(el("tr", { class: "s-detail" }, el("td", { colspan: 8 },
          el("div", { class: "s-pc" },
            el("ul", { class: "pc pro" }, o.pros.map(x => el("li", {}, x))),
            el("ul", { class: "pc con" }, o.cons.map(x => el("li", {}, x)))),
          el("div", { class: "s-sub" }, "入住 / 退房：" + o.checkin + "；城市税每人每晚约 " + o.tax + "€，到店付"),
          el("a", { href: o.link, target: "_blank", rel: "noopener" }, "打开预订页（" + o.src + "）"))));
      });
      const table = el("table", { class: "tbl s-tbl" },
        el("thead", {}, el("tr", {}, ["旅馆", n + " 晚三人总价", "每人每晚", "评分", "位置", "床", "早餐", ""].map((h, i) => el("th", { class: i === 1 || i === 2 ? "r" : "" }, h)))),
        tbody);
      stayBox.append(el("div", { class: "stay-block", id: st.id }, head,
        el("p", { class: "stay-why" }, st.why),
        el("div", { class: "table-wrap" }, table),
        el("p", { class: "s-hint" }, "点旅馆名看优缺点和预订链接。价格不含城市税（到店付）。选定的那家会同步到下面的预算。"),
        st.verdict ? el("p", { class: "verdict" }, st.verdict) : null));
    });
    convertIfNeeded(stayBox);
  }

  /* ---------- 景点：按城市排列，可折叠 ---------- */
  const spotsBox = $("#spots");
  const spotDays = {};
  T.days.forEach(d => d.items.forEach(it => { if (it.spot) (spotDays[it.spot] = spotDays[it.spot] || new Set()).add("12/" + d.date); }));
  ["rome", "naples"].forEach(city => {
    const list = el("div", { class: "spot-list" });
    Object.entries(T.spots).filter(([, s]) => s.city === city).forEach(([id, s]) => {
      const x = (T.spotInfo || {})[id] || {};
      const jojo = T.days.some(d => d.items.some(it => it.spot === id && it.jojo));
      const days = spotDays[id] ? [...spotDays[id]].join("、") : "";
      const body = el("div", { class: "spot-body" });
      const det = el("details", { class: "spot-item" },
        el("summary", {},
          el("span", { class: "sn" }, s.name), el("span", { class: "si" }, s.it),
          el("span", { class: "sm" }, days ? el("span", { class: "sd" }, days) : null,
            jojo ? el("span", { class: "tag jojo" }, "JoJo") : null)),
        body);
      det.addEventListener("toggle", () => {
        if (!det.open || body.childElementCount) return;
        body.append(el("div", {}, photoBox(id), el("div", { class: "credit" })),
          el("div", { class: "bg-text" },
            el("p", {}, s.bg),
            el("dl", { class: "spot-dl" },
              x.time ? [el("dt", {}, "停留"), el("dd", {}, x.time)] : null,
              x.fee ? [el("dt", {}, "门票"), el("dd", {}, x.fee)] : null,
              x.tip ? [el("dt", {}, "提示"), el("dd", {}, x.tip)] : null,
              s.photo ? [el("dt", {}, "拍照"), el("dd", {}, s.photo)] : null)));
        convertIfNeeded(body);
      });
      list.append(det);
    });
    spotsBox.append(el("h3", { class: "spot-city " + (city === "rome" ? "c-rome" : "c-naples") }, CITY[city]), list);
  });

  /* ---------- 出行须知 ---------- */
  const tipsBox = $("#tips-body");
  let packed = store.get("pack", {});
  function renderTips() {
    tipsBox.innerHTML = "";
    const n = T.pack.filter((_, i) => packed[i]).length;
    tipsBox.append(el("details", { class: "tip-grp", open: true },
      el("summary", {}, "出发前清单", el("span", { class: "tip-n" }, `${n} / ${T.pack.length}`)),
      el("ul", { class: "pack" }, T.pack.map((t, i) => el("li", {}, el("label", { class: "chk" },
        el("input", { type: "checkbox", checked: !!packed[i], onchange: e => { packed[i] = e.target.checked; store.set("pack", packed); renderTips(); } }),
        el("span", { class: packed[i] ? "is-done" : "" }, t)))))));
    tipsBox.append(el("details", { class: "tip-grp", open: true },
      el("summary", {}, "要装的 App 和官方购票网站"),
      el("ul", { class: "tip-list" }, T.apps.map(([n, d, u]) => el("li", {}, el("b", {}, el("a", { href: u, target: "_blank", rel: "noopener" }, n), "："), d))),
      el("p", { class: "tip-sub" }, "门票只在官网买，别点搜索结果里的转售网站，价格常常翻倍，实名票还可能对不上："),
      el("ul", { class: "tip-list" }, T.ticketSites.map(([n, d, u]) => el("li", {}, el("b", {}, n + "："), el("a", { href: u, target: "_blank", rel: "noopener" }, d))))));
    T.tips.forEach(g => tipsBox.append(el("details", { class: "tip-grp", open: !!g.open },
      el("summary", {}, g.title),
      el("ul", { class: "tip-list" }, g.items.map(([k, v]) => el("li", {}, el("b", {}, k), v))))));
    convertIfNeeded(tipsBox);
  }

  /* ---------- JoJo ---------- */
  const J = T.jojo, jb = $("#jojo-body");
  const copyBtn = el("button", { type: "button", class: "btn", onclick: () => {
    const done = () => { copyBtn.textContent = "已复制"; convertIfNeeded(copyBtn); setTimeout(() => { copyBtn.textContent = "复制"; convertIfNeeded(copyBtn); }, 1600); };
    if (navigator.clipboard) navigator.clipboard.writeText(J.xhs).then(done, done);
    else { const ta = el("textarea"); ta.value = J.xhs; document.body.append(ta); ta.select(); try { document.execCommand("copy"); } catch (e) {} ta.remove(); done(); }
  } }, "复制");
  jb.append(
    el("p", { class: "lead" }, J.intro),
    el("ul", { class: "jojo-list" }, J.spots.map(s =>
      el("li", {}, el("div", {}, el("b", {}, s.name), el("div", { class: "w" }, s.scene)), el("div", { class: "w" }, s.where)))),
    el("h4", {}, "小红书笔记"),
    el("div", { class: "xhs" }, el("code", { class: "ignore-opencc" }, J.xhs), copyBtn),
    ...(J.tips ? [el("h4", {}, "巡礼小贴士"), el("ul", { class: "tip-list" }, J.tips.map(t => el("li", {}, t)))] : []),
    ...(J.links ? [el("h4", {}, "视频和资料"), el("ul", { class: "link-list" }, J.links.map(([src, t, u]) =>
      el("li", {}, el("span", { class: "src" }, src), el("a", { href: u, target: "_blank", rel: "noopener" }, t))))] : []),
    el("p", { class: "small" }, "更多地点整理：", el("a", { href: J.more, target: "_blank", rel: "noopener" }, "Bizarre Tour to Italy")));

  /* ---------- 推荐攻略 ---------- */
  const readsBox = $("#reads-body");
  T.reads.forEach(g => readsBox.append(el("div", { class: "read-grp" }, el("h3", {}, g.group),
    el("ul", { class: "link-list" }, g.items.map(([t, u, n]) => el("li", {},
      el("a", { href: u, target: "_blank", rel: "noopener" }, t), n ? el("span", { class: "o-note" }, n) : null))))));


  /* ---------- 预算 ---------- */
  const B = T.budget;
  function syncStayGroups() {
    B.groups.filter(g => g.stay).forEach(g => {
      const st = T.stays.find(x => x.id === g.id);
      g.st = st;
      g.options = st.options.slice().sort(byPrice).map(o => ({ id: o.id, name: o.name, src: o,
        note: isFlex(o) || o.min === o.flex ? "可免费取消" : (rate === "flex" ? "没有可退价" : "不可退"), total: priceOf(o), tax: o.tax }));
    });
  }
  let bs = Object.assign({ pick: {}, tix: {}, student: false }, store.get("budget3", {}));
  if (!T.budget.plans[bs.plan]) bs.plan = Object.keys(T.budget.plans)[0];
  const eur = n => Math.round(n).toLocaleString("en-US") + "€";
  const bBox = $("#budget-app");
  const inPlan = x => !x.plan || x.plan === bs.plan;
  /* 落地后打车去第一段罗马住处：城墙内固定 55€，城墙外打表（上限 80€） */
  const arrTaxi = () => { const st = T.stays.find(x => x.id === "stay-rome1"); return stayUsed(st).taxiFCO || 55; };
  const depTaxi = () => { const st = T.stays.find(x => x.id === "stay-rome2"); return stayUsed(st).taxiFCO || 55; };
  function optCost(g, o) {
    if (o.total != null) return o.total;
    if (g.id === "flight") return o.pp * P + (o.nightTaxi ? arrTaxi() : 0);
    if (g.id === "airport") {
      // 半夜落地已经算了打车，机场交通只算离开那一程
      const f = picked(B.groups.find(x => x.id === "flight"));
      const night = f && f.nightTaxi;
      if (o.car != null) return (night ? 0 : arrTaxi()) + depTaxi();
      return o.pp * (night ? 1 : 2) * P;
    }
    if (o.car != null) return o.car * Math.ceil(P / 4);
    if (o.ppDay != null) return o.ppDay * (B.plans[bs.plan].foodDays || B.plans[bs.plan].days) * P;
    return o.pp * P;
  }
  function picked(g) {
    const opts = g.options.filter(inPlan);
    if (g.stay) return opts.find(o => o.id === chosen[g.id]) || opts[0];
    const want = bs.pick[bs.plan + ":" + g.id];
    return opts.find(o => o.id === want) || opts[0];
  }
  function airportHint(cur) {
    const r2 = stayUsed(T.stays.find(x => x.id === "stay-rome2"));
    const far = !!r2.taxiFCO;
    return el("ul", { class: "b-explain" },
      el("li", {}, el("b", {}, "到达（12/6 00:30）："), "快线和 FL1 都已停运，只能打车，这一程已经算进上面的机票里。"),
      el("li", {}, el("b", {}, "离开（12/13 早上）："), far
        ? `最后一晚住 ${r2.name}，在城墙外，早上基本只能打车（打表约 45–55€ / 车），前一晚请前台约好。`
        : `最后一晚住 ${r2.name}，走到 Termini 坐 Leonardo Express 最省心，32 分钟直达；三个人打车固定 55€，和快线差不多。`),
      el("li", {}, el("b", {}, "出租车："), "只坐白色、车顶写 TAXI、车门有 Roma Capitale 标志的车。城墙内固定 55€ / 车，含行李和夜间附加费。"),
      el("li", {}, el("b", {}, "FL1："), "最便宜，但不停 Termini，要从 Tiburtina、Ostiense 或 Trastevere 上车；纸质票上车前要打卡。意大利常有交通罢工（sciopero），出发前查一下。"));
  }
  function tixOn(t) { const k = bs.plan + ":" + t.id; return inPlan(t) && (bs.tix[k] != null ? bs.tix[k] : !t.off); }
  function bSave() { store.set("budget3", bs); }
  /* 每个航班组合在意大利能玩多久：每天一格，按 9:00–21:00 的 12 小时填充 */
  function flightTimes(g, cur) {
    const pl0 = B.plans[bs.plan], days = pl0.days, dates = Array.from({ length: days }, (_, i) => pl0.start + i);
    const opts = g.options.filter(inPlan);
    const rows = opts.map(o => {
      const hours = dates.map((d, i) => i === 0 ? o.d1 : i === days - 1 ? o.dl : 12);
      const sum = hours.reduce((a, h) => a + h, 0);
      return el("div", { class: "ft-row" + (o === cur ? " is-cur" : "") },
        el("div", { class: "ft-name" }, o.name),
        el("div", { class: "ft-days" }, hours.map((h, i) => el("span", { class: "ft-day", title: `12/${dates[i]}：约 ${h} 小时` },
          el("span", { class: "ft-fill", style: `width:${h / 12 * 100}%` })))),
        el("div", { class: "ft-sum" }, "约 " + sum + " 小时"));
    });
    return el("div", { class: "ft" },
      el("div", { class: "ft-row ft-head" }, el("div", { class: "ft-name" }, "能玩的时间"),
        el("div", { class: "ft-days" }, dates.map(d => el("span", { class: "ft-date" }, "12/" + d))), el("div", { class: "ft-sum" }, "")),
      ...rows,
      el("p", { class: "ft-note" }, "第一天：" + cur.d1Text + "。最后一天：" + cur.dlText + "。每格代表一天 9:00–21:00，填满表示整天可玩。"));
  }
  function renderBudget() {
    syncStayGroups();
    const pl = B.plans[bs.plan];
    const groups = B.groups.filter(inPlan);
    let real = 0, est = 0;
    const rows = groups.map(g => {
      const cur = picked(g), amt = optCost(g, cur);
      if (g.estimate) est += amt; else real += amt;
      const chips = el("div", { class: "b-opts", role: "radiogroup", "aria-label": g.label },
        g.options.filter(inPlan).map(o => el("button", { type: "button", class: "b-opt", role: "radio", "aria-checked": String(o === cur),
          onclick: () => { if (g.stay) { pickStay(g.st, o.src, true); return; } bs.pick[bs.plan + ":" + g.id] = o.id; bSave(); renderBudget(); } },
          el("span", { class: "o-name" }, o.name),
          o.note ? el("span", { class: "o-note" }, o.note + (o.nightTaxi ? " " + arrTaxi() + "€" : "")) : null,
          el("span", { class: "o-price" }, eur(optCost(g, o))))));
      const mid = g.id === "flight" ? el("div", {}, chips, flightTimes(g, cur))
        : g.id === "airport" ? el("div", {}, chips, airportHint(cur)) : chips;
      return el("div", { class: "b-group" + (g.estimate ? " is-est" : "") },
        el("div", { class: "b-head" }, el("div", { class: "b-name" }, g.label), el("div", { class: "b-sub" }, g.sub),
          g.stay && !chosen[g.id] ? el("div", { class: "b-sub b-warn" }, "还没定，先按最便宜的算") : null),
        mid,
        el("div", { class: "b-amt" }, eur(amt)));
    });
    // 城市税：按所选住处的税率和晚数
    let taxR = 0, taxN = 0;
    groups.filter(g => g.stay).forEach(g => {
      const o = picked(g);
      const nights = g.nights;
      if (g.id === "stay-naples") taxN += o.tax * nights * P; else taxR += o.tax * nights * P;
    });
    real += taxR + taxN;
    const fixedRows = B.fixed.map(f => { real += f.pp * P; return el("li", {}, el("span", {}, f.name, el("span", { class: "o-note" }, f.note)), el("span", { class: "r" }, eur(f.pp * P))); });
    fixedRows.push(el("li", {}, el("span", {}, "城市税", el("span", { class: "o-note" }, "按所选住处自动算，到店付现金")), el("span", { class: "r" }, eur(taxR + taxN))));
    let tix = 0;
    const tixList = el("ul", { class: "b-tix" }, B.tickets.filter(inPlan).map(t => {
      const on = tixOn(t), pp = t.pp;
      if (on) tix += pp * P;
      return el("li", {}, el("label", { class: "chk" },
        el("input", { type: "checkbox", checked: on, onchange: e => { bs.tix[bs.plan + ":" + t.id] = e.target.checked; bSave(); renderBudget(); } }),
        el("span", {}, t.name, " ", el("span", { class: "v v-" + (t.v === "可省" ? "skip" : t.v === "必去" ? "must" : "ok") }, t.v), el("span", { class: "o-note" }, t.why),
          t.more ? el("details", { class: "t-more" }, el("summary", {}, "介绍"),
            el("dl", {}, t.more.flatMap(([k, v]) => [el("dt", {}, k), el("dd", {}, v)]))) : null)),
        el("span", { class: "r" }, eur(pp * P)));
    }));
    real += tix;
    const total = real + est;
    bBox.innerHTML = "";
    bBox.append(
      el("div", { class: "b-sum", "aria-live": "polite" },
        Object.keys(B.plans).length < 2 ? el("div", { class: "b-plan" }, B.plans[bs.plan].label) : el("div", { class: "seg", role: "group", "aria-label": "方案" },
          Object.entries(B.plans).map(([id, p]) => el("button", { type: "button", "aria-pressed": String(id === bs.plan), onclick: () => { bs.plan = id; bSave(); renderBudget(); } }, p.label))),
        el("div", { class: "b-totals" },
          el("div", {}, el("div", { class: "b-big" }, eur(total)), el("div", { class: "b-cap" }, "三人合计，每人 " + eur(total / P) + (est ? "" : "，不含吃喝"))),
          el("div", { class: "b-split" },
            el("div", {}, el("span", {}, "交通、住宿、门票、税"), el("b", {}, eur(real))),
            est ? el("div", {}, el("span", {}, "吃喝购物（估）"), el("b", {}, eur(est))) : null))),
      el("p", { class: "b-hint" }, "价格都是三人合计，点选项切换。住宿和上面的住宿表是同一份选择，在哪边改都会同步。"),
      el("div", { class: "b-rate" }, el("span", { class: "muted" }, "住宿价格按"), rateSeg()),
      ...rows,
      el("div", { class: "b-group b-fixed" },
        el("div", { class: "b-head" }, el("div", { class: "b-name" }, "门票"), el("div", { class: "b-sub" }, "勾选要去的")),
        el("div", {}, tixList,
          el("p", { class: "b-hint" }, B.studentNote),
          el("details", { class: "b-free" }, el("summary", {}, "免费的替代景点"),
            el("ul", {}, B.free.map(([c, t]) => el("li", {}, el("b", {}, c + "："), t))))),
        el("div", { class: "b-amt" }, eur(tix))),
      el("div", { class: "b-group b-fixed" },
        el("div", { class: "b-head" }, el("div", { class: "b-name" }, "固定开销"), el("div", { class: "b-sub" }, "不用选")),
        el("ul", { class: "b-tix" }, fixedRows),
        el("div", { class: "b-amt" }, eur(B.fixed.reduce((a, f) => a + f.pp * P, 0) + taxR + taxN))));
    convertIfNeeded(bBox);
  }

  /* ---------- 简繁切换 ---------- */
  let lang = store.get("lang", "cn");
  let conv = null;
  const originals = new Map();
  /* 台湾用语：OpenCC 只换字形和少量词，这里补上地名和常用词 */
  const TW_TERMS = [
    ["意大利麪", "義大利麵"], ["意大利麵", "義大利麵"], ["意大利", "義大利"], ["意式", "義式"], ["意面", "義大利麵"],
    ["那不勒斯", "拿坡里"], ["佛羅倫薩", "佛羅倫斯"], ["德累斯頓", "德勒斯登"], ["卡普里", "卡布里"], ["馬拉多納", "馬拉度納"],
    ["西斯廷", "西斯汀"],
    ["充電寶", "行動電源"], ["插線板", "延長線"], ["插排", "延長線"], ["轉換頭", "轉接頭"],
    ["出租車", "計程車"], ["打車", "搭計程車"], ["公交車", "公車"], ["公交", "公車"], ["銀行卡", "金融卡"], ["二維碼", "QR Code"],
    ["視頻", "影片"], ["軟件", "軟體"], ["網絡", "網路"], ["信息", "資訊"], ["默認", "預設"], ["質量", "品質"],
    ["屏幕", "螢幕"], ["登錄", "登入"], ["打印", "列印"], ["優盤", "隨身碟"], ["套餐", "方案"], ["性價比", "CP 值"]
  ];
  function getConv() {
    if (!conv && window.OpenCC) {
      let base; try { base = window.OpenCC.Converter({ from: "cn", to: "twp" }); } catch (e) { base = window.OpenCC.Converter({ from: "cn", to: "tw" }); }
      conv = t => TW_TERMS.reduce((x, [a, b]) => x.split(a).join(b), base(t));
    }
    return conv;
  }
  function walk(root, fn) {
    const w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode: n => {
        const p = n.parentElement;
        if (!p || /^(SCRIPT|STYLE)$/.test(p.tagName) || p.closest(".ignore-opencc") || !n.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      } });
    const list = []; while (w.nextNode()) list.push(w.currentNode); list.forEach(fn);
  }
  function convertTree(root) {
    const c = getConv(); if (!c) return false;
    walk(root, n => { if (!originals.has(n)) { originals.set(n, n.nodeValue); n.nodeValue = c(n.nodeValue); } });
    return true;
  }
  function convertIfNeeded(root) { if (lang === "tw") convertTree(root); }
  function restoreAll() {
    originals.forEach((txt, n) => { if (n.isConnected) n.nodeValue = txt; });
    originals.clear();
  }
  function setLang(next, quiet) {
    if (next === "tw" && !getConv()) {
      if (!quiet) { const b = $('.lang [data-lang="tw"]'); b.title = "繁体转换需要联网加载，请稍后再试"; b.animate && b.animate([{ opacity: .3 }, { opacity: 1 }], 400); }
      return;
    }
    lang = next; store.set("lang", lang);
    if (lang === "tw") { convertTree(document.body); document.documentElement.lang = "zh-TW"; document.title = getConv()(document.title); }
    else { restoreAll(); document.documentElement.lang = "zh-CN"; document.title = "罗马与那不勒斯 · 2026.12"; }
    document.querySelectorAll(".lang button").forEach(b => b.setAttribute("aria-pressed", String(b.dataset.lang === lang)));
  }
  document.querySelectorAll(".lang button").forEach(b => b.addEventListener("click", () => setLang(b.dataset.lang)));

  /* ---------- 初始化 ---------- */
  const wantTw = lang === "tw"; lang = "cn";
  renderStays(); renderTodos(); renderStatus(); renderDayStays(); renderBudget(); renderTips();
  if (wantTw) {
    if (window.OpenCC) setLang("tw", true);
    else window.addEventListener("opencc-ready", () => setLang("tw", true), { once: true });
  }
})();
