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
  let done = store.get("done", {});
  let chosen = store.get("chosen", {});

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
  function renderTodos() {
    todoBox.innerHTML = "";
    [["decide", "需要决定"], ["book", "必须提前预订"]].forEach(([type, label]) => {
      const g = el("div", { class: "todo-group" }, el("h3", {}, label));
      T.todos.filter(t => t.type === type).forEach(t => {
        const isDone = !!done[t.id];
        const cb = el("input", { type: "checkbox", id: "cb-" + t.id, checked: isDone, onchange: (e) => {
          done[t.id] = e.target.checked; store.set("done", done); renderTodos(); renderStatus();
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

  /* ---------- 住宿 ---------- */
  const stayBox = $("#stays");
  function renderStays() {
    stayBox.innerHTML = "";
    T.stays.forEach(st => {
      const pick = chosen[st.id];
      const head = el("div", { class: "stay-head", style: `--c:${COLOR[st.city]}` },
        el("h3", {}, st.label), el("span", { class: "n" }, st.nights),
        el("span", { class: "chosen-label" }, pick ? "已定：" + st.options.find(o => o.id === pick).name : "未决定"));
      const opts = el("div", { class: "opts" });
      st.options.forEach(o => {
        const isPick = pick === o.id;
        opts.append(el("div", { class: "opt" + (isPick ? " is-chosen" : pick ? " is-dim" : "") },
          el("h4", {}, o.name),
          el("div", { class: "area" }, o.area),
          el("div", { class: "price" }, o.price),
          o.priceNote ? el("div", { class: "pnote" }, o.priceNote) : null,
          el("ul", { class: "facts" },
            el("li", {}, "评分：" + o.rating), el("li", {}, "房型：" + o.room), el("li", {}, o.checkin)),
          el("ul", { class: "pc pro" }, o.pros.map(p => el("li", {}, p))),
          el("ul", { class: "pc con" }, o.cons.map(p => el("li", {}, p))),
          el("div", { class: "opt-act" },
            el("button", { type: "button", class: "btn", "aria-pressed": String(isPick), onclick: () => {
              if (isPick) delete chosen[st.id]; else chosen[st.id] = o.id;
              store.set("chosen", chosen);
              if (stayTodo[st.id]) { done[stayTodo[st.id]] = !!chosen[st.id]; store.set("done", done); }
              renderStays(); renderTodos(); renderStatus(); renderDayStays();
            } }, isPick ? "已选这家" : "定这家"),
            el("a", { href: o.link, target: "_blank", rel: "noopener" }, "打开预订页"))));
      });
      stayBox.append(el("div", { class: "stay-block", id: st.id }, head,
        el("p", { class: "stay-why" }, st.why), opts, st.verdict ? el("p", { class: "verdict" }, st.verdict) : null));
    });
    convertIfNeeded(stayBox);
  }

  /* ---------- 景点 ---------- */
  const spotsBox = $("#spots");
  ["rome", "naples"].forEach(city => {
    const grid = el("div", { class: "spot-grid" });
    Object.entries(T.spots).filter(([, s]) => s.city === city).forEach(([id, s]) => {
      const jojo = T.days.some(d => d.items.some(it => it.spot === id && it.jojo));
      grid.append(el("div", { class: "spot-card" },
        photoBox(id), el("div", { class: "credit" }),
        el("h4", {}, s.name), el("div", { class: "it" }, s.it),
        el("p", {}, s.bg),
        s.photo ? el("p", { class: "shot" }, "拍照：" + s.photo) : null,
        jojo ? el("div", { class: "tagline" }, el("span", { class: "tag jojo" }, "JoJo")) : null));
    });
    spotsBox.append(el("h3", { class: "spot-city " + (city === "rome" ? "c-rome" : "c-naples") }, CITY[city]), grid);
  });

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
    el("p", { class: "small" }, "更多地点整理：", el("a", { href: J.more, target: "_blank", rel: "noopener" }, "Bizarre Tour to Italy")));

  /* ---------- 简繁切换 ---------- */
  let lang = store.get("lang", "cn");
  let conv = null;
  const originals = new Map();
  function getConv() {
    if (!conv && window.OpenCC) conv = window.OpenCC.Converter({ from: "cn", to: "tw" });
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
  renderStays(); renderTodos(); renderStatus(); renderDayStays();
  if (wantTw) {
    if (window.OpenCC) setLang("tw", true);
    else window.addEventListener("opencc-ready", () => setLang("tw", true), { once: true });
  }
})();
