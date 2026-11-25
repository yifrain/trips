/* 旅行数据：改行程、换旅馆、加待办，只需要改这个文件。
   价格均为 2026-11-21/22 搜索时看到的参考价，以预订页面为准。 */

window.TRIP = {
  title: "罗马与那不勒斯",
  range: "2026 年 12 月 5–13 日",
  people: "3 人",
  updated: "2026-11-22",

  /* ---------- 待预订 / 待决定 ---------- */
  todos: [
    { id: "checkin", type: "book", cat: "交通", text: "Ryanair 网上值机：去程 12/2 22:20 起，回程 12/10 09:55 起（免费）", due: "起飞前 2 小时截止",
      link: "https://www.ryanair.com", note: "现在提前值机要付 8€ 买座位，不用。到时间在 Ryanair App 里办：证件选护照（德国居留卡不是旅行证件），如果要求填签证 / 居留信息，就填德国居留卡。App 里完成证件验证；做不了的话，出发当天先去 BER 的 Ryanair 证件检查柜台盖章再过安检（免费，留出时间）。登机牌只有 App 里的电子版。" },
    { id: "flight", type: "book", cat: "交通", text: "机票：12/5 22:20 FR 134 去，12/13 09:55 FR 41 回", due: "已订", done: true,
      link: "https://www.ryanair.com", note: "已订（Ryanair 基础票，每人往返约 63€）。另外两位也要订同样两班。值机：起飞前 24 小时在 App 里免费办，非欧盟护照先做证件验证。" },
    { id: "bag", type: "decide", cat: "交通", text: "托运行李：已在 Yifan 的订单里加一件 20 kg", due: "已订", done: true,
      note: "去程 27.99€ + 回程 29.99€ = 57.98€，三人分摊每人约 19€。托运柜台起飞前 40 分钟关闭；出发前称重，不超过 20 kg。" },
    { id: "h-rome1", done: true, type: "decide", cat: "住宿", text: "罗马 12/5–9 住宿（4 晚）", due: "尽快", anchor: "stay-rome1" },
    { id: "h-naples", done: true, type: "decide", cat: "住宿", text: "那不勒斯 12/9–10 住宿（1 晚）", due: "尽快，只剩 1 间", anchor: "stay-naples" },
    { id: "h-vico", done: true, type: "decide", cat: "住宿", text: "Vico Equense 12/10–12 住宿（2 晚）", due: "尽快，12/6 前可免费取消", anchor: "stay-vico" },
    { id: "h-rome2", done: true, type: "decide", cat: "住宿", text: "罗马 12/12–13 住宿（1 晚）", due: "尽快", anchor: "stay-rome2" },
    { id: "trip", type: "decide", cat: "行程", text: "12/11 去波西塔诺 + 索伦托，还是改去卡普里岛", due: "12/10 晚上看天气和海况",
      note: "默认上午索伦托、下午波西塔诺（陆路，下雨也能去）。天气晴、海面平静又特别想看海上巨石，就改去卡普里。见「交通」里的海岸指南" },
    { id: "train1", done: true, type: "book", cat: "交通", text: "Itabus 罗马 Tiburtina → 那不勒斯 Metropark（12/9 上午）", due: "越早越便宜",
      link: "https://www.itabus.it", note: "最低 5.99€ / 人，不是每个班次都是这个价，选 8–9 点出发、5.99€ 的那班。约 2 小时 40 分–3 小时。最低价一般不可退。" },
    { id: "train2", done: true, type: "book", cat: "交通", text: "Itabus 那不勒斯 Metropark → 罗马 Tiburtina（12/12 下午）", due: "越早越便宜",
      link: "https://www.itabus.it", note: "选 14–15 点出发、5.99€ 的那班，傍晚到 Tiburtina，再坐地铁和公交回营地（约 1 小时）。" },
    { id: "colosseo", type: "decide", cat: "门票", text: "斗兽场 12/6 免费日：早上 8 点前去售票处排队", due: "当天，不能预约",
      link: "https://colosseo.it", note: "每月第一个周日国立景点免费，斗兽场、古罗马广场、万神殿都在内，现场先到先得。想稳妥就另买一张付费时段票做备选（约 18–20€，ticketing.colosseo.it）。" },
    { id: "vatican", done: true, type: "book", cat: "门票", text: "梵蒂冈博物馆：Yifan 12/7 12:00 已订（学生票），另外两位不去", due: "提前 2–3 周",
      link: "https://tickets.museivaticani.va", note: "12/8 圣母无染原罪节闭馆，只能 12/7 去。" },
    { id: "sansevero", type: "book", cat: "门票", text: "圣塞维罗礼拜堂（12/9 周三下午）", due: "官网提前 60 天开售",
      link: "https://www.museosansevero.it", note: "周二闭馆；票不可退不可改。出发前 2 天会再放一批票。" },
    { id: "pompei", type: "book", cat: "门票", text: "庞贝古城实名时段票（默认 12/10 上午）", due: "出发前 2–3 天看完天气再买",
      link: "https://pompeiisites.org", note: "12 月一般不会售罄，不用太早买；买了不可退。庞贝在那不勒斯和 Vico 之间的同一条小火车线上，12/10、12/11、12/12 上午都能去，哪天晴就买哪天。门票实名，带护照。" },
    { id: "pope", type: "decide", cat: "行程", text: "12/8 教宗献花的时间", due: "12 月初梵蒂冈公布",
      link: "https://www.vatican.va", note: "往年 16:00 左右在西班牙广场；具体时间以 12 月初公布的教宗日程为准。" },
    { id: "santelmo", type: "decide", cat: "门票", text: "圣艾尔莫城堡：现场买票即可", due: "无需提前",
      note: "周二闭馆，我们 12/9 周三去；也可在 Musei Italiani 官方 App 上买。" }
  ],

  /* ---------- 住宿候选 ----------
     n：晚数。min：最便宜的价格（多为不可退），flex：可免费取消的价格，都是该段的三人总价。
     tax：城市税，每人每晚。taxiFCO：住处不在城墙内时，机场打车的估价（每车）。 */
  stays: [
    {
      id: "stay-rome1", booked: true, pick: "camping", city: "rome", label: "罗马（第一段）", nights: "12/5–12/9，4 晚", n: 4,
      why: "半夜落地后直接打车来；12/6–8 逛罗马，12/9 早上去 Tiburtina 坐大巴。",
      options: [
        { id: "camping", name: "hu Roma Camping In Town", src: "Booking", area: "罗马西边，Via Aurelia 831",
          near: "营地有收费班车去市区和机场；公交几站到地铁 A 线 Cornelia 站", rating: "8.5", ratingN: "27,225", loc: "",
          min: 260, minNote: "Standard Bungalow 标准小木屋，4 晚", flex: 260, flexNote: "12/2 前免费取消",
          bed: "16㎡ 小木屋：2 张单人床 + 1 张沙发床，有空调", beds3: true, bath: "独立", breakfast: "12€/人（营地有超市）",
          checkin: "24 小时前台", tax: 4, taxiFCO: 50,
          pros: ["评分 8.5，2.7 万条评价，口碑非常稳", "三人各睡一张，有空调和独立卫浴", "4 晚三人只要 260€，每人每晚约 22€", "24 小时前台，半夜 1 点到也能入住", "12/2 前可以免费取消", "在罗马西边，去梵蒂冈近；离机场约 20 公里，打车比从市中心去便宜", "营地有超市、餐厅，可以自己做简单的早饭"],
          cons: ["离老城远，每天进城单程 40 分钟以上", "晚上回营地要掐班车或公交末班时间", "小木屋只有 16㎡，三个人的行李要收拾好", "城市税按露营地标准，以页面为准"],
          link: "https://www.booking.com/hotel/it/camping-village-roma.html?checkin=2026-12-05&checkout=2026-12-09&group_adults=3&no_rooms=1&group_children=0" }
      ],
      verdict: "定营地：4 晚 260€ 大约是罗马市区三人间价格的一半，评价 2.7 万条、8.5 分，24 小时前台正好配半夜落地。代价是每天进城的时间。订可免费取消那档，只比不可退贵约 5€。顺便问前台：12/9–12 能不能寄存大件行李、机场班车的时间和价格。"
    },
    {
      id: "stay-naples", booked: true, pick: "station", city: "naples", label: "那不勒斯", nights: "12/9–12/10，1 晚", n: 1,
      why: "12/9 下午老城、圣塞维罗、圣艾尔莫日落，晚上在那不勒斯吃披萨；12/10 早上从旁边的车站坐小火车去庞贝。",
      options: [
        { id: "station", name: "Napoli Station B&B", src: "Booking", area: "中央车站东边，Via San Cosmo Fuori Porta Nolana 37",
          near: "中央车站步行 6 分钟；Itabus 的 Metropark 站和 Porta Nolana 小火车站都在附近", rating: "8.7", ratingN: "798", loc: "",
          min: 69, minNote: "1 晚，含早餐，不可退，只剩 1 间", flex: null, flexNote: "",
          bed: "18㎡：1 张 queen 床 + 1 张沙发床", beds3: false, bath: "独立", breakfast: "含（意式自助）",
          checkin: "以页面为准", tax: 5.5,
          pros: ["一晚 69€ 含早餐", "下大巴走过去就到；第二天去庞贝的小火车就在旁边", "798 条评价、8.7 分，员工评分 9.5，有空调、隔音"],
          cons: ["Porta Nolana 市场一带晚上比较乱，回来坐地铁到 Garibaldi 再结伴走", "两个人合睡一张 queen 床", "这个价不可退；看一下「Free cancellation」栏，可退价只贵几欧就选可退"],
          link: "https://www.booking.com/searchresults.html?ss=Napoli+Station+B%26B&checkin=2026-12-09&checkout=2026-12-10&group_adults=3&no_rooms=1" }
      ],
      verdict: "只住一晚，图的就是方便：下大巴走过去，第二天走过去坐小火车。想晚上住得安心一点，可以再查托莱多街一带的 Diazz（之前 3 晚约 350€，1 晚的价格没查）。"
    },
    {
      id: "stay-vico", booked: true, pick: "celotto", city: "naples", label: "Vico Equense（索伦托半岛）", nights: "12/10–12/12，2 晚", n: 2,
      why: "在庞贝和索伦托之间，同一条小火车线上：12/10 看完庞贝顺路过来，12/11 去阿马尔菲或卡普里都只要先坐 15–20 分钟到索伦托。",
      options: [
        { id: "celotto", name: "Antica Tenuta Celotto", src: "Booking", area: "Vico Equense，Montechiaro 山坡，Via Ruggiero 5",
          near: "离小火车 Seiano 站不远，到索伦托约 15–20 分钟；有收费接送", rating: "8.7", ratingN: "1,115", loc: "8.7",
          min: 126, minNote: "2 晚，含早餐，不可退", flex: 131, flexNote: "2 晚，含早餐，12/6 前免费取消",
          bed: "30㎡ 海景四人间：2 张单人床 + 1 张 queen 床", beds3: true, bath: "独立", breakfast: "含",
          checkin: "入住 14:00–18:00（要提前告诉店家到达时间）；退房 8:30–10:00", tax: 2,
          pros: ["2 晚只要 131€（可退），含早餐，三人各睡一张", "房间正对海湾和维苏威火山，有阳台花园、泳池、热水池", "有独立厨房，晚上可以自己做饭", "评价 1,115 条、8.7 分"],
          cons: ["在山坡上：订前在地图上看清从 Seiano 站走过去多远、坡多陡，天黑后山路可能没有人行道", "周边安静，晚饭要去 Vico 镇上或自己做", "城市税以页面为准（这里按每人每晚 2€ 估）"],
          link: "https://www.booking.com/searchresults.html?ss=Antica+Tenuta+Celotto&checkin=2026-12-10&checkout=2026-12-12&group_adults=3&no_rooms=1" }
      ],
      verdict: "订 131€ 那档：12/6 前可以免费取消，只比不可退贵 5€。订完给店家发消息，问清从 Seiano 站怎么走、接送多少钱、几点能入住。"
    },
    {
      id: "stay-rome2", booked: true, pick: "camping2", city: "rome", label: "罗马（最后一晚）", nights: "12/12–12/13，1 晚", n: 1,
      why: "12/12 下午从那不勒斯回来，12/13 早上 6:45 左右出发去机场赶 09:55 的航班。",
      options: [
        { id: "camping2", name: "hu Roma Camping In Town", src: "Booking", area: "罗马西边，Via Aurelia 831",
          near: "离机场约 20 公里，早上打车约 30 分钟；营地也有收费机场班车", rating: "8.5", ratingN: "27,225", loc: "",
          min: 70, minNote: "Standard Bungalow，1 晚", flex: 70, flexNote: "以页面的取消政策为准",
          bed: "16㎡ 小木屋：2 张单人床 + 1 张沙发床，有空调", beds3: true, bath: "独立", breakfast: "12€/人",
          checkin: "24 小时前台", tax: 4, taxiFCO: 50,
          pros: ["最便宜，比 San Remo 省约 70–90€", "和第一段同一家，熟门熟路", "去机场打车比市中心近，三人分摊每人约 17€；营地有收费机场班车，问清早上几点有车", "可以把大件行李寄存在这里，去那不勒斯只背小包（入住时问前台）"],
          cons: ["从 Tiburtina 大巴站过去要 1 小时左右", "早上去机场要提前一晚约好班车或出租车"],
          link: "https://www.booking.com/hotel/it/camping-village-roma.html?checkin=2026-12-12&checkout=2026-12-13&group_adults=3&no_rooms=1&group_children=0" },
        { id: "sanremo", name: "Hotel San Remo", src: "Agoda", area: "Termini，Via Massimo d'Azeglio 36",
          near: "Termini 地铁站 250 米", rating: "8.6", ratingN: "3,798", loc: "9.1",
          min: 138, minNote: "不可退", flex: 164, flexNote: "可免费取消",
          bed: "三人房 23㎡：1 张双人床 + 1 张单人床", beds3: true, bath: "独立", breakfast: "15€/人",
          checkin: "随时 / 11:00", tax: 6,
          pros: ["下了从那不勒斯回来的高铁就到", "12/13 早上走 5 分钟到 Termini，坐 Leonardo Express 32 分钟到机场", "正规三星酒店，24 小时前台"],
          cons: ["比营地贵约 70–90€", "装修偏旧，早餐贵"],
          link: "https://www.agoda.com/zh-cn/hotel-san-remo/hotel/rome-it.html?adults=3&rooms=1&checkIn=2026-12-12&los=1&currencyCode=EUR" }
      ],
      verdict: "定营地：住宿便宜 70–90€，早上打车去机场三人约 50€，加起来仍比住 Termini 省。如果想 12/12 晚上在市中心多逛逛、早上不想赶，选 San Remo，坐机场快线（3 人 42€）。"
    }
  ],

  /* ---------- 行程 ---------- */
  days: [
    {
      id: "d1", date: "5", dow: "周六", city: "rome", map: ["rome"], title: "晚上出发，半夜到罗马",
      stay: "stay-rome1",
      items: [
        { t: "约 17:30", text: "从德累斯顿出发去柏林 BER 机场（区域车约 2.5 小时）" },
        { t: "20:30", text: "到 BER。只背座位下小包的话，App 里值机后直接过安检" },
        { t: "22:20", at: "fco", text: "BER → FCO，00:30 落地", tag: "book" },
        { t: "00:45", at: "camping", text: "机场打车去营地（打表，约 45–55€ / 车，约 30 分钟）；营地 24 小时前台" }
      ],
      note: "半夜落地时 Leonardo Express 和 FL1 都已经停了。Cotral 夜班车（约 5€）能到 Termini，但从那里再去营地还得打车，不如直接打车。只坐出口排队处的白色正规出租车。"
    },
    {
      id: "d2", date: "6", dow: "周日", city: "rome", map: ["rome"], title: "免费日：从斗兽场一路往西走到特雷维",
      stay: "stay-rome1",
      items: [
        { t: "7:30", at: "camping", text: "营地出发：公交到地铁 A 线 Cornelia → Termini 换 B 线 → Colosseo（约 1 小时）。凌晨 1 点多才入住，能睡 5–6 小时；早饭在路上的 bar 站着吃牛角包配卡布奇诺（约 3€）" },
        { t: "8:30", spot: "colosseo", text: "斗兽场：售票处排免费票（不能预约，先到先得），进去约 1 小时。先上看台看地下层的兽笼通道，再看外墙三种柱式", tag: "decide", jojo: true },
        { t: "10:15", spot: "foro", text: "帕拉蒂尼山 → 古罗马广场（同样免费）：从 Via di San Gregorio 入口上帕拉蒂尼山，看皇宫遗址和俯瞰大竞技场的平台 → 下到广场：提图斯凯旋门 → 维斯塔贞女之家 → 凯撒火化处 → 元老院 → 塞维鲁凯旋门，从靠卡比托利欧山的西北出口出来" },
        { t: "12:30", spot: "vittoriano", text: "卡比托利欧广场：米开朗基罗设计的星形广场和马可·奥勒留骑马像 → 市政厅右后方的平台俯瞰整个古罗马广场 → 下台阶到维托里奥纪念堂正面（无名烈士墓、卫兵）", tag: "photo" },
        { t: "13:15", at: "ghetto", text: "午饭：沿马切罗剧场（像个小斗兽场的古剧场）走进犹太区主街 Via del Portico d'Ottavia：坐下吃炸朝鲜蓟，或者在 Boccione 买点心、在 Largo Argentina 的 Antico Forno Roscioli 买块披萨" },
        { t: "14:15", at: "argentina", text: "路过 Largo di Torre Argentina：凯撒遇刺的庞培元老院遗址，现在住着一群流浪猫" },
        { t: "14:45", spot: "pantheon", text: "万神殿（免费日，排队可能 20–40 分钟）。出来后：门口的咖啡馆 Sant'Eustachio、Giolitti gelato；旁边 Santa Maria sopra Minerva 门口有贝尼尼的小象驮方尖碑（教堂免费）" },
        { t: "15:30", at: "sanluigi", text: "圣王路易堂（San Luigi dei Francesi）：左侧最里面礼拜堂有卡拉瓦乔的《圣马太》三联画，免费，投币照明（开放时间以现场为准）" },
        { t: "16:00", spot: "navona", text: "纳沃纳广场圣诞市集：贝尼尼的四河喷泉，等天黑亮灯（日落约 16:35）；Gelateria del Teatro 在西边的 Via dei Coronari", tag: "photo" },
        { t: "17:30", text: "找家咖啡馆歇脚；晚饭在万神殿到特雷维之间吃，或者去西班牙台阶旁的 Pastificio Guerra 吃 5€ 的现做意面" },
        { t: "19:30", spot: "trevi", text: "特雷维喷泉夜景（广场上看免费；下到池边 2€）。背对喷泉右手往左肩后扔一枚硬币", tag: "photo" },
        { t: "20:00", at: "spagna", text: "沿 Via delle Muratte、Via del Corso 走 10 分钟到西班牙台阶，地铁 A 线 Spagna 站直达 Cornelia，回营地早点睡" }
      ],
      note: "路线从东往西一条线走完，最后从 Spagna 坐地铁 A 线一趟回 Cornelia，不走回头路。每月第一个周日国立景点免费，人会比平时多。太累的话斗兽场只看外观，直接从帕拉蒂尼山开始。出门前问营地前台回去的末班公交 / 班车时间。"
    },
    {
      id: "d3", date: "7", dow: "周一", city: "rome", map: ["rome"], title: "梵蒂冈、圣天使堡、特拉斯提弗列",
      stay: "stay-rome1",
      items: [
        { t: "6:45", at: "camping", text: "从营地出发（营地在西边，离梵蒂冈近）；路上买好早饭" },
        { t: "7:15", spot: "sanpietro", text: "三人一起：圣彼得大教堂，刚开门安检几乎不排队；遮肩过膝。进门右手第一个礼拜堂是米开朗基罗《圣殇》→ 中间贝尼尼的青铜华盖 → 摸得发亮的圣彼得铜像右脚 → 最里面的“圣彼得宝座”" },
        { t: "8:00", at: "sanpietro", text: "登穹顶：大教堂右侧的穹顶入口现场买票（电梯 + 楼梯约 15€，纯楼梯约 10€）；先到穹顶内侧环廊往下看大教堂，再爬最后一段窄螺旋梯到顶上露台看广场和全城", tag: "photo" },
        { t: "9:45", text: "回到广场：站在方尖碑和喷泉之间的圆盘上，看四排柱子重叠成一排；然后去 Prati 区喝咖啡" },
        { t: "11:00", at: "pizzarium", text: "Bonci Pizzarium 开门，买几种切块披萨当早午饭（按重量）" },
        { t: "11:30", at: "vaticani", text: "Yifan：到博物馆入口 Viale Vaticano，走右侧预约通道「Corridoio 1」，给工作人员看电子票和证件验票，再过安检、刷闸机" },
        { t: "12:00", spot: "vaticani", text: "Yifan：梵蒂冈博物馆 + 西斯廷礼拜堂（已订，学生票）。建议路线：松果庭院 → 八角庭院（拉奥孔）→ 缪斯厅、圆厅 → 烛台、挂毯、地图画廊 → 拉斐尔画室（雅典学院）→ 西斯廷礼拜堂", tag: "book" },
        { t: "12:00", at: "prati", text: "两位朋友：圣天使堡内部（约 16€，可选），或者 Prati 区 Via Cola di Rienzo 逛街、Mercato Trionfale 菜市场买水果火腿面包，找地方歇脚" },
        { t: "15:15", spot: "angelo", text: "在圣天使桥会合：桥上 10 尊天使各拿一件耶稣受难的刑具", tag: "photo", jojo: true },
        { t: "16:30", text: "在桥上看日落（约 16:35），沿台伯河南岸往下游走约 25 分钟，从西斯托桥（Ponte Sisto）过河" },
        { t: "17:30", spot: "trastevere", text: "特拉斯提弗列：Santa Maria in Trastevere 广场（金色马赛克，免费）→ Via della Lungaretta 一带小巷；先在 Supplì Roma 垫一口，晚饭 Da Enzo al 29（要排队）" }
      ],
      note: "12/8 是节日，梵蒂冈博物馆闭馆，所以只能 12/7。博物馆按时段入场，晚到可能进不去；Yifan 带学生证、在读证明和护照。"
    },
    {
      id: "d4", date: "8", dow: "周二", city: "rome", map: ["rome"], title: "圣母无染原罪节：南边山丘、人民广场、教宗献花",
      stay: "stay-rome1",
      items: [
        { t: "8:30", at: "camping", text: "营地出发：地铁 A 线到 Termini 换 B 线到 Circo Massimo 站（或公交到真理之口附近）" },
        { t: "9:30", spot: "bocca", text: "真理之口（排队拍照，一人一张很快）；旁边希腊圣母堂内部免费，看中世纪彩色石地板", tag: "photo" },
        { t: "10:00", spot: "circo", text: "大竞技场遗址：沿跑道草地走一段，再从 Via di Valle Murcia 走上阿文提诺山" },
        { t: "10:30", spot: "aranci", text: "橘子花园俯瞰全城 → 隔壁圣撒比纳教堂（5 世纪，原装木门，免费）→ 走 5 分钟到马耳他骑士团广场，排队从钥匙孔看圣彼得圆顶", tag: "photo" },
        { t: "11:45", at: "piramide", text: "顺着山坡下到 Testaccio，路过塞斯提伍斯金字塔（古罗马人的金字塔形墓，地铁 Piramide 站旁）" },
        { t: "12:00", at: "testaccio", text: "午饭：Trapizzino 本店（Via Giovanni Branca 88）；Testaccio 市场节日可能不开" },
        { t: "13:30", text: "地铁 B 线 Piramide → Termini 换 A 线 → Flaminio，出站就是人民广场" },
        { t: "14:00", spot: "popolo", text: "人民广场：双子教堂和方尖碑 → 人民圣母堂：卡拉瓦乔两幅画（左侧最里面 Cerasi 礼拜堂）、拉斐尔设计的 Chigi 礼拜堂，免费（弥撒时不能参观）" },
        { t: "14:45", spot: "pincio", text: "从广场东侧台阶走上平乔山露台看全城 → 沿博尔盖塞公园边走 Viale della Trinità dei Monti 到西班牙台阶顶上的天主圣三教堂", tag: "photo" },
        { t: "15:30", spot: "colonna", text: "下到西班牙广场旁的 Piazza Mignanelli 占位置：约 16:00 教宗为圣母像献花（安检、封路，提前 30 分钟到）", tag: "decide" },
        { t: "17:00", at: "condotti", text: "孔多蒂街 → 科尔索大街看圣诞灯饰；Pompi 买提拉米苏；晚饭 Pastificio Guerra 或附近" },
        { t: "20:00", at: "spagna", text: "地铁 A 线 Spagna 站直达 Cornelia 回营地" }
      ],
      note: "博尔盖塞美术馆这次不去（官网打不开，也能省 18€）；公园和平乔山露台免费照逛。12/8 是全国假日，城里人很多。教宗献花的具体时间 12 月初公布；西班牙广场会有安检和封路，提前 30 分钟到。"
    },
    {
      id: "d5", date: "9", dow: "周三", city: "transit", map: ["naples"], from: "rome", to: "naples", title: "去那不勒斯：老城、礼拜堂、山顶城堡",
      stay: "stay-naples",
      items: [
        { t: "7:15", at: "camping", text: "营地退房（大件行李可以寄存在营地），坐公交 + 地铁去 Tiburtina 大巴站（约 1 小时）" },
        { t: "8:30", at: "tiburtina", text: "Itabus Roma Tiburtina → Napoli Metropark（约 2 小时 40 分–3 小时）；车上睡一觉", tag: "book" },
        { t: "11:30", at: "bnb", text: "到 Metropark（中央车站旁），走 10 分钟到 Napoli Station B&B 寄存行李；穿过加里波第广场看好包", jojo: true },
        { t: "12:30", at: "tribunali", text: "从住处走 15–20 分钟到 Via dei Tribunali（老城主街）：Di Matteo 窗口买炸披萨、frittatina，站着吃" },
        { t: "13:30", spot: "spacca", text: "圣格雷戈里奥街（圣诞马槽街）：一路看作坊里的小人偶，就在 Tribunali 旁边", tag: "photo" },
        { t: "14:00", spot: "sansevero", text: "圣塞维罗礼拜堂：《蒙纱的基督》、《谦逊》、《解脱》、地下室的“解剖机器”（订 14:00 以后的时段）；出来隔壁 Scaturchio 吃 babà", tag: "book" },
        { t: "14:45", at: "gesu", text: "沿 Spaccanapoli 直街往西：新耶稣教堂（钻石面外墙）→ 对面 Santa Chiara（回廊收费，可跳过）→ 走到托莱多大街" },
        { t: "15:45", spot: "funicolare", text: "托莱多大街旁的 Augusteo 站坐中央缆车到终点 Fuga，走 10 分钟上山", jojo: true },
        { t: "16:10", spot: "santelmo", text: "圣艾尔莫城堡城墙上看日落（约 16:35）；不想买票就在下面的 Largo San Martino 观景台看，景色接近", tag: "photo" },
        { t: "17:30", spot: "toledo", text: "缆车下山 → 托莱多大街 → 翁贝托一世长廊（玻璃穹顶）→ 托莱多地铁站看“海底隧道”，Pintauro 买 sfogliatella", tag: "photo" },
        { t: "19:00", at: "michele", text: "地铁 1 号线 Toledo → Garibaldi 回住处附近；晚饭 L'Antica Pizzeria da Michele（取号排队，离住处步行约 5 分钟）" }
      ],
      note: "圣塞维罗、圣艾尔莫城堡周二闭馆，周三去正好。大巴要是晚到很多，下午就先去圣塞维罗，圣艾尔莫挪到 12/12 上午。"
    },
    {
      id: "d6", date: "10", dow: "周四", city: "naples", map: ["naples", "coast"], title: "庞贝，傍晚到 Vico Equense 看海",
      stay: "stay-vico",
      items: [
        { t: "8:00", at: "bnb", text: "退房，背上小包，Porta Nolana 或 Garibaldi 坐 Circumvesuviana（索伦托方向）到 Pompei Scavi – Villa dei Misteri（约 35–40 分钟）" },
        { t: "9:00", text: "庞贝古城，留 3–4 小时；入口可以寄存背包（以现场为准）", spot: "pompei", tag: "book", jojo: true },
        { t: "13:00", text: "车站附近吃午饭" },
        { t: "14:30", at: "celotto", text: "继续坐同一条线（索伦托方向）到 Seiano 或 Meta 站（约 20–25 分钟，问店家哪个近），走去住处入住；入住时间 14:00–18:00，提前告诉店家到达时间" },
        { t: "16:00", at: "celotto", text: "在住处的花园或阳台看海湾和维苏威火山的日落（约 16:35）", tag: "photo" },
        { t: "19:00", text: "晚饭：住处有厨房，下午在车站附近超市买菜回来做；想吃 Vico 镇上的“一米披萨”（pizza a metro）就打车或请店家帮忙叫车，离住处约 2 km" }
      ],
      note: "庞贝不一定要今天去：它在那不勒斯和 Vico 之间，12/11、12/12 上午也能顺路去。哪天晴就哪天，门票出发前 2–3 天再买。"
    },
    {
      id: "d7", date: "11", dow: "周五", city: "naples", map: ["coast"], title: "上午索伦托，下午波西塔诺看日落",
      stay: "stay-vico",
      items: [
        { t: "8:45", at: "celotto", text: "从住处出发，走到最近的 Circumvesuviana 车站（Seiano 或 Meta，入住时问店家哪个近，也可以付费接送）" },
        { t: "9:15", spot: "sorrento", text: "坐小火车到终点索伦托（约 10–15 分钟，约 2–3€）。上午逛索伦托：塔索广场 → 广场边往下看磨坊谷（Vallone dei Mulini）→ 老城小巷（Via San Cesareo，柠檬和柠檬酒小店）→ 市立公园观景台（Villa Comunale），正对海湾和维苏威火山；想多走就从观景台旁的台阶下到 Marina Grande 渔港", tag: "photo" },
        { t: "11:30", text: "回火车站旁的报刊亭买 SITA 巴士票（单程或 24 小时票，上车打卡）" },
        { t: "11:45", text: "SITA 巴士 索伦托 → 波西塔诺（40–50 分钟），坐右侧看海" },
        { t: "12:40", spot: "positano", text: "波西塔诺：在镇子上方的公路边（Sponda 站）下车，先拍小镇全景 → 沿小路一路往下走到彩色马约利卡瓷砖圆顶的圣母升天教堂 → 大海滩 Spiaggia Grande；在海边吃午饭", tag: "photo" },
        { t: "15:30", text: "沿海边步道走到 Fornillo 小海滩，或者回到大海滩，等日落（约 16:35，太阳落在海面那一侧）", tag: "photo" },
        { t: "17:00", text: "爬回公路边，坐 SITA 巴士回索伦托（约 50 分钟）。冬季末班车早，出发前查好时刻表" },
        { t: "18:00", at: "celotto", text: "索伦托火车站坐小火车回 Seiano / Meta 站，走回住处；晚饭在索伦托车站附近吃完再回，或回住处自己做" },
        { t: "备选", spot: "capri", text: "卡普里岛：整天改去卡普里。从索伦托 Marina Piccola 坐船约 20–25 分钟，缆车上卡普里镇、奥古斯都花园；只在晴天、海面平静时去", jojo: true }
      ],
      note: "路线就是 住处 → 索伦托 → 波西塔诺 → 住处：去波西塔诺和回来都要在索伦托换车（小火车 ↔ SITA 巴士），所以上午顺便逛索伦托。下午在波西塔诺海边看日落。冬天 SITA 班次少、偶尔满座，在索伦托始发站排队更容易有座；山路弯多，容易晕车的提前吃药。阿马尔菲小镇这次不去，单程还要多 50 分钟。"
    },
    {
      id: "d8", date: "12", dow: "周六", city: "transit", map: ["naples"], from: "naples", to: "rome", title: "回那不勒斯海边半天，下午回罗马",
      stay: "stay-rome2",
      items: [
        { t: "8:00", at: "celotto", text: "退房，走到 Seiano / Meta 站，坐 Circumvesuviana 回 Napoli Garibaldi（约 1 小时）" },
        { t: "9:15", at: "centrale", text: "行李多的话寄存在中央车站，只背小包就直接走；地铁 1 号线 Garibaldi → Toledo" },
        { t: "9:45", spot: "quartieri", text: "西班牙区：从托莱多大街往西拐进窄巷，走到马拉多纳壁画（Largo Maradona）" },
        { t: "10:30", at: "galleria", text: "回到托莱多大街 → 翁贝托一世长廊（看地面的十二星座马赛克）" },
        { t: "10:45", spot: "plebiscito", text: "平民表决广场：圣方济各教堂、王宫正面 8 尊国王像；Gambrinus 站着喝杯咖啡、吃个 babà" },
        { t: "11:15", spot: "nuovo", text: "新堡：入口两座塔之间的白色凯旋门；对面是去卡普里的 Molo Beverello 码头（JoJo）", jojo: true },
        { t: "11:45", spot: "ovo", text: "沿海边 Via Partenope 走到蛋堡：城墙平台（免费）看维苏威火山和 Borgo Marinari 小港", tag: "photo", jojo: true },
        { t: "12:45", at: "ovo", text: "午饭：海边的 Sorbillo Lievito Madre al Mare，最后一顿那不勒斯披萨" },
        { t: "13:40", at: "centrale", text: "地铁 1 号线 Municipio → Garibaldi（或打车约 15 分钟）回 Metropark，取行李" },
        { t: "14:30", at: "centrale", text: "Itabus Napoli Metropark → Roma Tiburtina（约 2 小时 40 分）", tag: "book" },
        { t: "17:15", at: "tiburtina", text: "到 Tiburtina，坐地铁 + 公交回营地（约 1 小时），取寄存的行李" },
        { t: "19:00", at: "camping", text: "营地餐厅或超市解决晚饭，早点休息" }
      ],
      note: "到营地后请前台约好 12/13 早上的机场班车或 6:45 的出租车。"
    },
    {
      id: "d9", date: "13", dow: "周日", city: "rome", map: ["rome"], title: "早班机回柏林",
      items: [
        { t: "6:45", at: "camping", text: "营地出发去机场：营地的收费机场班车，或打车约 30 分钟" },
        { t: "8:00", at: "fco", text: "到 FCO。申根内航班，提前约 2 小时到就够" },
        { t: "9:55", text: "FCO → BER，12:05 落地", tag: "book" },
        { t: "下午", text: "坐区域车回德累斯顿" }
      ]
    }
  ],


  /* ---------- 地图坐标：每日地图和导航用。ll 是大致坐标，导航按 q 搜索 ---------- */
  places: {
    camping: { n: "hu Roma Camping In Town（住处）", q: "hu Roma Camping In Town, Via Aurelia 831, Roma", ll: [41.8885, 12.4045], city: "rome" },
    fco: { n: "菲乌米奇诺机场 FCO", q: "Aeroporto di Roma-Fiumicino", ll: [41.8003, 12.2389], city: "rome" },
    cornelia: { n: "地铁 A 线 Cornelia 站", q: "Metro Cornelia, Roma", ll: [41.9036, 12.4246], city: "rome" },
    argentina: { n: "Largo di Torre Argentina", q: "Largo di Torre Argentina, Roma", ll: [41.8955, 12.4767], city: "rome" },
    sanluigi: { n: "圣王路易堂（卡拉瓦乔）", q: "San Luigi dei Francesi, Roma", ll: [41.8996, 12.4745], city: "rome" },
    piramide: { n: "塞斯提伍斯金字塔", q: "Piramide Cestia, Roma", ll: [41.8763, 12.4808], city: "rome" },
    gesu: { n: "新耶稣教堂 / Santa Chiara", q: "Chiesa del Gesù Nuovo, Napoli", ll: [40.8483, 14.2505], city: "naples" },
    galleria: { n: "翁贝托一世长廊", q: "Galleria Umberto I, Napoli", ll: [40.8386, 14.2496], city: "naples" },
    michele: { n: "L'Antica Pizzeria da Michele", q: "L'Antica Pizzeria da Michele, Via Cesare Sersale 1, Napoli", ll: [40.8497, 14.2634], city: "naples" },
    colosseo: { n: "斗兽场", q: "Colosseo, Roma", ll: [41.8902, 12.4922], city: "rome" },
    foro: { n: "帕拉蒂尼山 / 古罗马广场", q: "Foro Romano, Roma", ll: [41.8918, 12.4870], city: "rome" },
    vittoriano: { n: "卡比托利欧广场 / 维托里奥纪念堂", q: "Piazza del Campidoglio, Roma", ll: [41.8934, 12.4828], city: "rome" },
    ghetto: { n: "犹太区（午饭）", q: "Via del Portico d'Ottavia, Roma", ll: [41.8925, 12.4777], city: "rome" },
    pantheon: { n: "万神殿", q: "Pantheon, Roma", ll: [41.8986, 12.4769], city: "rome" },
    navona: { n: "纳沃纳广场", q: "Piazza Navona, Roma", ll: [41.8992, 12.4731], city: "rome" },
    trevi: { n: "特雷维喷泉", q: "Fontana di Trevi, Roma", ll: [41.9009, 12.4833], city: "rome" },
    spagna: { n: "西班牙台阶 / 地铁 Spagna 站", q: "Metro Spagna, Roma", ll: [41.9063, 12.4824], city: "rome" },
    sanpietro: { n: "圣彼得大教堂（和穹顶）", q: "Basilica di San Pietro, Città del Vaticano", ll: [41.9022, 12.4539], city: "rome" },
    pizzarium: { n: "Bonci Pizzarium", q: "Pizzarium Bonci, Via della Meloria 43, Roma", ll: [41.9066, 12.4471], city: "rome" },
    vaticani: { n: "梵蒂冈博物馆入口（Viale Vaticano）", q: "Musei Vaticani, Viale Vaticano, Roma", ll: [41.9065, 12.4536], city: "rome" },
    prati: { n: "Prati 区 Via Cola di Rienzo（朋友）", q: "Via Cola di Rienzo, Roma", ll: [41.9076, 12.4640], city: "rome" },
    angelo: { n: "圣天使堡 / 圣天使桥", q: "Ponte Sant'Angelo, Roma", ll: [41.9020, 12.4666], city: "rome" },
    trastevere: { n: "特拉斯提弗列", q: "Santa Maria in Trastevere, Roma", ll: [41.8894, 12.4700], city: "rome" },
    bocca: { n: "真理之口", q: "Bocca della Verità, Roma", ll: [41.8881, 12.4815], city: "rome" },
    circo: { n: "大竞技场遗址", q: "Circo Massimo, Roma", ll: [41.8861, 12.4851], city: "rome" },
    aranci: { n: "橘子花园 / 骑士团钥匙孔", q: "Giardino degli Aranci, Roma", ll: [41.8844, 12.4795], city: "rome" },
    testaccio: { n: "Testaccio 区（午饭）", q: "Mercato di Testaccio, Roma", ll: [41.8771, 12.4752], city: "rome" },
    popolo: { n: "人民广场 / 人民圣母堂", q: "Santa Maria del Popolo, Roma", ll: [41.9115, 12.4764], city: "rome" },
    pincio: { n: "平乔山露台", q: "Terrazza del Pincio, Roma", ll: [41.9113, 12.4797], city: "rome" },
    colonna: { n: "圣母无染原罪柱（教宗献花）", q: "Colonna dell'Immacolata, Piazza Mignanelli, Roma", ll: [41.9045, 12.4836], city: "rome" },
    condotti: { n: "孔多蒂街 / 科尔索大街", q: "Via dei Condotti, Roma", ll: [41.9050, 12.4800], city: "rome" },
    tiburtina: { n: "Tiburtina 大巴站", q: "Roma Tiburtina Autostazione", ll: [41.9104, 12.5306], city: "rome" },
    centrale: { n: "Napoli Metropark / 中央车站", q: "Napoli Metropark Centrale", ll: [40.8530, 14.2720], city: "naples" },
    bnb: { n: "Napoli Station B&B（住处）", q: "Napoli Station B&B, Via San Cosmo Fuori Porta Nolana 37, Napoli", ll: [40.8497, 14.2682], city: "naples" },
    tribunali: { n: "Via dei Tribunali（午饭）", q: "Via dei Tribunali, Napoli", ll: [40.8510, 14.2551], city: "naples" },
    sansevero: { n: "圣塞维罗礼拜堂", q: "Museo Cappella Sansevero, Napoli", ll: [40.8495, 14.2547], city: "naples" },
    spacca: { n: "Spaccanapoli / 圣格雷戈里奥街", q: "Via San Gregorio Armeno, Napoli", ll: [40.8507, 14.2575], city: "naples" },
    funicolare: { n: "中央缆车 Augusteo 站", q: "Funicolare Centrale Augusteo, Napoli", ll: [40.8384, 14.2486], city: "naples" },
    santelmo: { n: "圣艾尔莫城堡", q: "Castel Sant'Elmo, Napoli", ll: [40.8436, 14.2389], city: "naples" },
    toledo: { n: "托莱多地铁站 / 翁贝托一世长廊", q: "Stazione Toledo, Napoli", ll: [40.8430, 14.2486], city: "naples" },
    quartieri: { n: "西班牙区 / 马拉多纳壁画", q: "Murale Maradona, Quartieri Spagnoli, Napoli", ll: [40.8410, 14.2460], city: "naples" },
    plebiscito: { n: "平民表决广场", q: "Piazza del Plebiscito, Napoli", ll: [40.8358, 14.2484], city: "naples" },
    nuovo: { n: "新堡 / 港口", q: "Castel Nuovo, Napoli", ll: [40.8384, 14.2528], city: "naples" },
    ovo: { n: "蛋堡", q: "Castel dell'Ovo, Napoli", ll: [40.8282, 14.2475], city: "naples" },
    pompei: { n: "庞贝古城（Porta Marina 入口）", q: "Pompei Scavi Porta Marina", ll: [40.7486, 14.4838], city: "coast" },
    vico: { n: "Vico Equense 镇中心", q: "Vico Equense", ll: [40.6612, 14.4268], city: "coast" },
    celotto: { n: "Antica Tenuta Celotto（住处）", q: "Antica Tenuta Celotto, Vico Equense", ll: [40.65464, 14.40820], city: "coast" },
    sorrento: { n: "索伦托（火车站 / 塔索广场）", q: "Piazza Tasso, Sorrento", ll: [40.6263, 14.3756], city: "coast" },
    villacom: { n: "索伦托市立公园观景台", q: "Villa Comunale di Sorrento", ll: [40.6283, 14.3758], city: "coast" },
    positano: { n: "波西塔诺", q: "Positano", ll: [40.6281, 14.4850], city: "coast" },
    amalfi: { n: "阿马尔菲", q: "Duomo di Amalfi", ll: [40.6340, 14.6027], city: "coast" },
    capri: { n: "卡普里岛", q: "Marina Grande, Capri", ll: [40.5560, 14.2380], city: "coast" }
  },
  /* ---------- 景点背景（图片按 wiki 词条自动加载） ---------- */
  spots: {
    trevi: { name: "特雷维喷泉", it: "Fontana di Trevi", wiki: "Trevi_Fountain", city: "rome",
      bg: "1762 年完工的巴洛克喷泉，是古罗马引水渠 Aqua Virgo 的终点。中间的海神俄刻阿诺斯驾着贝壳马车。背对喷泉往水里扔一枚硬币，传说就会再回罗马。",
      photo: "早上 8 点前人最少；晚上灯光下更出片。" },
    pantheon: { name: "万神殿", it: "Pantheon", wiki: "Pantheon,_Rome", city: "rome",
      bg: "约公元 125 年由哈德良皇帝重建，是保存最完整的古罗马建筑之一。穹顶直径 43 米，到今天仍是世界上最大的无钢筋混凝土穹顶。顶部的圆孔直通天空，下雨时雨会直接落进殿里。拉斐尔葬在这里。",
      photo: "中午阳光会从圆孔斜射进来。" },
    navona: { name: "纳沃纳广场", it: "Piazza Navona", wiki: "Piazza_Navona", city: "rome",
      bg: "建在图密善竞技场的遗址上，所以是长椭圆形。中央是贝尼尼的四河喷泉。每年 12 月这里有圣诞市集。" },
    colosseo: { name: "斗兽场", it: "Colosseo", wiki: "Colosseum", city: "rome",
      bg: "公元 80 年落成，能容纳约 5 万名观众，用于角斗和猛兽表演。地下有升降机和通道，用来把野兽送上场。JoJo 第五部的最终决战也设在这里。",
      photo: "从对面的 Via Nicola Salvi 坡上可以拍到全景。" },
    foro: { name: "古罗马广场与帕拉蒂尼山", it: "Foro Romano / Palatino", wiki: "Roman_Forum", city: "rome",
      bg: "古罗马的政治、宗教和商业中心，元老院、凯旋门、神庙都在这里。旁边的帕拉蒂尼山是传说中罗慕路斯建城的地方，也是历代皇帝的宫殿所在。" },
    vittoriano: { name: "维托里奥纪念堂", it: "Vittoriano", wiki: "Victor_Emmanuel_II_Monument", city: "rome",
      bg: "纪念意大利统一后第一位国王，罗马人嫌它太白太大，戏称它为“打字机”。顶层露台可以俯瞰古罗马广场和斗兽场，需要买票坐电梯上去。" },
    vaticani: { name: "梵蒂冈博物馆与西斯廷礼拜堂", it: "Musei Vaticani", wiki: "Vatican_Museums", city: "rome",
      bg: "历代教宗的收藏，包括拉斐尔画室。最后一站是西斯廷礼拜堂，有米开朗基罗的天顶画《创世纪》和祭坛墙上的《最后的审判》。礼拜堂里禁止拍照。",
      photo: "出口的双螺旋楼梯很出片。" },
    sanpietro: { name: "圣彼得大教堂", it: "Basilica di San Pietro", wiki: "St._Peter's_Basilica", city: "rome",
      bg: "天主教最重要的教堂，圆顶由米开朗基罗设计。进门右手边是他 24 岁时的作品《圣殇》。可以付费登顶。" },
    angelo: { name: "圣天使堡与圣天使桥", it: "Castel Sant'Angelo", wiki: "Castel_Sant'Angelo", city: "rome",
      bg: "原本是哈德良皇帝的陵墓，后来改成教宗的城堡和避难所。桥上有十尊贝尼尼设计的天使像。",
      photo: "黄昏从对岸拍城堡和桥，灯光亮起时最好。" },
    trastevere: { name: "特拉斯提弗列区", it: "Trastevere", wiki: "Trastevere", city: "rome",
      bg: "台伯河西岸的老街区，石板路、爬山虎和小酒馆，是吃晚饭的好地方。" },
    bocca: { name: "真理之口", it: "Bocca della Verità", wiki: "Mouth_of_Truth", city: "rome",
      bg: "希腊圣母堂门廊里的一块古罗马大理石面具，可能原本是井盖或排水口。传说说谎的人把手伸进嘴里会被咬掉。电影《罗马假日》里格里高利·派克假装被咬的那一幕就在这里。",
      photo: "排队轮流拍，一人一张，很快。" },
    circo: { name: "大竞技场遗址", it: "Circo Massimo", wiki: "Circus_Maximus", city: "rome",
      bg: "古罗马最大的战车竞技场，能容纳十几万人。现在只剩一片长长的草地，但站在帕拉蒂尼山脚下，能想象当年的规模。" },
    aranci: { name: "橘子花园与骑士团钥匙孔", it: "Giardino degli Aranci", wiki: "Giardino_degli_Aranci", itwiki: "Parco_Savello", commons: "Giardino degli Aranci Roma", city: "rome",
      bg: "阿文提诺山上的小花园，可以看台伯河和圣彼得圆顶。附近马耳他骑士团大门的钥匙孔里，正好框住远处的圣彼得大教堂圆顶。",
      photo: "钥匙孔前常常排队，手机贴近孔洞拍。" },
    borghese: { name: "博尔盖塞美术馆", it: "Galleria Borghese", wiki: "Galleria_Borghese", city: "rome",
      bg: "贝尼尼的《阿波罗与达芙妮》《劫掠普洛塞庇娜》都在这里，大理石雕出了皮肤被按压的质感。另有卡拉瓦乔的多幅画作。每个时段限流，必须预约。" },
    pincio: { name: "平乔山与西班牙台阶", it: "Pincio / Scalinata di Trinità dei Monti", wiki: "Spanish_Steps", city: "rome",
      bg: "西班牙台阶共 135 级，现在禁止在台阶上坐着。旁边的平乔山露台可以俯瞰人民广场和远处的圣彼得圆顶。" },
    colonna: { name: "圣母无染原罪柱", it: "Colonna dell'Immacolata", wiki: "Column_of_the_Immaculate_Conception_(Rome)", itwiki: "Colonna_dell'Immacolata_(Roma)", city: "rome",
      bg: "西班牙广场旁的古罗马大理石柱，顶上是圣母铜像，1857 年立起，纪念“圣母无染原罪”信理。每年 12 月 8 日早上，消防员用云梯给圣母像挂上花环；下午教宗来这里献花、祈祷，是罗马圣诞季的开场。" },
    popolo: { name: "人民圣母堂", it: "Santa Maria del Popolo", wiki: "Santa_Maria_del_Popolo", city: "rome",
      bg: "人民广场边上的教堂，免费进。左侧的 Cerasi 礼拜堂有卡拉瓦乔的《圣保罗皈依》和《圣彼得受难》；Chigi 礼拜堂由拉斐尔设计，贝尼尼也有雕塑在里面。" },
    centrale: { name: "那不勒斯中央车站", it: "Napoli Centrale", wiki: "Napoli_Centrale_railway_station", itwiki: "Stazione_di_Napoli_Centrale", city: "naples",
      bg: "那不勒斯的门户。车站周边的加里波第广场比较乱，看好手机和包。" },
    sansevero: { name: "圣塞维罗礼拜堂", it: "Cappella Sansevero", wiki: "Sansevero_Chapel", city: "naples",
      bg: "18 世纪的家族礼拜堂。核心是 Sanmartino 用一整块大理石雕出的《蒙纱的基督》，薄纱看起来像透明的一样。地下室还有两具“解剖机器”人体血管标本，带着炼金术传说。馆内禁止拍照。" },
    spacca: { name: "Spaccanapoli 与圣格雷戈里奥街", it: "Spaccanapoli / Via San Gregorio Armeno", wiki: "Spaccanapoli", itwiki: "Spaccanapoli", commons: "Spaccanapoli Napoli", city: "naples",
      bg: "Spaccanapoli 意思是“劈开那不勒斯”，是沿古希腊城市主干道延续下来的一条笔直老街。圣格雷戈里奥街一整条都是做圣诞马槽小人偶的作坊，12 月最热闹。",
      photo: "从高处的 Largo San Martino 往下能看到这条笔直的切线。" },
    funicolare: { name: "中央缆车", it: "Funicolare Centrale", wiki: "Funicolare_Centrale", itwiki: "Funicolare_Centrale", commons: "Funicolare Centrale Napoli", city: "naples",
      bg: "从托莱多大街旁的 Augusteo 站上到沃梅罗山，几分钟就到，用普通公交票。" },
    santelmo: { name: "圣艾尔莫城堡", it: "Castel Sant'Elmo", wiki: "Castel_Sant'Elmo", city: "naples",
      bg: "16 世纪的星形要塞，建在城市最高处。城墙顶上是 360° 全景：海湾、维苏威火山、整片老城。旁边的圣马丁修道院也值得看。",
      photo: "周二闭馆。下来后在 Largo San Martino 观景台再拍一次。" },
    toledo: { name: "托莱多大街与地铁站", it: "Via Toledo / Stazione Toledo", wiki: "Toledo_(Naples_Metro)", itwiki: "Stazione_di_Toledo", city: "naples",
      bg: "托莱多地铁站常被评为欧洲最美的地铁站之一，深蓝色的马赛克隧道像海底。买张单程票就能进站。旁边的翁贝托一世长廊有玻璃穹顶。",
      photo: "在扶梯上往上拍“光之火山口”。" },
    pompei: { name: "庞贝古城", it: "Pompei", wiki: "Pompeii", city: "naples",
      bg: "公元 79 年维苏威火山爆发，整座城被火山灰掩埋，直到 18 世纪才被重新发掘。街道、面包房、壁画，还有人体石膏像都保存了下来。JoJo 第五部里镜中世界的战斗就发生在这里。",
      photo: "广场和朱庇特神庙后面就是维苏威火山。" },
    ercolano: { name: "赫库兰尼姆古城", it: "Ercolano / Herculaneum", wiki: "Herculaneum", city: "naples",
      bg: "和庞贝同一天被维苏威火山掩埋，但埋它的是更厚的火山泥流，所以二层楼、木头房梁、门窗都留了下来，保存得比庞贝完整。面积小，2 小时能看完，人也比庞贝少很多。" },
    vico: { name: "Vico Equense", it: "Vico Equense", wiki: "Vico_Equense", city: "naples",
      bg: "索伦托半岛入口的小镇，建在海边悬崖上，对面就是维苏威火山。这里是“一米披萨”（pizza a metro）的发源地：按长度卖，一块能拼好几种口味，适合几个人分着吃。" },
    positano: { name: "波西塔诺", it: "Positano", wiki: "Positano", city: "naples",
      bg: "阿马尔菲海岸最有名的小镇，五颜六色的房子从山顶一路叠到海边，是意大利最常见的明信片之一。海边的圣母升天教堂有彩色马约利卡瓷砖圆顶。",
      photo: "全景在镇子上方的公路边（巴士停靠的 Sponda 站一带）；往下走到海滩回头拍圆顶教堂。" },
    amalfi: { name: "阿马尔菲", it: "Amalfi", wiki: "Amalfi", itwiki: "Amalfi", city: "naples",
      bg: "中世纪阿马尔菲海上共和国的首都，阿马尔菲海岸是联合国世界遗产。主教座堂前有一段很陡的大台阶，立面是黑白条纹加金色马赛克；旁边的天堂回廊是 13 世纪的贵族墓园，阿拉伯风格的拱廊。",
      photo: "站在大台阶底下往上拍教堂立面；码头边能拍小镇依山的全景。" },
    sorrento: { name: "索伦托", it: "Sorrento", wiki: "Sorrento", city: "naples",
      bg: "悬崖上的度假小城，柠檬酒（limoncello）的故乡。塔索广场是中心；市立公园的观景台正对那不勒斯湾和维苏威火山，晚上能看到对岸那不勒斯的灯火。" },
    capri: { name: "卡普里岛", it: "Capri", wiki: "Capri", city: "naples",
      bg: "那不勒斯湾里的石灰岩小岛，从索伦托坐船 20–25 分钟。码头坐缆车上卡普里镇，奥古斯都花园能看到海上的法拉廖尼巨石；蓝洞只有风平浪静时能进。JoJo 第五部里众人坐船去的就是这里。",
      photo: "奥古斯都花园俯瞰法拉廖尼巨石和下面的之字形小路。" },
    quartieri: { name: "西班牙区与马拉多纳壁画", it: "Quartieri Spagnoli", wiki: "Quartieri_Spagnoli", city: "naples",
      bg: "托莱多大街西边一片窄巷子，晾衣绳、摩托、小神龛，是最有那不勒斯味道的街区。马拉多纳带队那不勒斯两次夺得意甲冠军，这里有他的大幅壁画，现在像个小广场，球迷常来。" },
    nuovo: { name: "新堡", it: "Castel Nuovo / Maschio Angioino", wiki: "Castel_Nuovo", city: "naples",
      bg: "13 世纪安茹王朝建造，入口是文艺复兴风格的白色凯旋门。对面就是去卡普里岛的 Molo Beverello 码头。" },
    plebiscito: { name: "平民表决广场", it: "Piazza del Plebiscito", wiki: "Piazza_del_Plebiscito", city: "naples",
      bg: "那不勒斯最大的广场，一边是王宫，一边是仿万神殿的圣方济各教堂。旁边的 Gambrinus 是 1860 年开业的老咖啡馆。" },
    ovo: { name: "蛋堡与海滨步道", it: "Castel dell'Ovo", wiki: "Castel_dell'Ovo", city: "naples",
      bg: "那不勒斯最古老的城堡，建在海中的小岛上。传说诗人维吉尔在地基里藏了一颗蛋，蛋碎了城市就会遭难。可免费进入；城墙上能看到海湾对面的维苏威火山。",
      photo: "从 Via Partenope 拍城堡和背后的维苏威火山。" }
  },

  /* ---------- 美食：必吃清单（图片按 wiki 词条自动加载）+ 按天就近吃 ---------- */
  food: {
    dishes: [
      { city: "rome", name: "Carbonara", it: "Spaghetti alla carbonara", wiki: "Carbonara", desc: "蛋黄、风干猪脸肉（guanciale）、羊奶酪（pecorino）和黑胡椒，正宗做法不放奶油。", price: "12–15€" },
      { city: "rome", name: "Cacio e pepe", it: "Cacio e pepe", wiki: "Cacio e pepe", desc: "只有羊奶酪和黑胡椒，乳化成奶油状的酱，最考手艺。", price: "11–14€" },
      { city: "rome", name: "Amatriciana / Gricia", it: "Amatriciana", wiki: "Amatriciana", desc: "Amatriciana 是番茄加猪脸肉，Gricia 是不放番茄的版本。罗马“四大面”就是这两道加上面两道。", price: "11–14€" },
      { city: "rome", name: "Supplì", it: "Supplì", wiki: "Supplì", desc: "炸米球，里面是番茄饭和拉丝的马苏里拉奶酪，掰开会拉出“电话线”（supplì al telefono）。", price: "2–3€ / 个" },
      { city: "rome", name: "切块披萨", it: "Pizza al taglio", wiki: "Pizza al taglio", desc: "长方形大盘烤，按重量剪着卖，可以一次拿好几种口味，适合赶路时吃。", price: "约 3–6€ / 块" },
      { city: "rome", name: "犹太式炸朝鲜蓟", it: "Carciofi alla giudia", wiki: "Carciofi alla giudia", desc: "整颗朝鲜蓟油炸到像一朵金黄的花，外脆里软。冬天正当季，犹太区最地道。", price: "6–9€" },
      { city: "rome", name: "Trapizzino", it: "Trapizzino", wiki: "Trapizzino", itwiki: "Trapizzino", img: "https://commons.wikimedia.org/wiki/Special:FilePath/Trapizzino%20-%20Pollo%20alla%20Cacciatora.jpg?width=500", imgPage: "https://commons.wikimedia.org/wiki/File:Trapizzino_-_Pollo_alla_Cacciatora.jpg", desc: "三角形的披萨口袋，塞进罗马炖菜（炖鸡、牛肚、肉丸），2008 年在 Testaccio 发明。", price: "5–6€" },
      { city: "rome", name: "Maritozzo", it: "Maritozzo", wiki: "Maritozzo", desc: "夹满打发奶油的软面包，罗马人的早餐。", price: "2–4€" },
      { city: "rome", name: "提拉米苏", it: "Tiramisù", wiki: "Tiramisu", desc: "西班牙台阶附近的 Pompi 以提拉米苏出名，有开心果、草莓等口味，盒装带走。", price: "约 5€" },
      { city: "rome", name: "Gelato", it: "Gelato", wiki: "Gelato", desc: "冬天也值得吃。颜色太鲜艳、堆得高高的多半不是好店；装在不锈钢桶里盖着盖子的更靠谱。", price: "3–4€" },
      { city: "naples", name: "那不勒斯披萨", it: "Pizza napoletana", wiki: "Neapolitan pizza", desc: "饼边厚软起泡、中间偏湿，Margherita（番茄、马苏里拉、罗勒）或 Marinara（番茄、蒜、牛至）。一人一整张，用刀叉或对折着吃。", price: "5–10€" },
      { city: "naples", name: "炸披萨", it: "Pizza fritta", wiki: "Pizza fritta", desc: "包了里科塔奶酪、猪油渣或番茄的面饼下锅炸，战后穷人的披萨，现在是街头名物。", price: "3–6€" },
      { city: "naples", name: "炸面饼（Frittatina）", it: "Frittatina di pasta", wiki: "Frittatina di pasta", itwiki: "Frittatina di pasta", commons: "frittatina di pasta Napoli", desc: "把通心粉、肉酱、豌豆、奶酪裹面糊油炸成圆饼，一个就很顶饱。", price: "2–3€" },
      { city: "naples", name: "Sfogliatella", it: "Sfogliatella", wiki: "Sfogliatella", desc: "贝壳形千层酥（riccia）或软皮版（frolla），里面是乳清奶酪、粗麦和柑橘皮，刚出炉温热时最好吃。", price: "1.5–2.5€" },
      { city: "naples", name: "Babà", it: "Babà", wiki: "Babà", desc: "浸透朗姆酒糖浆的蘑菇形小蛋糕，那不勒斯人的骄傲。", price: "2–3€" },
      { city: "naples", name: "Cuoppo", it: "Cuoppo", wiki: "Cuoppo", itwiki: "Cuoppo", img: "https://commons.wikimedia.org/wiki/Special:FilePath/Cuoppo.jpg?width=500", imgPage: "https://commons.wikimedia.org/wiki/File:Cuoppo.jpg", desc: "纸筒装的炸物：炸小鱼小虾，或者炸蔬菜、炸面团（zeppoline）。", price: "5–8€" },
      { city: "naples", name: "圣诞甜点 Struffoli", it: "Struffoli", wiki: "Struffoli", desc: "蜂蜜裹着的小炸面球撒彩糖，只在圣诞季出现；还有 Roccocò（杏仁硬饼）和 Mostaccioli（巧克力饼）。", price: "按盒卖" },
      { city: "naples", name: "那不勒斯咖啡", it: "Caffè napoletano", wiki: "Caffè sospeso", desc: "浓、甜、烫，站在吧台喝。“待用咖啡”（caffè sospeso）的习俗就来自这里：多付一杯留给后来没钱的人。", price: "1–1.5€" },
      { city: "coast", name: "柠檬酒 Limoncello", it: "Limoncello", wiki: "Limoncello", desc: "用索伦托和阿马尔菲的大柠檬皮泡的甜酒，冰镇小杯喝。买回家在超市比纪念品店便宜。", price: "小瓶 5–10€" },
      { city: "coast", name: "柠檬小蛋糕 Delizia al limone", it: "Delizia al limone", wiki: "Delizia al limone", desc: "海绵蛋糕里灌柠檬奶油，外面淋柠檬奶油，索伦托半岛的代表甜点。", price: "3–5€" },
      { city: "coast", name: "一米披萨", it: "Pizza a metro", wiki: "Pizza a metro", itwiki: "Pizza a metro", commons: "pizza a metro Vico Equense", desc: "Vico Equense 发明的长条披萨，按长度卖，一条能拼好几种口味，适合几个人分。", price: "按米 / 半米卖" },
      { city: "coast", name: "Provolone del Monaco", it: "Provolone del Monaco", wiki: "Provolone del Monaco", desc: "Vico Equense 一带出产的熟成牛奶奶酪（DOP），味道浓，可以买一小块配面包。", price: "按重量卖" }
    ],
    byDay: [
      { d: "12/6", area: "斗兽场 → 犹太区 → 万神殿 → 特雷维", list: [
        { n: "Antico Forno Roscioli", q: "Antico Forno Roscioli, Via dei Chiavari 34, Roma", what: "老面包店，白披萨（pizza bianca）、红披萨按块卖，便宜", when: "午饭前后路过 Largo Argentina（周日营业时间以地图为准）" },
        { n: "Ba'Ghetto / Nonna Betta", q: "Nonna Betta, Via del Portico d'Ottavia 16, Roma", what: "犹太区的罗马犹太菜：炸朝鲜蓟、炸鳕鱼条", when: "13:15 午饭（坐下吃，约 20–30€ / 人）" },
        { n: "Pasticceria Boccione", q: "Pasticceria Boccione, Via del Portico d'Ottavia 1, Roma", what: "犹太老点心铺，“犹太披萨”（其实是果干杏仁硬饼）和里科塔樱桃挞", when: "周日上午开，周六不开" },
        { n: "Sant'Eustachio Il Caffè", q: "Sant'Eustachio Il Caffè, Roma", what: "万神殿旁的老咖啡馆，招牌 Gran Caffè（加糖起泡）", when: "排万神殿前后" },
        { n: "Giolitti", q: "Giolitti, Via degli Uffici del Vicario 40, Roma", what: "1900 年开业的老牌 gelato", when: "万神殿 → 纳沃纳路上" },
        { n: "Gelateria del Teatro", q: "Gelateria del Teatro, Via dei Coronari 65, Roma", what: "纳沃纳广场旁，口味有创意（鼠尾草覆盆子等）", when: "纳沃纳之后" },
        { n: "Pastificio Guerra", q: "Pastificio Guerra, Via della Croce 8, Roma", what: "西班牙台阶旁的面店，每天两种面，一盘约 5€ 含水", when: "晚饭，去 Spagna 地铁站的路上（营业时间以地图为准）" }
      ] },
      { d: "12/7", area: "梵蒂冈 → Prati → 特拉斯提弗列", list: [
        { n: "Bonci Pizzarium", q: "Pizzarium Bonci, Via della Meloria 43, Roma", what: "罗马最出名的切块披萨，按重量买，站着吃", when: "11:00 开门后，早午饭" },
        { n: "Mercato Trionfale", q: "Mercato Trionfale, Via Andrea Doria, Roma", what: "本地人的室内菜市场，买水果、火腿面包，便宜", when: "朋友们 12:00–15:00 在 Prati 时" },
        { n: "Sciascia Caffè 1919", q: "Sciascia Caffè, Via Fabio Massimo 80, Roma", what: "Prati 区的老咖啡馆，巧克力咖啡", when: "等博物馆前后" },
        { n: "Supplì Roma", q: "Supplì Roma, Via di San Francesco a Ripa 137, Roma", what: "特拉斯提弗列的老店，supplì 和切块披萨", when: "晚上先垫一口" },
        { n: "Da Enzo al 29", q: "Da Enzo al 29, Via dei Vascellari 29, Roma", what: "罗马四大面和炸朝鲜蓟，通常要排队，开门前 20–30 分钟到", when: "晚饭（约 25–35€ / 人）" },
        { n: "Fior di Luna", q: "Fior di Luna, Via della Lungaretta 96, Roma", what: "手工 gelato，用当季原料", when: "饭后" }
      ] },
      { d: "12/8", area: "真理之口 → Testaccio → 人民广场 → 西班牙台阶", list: [
        { n: "Trapizzino（Testaccio 本店）", q: "Trapizzino, Via Giovanni Branca 88, Roma", what: "Trapizzino 的发源地，炖鸡、牛肚、肉丸口味", when: "12:00 午饭" },
        { n: "Mercato di Testaccio", q: "Mercato di Testaccio, Roma", what: "室内市场，里面的 Mordi e Vai 卖牛肉三明治", when: "节日当天可能不开，以地图为准" },
        { n: "Pompi", q: "Pompi, Via della Croce 82, Roma", what: "提拉米苏专门店，盒装带走", when: "等教宗献花前后" },
        { n: "Pastificio Guerra", q: "Pastificio Guerra, Via della Croce 8, Roma", what: "便宜的现做意面", when: "晚饭" }
      ] },
      { d: "12/9", area: "那不勒斯老城 → 沃梅罗 → 托莱多 → 住处", list: [
        { n: "Di Matteo", q: "Pizzeria Di Matteo, Via dei Tribunali 94, Napoli", what: "炸披萨、frittatina，门口窗口外卖便宜", when: "12:30 午饭" },
        { n: "Gino e Toto Sorbillo", q: "Gino e Toto Sorbillo, Via dei Tribunali 32, Napoli", what: "名气最大的披萨店之一，排队长，取号后可以先逛", when: "午饭备选" },
        { n: "Scaturchio", q: "Scaturchio, Piazza San Domenico Maggiore 19, Napoli", what: "百年甜品店，babà 和招牌 ministeriale 巧克力", when: "圣塞维罗出来正好在旁边" },
        { n: "Pintauro", q: "Pintauro, Via Toledo 275, Napoli", what: "据说是把 sfogliatella 带进城的老店", when: "下山走托莱多大街时" },
        { n: "L'Antica Pizzeria da Michele", q: "L'Antica Pizzeria da Michele, Via Cesare Sersale 1, Napoli", what: "只做 Margherita 和 Marinara，取号排队，翻台快", when: "晚饭，离住处步行约 5 分钟" }
      ] },
      { d: "12/10", area: "庞贝 → Vico Equense", list: [
        { n: "Sfogliatelle Attanasio", q: "Sfogliatelle Attanasio, Vico Ferrovia 1, Napoli", what: "中央车站旁，刚出炉的 sfogliatella，可以多买几个当庞贝的干粮", when: "早上出发前" },
        { n: "车站附近超市", q: "supermercato Piazza Garibaldi Napoli", what: "买三明治、水和水果带进庞贝，里面吃的少又贵", when: "早上" },
        { n: "Da Gigino – Pizza a Metro", q: "Da Gigino Pizza a Metro, Vico Equense", what: "一米披萨的发源店", when: "晚饭（离住处约 2 km，打车或请店家叫车）" }
      ] },
      { d: "12/11", area: "索伦托 → 波西塔诺", list: [
        { n: "I Giardini di Cataldo", q: "I Giardini di Cataldo, Corso Italia 267, Sorrento", what: "柠檬园里的店：柠檬冰沙、柠檬 gelato、试喝柠檬酒", when: "上午逛索伦托" },
        { n: "Pizzeria Da Franco", q: "Pizzeria Da Franco, Corso Italia 265, Sorrento", what: "本地人常去的平价披萨，纸盘长桌", when: "晚饭（回到索伦托换车时）" },
        { n: "波西塔诺", q: "Positano", what: "12 月很多店休息，海边开着的餐厅也偏贵；可以在索伦托买好三明治带上，在海滩边吃", when: "午饭" }
      ] },
      { d: "12/12", area: "西班牙区 → 平民表决广场 → 海边", list: [
        { n: "Gran Caffè Gambrinus", q: "Gran Caffè Gambrinus, Napoli", what: "1860 年的老咖啡馆，babà、sfogliatella、咖啡，站着吃喝更便宜", when: "10:45" },
        { n: "Sorbillo Lievito Madre al Mare", q: "Sorbillo Lievito Madre al Mare, Via Partenope 1, Napoli", what: "海滨路上的 Sorbillo 分店，看着蛋堡吃最后一顿那不勒斯披萨", when: "13:00 午饭" },
        { n: "Zia Esterina Sorbillo", q: "Zia Esterina Sorbillo, Piazza Trieste e Trento, Napoli", what: "炸披萨外卖窗口", when: "顺路垫一口" }
      ] }
    ],
    tips: [
      "账单上的 coperto（餐位费）每人 1–3€ 是正常的，小费不强制。",
      "咖啡站在吧台（al banco）喝最便宜；坐下来（al tavolo）在景点旁可能贵一倍。",
      "午饭约 12:30–15:00，晚饭 19:30 以后才开始；下午很多餐厅关门，可以吃切块披萨、炸物垫一下。",
      "水默认上瓶装水（naturale 无气 / frizzante 有气）；罗马街上的“大鼻子”饮水龙头（nasoni）可以直接喝。",
      "周日和 12/8 节日，部分店休息，出发前在 Google 地图看一眼营业时间。",
      "景点旁带照片菜单、门口拉客的餐馆尽量避开；热门店可以用 TheFork 订位，有时有折扣。"
    ]
  },

  /* ---------- 景点补充：门票、停留时间、实用提示 ---------- */
  spotInfo: {
    trevi: { look: ["中间是海神俄刻阿诺斯，两侧是象征“富饶”和“健康”的女神像", "上方浮雕：一个少女给士兵指出水源，这条水道因此叫 Aqua Virgo（处女水道）", "右手边一个大石瓮：传说是建造者为了挡住对面理发店老板的指指点点"], fee: "广场免费；下到水池边 2€（只收卡，22:00 后免费）", time: "15 分钟", tip: "在广场上远看不用票。想下到池边又不想花钱，晚上 22 点以后再来，人也少。" },
    pantheon: { look: ["穹顶的格子（藻井）越往上越小，制造出更高的错觉；混凝土越往上越轻（掺了浮石）", "顶上 9 米的圆孔是唯一光源，看光斑一天里在墙上移动", "地面中间微微隆起、有小排水孔：下雨时雨直接落进来", "拉斐尔墓：石棺上的拉丁文墓志铭大意是“他在世时，自然女神怕被他超越”", "门廊正面的拉丁文 M·AGRIPPA：其实是哈德良重建时保留的原建造者名字"], sh: "Pantheon", fee: "平时 7€；12/6 首个周日免费", time: "20–30 分钟", tip: "免费日排队会长一些。门外的圆柱广场晚上也很好看。" },
    navona: { look: ["贝尼尼的四河喷泉：四个河神代表四大洲的大河（尼罗河、恒河、多瑙河、拉普拉塔河），尼罗河神蒙着头，因为当时还不知道源头", "对面博罗米尼设计的圣依搦斯教堂；“河神抬手挡住教堂怕它倒”是流传很广的段子，但喷泉其实比教堂立面早完工", "广场的长椭圆形就是古罗马图密善竞技场的跑道形状"], sh: "Bernini Four Rivers", fee: "免费", time: "30 分钟", tip: "12 月有圣诞市集。广场边上的餐厅偏贵，吃饭往西边小巷走。" },
    colosseo: { look: ["地下层（hypogeum）：看台下面纵横的通道和兽笼，猛兽靠人力升降机升到场上；从看台往下就能看清结构", "外墙的三种柱式：一层多立克、二层爱奥尼、三层科林斯，教科书级示范", "墙上密密麻麻的小洞：中世纪人挖走固定石块的铁扣留下的", "残缺的南侧外墙：1349 年地震后倒塌，之后几百年被当成采石场，据说圣彼得大教堂等建筑都用过这里的石头", "看台上的十字架：纪念传说中在此殉道的基督徒，每年耶稣受难日教宗在这里主持苦路"], official: ["斗兽场官网", "https://colosseo.it"], sh: "Colosseum", fee: "12/6 首个周日免费，现场排队，不能预约", time: "约 1 小时", tip: "8 点前到售票处排队，名额有限，先到先得。不能带大包。冬季 16:30 左右关门。" },
    foro: { look: ["帕拉蒂尼山上的皇宫遗址（Domus Flavia / Augustana）和俯瞰大竞技场的平台", "提图斯凯旋门：内侧浮雕刻着罗马士兵抬走耶路撒冷圣殿的七枝烛台", "元老院（Curia Julia）：保存最完整的建筑之一，地板是原来的彩色大理石", "凯撒火化处（Tempio del Divo Giulio）：至今常有人放花", "维斯塔贞女之家：长方形水池边一排贞女雕像", "塞维鲁凯旋门和农神庙的 8 根柱子：广场西头的标志性画面"], official: ["斗兽场考古公园官网", "https://colosseo.it"], sh: "Roman Forum", fee: "12/6 免费；平时和斗兽场同一张票", time: "2–3 小时", tip: "遗址里几乎没有遮挡，下雨天带伞。先上帕拉蒂尼山再下到广场，坡少一点。" },
    vittoriano: { look: ["卡比托利欧广场是米开朗基罗设计的，地面星形图案；中间是马可·奥勒留骑马像（复制品，原件在博物馆里）", "市政厅背后的平台（右侧）免费俯瞰古罗马广场全景", "维托里奥纪念堂里有无名烈士墓，有卫兵站岗"], sh: "Campidoglio Michelangelo", fee: "台阶免费；顶层电梯约 10–15€", time: "20 分钟", tip: "不想花钱的话，卡比托利欧山市政厅背后的平台也能俯瞰古罗马广场，免费。" },
    vaticani: { look: ["松果庭院（Cortile della Pigna）：巨大的古罗马青铜松果", "八角庭院：《拉奥孔》（米开朗基罗看过出土现场）和《观景殿的阿波罗》", "缪斯厅：《观景殿躯干》，只剩躯干，米开朗基罗画西斯廷时反复研究它", "圆厅：一整块斑岩雕成的巨大浴盆", "烛台画廊、挂毯画廊（看耶稣的眼睛会跟着你移动）、地图画廊（16 世纪意大利各地的大幅地图）", "拉斐尔画室：《雅典学院》——中间是柏拉图（以达·芬奇为原型）和亚里士多德，前景托腮的赫拉克利特是米开朗基罗，右下角戴黑帽的是拉斐尔本人", "西斯廷天顶：从入口往祭坛方向看，九幅创世纪按倒序；《创造亚当》两根手指之间的空隙；四角和两侧的先知、女先知", "《最后的审判》：圣巴托罗缪手里那张人皮上的脸被认为是米开朗基罗自画像；右下角长驴耳朵、被蛇缠住的冥界判官米诺斯，画的是批评裸体的教廷礼仪长 Biagio da Cesena", "出口的螺旋楼梯：多数人走的是 1932 年 Momo 设计的双螺旋楼梯，常被误叫“布拉曼特楼梯”（真正的布拉曼特楼梯在馆内另一处，一般不开放）"], official: ["梵蒂冈博物馆官网", "https://www.museivaticani.va"], sh: "Sistine Chapel", fee: "Yifan 已订 12/7 12:00 学生票 15€", time: "2.5–3 小时", tip: "入口在 Viale Vaticano，走右侧预约通道「Corridoio 1」，先给工作人员看电子票和证件验票，过安检后在一楼刷闸机。官网实名预约，不可退。要遮肩过膝。周日闭馆（每月最后一个周日除外），12/8 节日也闭馆。" },
    sanpietro: { look: ["进门右手第一个礼拜堂：米开朗基罗 24 岁的《圣殇》，圣母衣带上刻着他的名字（他唯一署名的作品）", "中央贝尼尼的青铜华盖，约 29 米高，四根扭曲的柱子；下面是圣彼得墓所在", "最里面的“圣彼得宝座”（Cathedra Petri），上方黄色的鸽子窗是整个教堂的光源焦点", "圣彼得青铜坐像：右脚被朝圣者摸得发亮", "地上刻着世界各大教堂长度的铜标记，证明这里最长", "广场上两个圆盘（喷泉和方尖碑之间）：站上去看，四排柱子会重叠成一排"], official: ["圣彼得大教堂官网", "https://www.basilicasanpietro.va"], sh: "St. Peter's Basilica", fee: "免费；登穹顶约 10–17€", time: "1 小时", tip: "安检队伍下午最长。周一没有教宗公开接见，广场正常开放。" },
    angelo: { look: ["桥上 10 尊天使各拿一件耶稣受难的刑具，其中两尊原作是贝尼尼做的（现在桥上的是复制品）", "城堡顶上的青铜天使：传说 590 年瘟疫时天使在这里收剑，瘟疫结束，城堡因此得名", "通往梵蒂冈的高架密道 Passetto di Borgo，教宗曾经从这里逃难"], sh: "Castel Sant'Angelo", fee: "看外观免费；城堡内部约 16€", time: "外观 20 分钟", tip: "从对岸走过圣天使桥，黄昏回头拍城堡。" },
    trastevere: { look: ["Santa Maria in Trastevere：后殿 12 世纪金色马赛克，罗马最早的圣母堂之一，免费", "小巷里的爬山虎、街灯和小神龛（edicole），晚上最好看"], fee: "免费", time: "一个晚上", tip: "19:30 以后才热闹。Santa Maria in Trastevere 教堂有 12 世纪的金色马赛克，免费进。" },
    bocca: { look: ["面具可能是古罗马的井盖或排水口，雕的是河神或海神", "旁边的希腊圣母堂（Santa Maria in Cosmedin）内部免费，有中世纪的彩色石地板（Cosmatesque）和罗马式钟楼"], fee: "约 2€ 捐款", time: "15 分钟", tip: "开门后不久去排队最快。门廊外的铁栅栏外也能远远拍到。" },
    circo: { look: ["草地就是跑道，中间一条略高的“脊”（spina）原来立着方尖碑，其中两根现在在人民广场和拉特朗广场"], fee: "免费", time: "15 分钟", tip: "穿过草地往阿文提诺山方向走，就是去橘子花园的路。" },
    aranci: { look: ["钥匙孔：透过马耳他骑士团大门的钥匙孔，看到的是骑士团花园的树篱尽头框着圣彼得圆顶——一个视野里能“看见三个国家”（马耳他骑士团、意大利、梵蒂冈）"], fee: "免费", time: "30–45 分钟", tip: "钥匙孔在 Piazza dei Cavalieri di Malta，从花园走 5 分钟，节日上午排队可能 15–30 分钟。" },
    borghese: { fee: "见预算里的门票", time: "每场限 2 小时", tip: "必须预约时段，提前 30 分钟到取票、寄包。外面的公园免费。" },
    pincio: { look: ["西班牙台阶顶上的天主圣三教堂和埃及方尖碑", "台阶下的“破船喷泉”（Barcaccia），贝尼尼父亲的作品", "台阶右边的济慈-雪莱故居：济慈在这里去世"], fee: "免费", time: "30 分钟", tip: "西班牙台阶上不能坐，会被罚款。12/8 下午台阶一带会封路、安检。" },
    colonna: { look: ["柱子是 1777 年出土的古罗马大理石柱，顶上青铜圣母像；底座四周是摩西、大卫、以赛亚、以西结", "12/8 早上消防员用云梯给圣母像挂花环，下午教宗献花后城里的圣诞季正式开始"], fee: "免费", time: "1 小时（含等待）", tip: "提前 30–45 分钟到，人很多，站在 Via Condotti 路口一侧比较容易看到。看好包。" },
    popolo: { look: ["左侧最里面的 Cerasi 礼拜堂：卡拉瓦乔《圣保罗皈依》（马占据了大半个画面，保罗躺在地上张开双手）和《圣彼得受难》", "Chigi 礼拜堂：拉斐尔设计，穹顶马赛克；贝尼尼的《哈巴谷与天使》和《但以理与狮子》", "旁边有投币灯，投 1€ 照亮礼拜堂几分钟"], sh: "Caravaggio Conversion of Saint Paul", fee: "免费", time: "20 分钟", tip: "弥撒时不能参观。卡拉瓦乔那间礼拜堂光线暗，旁边有投币灯。" },
    centrale: { fee: "—", time: "—", tip: "车站和门口的加里波第广场人多杂乱，看好包，不理会主动帮拿行李、帮叫车的人。" },
    sansevero: { look: ["《蒙纱的基督》（Giuseppe Sanmartino，1753）：薄纱下能看到额头的伤口和凹陷的脸颊，曾长期流传是“炼金术把真纱变成大理石”的说法，后来研究证明是整块大理石雕的", "《谦逊》（Pudicizia，Corradini）：蒙着透明纱的女子，献给建造者的母亲", "《解脱》（Disinganno，Queirolo）：一个男人挣脱一张大理石雕成的网，网和身体分离雕刻，被认为是技术最难的一件", "地下室两具“解剖机器”：18 世纪的人体血管系统标本", "天顶画和彩色地板（迷宫图案）"], official: ["圣塞维罗礼拜堂官网（有作品介绍）", "https://www.museosansevero.it"], fee: "见预算里的门票", time: "30–45 分钟", tip: "周二闭馆，里面不能拍照。时段常提前订满，早点订。" },
    spacca: { look: ["从高处（Largo San Martino）往下看，这条街把老城“劈成两半”，沿古希腊城市的主干道", "圣格雷戈里奥街：做圣诞马槽小人的作坊，除了宗教人物，还有足球明星、政客、名人的小人偶，每年跟着新闻更新", "新耶稣教堂外墙一颗颗菱形凸起的石头（钻石面），传说石头上刻着音符", "Santa Chiara 修道院回廊：铺满彩色马约利卡瓷砖的柱子和长椅（收费）"], fee: "免费", time: "1–2 小时", tip: "12 月是圣格雷戈里奥街一年里最挤的时候（圣诞马槽季），注意包。旁边的 Santa Chiara 修道院回廊有彩色瓷砖，单独收费。" },
    funicolare: { fee: "一张公交票，约 1.5–1.8€", time: "5 分钟", tip: "Augusteo 站在托莱多大街上，坐 Centrale 线到终点 Fuga，再走 10 分钟到城堡。" },
    santelmo: { look: ["城墙顶上的 360° 全景：Spaccanapoli 直线、维苏威火山、那不勒斯湾和卡普里岛", "旁边的圣马丁修道院（Certosa di San Martino）有大型马槽收藏和华丽的巴洛克教堂（单独收费）"], fee: "见预算里的门票", time: "1 小时", tip: "周二闭馆。日落前 1 小时到；城堡下面的 Largo San Martino 观景台免费，景色差不多。" },
    toledo: { look: ["托莱多站下层：深蓝色马赛克“海底隧道”和向上的“光之火山口”，是“艺术地铁站”项目之一", "翁贝托一世长廊：铁和玻璃的穹顶，地面马赛克有十二星座"], fee: "一张地铁票", time: "30 分钟", tip: "托莱多地铁站的蓝色“海洋”穹顶在下层通道，买票进站就能看。" },
    pompei: { look: ["广场（Foro）和背后的维苏威火山：先站在广场北端看一下全城规模", "石板路：车辙印、街心的“跳石”（下雨时过马路踩的，也限制了车的宽度）", "Thermopolium：街边“快餐店”，柜台里嵌着装热食的陶罐", "墙上的涂鸦和选举标语：古罗马人的“朋友圈”", "维蒂之家（Casa dei Vettii）：庞贝最精美的壁画之一，门口有名的普里阿普斯像", "牧神之家：《亚历山大大战大流士》马赛克是复制品，原件在那不勒斯国家考古博物馆", "悲剧诗人之家门口的“小心有狗”（Cave Canem）马赛克", "Stabian 浴场：更衣室、冷水池、温水池、热水池和地下供暖", "石膏像：是考古学家往火山灰里的空腔灌石膏得到的人和动物最后的姿势", "神秘别墅（Plus 票）：整面红底大型壁画，见上面的介绍"], official: ["庞贝考古公园官网", "https://pompeiisites.org"], sh: "Pompeii", fee: "见预算里的门票", time: "3–4 小时", tip: "从 Napoli Garibaldi 坐 Circumvesuviana 到 Pompei Scavi，约 40 分钟，车上扒手多。冬季下午关门早，上午去。" },
    ercolano: { look: ["二层楼房、木头房梁和门窗都还在，因为埋它的是更厚、更热的火山泥流", "古海滩上的船屋：发现了 300 多具逃难者遗骸", "海神与安菲特里忒之家的彩色马赛克墙"], sh: "Herculaneum", fee: "见预算里的门票（可选）", time: "约 2 小时", tip: "Circumvesuviana 的 Ercolano Scavi 站下车，走 10 分钟。冬季约 15:30 停止入场，以官网为准。" },
    vico: { look: ["Vico 老城悬崖边的 Santissima Annunziata 教堂，是海边少有的哥特式教堂"], fee: "免费", time: "一个傍晚", tip: "一米披萨最有名的是镇上的老店 Da Gigino，按长度点，三个人点半米左右，以现场为准。" },
    positano: { look: ["圣母升天教堂的马约利卡瓷砖圆顶和里面的拜占庭黑圣母像", "镇子从山顶到海边全是台阶小路：一路往下走，回头看层层叠叠的彩色房子"], fee: "免费；海边教堂免费", time: "约 2 小时", tip: "镇里全是下坡台阶，走到海滩后要再爬回公路上坐车，留 20 分钟。" },
    amalfi: { look: ["主教座堂 62 级大台阶、黑白条纹加金色马赛克的立面；地下墓室供奉圣安德烈遗骨", "天堂回廊：13 世纪贵族墓园，阿拉伯式交叉拱"], fee: "主教座堂免费看外观；天堂回廊和博物馆约 5€", time: "约 2 小时", tip: "冬天不少餐厅关门，主教座堂广场一带一定有开的。回索伦托的巴士站在海边码头。" },
    sorrento: { look: ["磨坊谷（Vallone dei Mulini）：塔索广场旁边的深谷，废弃的磨坊被植物覆盖", "老城里 Sedile Dominova：带壁画穹顶的中世纪议事厅，现在是老人打牌的地方", "市立公园观景台：正对那不勒斯湾和维苏威火山，旁边的台阶可以下到 Marina Grande 渔港"], fee: "免费", time: "1–2 小时", tip: "市立公园观景台从塔索广场走 5 分钟。买柠檬酒去超市比纪念品店便宜。" },
    capri: { look: ["奥古斯都花园俯瞰法拉廖尼巨石和下面的之字形 Via Krupp", "小广场（Piazzetta）：岛上的“客厅”", "蓝洞：只有风平浪静时坐小船躺着进洞，冬天常常关闭"], fee: "索伦托出发的船单程约 20–25€；岛上缆车约 2.4€ / 程", time: "一整天", tip: "风浪大会停航或取消，前一天看天气和船公司通知。蓝洞冬天常常关闭，别抱太大期望。" },
    quartieri: { look: ["马拉多纳壁画：1990 年画的，旁边形成了一个小“圣殿”，有球衣、围巾、蜡烛", "窄巷里的晾衣绳、小神龛和一楼的 bassi（临街住家）"], fee: "免费", time: "30–45 分钟", tip: "白天去，主路走就好，摩托会从窄巷里穿过，靠边走。" },
    nuovo: { look: ["入口两座塔之间的白色大理石凯旋门：文艺复兴风格，纪念阿拉贡的阿方索一世入城", "原来的青铜门（现在在城堡内部）上还嵌着一颗当年的炮弹"], fee: "外观免费；内部约 6€", time: "20 分钟", tip: "门口的白色凯旋门浮雕值得看，内部可以跳过。" },
    plebiscito: { look: ["圣方济各教堂：仿罗马万神殿的圆顶和半圆形柱廊", "王宫正面 8 尊雕像是那不勒斯历代王朝的国王", "传说蒙着眼从王宫门口走到两座骑马像中间很难走直"], fee: "免费", time: "20 分钟", tip: "对面的翁贝托一世拱廊有玻璃穹顶，免费。老字号 Gambrinus 咖啡馆站着喝更便宜。" },
    ovo: { look: ["“蛋”的传说：诗人维吉尔把一颗蛋藏在地基里，蛋碎城亡", "城墙平台上能看到对岸的维苏威火山和海边的 Borgo Marinari 小港"], fee: "免费", time: "1 小时", tip: "城堡平台免费开放（以现场为准）。沿海滨步道往维苏威方向拍。" }
  },

  /* ---------- 出行须知 ---------- */
  apps: [
    ["Trenitalia", "意大利国铁：高铁、区域车、Leonardo Express、FL1 都在这里买，CartaFRECCIA 会员也在这里注册。", "https://www.trenitalia.com"],
    ["Italo", "另一家高铁公司，和 Trenitalia 比价用，学生和早鸟票经常更便宜。", "https://www.italotreno.com"],
    ["Ryanair", "值机、非欧盟证件验证、电子登机牌。", "https://www.ryanair.com"],
    ["Google Maps", "罗马和那不勒斯的公交、地铁路线都准，出发前下载两座城市的离线地图。", "https://maps.google.com"],
    ["Unico Campania", "那不勒斯的公交、地铁、缆车电子票。地铁 1 号线和中央缆车也可以直接刷银行卡进站。", "https://www.unicocampania.it"],
    ["EAV", "Circumvesuviana 小火车（去庞贝、赫库兰尼姆、索伦托）的时刻表和购票。", "https://www.eavsrl.it"],
    ["SITA Sud", "阿马尔菲海岸巴士的冬季时刻表，票在报刊亭或 Unico Campania App 买。", "https://www.sitasudtrasporti.it"],
    ["itTaxi", "叫正规出租车，罗马和那不勒斯都能用，车费按表或固定价。", "https://www.ittaxi.it"],
    ["Google 翻译", "提前下载意大利语离线包，看菜单和标牌用。", "https://translate.google.com"]
  ],
  ticketSites: [
    ["斗兽场 + 古罗马广场", "ticketing.colosseo.it", "https://ticketing.colosseo.it"],
    ["梵蒂冈博物馆", "tickets.museivaticani.va", "https://tickets.museivaticani.va"],
    ["庞贝", "官网 pompeiisites.org 指向的 Vivaticket", "https://pompeiisites.org"],
    ["圣塞维罗礼拜堂", "museosansevero.it", "https://www.museosansevero.it"],
    ["万神殿", "Musei Italiani 官网或 App", "https://museiitaliani.it"],
    ["博尔盖塞美术馆", "galleriaborghese.beniculturali.it", "https://galleriaborghese.beniculturali.it"]
  ],
  reads: [
    { group: "B 站视频", items: [
      ["庞贝捡史｜24 分钟看完庞贝古城", "https://www.bilibili.com/video/BV1SNRCBgEDQ/", "去庞贝前看，知道该找什么"],
      ["站在斗兽场，我才发现历史书根本写不出罗马的震撼！", "https://www.bilibili.com/video/BV1N18vzeEpY/", "斗兽场和古罗马广场"],
      ["意大利 | 万神殿 | 石之史诗，光之颂歌", "https://www.bilibili.com/video/BV1UAKozuEc5/", "万神殿的建筑讲解"],
      ["罗马，一堵破墙让我一去再去？", "https://www.bilibili.com/video/BV1dR4y1Q78Z/", "罗马城市漫步"],
      ["9 分钟游遍那不勒斯", "https://www.bilibili.com/video/BV16VgwzmENc/", "那不勒斯快速概览"],
      ["TTC 伟大的旅程：意大利篇（罗马）", "https://www.bilibili.com/video/BV1PD4y1U7UG/", "历史背景课，想深入再看"]
    ] },
    { group: "YouTube", items: [
      ["Before You Go to Rome (Avoid These Mistakes)", "https://www.youtube.com/watch?v=HKU_Zqq-rxw", "Destination Well Known，罗马避坑"],
      ["Rome in 2026: What They Don't Tell You!", "https://www.youtube.com/watch?v=HBgxAEXZywo", "Crown Tours，今年的新变化"],
      ["18 Tips I Wish I Knew Before Visiting Rome", "https://www.youtube.com/watch?v=b1B4bNSlc9s", "Camden David，实用小贴士"],
      ["Things to Know Before You Go to Naples", "https://www.youtube.com/watch?v=Vo8xL6qaFHE", "Creative Travel Guide"],
      ["Top Things To See in Naples 2026", "https://www.youtube.com/watch?v=1RAw4zJEqQI", "the tour guy"],
      ["What to Eat in Naples", "https://www.youtube.com/watch?v=t-mn6LXJ2jY", "Luis，那不勒斯吃什么"]
    ] },
    { group: "文章", items: [
      ["意大利那不勒斯旅行攻略（从德国出发）", "https://www.dealmoon.com/guide/1302291", "交通、景点、天气、美食"],
      ["飘儿：拿坡里攻略", "https://www.bring-you.info/zh-hans/napoli", "繁中旅游博主，车站周边和老城的安全观察"],
      ["Things to know before traveling to Naples", "https://www.lonelyplanet.com/articles/things-to-know-before-traveling-to-naples", "Lonely Planet"],
      ["23 Things To Know Before You Visit Naples", "https://www.alongdustyroads.com/posts/visit-naples-italy", "Along Dusty Roads"],
      ["Rick Steves: Naples", "https://www.ricksteves.com/europe/italy/naples", "附免费的那不勒斯考古博物馆语音导览"]
    ] },
    { group: "小红书搜索（需要登录）", items: [
      ["罗马 冬天 攻略", "https://www.xiaohongshu.com/search_result?keyword=%E7%BD%97%E9%A9%AC%20%E5%86%AC%E5%A4%A9%20%E6%94%BB%E7%95%A5", ""],
      ["那不勒斯 防偷", "https://www.xiaohongshu.com/search_result?keyword=%E9%82%A3%E4%B8%8D%E5%8B%92%E6%96%AF%20%E9%98%B2%E5%81%B7", ""],
      ["庞贝 攻略", "https://www.xiaohongshu.com/search_result?keyword=%E5%BA%9E%E8%B4%9D%20%E6%94%BB%E7%95%A5", ""]
    ] }
  ],
  pack: [
    "护照 + 德国居留卡（都要在有效期内）",
    "Ryanair：App 里完成非欧盟证件验证并值机，登机牌存到手机",
    "座位下小包不超过 40×30×20 cm",
    "德标插头的插线板 + 1 个 Schuko 转意大利 L 型转接头",
    "装好 App：Trenitalia、Italo、Ryanair、Unico Campania、itTaxi",
    "充电宝（只能随身带）",
    "折叠伞、防水的鞋",
    "门票和住宿确认存到手机（截图或 PDF，离线能看）",
    "Google Maps 下载罗马和那不勒斯的离线地图",
    "备 50–100€ 现金",
    "出发前 3 天查天气和罢工"
  ],
  tips: [
    { title: "防偷防骗", open: true, items: [
      ["扒手多的地方：", "罗马 Termini 站、地铁 A 线（Termini–Spagna–Ottaviano）、去梵蒂冈的 64 / 40 路公交、特雷维和斗兽场；那不勒斯中央车站、加里波第广场、去庞贝的 Circumvesuviana。"],
      ["包和手机：", "包斜挎在身前，拉链朝里；手机不放后裤袋，室外座位别把手机放桌上。那不勒斯偶尔有骑摩托抢包的，走路时包和手机放在远离马路的一侧。"],
      ["上下车被挤：", "上地铁时突然有一群人挤你、撞你或“帮你”，立刻护住包。"],
      ["常见套路：", "往手上系“友谊绳”、塞玫瑰、拿请愿书让你签，然后要钱，直接走开不接；Termini 售票机旁“帮你买票”的人；斗兽场门口穿古罗马服装的人合影收费；自称便衣警察要查钱包。"],
      ["钱分开放：", "随身一张卡和少量现金，另一张卡留在住处。手机里存好护照和居留卡的照片。"],
      ["真丢了：", "先在银行 App 冻结卡，再去最近的 Carabinieri 或 Polizia 报案，拿报案证明（denuncia），补证件和保险理赔都要用。"]
    ] },
    { title: "证件和入住", items: [
      ["证件：", "非欧盟公民在申根区旅行，护照和德国居留卡都要随身带，缺一样都可能出问题。"],
      ["入住：", "前台会登记每个人的护照，三个人都要到场或提供证件。"],
      ["Ryanair：", "非欧盟护照要在 App 里完成证件验证，否则得去机场柜台盖章，柜台起飞前 40 分钟关闭。"],
      ["手机流量：", "德国手机卡在欧盟内漫游一般和在德国一样计费，出发前在套餐里确认一下。"]
    ] },
    { title: "插头和用电", items: [
      ["电压：", "意大利是 230V，和德国一样。手机、电脑充电器标着 100–240V 的都能直接用；只写 110V 的电器（台湾带来的吹风机、电热水壶等）不能插，会烧坏。"],
      ["插座：", "意大利常见三种孔：和德国一样的 Schuko 圆孔、L 型（三个孔一字排开）、以及两种都能插的组合插座。德国的扁细两脚插头（Eurostecker）哪种都能插；德国粗圆带接地的 Schuko 插头插不进 L 型。"],
      ["我们怎么带：", "带一个插头是德标的插线板（中国插排或德国插排都行），再买一个 Schuko 转意大利 L 型的转接头，插线板插在转接头上，三个人都从插线板取电。中国插排的两扁脚孔，和台湾的两扁脚插头是同一个规格，台湾朋友的充电器能直接插。"],
      ["转接头怎么买：", "Amazon.de、Saturn、MediaMarkt 搜 “Reiseadapter Italien Schuko Typ L”，约 5–10€。买之前看清方向：要 “Stecker Typ L（Italien）/ Buchse Schuko（Typ F）”，也就是德国插头插进去、意大利插头插墙上。写着 “Italien → Schutzkontakt” 的是反方向，给意大利电器在德国用的，别买错。选 10A 的插头（细针），意大利的 10A 孔和两用孔都能插。"]
    ] },
    { title: "天气和穿衣", items: [
      ["温度：", "12 月上旬罗马白天约 13–15°C，夜里 3–6°C；那不勒斯略暖，但海边风大。"],
      ["下雨：", "这个季节雨不少，多是阵雨。带折叠伞，石板路下雨很滑，穿防滑的鞋。"],
      ["天黑早：", "日落大约 16:35。古罗马广场、庞贝、阿马尔菲这类露天行程安排在上午和中午。"],
      ["怎么穿：", "保暖内衣 + 毛衣或抓绒 + 防风外套。室内暖气足，进博物馆能脱。"],
      ["临时调整：", "出发前 3 天看天气。那不勒斯三天里，庞贝和海岸一日游放在晴天，下雨那天换成考古博物馆、地下城。"]
    ] },
    { title: "付钱和吃饭", items: [
      ["刷卡：", "大部分地方能刷卡或手机支付；城市税、小吃摊、部分咖啡吧只收现金。"],
      ["选欧元：", "刷卡机问用欧元还是其他货币时，选 EUR，别让对方换汇。"],
      ["取现：", "用银行的 ATM（Bancomat），避开 Euronet 这类独立 ATM，手续费高。"],
      ["咖啡吧：", "站在吧台喝比坐下便宜，有的要先在收银台付钱再拿小票点单。"],
      ["小费：", "账单上的 coperto（每人 1–3€ 座位费）是正常的，不用再给小费。"],
      ["喝水：", "罗马街头的饮水龙头（nasoni）是免费的干净水，带个空瓶。"]
    ] },
    { title: "交通和罢工", items: [
      ["打卡：", "纸质的公交票和区域火车票，上车前要在机器上打卡，不打卡被查到罚款 50€ 起。罗马地铁闸机可以直接刷银行卡，每人刷自己的卡。"],
      ["罢工：", "意大利交通罢工不少，多在周五。出发前一周查交通部的罢工日历（scioperi.mit.gov.it），罢工时也有保障时段。"],
      ["过马路：", "那不勒斯的车和摩托不太让人，看准了就走，别在马路中间犹豫。"],
      ["出租车：", "只坐白色、车顶有 TAXI 标志的正规车，不理会车站里拉客的。"]
    ] },
    { title: "参观规矩", items: [
      ["着装：", "梵蒂冈、圣彼得和各大教堂要遮肩、过膝，冬天一般没问题，别穿短裤。"],
      ["闭馆：", "很多景点周一或周二闭馆，行程已经错开，临时改行程时要再看一眼。"],
      ["厕所：", "公共厕所少，在博物馆、餐厅或消费过的咖啡吧上。"],
      ["不能做的事：", "坐西班牙台阶、在喷泉里泡脚、在古迹上刻字都会被罚款。"]
    ] },
    { title: "紧急情况", items: [
      ["电话：", "欧洲统一紧急电话 112，警察、急救、消防都打这个。"],
      ["看病：", "德国公立医保卡背面就是欧洲医保卡（EHIC），在意大利公立医院能用；私立保险出发前确认一下。"],
      ["护照丢了：", "先报案拿证明，再按自己的护照联系：大陆护照找中国驻意大利大使馆领事部（罗马），台湾护照找驻义大利台北代表处（罗马）。两处都在罗马，出发前把地址和紧急电话存到手机里。"]
    ] }
  ],

  budget: {
    people: 3,
    /* start：第一天的日期；days：日历天数；foodDays：按几天算吃喝 */
    plans: {
      "5-13": { label: "12/5–13，8 晚", start: 5, days: 9, foodDays: 8 }
    },
    groups: [
      { id: "flight", label: "机票", sub: "柏林 BER ⇄ 罗马 FCO，Ryanair 基础票，只含座位下小包", options: [
        /* d1 / dl：第一天、最后一天在城里能玩的小时数（按 9:00–21:00 算，每天 12 小时） */
        { id: "r1", name: "12/5 22:20 去，12/13 09:55 回（已订）", note: "28.99€ + 33.99€ / 人，含落地打车", pp: 62.98, nightTaxi: true, d1: 0, dl: 0,
          d1Text: "00:30 落地，快线已停，打车去住处", dlText: "约 6:45 出发去机场" } ] },
      { id: "bag", label: "托运行李", sub: "已订，挂在 Yifan 的订单里", options: [
        { id: "booked", name: "已订：一件 20 kg", note: "去程 27.99€ + 回程 29.99€", total: 57.98 },
        { id: "none", name: "不托运", note: "三人都只背座位下小包", total: 0 } ] },
      { id: "stay-rome1", label: "罗马住宿（前四晚）", sub: "12/5–9，4 晚", stay: true, nights: 4 },
      { id: "stay-naples", label: "那不勒斯住宿", sub: "12/9–10，1 晚", stay: true, nights: 1 },
      { id: "stay-vico", label: "Vico Equense 住宿", sub: "12/10–12，2 晚", stay: true, nights: 2 },
      { id: "stay-rome2", label: "罗马住宿（最后一晚）", sub: "12/12–13，1 晚", stay: true, nights: 1 },
      { id: "airport", label: "去机场（12/13 早上）", sub: "到达那程已算在机票里", options: [
        { id: "taxi", name: "出租车", note: "营地打表约 45–55€；城墙内固定 55€", car: true },
        { id: "leonardo", name: "Leonardo Express", note: "住 Termini 时：直达 32 分钟，14€ / 人", pp: 14 },
        { id: "fl1", name: "FL1 区域车", note: "Tiburtina / Trastevere 上车，约 8€ / 人", pp: 8 } ] },
      { id: "train", label: "罗马 ⇄ 那不勒斯", sub: "12/9 去，12/12 回", options: [
        { id: "itabus", name: "Itabus 大巴", note: "5.99€ / 程，约 2 小时 40 分–3 小时", pp: 12 },
        { id: "hs", name: "高铁最低价", note: "约 14€ / 程，1 小时 10 分钟", pp: 28 },
        { id: "hs2", name: "高铁常见价", note: "约 25€ / 程", pp: 50 } ] },
      { id: "trip", label: "12/11 一日游", sub: "从 Vico 出发的交通费，估算", options: [
        { id: "amalfi", name: "索伦托 + 波西塔诺", note: "小火车往返索伦托 + SITA 巴士往返波西塔诺，约 12–15€", pp: 15 },
        { id: "capri", name: "卡普里岛", note: "索伦托往返船票约 40–50€ + 小火车 + 岛上缆车", pp: 55 } ] },
      { id: "fun", label: "吃喝购物", sub: "可选，估算，每人每天", estimate: true, options: [
        { id: "none", name: "不计入", note: "只看交通住宿门票", ppDay: 0 },
        { id: "low", name: "省着花", note: "超市早餐 + 披萨", ppDay: 30 },
        { id: "mid", name: "正常", note: "每天一顿正餐", ppDay: 45 },
        { id: "high", name: "宽松", note: "多吃多买", ppDay: 65 } ] }
    ],
    /* 不用选的固定开销（每人） */
    fixed: [
      { name: "德累斯顿 ⇄ 柏林 BER", pp: 0, note: "学期票坐区域车" },
      { name: "罗马市内交通", pp: 26, note: "营地 ⇄ 市区 / Tiburtina，公交 + 地铁，约 5 天，按每天 5–6€ 估" },
      { name: "那不勒斯市内 + 小火车", pp: 16, note: "地铁 / 缆车约 1.5–1.8€ / 次；Circumvesuviana 那不勒斯 → 庞贝 → Vico、Vico → 那不勒斯，每程约 2.5–4€" }
    ],
    tickets: [
      { id: "colosseo", name: "斗兽场 + 古罗马广场（12/6 免费日）", pp: 0, v: "必去", why: "每月第一个周日免费，现场排队，先到先得", more: [["看什么", "斗兽场内部看台；古罗马广场是古罗马城的政治和宗教中心遗址；帕拉蒂尼山是皇宫遗址，山上能俯瞰广场。"], ["花多久", "斗兽场约 1 小时，广场加帕拉蒂尼 2–3 小时。"], ["要注意", "免费日不能预约，8 点前到售票处排队。地下结构和顶层不开放给免费票。"], ["排不上", "先逛古罗马广场和帕拉蒂尼山；想稳妥，另买下面那张付费票做备选。"]] },
      { id: "colosseo-paid", name: "斗兽场付费时段票（备选）", pp: 20, off: true, v: "看情况", why: "怕免费日排不上就买一张，官网 ticketing.colosseo.it，不可退", more: [["怎么用", "买 12/8 上午或别的时段，免费日顺利进去了这张就浪费，所以只在特别想稳妥时买。"]] },
      { id: "pantheon", name: "万神殿（12/6 免费日）", pp: 0, v: "值", why: "两千年的穹顶，首个周日免费", more: [["看什么", "两千年前的混凝土穹顶，直径 43 米，顶上 9 米的圆洞是唯一光源；拉斐尔葬在这里。"], ["花多久", "20–30 分钟，门外广场晚上也很好看。"]] },
      { id: "vatican", name: "梵蒂冈博物馆（仅 Yifan，已订）", pp: 15, total: 15, v: "看兴趣", why: "西斯廷礼拜堂和拉斐尔画室；只看建筑的话，圣彼得大教堂免费", more: [["看什么", "西斯廷礼拜堂（米开朗基罗的天顶画和《最后的审判》）、拉斐尔画室（《雅典学院》）、拉奥孔群像、地图画廊、螺旋楼梯。"], ["花多久", "至少 2.5–3 小时。路线单向，从入口走到西斯廷要 1 小时以上。"], ["值不值", "对文艺复兴、宗教或美术有一点兴趣就值，西斯廷没有替代品。只想看壮观的建筑，免费的圣彼得大教堂就够了，再花约 10–17€ 登穹顶看全城。"], ["要注意", "官网 20€ + 5€ 预约费，实名，不可退。25 岁以下学生带在读证明 10€ + 5€，不限国籍。12/8 闭馆，只能 12/7 去。"]] },
      { id: "borghese", name: "博尔盖塞美术馆（这次不去）", pp: 18, off: true, v: "可省", why: "贝尼尼的雕塑，限流 2 小时看得很从容；12/8 正好顺路去西班牙广场", more: [["看什么", "贝尼尼的《阿波罗与达芙妮》《劫掠普洛塞庇娜》，卡诺瓦的《保琳娜》，还有多幅卡拉瓦乔。"], ["花多久", "每场限 2 小时，人数限制。"], ["要注意", "必须提前预约时段，名额少。"], ["不买票", "外面的博尔盖塞公园免费，走到平乔露台能看人民广场。"]] },
      { id: "angelo", name: "圣天使堡内部", pp: 16, off: true, v: "可省", why: "外观和桥免费；登顶能看圣彼得和台伯河", more: [["看什么", "从哈德良陵墓到教宗城堡的几层结构，顶层露台看圣彼得大教堂。"], ["不买票", "桥上和对岸看外观，日落时最好看。"]] },
      { id: "sansevero", name: "圣塞维罗礼拜堂", pp: 12, v: "值", why: "《蒙纱的基督》，半小时看完", more: [["看什么", "《蒙纱的基督》，大理石雕出的薄纱像真的一样；还有《解脱》和地下室两具 18 世纪的人体血管标本。"], ["花多久", "30–45 分钟。"], ["要注意", "按时段预约，周二闭馆，里面不能拍照。"]] },
      { id: "santelmo", name: "圣艾尔莫城堡", pp: 5, v: "可省", why: "门口的 Largo San Martino 观景台免费，景色差不多（票价为估）", more: [["看什么", "沃梅罗山顶的星形城堡，城墙上 360° 看那不勒斯湾、维苏威火山和老城的 Spaccanapoli 直街。"], ["不买票", "城堡下面的 Largo San Martino 观景台免费，日落时景色接近。周二闭馆。"]] },
      { id: "pompei", name: "庞贝古城", pp: 20, v: "必去", why: "去那不勒斯的主要理由，没有替代", more: [["看什么", "公元 79 年被维苏威火山灰掩埋的整座罗马城：石板街、面包房、浴场、带壁画的别墅、遇难者石膏像、圆形剧场。"], ["花多久", "至少 3–4 小时，遗址很大，穿好走的鞋。"], ["要注意", "官网实名预约。冬季开放时间较短，上午早点到。"]] },
      { id: "ercolano", name: "赫库兰尼姆", pp: 16, off: true, v: "看兴趣", why: "比庞贝小、保存更完整，12/10 下午顺路（票价为估）", more: [["看什么", "两层的房子、木梁、门窗和保存完好的壁画、马赛克，还有古代海滩上的船屋。"], ["花多久", "约 2 小时。"], ["要注意", "上午看完庞贝已经走很多路了，看体力决定。"]] },
      { id: "trevi", name: "特雷维喷泉（池边）", pp: 2, off: true, v: "可省", why: "只收卡；22:00 后免费，广场上远看也免费", more: [["怎么回事","2026 年 2 月起，游客下到水池边要买 2€ 的票，9:00–22:00 收费（周一、周五 11:30 开始）。广场上远看不收钱。"],["建议","12/6 晚上 22 点以后去，人少还免费。"]] }
    ],
    free: [
      ["罗马", "12/6 首个周日：斗兽场、古罗马广场、万神殿；圣彼得大教堂；人民圣母堂、圣王路易堂（卡拉瓦乔）；圣彼得锁链堂（米开朗基罗《摩西》）；卡比托利欧广场后面的平台；阿文提诺山钥匙孔"],
      ["那不勒斯", "Largo San Martino 观景台；蛋堡；主教座堂、新耶稣教堂；托莱多地铁站（一张地铁票）；西班牙区马拉多纳壁画"]
    ],
    studentNote: "以上按全价计。梵蒂冈：25 岁以下带学生证可买学生票 10€ + 5€ 预约费，不限国籍。圣塞维罗：18–26 岁（含 26 岁）8€。博尔盖塞：16€ + 2€ 预约费，18–25 岁优惠只给欧盟公民；最后一场（17:45）11€ + 2€。斗兽场、庞贝、万神殿的青年优惠只给欧盟公民。"
  },

  /* ---------- JoJo 彩蛋 ---------- */
  jojo: {
    intro: "第五部《黄金之风》以那不勒斯为主舞台，结尾在罗马。下面这些点大多就在行程路线上，顺路打卡即可。",
    xhs: "jojo那不勒斯圣地巡礼 攻略如下 p1蛋堡（Castel dell'... https://xhslink.cn/o/YMqoh4p8me 把这段复制下来，打开【小红书】就能看到精彩笔记。",
    spots: [
      { name: "那不勒斯机场（Capodichino）", where: "我们不经过", scene: "第 1 话，康一和乔鲁诺初次见面" },
      { name: "斗兽场", where: "12/6 上午", scene: "最终决战" },
      { name: "圣天使桥", where: "12/7 傍晚", scene: "罗马篇出现的场景" },
      { name: "那不勒斯中央车站", where: "12/9 到达时", scene: "动画中出现的车站" },
      { name: "中央缆车 Augusteo 站", where: "12/9 下午上山时", scene: "动画中出现的缆车场景" },
      { name: "Vico Pallonetto Santa Chiara 8", where: "Santa Chiara 教堂附近的小巷，12/9 老城路线顺路", scene: "动画里暗杀组据点的地址" },
      { name: "Piazza Giovanni Bovio", where: "地铁 Università 站出口，老城走去港口的路上", scene: "动画中出现的广场" },
      { name: "庞贝古城", where: "12/10 上午", scene: "镜中人 Illuso 一战" },
      { name: "卡普里岛", where: "12/11 如果选卡普里（从索伦托坐船）", scene: "众人坐船去取波尔波的遗产" },
      { name: "那不勒斯港 / 新堡", where: "12/12 上午", scene: "众人坐船出发去卡普里岛" },
      { name: "蛋堡", where: "12/12 上午", scene: "小红书笔记里的 P1" }
    ],
    more: "https://joyce630.github.io/BizarreTourtoItaly/BizarreTourtoItaly_Naples.html",
    tips: [
      "第五部动画大量取景自真实街景，出发前把对应集数截图存到手机，到现场对着角度拍最有意思。",
      "庞贝是第 12–13 话镜中人一战的舞台，遗址里的石板街和柱廊很好认。",
      "12/11 选卡普里的话，就能把“坐船去卡普里”这段完整走一遍：Molo Beverello 码头出发。",
      "动画里暗杀组据点的门牌 Vico Pallonetto Santa Chiara 8 是真实地址，是条住宅小巷，拍照时安静一点，别打扰住户。"
    ],
    links: [
      ["B 站", "JOJO 的圣地巡礼｜我来意大利只办一件事", "https://www.bilibili.com/video/BV1caLr64ExK/"],
      ["B 站", "我来那不勒斯只做一件事 JOJO 圣地巡礼！", "https://www.bilibili.com/video/BV1g9u4zeELd/"],
      ["B 站", "【JOJO】硬核 jo 厨的黄金之风圣地巡礼·那不勒斯", "https://www.bilibili.com/video/BV1EJ411W7m5/"],
      ["B 站", "【JOJO】教你如何在那不勒斯解锁黄金之风", "https://www.bilibili.com/video/BV1q6N1znENo/"],
      ["B 站", "黄金之风意大利实拍：那不勒斯 × 庞贝 × 罗马 × 卡普里", "https://www.bilibili.com/video/BV1fG1dY3E1s/"],
      ["YouTube", "Jojo Golden Wind Ep. 12–13 Pompeii IRL", "https://www.youtube.com/watch?v=L1uA50kbtzU"],
      ["YouTube", "Real Places in Jojo's Bizarre Adventure", "https://www.youtube.com/watch?v=HxQZ1yppfVY"],
      ["JoJo Wiki", "第五部场景地点（含动画里的真实地址）", "https://jojowiki.com/Minor_Locations/Part_5"],
      ["小红书", "搜索：jojo 那不勒斯 圣地巡礼（需要登录）", "https://www.xiaohongshu.com/search_result?keyword=jojo%20%E9%82%A3%E4%B8%8D%E5%8B%92%E6%96%AF%20%E5%9C%A3%E5%9C%B0%E5%B7%A1%E7%A4%BC"]
    ]
  }
};
