/* 旅行数据：改行程、换旅馆、加待办，只需要改这个文件。
   价格均为 2026-11-20 搜索时看到的参考价，以预订页面为准。 */

window.TRIP = {
  title: "罗马与那不勒斯",
  range: "2026 年 12 月 12–17 日",
  people: "3 人",
  updated: "2026-11-20",

  /* ---------- 待预订 / 待决定 ---------- */
  todos: [
    { id: "flight", type: "decide", cat: "交通", text: "选定往返航班并订票", due: "尽快，廉航越晚越贵",
      note: "推荐 12/12 12:40 BER→FCO + 12/17 19:15 FCO→BER（约 102€，基础票只含座位下小包）。详见「交通」。" },
    { id: "bag", type: "decide", cat: "交通", text: "决定是否加购登机箱", due: "订机票时",
      note: "Ryanair 基础票只含 40×30×20 cm 小包；登机箱单程一般 20–40€，三人可共用一个。" },
    { id: "h-rome1", type: "decide", cat: "住宿", text: "罗马 12/12–14 住宿（2 晚）", due: "尽快", anchor: "stay-rome1" },
    { id: "h-naples", type: "decide", cat: "住宿", text: "那不勒斯 12/14–16 住宿（2 晚）", due: "尽快", anchor: "stay-naples" },
    { id: "h-rome2", type: "decide", cat: "住宿", text: "罗马 12/16–17 住宿（1 晚）", due: "尽快", anchor: "stay-rome2" },
    { id: "train1", type: "book", cat: "交通", text: "高铁 罗马 → 那不勒斯（12/14 早上）", due: "提前 2–3 周",
      link: "https://www.trenitalia.com", note: "先注册免费的 CartaFRECCIA，对比 Young、Insieme 和 Super Economy 几种价格，再比 Italo。步骤见「省钱」。" },
    { id: "train2", type: "book", cat: "交通", text: "高铁 那不勒斯 → 罗马（12/16 早上）", due: "提前 2–3 周",
      link: "https://www.italotreno.com" },
    { id: "colosseo", type: "book", cat: "门票", text: "斗兽场 + 古罗马广场 + 帕拉蒂尼山（12/13 上午）", due: "提前 1–2 周",
      link: "https://ticketing.colosseo.it", note: "只认官网，时段票，常常提前售罄。" },
    { id: "sansevero", type: "book", cat: "门票", text: "圣塞维罗礼拜堂（12/14 周一）", due: "官网提前 60 天开售",
      link: "https://www.museosansevero.it", note: "周二闭馆；票不可退不可改。出发前 2 天会再放一批票。" },
    { id: "pompei", type: "book", cat: "门票", text: "庞贝古城实名时段票（12/15 周二）", due: "看完天气预报再买",
      link: "https://www.ticketone.it/artist/scavi-pompei/", note: "门票实名，入口可能查证件，带护照。" },
    { id: "vatican", type: "book", cat: "门票", text: "梵蒂冈博物馆（12/16 下午）", due: "提前 2–3 周",
      link: "https://tickets.museivaticani.va" },
    { id: "borghese", type: "book", cat: "门票", text: "博尔盖塞美术馆（12/17 上午，可选）", due: "提前 1–2 周",
      link: "https://www.galleriaborghese.it", note: "必须预约时段，不想去就删掉这一项。" },
    { id: "santelmo", type: "decide", cat: "门票", text: "圣艾尔莫城堡：现场买票即可", due: "无需提前",
      note: "周一开放；也可在 Musei Italiani 官方 App 上买。" }
  ],

  /* ---------- 住宿候选 ----------
     min：最便宜的价格（多为不可退），flex：可免费取消的价格，都是该段的三人总价。
     tax：城市税，每人每晚。价格来自你的 Booking / Agoda 截图或链接，2026-11-20/21。 */
  stays: [
    {
      id: "stay-rome1", city: "rome", label: "罗马（第一段）", nights: "12/12–12/14，2 晚",
      why: "这两天去特雷维、万神殿、纳沃纳和斗兽场；12/14 早上从 Termini 坐高铁去那不勒斯。",
      options: [
        { id: "camplus", name: "Camplus Guest Roma", src: "Agoda", area: "罗马东，Via del Cottanello 12",
          near: "地铁 B 线 Pietralata 站 260 米", rating: "8.5", ratingN: "93", loc: "8.4",
          min: 164, minNote: "含早餐，不可退", flex: 182, flexNote: "含早餐，12/4 前免费取消；不含早餐 184€ 可拖到 12/8 取消",
          bed: "1 双 + 1 单，或 3 张单人床", beds3: true, bath: "独立", breakfast: "含",
          checkin: "24 小时前台", tax: 6, taxiFCO: 80,
          pros: ["这几家里最便宜，还含早餐", "可以选 3 张单人床", "地铁 B 线直达斗兽场（约 15 分钟）和 Termini（约 10 分钟），12/14 赶高铁方便", "24 小时前台，房间 25 m²", "离 Roma Tiburtina 只有 3 站，部分去那不勒斯的高铁从这里发车"],
          cons: ["离老城远，去特雷维、万神殿要先坐地铁再走", "评价数少（93 条）", "Casa per Ferie 是度假屋性质，设施比较基础", "地铁平日 23:30 左右停运，晚上从老城回来要掐时间"],
          link: "https://www.agoda.com/zh-cn/camplus-guest-roma-casa-per-ferie/hotel/rome-it.html?adults=3&rooms=1&checkIn=2026-12-12&los=2&currencyCode=EUR" },
        { id: "funny", name: "Funny Holiday", src: "Booking", area: "Termini 东北，Via Varese 31",
          near: "Termini 步行 5–7 分钟", rating: "7–8", ratingN: "", loc: "",
          min: 194, minNote: "不可退（共用卫浴版 176€）", flex: null, flexNote: "",
          bed: "3 张单人床", beds3: true, bath: "独立", breakfast: "无",
          checkin: "14:00–23:00 / 10:00", tax: 6,
          pros: ["机场快线、高铁都在 Termini，最方便", "3 张单人床"],
          cons: ["只有不可退的价格", "评价分化", "Termini 周边晚上治安一般"],
          link: "https://www.booking.com/hotel/it/funny-holiday.html?checkin=2026-12-12&checkout=2026-12-14&group_adults=3&no_rooms=1&group_children=0" },
        { id: "sanpietro", name: "Holiday a San Pietro", src: "Booking", area: "梵蒂冈西南，Via Cardinal Agliardi 15",
          near: "Roma San Pietro 火车站 5 分钟", rating: "8.2–8.8", ratingN: "约 700", loc: "",
          min: 202, minNote: "链接里的搜索价", flex: null, flexNote: "有可免费取消的房价",
          bed: "以页面为准", beds3: null, bath: "独立", breakfast: "含",
          checkin: "12:00–20:00 / 11:00", tax: 6,
          pros: ["含早餐", "评分稳"],
          cons: ["离 Termini 和斗兽场都远", "入住最晚 20:00"],
          link: "https://www.booking.com/hotel/it/holiday-a-san-pietro.html?checkin=2026-12-12&checkout=2026-12-14&group_adults=3&no_rooms=1&group_children=0" },
        { id: "calamatta", name: "Calamatta B&B", src: "Agoda", area: "Prati 区，Via Luigi Calamatta 16",
          near: "Lepanto 地铁站 890 米；步行到圣天使堡约 10 分钟", rating: "9.1", ratingN: "267", loc: "9.9",
          min: 234, minNote: "不可退", flex: 266, flexNote: "12/9 前免费取消，12/7 前付款",
          bed: "1 张特大床 + 1 张单人床", beds3: false, bath: "独立", breakfast: "另付 4€ / 人",
          checkin: "以页面为准", tax: 6,
          pros: ["位置评分 9.9，走路就能到圣天使堡、纳沃纳、万神殿", "评分高，房间有小厨房", "早餐只要 4€"],
          cons: ["两个人要合睡一张大床", "离 Termini 远，12/14 早上赶高铁要先坐地铁 A 线", "比 Camplus 贵约 70€"],
          link: "https://www.agoda.com/zh-cn/relais-calamatta/hotel/rome-it.html?adults=3&rooms=1&checkIn=2026-12-12&los=2&currencyCode=EUR" },
        { id: "rometobe", name: "Rometobe", src: "Agoda", area: "梵蒂冈附近（Prati 区）",
          near: "Ottaviano 地铁站 360 米", rating: "9.0", ratingN: "1,504", loc: "9.1",
          min: 244, minNote: "不可退", flex: 268, flexNote: "12/5 前免费取消，到店付款",
          bed: "1 张双人床 + 1 张单人床", beds3: false, bath: "独立", breakfast: "另付 15€ / 人",
          checkin: "12:00–22:00 / 11:00", tax: 6,
          pros: ["评价最多（1,504 条），口碑稳", "离地铁 A 线很近", "可以到店付款"],
          cons: ["两个人要合睡一张床", "最贵", "早餐贵（15€ / 人）"],
          link: "https://www.agoda.com/zh-cn/roman-holidays-guest-house/hotel/rome-it.html?adults=3&rooms=1&checkIn=2026-12-12&los=2&currencyCode=EUR" }
      ],
      verdict: "想省钱选 Camplus：最便宜、含早餐、能要 3 张单人床，地铁 B 线到斗兽场和 Termini 都直达，位置偏一点可以接受。想住得离景点近选 Calamatta，但两个人要合睡一张大床。"
    },
    {
      id: "stay-naples", city: "naples", label: "那不勒斯", nights: "12/14–12/16，2 晚",
      why: "第一天在老城和沃梅罗山上，第二天去庞贝和海边。",
      options: [
        { id: "diazz", name: "Diazz by Dimorra", src: "Booking", area: "托莱多街旁，Via Armando Diaz 8",
          near: "地铁 Toledo / Municipio 步行可到", rating: "9.6", ratingN: "223", loc: "9.9",
          min: 158, minNote: "链接里的搜索价", flex: null, flexNote: "",
          bed: "上下铺（照片），需确认", beds3: true, bath: "需确认", breakfast: "以页面为准",
          checkin: "以页面为准", tax: 5.5,
          pros: ["最便宜", "离海边、平民表决广场、港口近", "新、干净"],
          cons: ["上下铺", "要确认卫生间是不是独立的"],
          link: "https://www.booking.com/hotel/it/diazz.html?checkin=2026-12-14&checkout=2026-12-16&group_adults=3&no_rooms=1&group_children=0" },
        { id: "vesuvianus", name: "Vesuvianus", src: "Agoda", area: "中央车站旁，Via Nazionale 6e",
          near: "中央车站 / Circumvesuviana 约 300 米；到圣塞维罗 1.7 公里", rating: "9.1", ratingN: "18", loc: "9.2",
          min: 128, minNote: "每晚 64€ × 2，含早餐，不可退", flex: 158, flexNote: "每晚 79€ × 2，含早餐，12/11 前免费取消",
          bed: "1 单人床 + 1 特大床 + 1 沙发床", beds3: true, bath: "独立", breakfast: "含",
          checkin: "24 小时前台", tax: 5.5,
          pros: ["最便宜，可免费取消的价格也只要 158€，还含早餐", "三个人各睡一张（单人床、特大床、沙发床）", "下高铁走 5 分钟就到；去庞贝的小火车也在车站里", "24 小时前台，寄存行李方便"],
          cons: ["评价只有 18 条，参考性弱", "车站一带晚上比较乱", "去老城要走 20 分钟或坐 1 站地铁"],
          link: "https://www.agoda.com/zh-cn/vesuvianus/hotel/naples-it.html?adults=3&rooms=1&checkIn=2026-12-14&los=2&currencyCode=EUR" },
        { id: "angolo", name: "L'Angolo sul Mare", src: "Agoda", area: "海边 Santa Lucia 区，Via Chiatamone 63",
          near: "离蛋堡约 700 米，平民表决广场约 1 公里", rating: "9.2", ratingN: "116", loc: "8.0",
          min: 176, minNote: "每晚 88€ × 2", flex: 178, flexNote: "每晚 89€ × 2，12/11 前免费取消",
          bed: "1 张大床 + 1 张单人床", beds3: false, bath: "独立", breakfast: "无",
          checkin: "以页面为准", tax: 5.5,
          pros: ["免费取消只比最低价多 2€", "评分 9.2，清洁和服务都是 10 分", "离海边、蛋堡近，12/15 看日落方便", "有电梯、暖气"],
          cons: ["两个人要合睡一张大床", "离老城和中央车站远一些，12/14 早上去圣塞维罗要坐车", "位置评分只有 8.0"],
          link: "https://www.agoda.com/zh-cn/l-angolo-sul-mare/hotel/naples-it.html?adults=3&rooms=1&checkIn=2026-12-14&los=2&currencyCode=EUR" },
        { id: "alux", name: "Alux38 Quartieri Spagnoli", src: "Agoda", area: "西班牙区，托莱多大街旁",
          near: "Montesanto 站 200 米；斯帕卡那波利街 620 米，圣塞维罗 850 米", rating: "9.7", ratingN: "37", loc: "9.9",
          min: 280, minNote: "每晚 140€ × 2，不可退", flex: 320, flexNote: "每晚 160€ × 2，12/13 前免费取消",
          bed: "1 张特大床 + 1 张沙发床", beds3: false, bath: "2 间浴室", breakfast: "无（有全套厨房）",
          checkin: "24 小时自助入住", tax: 5.5,
          pros: ["整套 50 m² 公寓，两间浴室，有厨房和洗衣机", "位置 9.9：老城、托莱多大街、缆车站都能走过去", "评分 9.7"],
          cons: ["最贵，比 L'Angolo 多约 100€", "两人合睡大床、一人睡沙发床", "评价只有 37 条", "西班牙区巷子窄，晚上注意安全"],
          link: "https://www.agoda.com/zh-cn/luxury-apartment-by-alux38/hotel/naples-it.html?adults=3&rooms=1&checkIn=2026-12-14&los=2&currencyCode=EUR" },
        { id: "rolando", name: "Rolando Domus", src: "Booking", area: "历史中心南缘，Corso Umberto I 34",
          near: "地铁 Università 站旁", rating: "9.6–9.7", ratingN: "约 490", loc: "",
          min: 198, minNote: "链接里的搜索价", flex: null, flexNote: "",
          bed: "以页面为准", beds3: null, bath: "独立", breakfast: "以页面为准",
          checkin: "14:00–23:30 / 10:00", tax: 5.5,
          pros: ["口碑稳", "走到圣塞维罗、老城很近", "有电梯、可寄存行李"],
          cons: ["比 Diazz 贵 40€", "大马路边可能吵"],
          link: "https://www.booking.com/hotel/it/rolando-domus.html?checkin=2026-12-14&checkout=2026-12-16&group_adults=3&no_rooms=1&group_children=0" }
      ],
      verdict: "现在最划算的是 Vesuvianus：可免费取消也只要 158€，含早餐，三个人各睡一张，到车站和去庞贝都最方便；缺点是评价少、车站一带晚上乱。想住在海边选 L'Angolo（178€），想住老城中心选 Alux38（280€）。"
    },
    {
      id: "stay-rome2", city: "rome", label: "罗马（第二段）", nights: "12/16–12/17，1 晚",
      why: "12/16 下午去梵蒂冈，12/17 上午逛博尔盖塞和西班牙台阶，傍晚去机场。",
      options: [
        { id: "anthony", name: "Anthony Guesthouse", src: "Agoda", area: "Castro Pretorio，Via Palestro 30",
          near: "地铁 B 线 Castro Pretorio 步行 3 分钟；走到 Termini 约 8 分钟", rating: "8.8", ratingN: "651", loc: "10",
          min: 68, minNote: "不可退", flex: 74, flexNote: "12/9 前免费取消，12/7 付款",
          bed: "Superior Suite 26㎡：2 张单人床 + 1 张沙发床", beds3: true, bath: "独立", breakfast: "不含",
          checkin: "14:00–20:00 / 10:30", tax: 6,
          pros: ["可退价里最划算的一档", "三个人各睡一张床", "位置评分 10，可以寄存行李", "有厨房"],
          cons: ["只有 3 间房，容易订满", "入住最晚 20:00，退房 10:30"],
          link: "https://www.agoda.com/zh-cn/anthony-guesthouse/hotel/rome-it.html?adults=3&rooms=1&checkIn=2026-12-16&los=1&currencyCode=EUR" },
        { id: "opera", name: "Opera Italian Suite", src: "Agoda", area: "Termini，Via Antonio Rosmini 12（4 楼）",
          near: "Termini 地铁站 290 米；圣母大殿 300 米；斗兽场 1.1 公里", rating: "7.9", ratingN: "835", loc: "9.4",
          min: 68, minNote: "可免费取消", flex: 68, flexNote: "12/15 前免费取消，12/13 付款",
          bed: "经典四人间 30㎡：1 张大床 + 1 张沙发床", beds3: true, bath: "独立", breakfast: "不含",
          checkin: "14:00–23:00 / 11:00", tax: 6,
          pros: ["最便宜，而且能免费取消到 12/15", "房间 30㎡，可以寄存行李", "离 Termini 最近", "入住到 23:00，有公用厨房"],
          cons: ["4 楼没有电梯，要搬行李爬楼", "评分最低（7.9，设施 7.7）", "只有 5 间房的小旅馆", "两人睡大床，一人睡沙发床"],
          link: "https://www.agoda.com/zh-cn/opera-italian-suite/hotel/rome-it.html?adults=3&rooms=1&checkIn=2026-12-16&los=1&currencyCode=EUR" },
        { id: "savoia", name: "Savoia Rooms Roma", src: "Agoda", area: "San Giovanni，Via Ludovico di Savoia 4（3 楼）",
          near: "地铁 A / C 线 San Giovanni 210 米；走到斗兽场约 20 分钟", rating: "8.9", ratingN: "1,044", loc: "8.3",
          min: 70, minNote: "不可退", flex: 80, flexNote: "12/13 前免费取消，12/11 付款",
          bed: "高级三人间：1 张特大床 + 1 张沙发床", beds3: true, bath: "独立", breakfast: "不含",
          checkin: "15:00–19:00 / 10:00", tax: 6,
          pros: ["房间新，清洁 9.3", "地铁 A 线到 Termini 3 站", "可以寄存行李"],
          cons: ["离梵蒂冈和博尔盖塞都远", "入住最晚 19:00，退房 10:00"],
          link: "https://www.agoda.com/zh-cn/savoia-rooms-roma/hotel/rome-it.html?adults=3&rooms=1&checkIn=2026-12-16&los=1&currencyCode=EUR" },
        { id: "cesare", name: "Cesare ai Cavalieri", src: "Agoda", area: "Prati，Viale Giulio Cesare 71",
          near: "步行约 15 分钟到梵蒂冈博物馆；地铁 A 线 Lepanto / Ottaviano 附近", rating: "8.7", ratingN: "3,103", loc: "9.0",
          min: 76, minNote: "不可退，早餐 5€/人另付", flex: 134, flexNote: "12/10 前免费取消",
          bed: "高级房 20㎡：只有 1 张大床", beds3: false, bath: "独立", breakfast: "5€/人",
          checkin: "14:00–20:30 / 11:00", tax: 6,
          pros: ["12/16 下午去梵蒂冈走路就到", "评分高，可以寄存行李"],
          cons: ["三个人挤一张大床", "可取消价贵很多（134€）", "去机场要先坐地铁到 Termini"],
          link: "https://www.agoda.com/zh-cn/cesare-ai-cavalieri/hotel/rome-it.html?adults=3&rooms=1&checkIn=2026-12-16&los=1&currencyCode=EUR" },
        { id: "sanremo", name: "Hotel San Remo", src: "Agoda", area: "Termini，Via Massimo d'Azeglio 36",
          near: "Termini 地铁站 250 米；歌剧院 180 米", rating: "8.6", ratingN: "3,798", loc: "9.1",
          min: 86, minNote: "不可退", flex: 93, flexNote: "12/9 前免费取消，12/7 付款",
          bed: "三人房 23㎡：1 张双人床 + 1 张单人床", beds3: true, bath: "独立", breakfast: "15€/人",
          checkin: "随时 / 11:00", tax: 6,
          pros: ["正规三星酒店，24 小时前台", "退房后寄存行李最省心", "评价数量最多"],
          cons: ["比 Anthony 贵约 20€", "装修偏旧，早餐贵"],
          link: "https://www.agoda.com/zh-cn/hotel-san-remo/hotel/rome-it.html?adults=3&rooms=1&checkIn=2026-12-16&los=1&currencyCode=EUR" },
        { id: "bigbang", name: "Hotel Big Bang", src: "Booking", area: "Termini 车站附近",
          near: "Termini 步行可到", rating: "8.2", ratingN: "1,992", loc: "9.3",
          min: 89, minNote: "黑五价，可能不可退", flex: null, flexNote: "",
          bed: "需确认", beds3: null, bath: "独立", breakfast: "以页面为准",
          checkin: "以页面为准", tax: 4,
          pros: ["去机场方便", "二星酒店，城市税低"],
          cons: ["现在已经不便宜了", "要确认床型"],
          link: "https://www.booking.com/searchresults.html?ss=Hotel+Big+Bang+Roma&checkin=2026-12-16&checkout=2026-12-17&group_adults=3&no_rooms=1" },
        { id: "eleveng", name: "ElevenG", src: "Booking", area: "Flaminio 区，Via Emanuele Gianturco 11",
          near: "地铁 A 线 Lepanto 附近", rating: "9.1", ratingN: "", loc: "",
          min: 99, minNote: "链接里的搜索价", flex: null, flexNote: "",
          bed: "整套公寓，以页面为准", beds3: null, bath: "独立", breakfast: "无",
          checkin: "以页面为准 / 11:00", tax: 6,
          pros: ["最后一天的景点都能走过去", "去梵蒂冈坐地铁 1 站"],
          cons: ["最贵", "公寓可能没前台，要问能否寄存行李"],
          link: "https://www.booking.com/hotel/it/eleveng.html?checkin=2026-12-16&checkout=2026-12-17&group_adults=3&no_rooms=1&group_children=0" }
      ],
      verdict: "首选 Anthony Guesthouse 可取消价 74€：三人各一张床，位置评分 10，能寄存行李，比最便宜的只贵 6€。想把取消期限留到最晚，就订 Opera Italian Suite 68€（12/15 前免费取消），代价是评分只有 7.9，而且在 4 楼没有电梯。要 24 小时前台就选 Hotel San Remo 93€。Cesare 便宜档只有一张大床，不推荐。"
    }
  ],

  /* ---------- 行程 ---------- */
  days: [
    {
      id: "d1", date: "12", dow: "周六", city: "rome", title: "抵达罗马，夜游老城",
      stay: "stay-rome1",
      items: [
        { t: "约 9:00", text: "从德累斯顿出发去柏林 BER 机场（火车约 2.5 小时）" },
        { t: "12:40", text: "BER → FCO，14:50 落地", tag: "decide" },
        { t: "15:30", text: "Leonardo Express 机场快线到 Termini（约 32 分钟，约 14€），入住放行李" },
        { t: "17:00", text: "特雷维喷泉", spot: "trevi", tag: "photo" },
        { t: "18:00", text: "万神殿", spot: "pantheon" },
        { t: "19:00", text: "纳沃纳广场圣诞市集，附近吃晚饭", spot: "navona", tag: "photo" }
      ],
      note: "罗马 12 月大约 16:40 天黑。今晚的几个点都适合夜景，不赶时间。"
    },
    {
      id: "d2", date: "13", dow: "周日", city: "rome", title: "古罗马一日",
      stay: "stay-rome1",
      items: [
        { t: "9:00", text: "斗兽场（时段票）", spot: "colosseo", tag: "book" },
        { t: "10:30", text: "古罗马广场 + 帕拉蒂尼山（同一张票）", spot: "foro" },
        { t: "13:00", text: "午饭：蒙蒂区（Monti）" },
        { t: "14:30", text: "卡比托利欧广场，再到维托里奥纪念堂的露台看全城", spot: "vittoriano", tag: "photo" },
        { t: "16:00", text: "阿文提诺山：橘子花园看日落，再去马耳他骑士团大门的钥匙孔看圣彼得圆顶", spot: "aranci", tag: "photo" },
        { t: "18:30", text: "特拉斯提弗列区散步、吃晚饭", spot: "trastevere" }
      ],
      note: "梵蒂冈博物馆周日不开放（每月最后一个周日除外），所以周日安排古罗马。"
    },
    {
      id: "d3", date: "14", dow: "周一", city: "transit", from: "rome", to: "naples", title: "去那不勒斯：老城、礼拜堂、山顶城堡",
      stay: "stay-naples",
      items: [
        { t: "8:00", text: "Termini → Napoli Centrale 高铁（约 1 小时 10 分钟）", tag: "book", spot: "centrale", jojo: true },
        { t: "9:30", text: "坐地铁 1 号线或步行去旅馆寄存行李" },
        { t: "10:30", text: "圣塞维罗礼拜堂：《蒙纱的基督》", spot: "sansevero", tag: "book" },
        { t: "11:30", text: "Spaccanapoli 老城直街、圣格雷戈里奥街（圣诞马槽街）、主教座堂", spot: "spacca", tag: "photo" },
        { t: "13:00", text: "午饭：Via dei Tribunali 上的披萨或炸披萨" },
        { t: "14:30", text: "坐中央缆车 Funicolare Centrale 上沃梅罗山", spot: "funicolare", jojo: true },
        { t: "15:00", text: "圣艾尔莫城堡，在城墙上等日落（约 16:40）", spot: "santelmo", tag: "photo" },
        { t: "17:30", text: "下山走托莱多大街，看托莱多地铁站、翁贝托一世长廊", spot: "toledo", tag: "photo" },
        { t: "19:30", text: "晚饭" }
      ],
      note: "圣塞维罗礼拜堂、圣艾尔莫城堡、国家考古博物馆周二都不开，所以都放在周一。"
    },
    {
      id: "d4", date: "15", dow: "周二", city: "naples", title: "庞贝，然后海边看日落",
      stay: "stay-naples",
      items: [
        { t: "8:00", text: "Circumvesuviana 小火车，到 Pompei Scavi – Villa dei Misteri 站（约 35–40 分钟）" },
        { t: "9:00", text: "庞贝古城，留 3–4 小时；冬季 15:30 停止入场，17:00 闭园", spot: "pompei", tag: "book", jojo: true },
        { t: "13:30", text: "回那不勒斯，路上吃午饭" },
        { t: "15:00", text: "新堡、港口（JoJo：坐船去卡普里岛的码头）", spot: "nuovo", jojo: true },
        { t: "15:45", text: "平民表决广场、Gambrinus 咖啡馆", spot: "plebiscito" },
        { t: "16:15", text: "蛋堡和海滨步道，看维苏威火山和日落", spot: "ovo", tag: "photo", jojo: true },
        { t: "19:00", text: "晚饭：Chiaia 区或回老城" }
      ],
      note: "如果周二下大雨：庞贝几乎没有遮挡。可以改去卡波迪蒙特博物馆、那不勒斯地下城，庞贝门票这时候还没买。"
    },
    {
      id: "d5", date: "16", dow: "周三", city: "transit", from: "naples", to: "rome", title: "回罗马，梵蒂冈",
      stay: "stay-rome2",
      items: [
        { t: "8:00", text: "Napoli Centrale → Termini 高铁", tag: "book" },
        { t: "9:30", text: "旅馆寄存行李" },
        { t: "11:00", text: "午饭：梵蒂冈附近 Bonci Pizzarium 的罗马切块披萨" },
        { t: "13:00", text: "梵蒂冈博物馆 + 西斯廷礼拜堂", spot: "vaticani", tag: "book" },
        { t: "16:00", text: "圣彼得大教堂（周三上午有教宗接见，下午才开放）", spot: "sanpietro" },
        { t: "17:30", text: "圣天使桥与圣天使堡夜景", spot: "angelo", tag: "photo", jojo: true }
      ],
      note: "梵蒂冈博物馆的营业时间、末次入场时间以官网为准。"
    },
    {
      id: "d6", date: "17", dow: "周四", city: "rome", title: "最后半天，傍晚回柏林",
      items: [
        { t: "8:30", text: "退房，行李寄存在旅馆" },
        { t: "9:00", text: "博尔盖塞美术馆（可选，需预约）", spot: "borghese", tag: "book" },
        { t: "11:30", text: "平乔山露台、西班牙台阶", spot: "pincio", tag: "photo" },
        { t: "13:00", text: "午饭，买伴手礼" },
        { t: "15:30", text: "回旅馆取行李" },
        { t: "16:15", text: "从 Termini 坐机场快线去 FCO，约 17:00 到；申根内航班，提前 1.5 小时到机场就够" },
        { t: "19:15", text: "FCO → BER", tag: "decide" }
      ],
      note: "不去博尔盖塞的话，上午可以补一个前几天没去成的景点。"
    }
  ],

  /* ---------- 景点背景（图片按 wiki 词条自动加载） ---------- */
  spots: {
    trevi: { name: "特雷维喷泉", it: "Fontana di Trevi", wiki: "Trevi_Fountain", city: "rome",
      bg: "1762 年完工的巴洛克喷泉，是古罗马引水渠 Aqua Virgo 的终点。中间的海神俄刻阿诺斯驾着贝壳马车。背对喷泉往水里扔一枚硬币，传说就会再回罗马。",
      photo: "早上 8 点前人最少；晚上灯光下更出片。" },
    pantheon: { name: "万神殿", it: "Pantheon", wiki: "Pantheon,_Rome", city: "rome",
      bg: "约公元 125 年由哈德良皇帝重建，是保存最完整的古罗马建筑之一。穹顶直径 43 米，到今天仍是世界上最大的无钢筋混凝土穹顶。顶部的圆孔直通天空，下雨时雨会直接落进殿里。拉斐尔葬在这里。",
      photo: "2026 年 7 月起门票 7€；中午阳光会从圆孔斜射进来。" },
    navona: { name: "纳沃纳广场", it: "Piazza Navona", wiki: "Piazza_Navona", city: "rome",
      bg: "建在图密善竞技场的遗址上，所以是长椭圆形。中央是贝尼尼的四河喷泉。每年 12 月这里有圣诞市集。" },
    colosseo: { name: "斗兽场", it: "Colosseo", wiki: "Colosseum", city: "rome",
      bg: "公元 80 年落成，能容纳约 5 万名观众，用于角斗和猛兽表演。地下有升降机和通道，用来把野兽送上场。JoJo 第五部的最终决战也设在这里。",
      photo: "从对面的 Via Nicola Salvi 坡上可以拍到全景。" },
    foro: { name: "古罗马广场与帕拉蒂尼山", it: "Foro Romano / Palatino", wiki: "Roman_Forum", city: "rome",
      bg: "古罗马的政治、宗教和商业中心，元老院、凯旋门、神庙都在这里。旁边的帕拉蒂尼山是传说中罗慕路斯建城的地方，也是历代皇帝的宫殿所在。" },
    vittoriano: { name: "维托里奥纪念堂", it: "Vittoriano", wiki: "Victor_Emmanuel_II_Monument", city: "rome",
      bg: "纪念意大利统一后第一位国王，罗马人嫌它太白太大，戏称它为“打字机”。顶层露台可以俯瞰古罗马广场和斗兽场，需要买票坐电梯上去。" },
    aranci: { name: "橘子花园与骑士团钥匙孔", it: "Giardino degli Aranci", wiki: "Giardino_degli_Aranci", itwiki: "Parco_Savello", commons: "Giardino degli Aranci Roma", city: "rome",
      bg: "阿文提诺山上的小花园，可以看台伯河和圣彼得圆顶的日落。附近马耳他骑士团大门的钥匙孔里，正好框住远处的圣彼得大教堂圆顶。",
      photo: "钥匙孔前常常排队，手机贴近孔洞拍。" },
    trastevere: { name: "特拉斯提弗列区", it: "Trastevere", wiki: "Trastevere", city: "rome",
      bg: "台伯河西岸的老街区，石板路、爬山虎和小酒馆，是吃晚饭的好地方。" },
    vaticani: { name: "梵蒂冈博物馆与西斯廷礼拜堂", it: "Musei Vaticani", wiki: "Vatican_Museums", city: "rome",
      bg: "历代教宗的收藏，包括拉斐尔画室。最后一站是西斯廷礼拜堂，有米开朗基罗的天顶画《创世纪》和祭坛墙上的《最后的审判》。礼拜堂里禁止拍照。",
      photo: "出口的布拉曼特螺旋楼梯很出片。" },
    sanpietro: { name: "圣彼得大教堂", it: "Basilica di San Pietro", wiki: "St._Peter's_Basilica", city: "rome",
      bg: "天主教最重要的教堂，圆顶由米开朗基罗设计。进门右手边是他 24 岁时的作品《圣殇》。可以付费登顶。" },
    angelo: { name: "圣天使堡与圣天使桥", it: "Castel Sant'Angelo", wiki: "Castel_Sant'Angelo", city: "rome",
      bg: "原本是哈德良皇帝的陵墓，后来改成教宗的城堡和避难所。桥上有十尊贝尼尼设计的天使像。",
      photo: "黄昏从对岸拍城堡和桥，灯光亮起时最好。" },
    borghese: { name: "博尔盖塞美术馆", it: "Galleria Borghese", wiki: "Galleria_Borghese", city: "rome",
      bg: "贝尼尼的《阿波罗与达芙妮》《劫掠普洛塞庇娜》都在这里，大理石雕出了皮肤被按压的质感。另有卡拉瓦乔的多幅画作。每个时段限流，必须预约。" },
    pincio: { name: "平乔山与西班牙台阶", it: "Pincio / Scalinata di Trinità dei Monti", wiki: "Spanish_Steps", city: "rome",
      bg: "西班牙台阶共 135 级，现在禁止在台阶上坐着。旁边的平乔山露台可以俯瞰人民广场和远处的圣彼得圆顶。" },
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
    nuovo: { name: "新堡", it: "Castel Nuovo / Maschio Angioino", wiki: "Castel_Nuovo", city: "naples",
      bg: "13 世纪安茹王朝建造，入口是文艺复兴风格的白色凯旋门。对面就是去卡普里岛的 Molo Beverello 码头。" },
    plebiscito: { name: "平民表决广场", it: "Piazza del Plebiscito", wiki: "Piazza_del_Plebiscito", city: "naples",
      bg: "那不勒斯最大的广场，一边是王宫，一边是仿万神殿的圣方济各教堂。旁边的 Gambrinus 是 1860 年开业的老咖啡馆。" },
    ovo: { name: "蛋堡与海滨步道", it: "Castel dell'Ovo", wiki: "Castel_dell'Ovo", city: "naples",
      bg: "那不勒斯最古老的城堡，建在海中的小岛上。传说诗人维吉尔在地基里藏了一颗蛋，蛋碎了城市就会遭难。可免费进入；城墙上能看到海湾对面的维苏威火山。",
      photo: "日落时从 Via Partenope 拍城堡剪影。" }
  },


  /* ---------- 预算（改价格只改这里）----------
     real: true  = 来自你的搜索截图、预订页或官方票价
     price 单位：pp = 每人, total = 三人合计, car = 每车（最多 4 人） */
  /* ---------- 景点补充：门票、停留时间、实用提示 ---------- */
  spotInfo: {
    trevi: { fee: "广场免费；下到水池边 2€（只收卡，22:00 后免费）", time: "15 分钟", tip: "在广场上远看不用票。想下到池边又不想花钱，晚上 22 点以后再来，人也少。" },
    pantheon: { fee: "7€", time: "20–30 分钟", tip: "周末和节假日建议先在官网预约；门外的圆柱广场晚上也很好看。" },
    navona: { fee: "免费", time: "30 分钟", tip: "12 月有圣诞市集。广场边上的餐厅偏贵，吃饭往西边小巷走。" },
    colosseo: { fee: "和古罗马广场同一张票", time: "约 1 小时", tip: "按预约时段入场，提前 15 分钟到安检，不能带大包。冬季 16:30 左右关门。" },
    foro: { fee: "和斗兽场同一张票", time: "2–3 小时", tip: "遗址里几乎没有遮挡，下雨天带伞。先上帕拉蒂诺山再下到广场，坡少一点。" },
    vittoriano: { fee: "台阶免费；顶层电梯约 10–15€", time: "20 分钟", tip: "不想花钱的话，旁边卡比托利欧山市政厅背后的平台也能俯瞰古罗马广场，免费。" },
    aranci: { fee: "免费", time: "30–45 分钟", tip: "日落前 30 分钟到。钥匙孔在 Piazza dei Cavalieri di Malta，从花园走 5 分钟。" },
    trastevere: { fee: "免费", time: "一个晚上", tip: "19:30 以后才热闹。Santa Maria in Trastevere 教堂有 12 世纪的金色马赛克，免费进。" },
    vaticani: { fee: "见预算里的门票", time: "2.5–3 小时", tip: "官网实名预约，不可退。要遮肩过膝。周日闭馆（每月最后一个周日除外）。" },
    sanpietro: { fee: "免费；登穹顶约 10–17€", time: "1 小时", tip: "安检队伍下午最长，早上开门时最短。周三上午有教宗公开接见，广场可能部分封闭，我们下午去正好错开。" },
    angelo: { fee: "看外观免费；城堡内部约 16€", time: "外观 20 分钟", tip: "从对岸走过圣天使桥，黄昏回头拍城堡。" },
    borghese: { fee: "见预算里的门票", time: "每场限 2 小时", tip: "必须预约时段，提前 30 分钟到取票、寄包。外面的公园免费。" },
    pincio: { fee: "免费", time: "1 小时", tip: "西班牙台阶上不能坐，会被罚款。从台阶顶走到平乔露台约 10 分钟，看日落。" },
    centrale: { fee: "—", time: "—", tip: "车站和门口的加里波第广场人多杂乱，看好包，不理会主动帮拿行李、帮叫车的人。" },
    sansevero: { fee: "见预算里的门票", time: "30–45 分钟", tip: "周二闭馆，里面不能拍照。时段常提前订满，早点订。" },
    spacca: { fee: "免费", time: "1–2 小时", tip: "12 月是圣格雷戈里奥街一年里最挤的时候（圣诞马槽季），注意包。旁边的 Santa Chiara 修道院回廊有彩色瓷砖，单独收费。" },
    funicolare: { fee: "一张公交票，约 1.5–1.8€", time: "5 分钟", tip: "Augusteo 站在托莱多大街上，坐 Centrale 线到终点 Fuga，再走 10 分钟到城堡。" },
    santelmo: { fee: "见预算里的门票", time: "1 小时", tip: "周二闭馆。日落前 1 小时到；城堡下面的 Largo San Martino 观景台免费，景色差不多。" },
    toledo: { fee: "一张地铁票", time: "30 分钟", tip: "托莱多地铁站的蓝色“海洋”穹顶在下层通道，买票进站就能看。" },
    pompei: { fee: "见预算里的门票", time: "3–4 小时", tip: "从 Napoli Garibaldi 坐 Circumvesuviana 到 Pompei Scavi，约 40 分钟，车上扒手多。冬季下午关门早，上午去。" },
    nuovo: { fee: "外观免费；内部约 6€", time: "20 分钟", tip: "门口的白色凯旋门浮雕值得看，内部可以跳过。" },
    plebiscito: { fee: "免费", time: "20 分钟", tip: "对面的翁贝托一世拱廊有玻璃穹顶，免费。老字号 Gambrinus 咖啡馆站着喝更便宜。" },
    ovo: { fee: "免费", time: "1 小时", tip: "城堡平台免费开放（以现场为准）。日落时沿海滨步道往维苏威方向拍。" }
  },

  /* ---------- 出行须知 ---------- */
  apps: [
    ["Trenitalia", "意大利国铁：高铁、区域车、Leonardo Express、FL1 都在这里买，CartaFRECCIA 会员也在这里注册。", "https://www.trenitalia.com"],
    ["Italo", "另一家高铁公司，和 Trenitalia 比价用，学生和早鸟票经常更便宜。", "https://www.italotreno.com"],
    ["Ryanair", "值机、非欧盟证件验证、电子登机牌。", "https://www.ryanair.com"],
    ["Google Maps", "罗马和那不勒斯的公交、地铁路线都准，出发前下载两座城市的离线地图。", "https://maps.google.com"],
    ["Unico Campania", "那不勒斯的公交、地铁、缆车电子票。地铁 1 号线和中央缆车也可以直接刷银行卡进站。", "https://www.unicocampania.it"],
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
    "座位下小包不超过 40×20×25 cm",
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
      ["温度：", "12 月中旬罗马白天约 12–14°C，夜里 3–6°C；那不勒斯略暖，但海边风大。"],
      ["下雨：", "这个季节雨不少，多是阵雨。带折叠伞，石板路下雨很滑，穿防滑的鞋。"],
      ["天黑早：", "日落大约 16:40。古罗马广场、庞贝这类露天景点安排在上午和中午。"],
      ["怎么穿：", "保暖内衣 + 毛衣或抓绒 + 防风外套。室内暖气足，进博物馆能脱。"],
      ["临时调整：", "出发前 3 天看天气，哪天下大雨，就把博物馆、教堂换到那天。"]
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
    plans: {
      "12-17": { label: "12–17 日，5 晚", romeNights: 3, naplesNights: 2, days: 6 },
      "12-16": { label: "12–16 日，4 晚", romeNights: 2, naplesNights: 2, days: 5 }
    },
    groups: [
      { id: "flight", label: "机票", sub: "柏林 BER ⇄ 罗马 FCO，只含座位下小包", options: [
        /* d1 / dl：第一天、最后一天在城里能玩的小时数（按 9:00–21:00 算，每天 12 小时） */
        { id: "f1", plan: "12-17", name: "12:40 去，19:15 回", note: "推荐", pp: 102, d1: 5, dl: 7,
          d1Text: "14:50 落地，约 16:00 到市区", dlText: "16:15 前出发去机场" },
        { id: "f2", plan: "12-17", name: "22:20 去，19:15 回", note: "含落地打车", pp: 72, nightTaxi: 55, d1: 0, dl: 7,
          d1Text: "00:30 落地，快线已停，只能打车", dlText: "16:15 前出发去机场" },
        { id: "f3", plan: "12-17", name: "22:20 去，09:05 回", note: "含落地打车", pp: 66, nightTaxi: 55, d1: 0, dl: 0,
          d1Text: "00:30 落地，快线已停，只能打车", dlText: "约 7:00 就要出发去机场" },
        { id: "f4", plan: "12-16", name: "12:40 去，14:55 回", note: "推荐", pp: 102, d1: 5, dl: 2,
          d1Text: "14:50 落地，约 16:00 到市区", dlText: "早上从那不勒斯回罗马，约 12:00 去机场" },
        { id: "f5", plan: "12-16", name: "22:20 去，14:55 回", note: "含落地打车", pp: 72, nightTaxi: 55, d1: 0, dl: 2,
          d1Text: "00:30 落地，快线已停，只能打车", dlText: "早上从那不勒斯回罗马，约 12:00 去机场" } ] },
      { id: "stay-rome1", label: "罗马住宿（前两晚）", sub: "12/12–14，2 晚", stay: true, nights: 2 },
      { id: "stay-naples", label: "那不勒斯住宿", sub: "12/14–16，2 晚", stay: true, nights: 2 },
      { id: "stay-rome2", plan: "12-17", label: "罗马住宿（最后一晚）", sub: "12/16–17，1 晚", stay: true, nights: 1 },
      { id: "airport", label: "机场 ⇄ 罗马市区", sub: "到达和离开各一次", options: [
        { id: "fl1", name: "FL1 区域车 + 地铁", note: "机场 ⇄ Tiburtina 约 48 分钟，8€ / 人 / 程", pp: 16 },
        { id: "leonardo", name: "Leonardo Express", note: "机场 ⇄ Termini 直达 32 分钟，14€ / 人 / 程", pp: 28 },
        { id: "taxi", name: "罗马市出租车", note: "城墙内固定 55€ / 车", car: 110 } ] },
      { id: "train", label: "罗马 ⇄ 那不勒斯", sub: "往返", options: [
        { id: "hs", name: "高铁最低价", note: "约 14€ / 程，越早订越可能买到", pp: 28 },
        { id: "hs2", name: "高铁常见价", note: "约 25€ / 程", pp: 50 },
        { id: "reg", name: "区域慢车", note: "约 13€ / 程，2–3 小时", pp: 26 } ] },
      { id: "fun", label: "吃喝购物", sub: "可选，估算，每人每天", estimate: true, options: [
        { id: "none", name: "不计入", note: "只看交通住宿门票", ppDay: 0 },
        { id: "low", name: "省着花", note: "超市早餐 + 披萨", ppDay: 30 },
        { id: "mid", name: "正常", note: "每天一顿正餐", ppDay: 45 },
        { id: "high", name: "宽松", note: "多吃多买", ppDay: 65 } ] }
    ],
    /* 不用选的固定开销（每人） */
    fixed: [
      { name: "德累斯顿 ⇄ 柏林 BER", pp: 0, note: "学期票坐区域车" },
      { name: "罗马市内交通", pp: 12, note: "BIT 1.5€ / 次，约 8 次；刷同一张卡每天封顶 8.5€" },
      { name: "那不勒斯市内交通 + 去庞贝", pp: 14, note: "地铁 / 缆车约 1.5–1.8€ / 次；Circumvesuviana 3.2€ / 程" }
    ],
    tickets: [
      { id: "colosseo", name: "斗兽场 + 古罗马广场", pp: 20, v: "必去", why: "一票三处，古罗马核心，能逛半天", more: [["看什么", "斗兽场内部看台；古罗马广场是古罗马城的政治和宗教中心遗址；帕拉蒂诺山是皇宫遗址，山上能俯瞰广场。地下结构要另买 Full Experience 票。"], ["花多久", "斗兽场约 1 小时，广场加帕拉蒂诺 2–3 小时。"], ["要注意", "按时段在官网预约，12 月也会售罄；斗兽场只能进一次。"], ["不买票", "外面绕一圈能看斗兽场外观，广场只能从 Via dei Fori Imperiali 和卡比托利欧山远看。"]] },
      { id: "vatican", name: "梵蒂冈博物馆", pp: 25, v: "看兴趣", why: "西斯廷礼拜堂和拉斐尔画室；只看建筑的话，圣彼得大教堂免费", more: [["看什么", "西斯廷礼拜堂（米开朗基罗的天顶画和《最后的审判》）、拉斐尔画室（《雅典学院》）、拉奥孔群像、地图画廊、螺旋楼梯。"], ["花多久", "至少 2.5–3 小时。路线单向，从入口走到西斯廷要 1 小时以上。"], ["值不值", "对文艺复兴、宗教或美术有一点兴趣就值，西斯廷没有替代品。只想看壮观的建筑，免费的圣彼得大教堂就够了，再花约 10–17€ 登穹顶看全城。"], ["要注意", "官网 20€ + 5€ 预约费，实名，不可退。25 岁以下学生带在读证明 10€ + 5€，不限国籍。选上午第一场或 14 点后人少；西斯廷里不能拍照，要穿过膝、遮肩的衣服。"]] },
      { id: "pompei", name: "庞贝古城", pp: 20, v: "必去", why: "去那不勒斯的主要理由，没有替代", more: [["看什么", "公元 79 年被维苏威火山灰掩埋的整座罗马城：石板街、面包房、浴场、带壁画的别墅、遇难者石膏像、圆形剧场。"], ["花多久", "至少 3–4 小时，遗址很大，穿好走的鞋。"], ["要注意", "官网实名预约。冬季开放时间较短，上午早点到。"], ["不去的话", "那不勒斯国家考古博物馆（MANN）收藏了庞贝出土的壁画和马赛克，但周二闭馆。"]] },
      { id: "sansevero", name: "圣塞维罗礼拜堂", pp: 12, v: "值", why: "《蒙纱的基督》，半小时看完", more: [["看什么", "《蒙纱的基督》，大理石雕出的薄纱像真的一样；还有《解脱》和地下室两具 18 世纪的人体血管标本。"], ["花多久", "30–45 分钟。"], ["要注意", "按时段预约，周二闭馆，里面不能拍照。"]] },
      { id: "trevi", name: "特雷维喷泉（池边）", pp: 2, off: true, v: "可省", why: "只收卡；22:00 后免费，广场上远看也免费", more: [["怎么回事","2026 年 2 月起，游客下到水池边要买 2€ 的票，9:00–22:00 收费（周一、周五 11:30 开始）。广场上远看不收钱。"],["建议","第一晚 22 点以后再去一次，人少还免费。"]] },
      { id: "pantheon", name: "万神殿", pp: 7, v: "值", why: "两千年的穹顶，便宜又顺路", more: [["看什么", "两千年前的混凝土穹顶，直径 43 米，顶上 9 米的圆洞是唯一光源；拉斐尔葬在这里。"], ["花多久", "20–30 分钟，门外广场晚上也很好看。"], ["要注意", "现场排队一般很快，周末和节假日可以先在官网预约。"]] },
      { id: "santelmo", name: "圣艾尔莫城堡", pp: 5, v: "可省", why: "门口的 Largo San Martino 观景台免费，景色差不多（票价为估）", more: [["看什么", "沃梅罗山顶的星形城堡，城墙上 360° 看那不勒斯湾、维苏威火山和老城的 Spaccanapoli 直街。"], ["花多久", "约 1 小时。"], ["不买票", "城堡下面的 Largo San Martino 观景台免费，日落时景色接近。周二闭馆。"]] },
      { id: "borghese", name: "博尔盖塞美术馆", pp: 20, plan: "12-17", v: "可省", why: "贝尼尼雕塑很惊艳，但有梵蒂冈就够了", more: [["看什么", "贝尼尼的《阿波罗与达芙妮》《劫掠普洛塞耳皮娜》，卡诺瓦的《保琳娜》，还有多幅卡拉瓦乔。"], ["花多久", "每场限 2 小时，人数限制，看得很从容。"], ["要注意", "必须提前预约时段，名额少。"], ["不买票", "外面的博尔盖塞公园免费，走到平丘露台能看人民广场和圣彼得大教堂的日落。"]] }
    ],
    free: [
      ["罗马", "圣彼得大教堂；圣王路易堂、人民圣母堂（卡拉瓦乔）；圣彼得锁链堂（米开朗基罗《摩西》）；卡比托利欧广场后面的平台俯瞰古罗马广场；阿文提诺山钥匙孔"],
      ["那不勒斯", "Largo San Martino 观景台；蛋堡；主教座堂、新耶稣教堂；托莱多地铁站（一张地铁票）；西班牙区马拉多纳壁画"]
    ],
    studentNote: "以上按全价计。25 岁及以下带在读证明可买梵蒂冈学生票（15€，不限国籍）；18–26 岁圣塞维罗 8€。斗兽场、庞贝、万神殿的青年优惠只给欧盟公民。"
  },

  /* ---------- JoJo 彩蛋 ---------- */
  jojo: {
    intro: "第五部《黄金之风》以那不勒斯为主舞台，结尾在罗马。下面这些点大多就在行程路线上，顺路打卡即可。",
    xhs: "jojo那不勒斯圣地巡礼 攻略如下 p1蛋堡（Castel dell'... https://xhslink.cn/o/YMqoh4p8me 把这段复制下来，打开【小红书】就能看到精彩笔记。",
    spots: [
      { name: "那不勒斯机场（Capodichino）", where: "我们不经过", scene: "第 1 话，康一和乔鲁诺初次见面" },
      { name: "那不勒斯中央车站", where: "12/14 到达时", scene: "动画中出现的车站" },
      { name: "中央缆车 Augusteo 站", where: "12/14 下午上山时", scene: "动画中出现的缆车场景" },
      { name: "Vico Pallonetto Santa Chiara 8", where: "Santa Chiara 教堂附近的小巷，12/14 老城路线顺路", scene: "动画里暗杀组据点的地址" },
      { name: "Piazza Giovanni Bovio", where: "Rolando Domus 门口", scene: "动画中出现的广场" },
      { name: "那不勒斯港 / 新堡", where: "12/15 下午", scene: "众人坐船出发去卡普里岛" },
      { name: "蛋堡", where: "12/15 日落", scene: "小红书笔记里的 P1" },
      { name: "庞贝古城", where: "12/15 上午", scene: "镜中人 Illuso 一战" },
      { name: "圣天使桥", where: "12/16 晚上", scene: "罗马篇出现的场景" },
      { name: "斗兽场", where: "12/13 上午", scene: "最终决战" }
    ],
    more: "https://joyce630.github.io/BizarreTourtoItaly/BizarreTourtoItaly_Naples.html",
    tips: [
      "第五部动画大量取景自真实街景，出发前把对应集数截图存到手机，到现场对着角度拍最有意思。",
      "庞贝是第 12–13 话镜中人一战的舞台，遗址里的石板街和柱廊很好认。",
      "蛋堡和海滨步道就在 12/15 日落的路线上；新堡附近的港口是众人坐船去卡普里岛的地方。",
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
