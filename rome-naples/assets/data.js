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
      link: "https://www.trenitalia.com", note: "Trenitalia 和 Italo 都比一下，早订单程常见 15–30€。" },
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

  /* ---------- 住宿候选 ---------- */
  stays: [
    {
      id: "stay-rome1", city: "rome", label: "罗马（第一段）", nights: "12/12–12/14，2 晚",
      why: "这两天在古罗马、特雷维、纳沃纳一带活动，12/14 早上要从 Termini 坐高铁。",
      options: [
        {
          id: "funny", name: "Funny Holiday Guest House", area: "Termini 车站东北，Via Varese 31",
          price: "194€（独立卫浴）/ 176€（共用卫浴），2 晚总价",
          priceNote: "两档都显示 Non-refundable（不可退款）",
          rating: "各平台约 7–8 分，评价分化",
          room: "Superior Triple：3 张单人床，16 m²",
          checkin: "入住 14:00–23:00，不接受更晚入住；退房 10:00",
          pros: [
            "走到 Termini 约 5–7 分钟：机场快线、去那不勒斯的高铁都从这里出发",
            "离 Castro Pretorio 地铁站（B 线）约 7 分钟",
            "价格是这几家里最低的",
            "3 张独立单人床，三个人各睡一张"
          ],
          cons: [
            "不可退款，机票没定之前别订",
                        "小型家庭旅馆，前台时间有限；有平台上的个别评价很差",
            "Termini 周边晚上治安一般"
          ],
          link: "https://www.booking.com/hotel/it/funny-holiday.html?checkin=2026-12-12&checkout=2026-12-14&group_adults=3&no_rooms=1&group_children=0"
        },
        {
          id: "sanpietro", name: "Holiday a San Pietro", area: "梵蒂冈西南，Via Cardinal Agliardi 15",
          price: "约 202€，2 晚总价",
          priceNote: "数字来自你链接里记录的搜索价，以页面为准；有可免费取消的房价",
          rating: "约 8.2–8.8 分，评价数较多",
          room: "三人间（房型以页面为准）",
          checkin: "入住 12:00–20:00；退房 11:00",
          pros: [
            "含早餐（8:30–11:00）",
            "步行约 11–15 分钟到圣彼得大教堂，离 Roma San Pietro 火车站约 5 分钟",
            "部分房价可免费取消",
            "评分比 Funny Holiday 更稳"
          ],
          cons: [
            "离 Termini 远：12/14 早上赶高铁要先坐 64 路公交或转车，至少预留 40 分钟",
            "前两天的景点（斗兽场、特雷维）都在城东，每天来回多花时间",
            "入住最晚 20:00",
            "梵蒂冈是 12/16 才去，那时已经不住这里了"
          ],
          link: "https://www.booking.com/hotel/it/holiday-a-san-pietro.html?checkin=2026-12-12&checkout=2026-12-14&group_adults=3&no_rooms=1&group_children=0"
        }
      ],
      verdict: "按行程看，Funny Holiday 的位置更顺，三张单人床也正合适；但它不可退款。等机票定了，再从这两家里选。"
    },
    {
      id: "stay-naples", city: "naples", label: "那不勒斯", nights: "12/14–12/16，2 晚",
      why: "第一天在老城和沃梅罗山上，第二天去庞贝、海边。",
      options: [
        {
          id: "diazz", name: "Diazz by Dimorra", area: "托莱多街旁，Via Armando Diaz 8",
          price: "约 158€，2 晚总价",
          priceNote: "数字来自你链接里记录的搜索价，以页面为准",
          rating: "9.6 分（223 条评价），位置 9.9",
          room: "照片里多是带帘子的上下铺，务必确认订的是独立房间",
          checkin: "以预订页面为准",
          pros: [
            "最便宜",
            "地铁 Toledo / Municipio 站都在步行范围；走到平民表决广场、蛋堡、港口都近",
            "装修新，评价里常提到干净、适合多人"
          ],
          cons: [
            "上下铺，有一个人要睡上铺",
            "要确认卫生间是房间自带的，还是公共的",
            "评价数还不多，是比较新的店"
          ],
          link: "https://www.booking.com/hotel/it/diazz.html?checkin=2026-12-14&checkout=2026-12-16&group_adults=3&no_rooms=1&group_children=0"
        },
        {
          id: "rolando", name: "Rolando Domus", area: "历史中心南缘，Corso Umberto I 34",
          price: "约 198€，2 晚总价",
          priceNote: "数字来自你链接里记录的搜索价，以页面为准",
          rating: "约 9.6–9.7 分（约 490 条评价）",
          room: "以页面为准，确认是 3 张独立的床",
          checkin: "入住 14:00–23:30；退房 10:00",
          pros: [
            "评分高，评价数多，口碑更稳",
            "走到圣塞维罗礼拜堂、Spaccanapoli 老城很近；在 Università 地铁站旁边",
            "有电梯、可寄存行李",
            "就在 JoJo 打卡点 Piazza Giovanni Bovio 旁边"
          ],
          cons: [
            "比 Diazz 贵约 40€（每人约 13€）",
            "Corso Umberto 是大马路，可能有些吵",
            "去海边要走 15 分钟以上"
          ],
          link: "https://www.booking.com/hotel/it/rolando-domus.html?checkin=2026-12-14&checkout=2026-12-16&group_adults=3&no_rooms=1&group_children=0"
        }
      ],
      verdict: "三个朋友住，上下铺问题不大。只要 Diazz 订的是带独立卫浴的私人房间，它更便宜、离海边也更近；想住得更安静、口碑更稳，或者更方便逛老城，就选 Rolando Domus。"
    },
    {
      id: "stay-rome2", city: "rome", label: "罗马（第二段）", nights: "12/16–12/17，1 晚",
      why: "建议住 Termini 车站附近，最好在车站西北侧（共和广场、Via Nazionale、Castro Pretorio 一带）。12/16 早上下高铁就能放行李；去梵蒂冈坐地铁 A 线到 Ottaviano 约 15 分钟；12/17 退房后行李寄存在旅馆，上午逛博尔盖塞和西班牙台阶（离 Termini 2 公里左右），下午回来取行李，出门直接坐机场快线。",
      options: [
        {
          id: "eleveng", name: "ElevenG（整套公寓）", area: "Flaminio 区，Via Emanuele Gianturco 11，近 Lepanto 地铁站（A 线）",
          price: "约 99€，1 晚总价",
          priceNote: "数字来自你链接里记录的搜索价，以页面为准",
          rating: "约 9.1 分，位置评价高",
          room: "整套公寓，独立入口（床型以页面为准）",
          checkin: "退房 11:00；入住方式以页面为准",
          pros: [
            "12/17 上午的平乔山、人民广场、西班牙台阶、博尔盖塞都在步行范围",
            "去梵蒂冈：Lepanto 到 Ottaviano 坐地铁只要 1 站",
            "整套公寓、评分高，三个人住着舒服",
            "退房 11:00，比多数小旅馆晚"
          ],
          cons: [
            "离 Termini 和机场快线远一些：先坐地铁 A 线到 Termini（约 10 分钟）再换快线，全程约 1 小时",
            "公寓通常没有前台：要问清楚 12/16 上午能不能先放行李、12/17 退房后能不能寄存",
            "价格比 Hotel Big Bang 贵约 10€"
          ],
          link: "https://www.booking.com/hotel/it/eleveng.html?checkin=2026-12-16&checkout=2026-12-17&group_adults=3&no_rooms=1&group_children=0"
        },
        {
          id: "bigbang", name: "Hotel Big Bang", area: "Termini 车站附近",
          price: "89€，1 晚（黑五价，原价 132€）",
          priceNote: "截图价格，含税费；城市税一般另付",
          rating: "8.2 分（1,992 条评价），位置 9.3",
          room: "Triple Room with Balcony，床型显示 Multiple bed types",
          checkin: "以页面为准",
          pros: ["评价多、分数稳", "离 Termini 近，最后一天去机场方便", "人均约 30€"],
          cons: ["要确认是 3 张独立的床，不是一张双人床加一张单人床", "黑五价可能不可退款"],
          link: "https://www.booking.com/searchresults.html?ss=Hotel+Big+Bang+Roma&checkin=2026-12-16&checkout=2026-12-17&group_adults=3&no_rooms=1"
        },
        {
          id: "bbhotels", name: "B&B HOTEL Roma（连锁，比价用）", area: "San Lorenzo Termini / Italia Viminale 两家都在 Termini 旁",
          price: "未查价",
          priceNote: "",
          rating: "连锁平价酒店，品质稳定",
          room: "标准三人间：1 张双人床 + 1 张单人床，独立卫浴",
          checkin: "大部分门店 24 小时前台",
          pros: ["连锁品牌，靠谱", "早餐可单独加购"],
          cons: ["标准三人间是 1 张双人床 + 1 张单人床，两个人要合睡一张；预订前问能不能换成 3 张单人床", "通常比独立小旅馆贵一些"],
          link: "https://www.booking.com/searchresults.html?ss=B%26B+HOTEL+Roma&checkin=2026-12-16&checkout=2026-12-17&group_adults=3&no_rooms=1"
        }
      ],
      verdict: "如果 ElevenG 能解决行李寄存，它对最后两天的行程最顺；不行就住 Termini 附近。不推荐住梵蒂冈附近：虽然方便 12/16 下午的行程，但第二天去博尔盖塞和去机场都要绕路。订之前确认退房后能免费寄存行李。也可以和第一段住同一家，只要那家在 Termini 附近。"
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
      photo: "目前收约 5€ 门票；中午阳光会从圆孔斜射进来。" },
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
      photo: "门票约 5€，周二闭馆。下来后在 Largo San Martino 观景台再拍一次。" },
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
    more: "https://joyce630.github.io/BizarreTourtoItaly/BizarreTourtoItaly_Naples.html"
  }
};
