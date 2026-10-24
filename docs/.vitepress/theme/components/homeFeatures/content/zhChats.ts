import type { HomeFeaturesContent } from '../types';

export const zhChats: HomeFeaturesContent['chats'] = {
  kyoto: {
    title: '京都三天怎么玩',
    star: true,
    starred: [3],
    turns: [
      [
        '十一月去京都，三天怎么安排？',
        '十一月正好是红叶季，可以按区域分三天走：\n- 第一天东山：清水寺、二年坂、八坂神社\n- 第二天岚山：竹林小径、天龙寺、小火车\n- 第三天伏见稻荷，下午回市区逛锦市场',
      ],
      [
        '清水寺几点去人少？',
        '开门的 6 点到 7 点之间人最少，晨光打在清水舞台上也最好看。9 点以后旅行团就到了。',
      ],
      [
        '岚山的小火车要提前订吗？',
        '红叶季建议提前一个月在官网订座，靠右侧的座位能看到保津川峡谷。',
      ],
      [
        '住哪个区域交通最方便？',
        '京都站或四条河原町附近。京都站去伏见、岚山都顺路；河原町晚上吃饭逛街更方便。',
      ],
      [
        '推荐几家不用排队的拉面',
        '避开 12 点和 18 点的饭点，大部分店都不用排。河原町附近的本地小店，晚上 9 点后基本随到随吃。',
      ],
    ],
    extra: {
      table: [
        ['天', '上午', '下午'],
        ['第一天', '清水寺', '二年坂、八坂神社'],
        ['第二天', '竹林小径', '天龙寺、小火车'],
        ['第三天', '伏见稻荷', '锦市场'],
      ],
      summary: [
        '红叶季按东山、岚山、伏见分三天走',
        '清水寺早上 6 到 7 点去，小火车提前一个月订',
        '住京都站或河原町，饭点错峰就不用排队',
      ],
      translation:
        'Skip the 12 pm and 6 pm rush and most ramen shops have no line. Around Kawaramachi, small local spots are usually walk-in after 9 pm.',
      todo: [
        '订岚山小火车（提前一个月）',
        '订京都站附近的酒店',
        '查清水寺开门时间',
        '换一张 ICOCA 卡',
      ],
    },
  },
  packing: {
    title: '出发前行李清单',
    turns: [
      [
        '十一月的京都要带厚外套吗？',
        '早晚 8 度左右，白天 15 度上下。带一件薄羽绒或抓绒外套就够，里面穿长袖。',
      ],
      [
        '日本的插头和国内一样吗？',
        '日本是两扁脚的 A 型插头、100V 电压。国内两脚插头能直接用，手机和电脑充电器都兼容。',
      ],
      ['西瓜卡和 ICOCA 哪个好？', '都能在关西用。ICOCA 在关西更常见，可以直接在京都站的售票机买。'],
    ],
    extra: {
      table: [
        ['物品', '要不要带', '备注'],
        ['薄羽绒', '要', '早晚 8 度'],
        ['转换插头', '不用', '两脚插头通用'],
        ['交通卡', '到了再买', 'ICOCA'],
      ],
      summary: ['带薄羽绒或抓绒，里面穿长袖', '插头不用转换，电压 100V', '交通卡到京都站买 ICOCA'],
      translation:
        'Both work in Kansai, but ICOCA is more common there. You can buy one from the ticket machines at Kyoto Station.',
      todo: ['薄羽绒外套', '长袖两件', '充电器和充电宝', '护照和酒店确认单'],
    },
  },
  dinner: {
    title: '冰箱里剩的菜能做什么',
    turns: [
      [
        '冰箱里有鸡蛋、番茄、半颗洋葱，晚饭做什么？',
        '番茄洋葱炒蛋最快，十分钟能上桌：先炒蛋盛出，再炒洋葱和番茄出汁，最后把蛋倒回去翻匀。',
      ],
      ['还想要个汤', '剩下的番茄可以做番茄蛋花汤：番茄炒软加水煮开，淋一个蛋液，出锅前加点盐。'],
      ['没有葱可以吗？', '可以，出锅前撒点黑胡椒或几滴香油，一样能提香。'],
    ],
    extra: {
      table: [
        ['菜', '用料', '时间'],
        ['番茄洋葱炒蛋', '鸡蛋 3 个、番茄 1 个、洋葱半颗', '10 分钟'],
        ['番茄蛋花汤', '番茄 1 个、鸡蛋 1 个', '8 分钟'],
      ],
      summary: ['主菜做番茄洋葱炒蛋', '汤做番茄蛋花汤', '没有葱就用黑胡椒或香油提香'],
      translation:
        'No problem. A pinch of black pepper or a few drops of sesame oil right before serving works just as well.',
      todo: ['煮饭', '炒蛋盛出', '炒番茄洋葱', '煮蛋花汤'],
    },
  },
  week: {
    title: '一周带饭菜单',
    turns: [
      [
        '帮我排一周的带饭菜单，不要太麻烦',
        '周末一次备好三种主菜：卤鸡腿、番茄牛腩、蒜蓉西兰花，分装冷冻。工作日每天拿一盒主菜，配一份新煮的米饭。',
      ],
      [
        '能控制在每天 20 块以内吗？',
        '可以。鸡腿和牛腩买大包装、西兰花买应季的，算下来每份大概 15 块左右。',
      ],
    ],
    extra: {
      table: [
        ['周几', '主菜'],
        ['周一', '卤鸡腿'],
        ['周二', '番茄牛腩'],
        ['周三', '卤鸡腿'],
        ['周四', '番茄牛腩'],
        ['周五', '蒜蓉西兰花配鸡腿'],
      ],
      summary: ['周末一次备好三种主菜，分装冷冻', '工作日只煮米饭', '每份大约 15 块'],
      translation:
        'Yes. Buy chicken legs and brisket in bulk and pick seasonal broccoli, and each portion comes to about 15 yuan.',
      todo: ['买鸡腿 2 斤', '买牛腩 1.5 斤', '买西兰花 3 颗', '准备 10 个饭盒'],
    },
  },
  landlord: {
    title: '跟房东说热水器坏了',
    turns: [
      [
        '热水器坏了，怎么跟房东说比较好？',
        '先说清楚现象和从什么时候开始，再问对方哪天方便安排维修，最后表示自己可以配合时间。',
      ],
      [
        '帮我写一条微信',
        '王姐您好，家里的热水器从昨晚开始打不着火，一直没有热水。想麻烦您看看这两天能不能安排师傅来修一下，我工作日晚上和周末都在家，时间可以配合。谢谢！',
      ],
    ],
    extra: {
      table: [
        ['要说的', '怎么说'],
        ['现象', '从昨晚开始打不着火'],
        ['请求', '安排师傅上门维修'],
        ['配合', '工作日晚上和周末都在'],
      ],
      summary: ['先说现象和开始时间', '再请房东安排维修', '最后说明自己能配合的时间'],
      translation:
        "Hi, the water heater hasn't been able to ignite since last night, so there's no hot water. Could you arrange for someone to fix it in the next couple of days? I'm home on weekday evenings and weekends. Thanks!",
      todo: ['拍一段热水器报错的视频', '发微信给房东', '约好维修时间'],
    },
  },
  run: {
    title: '跑步膝盖疼',
    turns: [
      [
        '最近跑步膝盖外侧疼，还能跑吗？',
        '膝盖外侧疼常和髂胫束紧张有关。建议先停跑三到五天，疼痛消失后从短距离慢跑恢复。如果走路也疼，最好去看运动医学科。',
      ],
      [
        '有什么拉伸动作？',
        '- 泡沫轴放松大腿外侧，每侧两分钟\n- 站姿交叉腿侧拉，每侧 30 秒\n- 臀中肌侧卧抬腿，每侧 15 次',
      ],
    ],
    extra: {
      table: [
        ['动作', '时长或次数'],
        ['泡沫轴放松', '每侧 2 分钟'],
        ['交叉腿侧拉', '每侧 30 秒'],
        ['侧卧抬腿', '每侧 15 次'],
      ],
      summary: ['外侧疼多半是髂胫束紧张', '先停跑三到五天', '每天做泡沫轴和臀中肌练习'],
      translation:
        '- Foam-roll the outer thigh, 2 minutes per side\n- Standing cross-leg stretch, 30 seconds per side\n- Side-lying leg raises, 15 reps per side',
      todo: ['停跑三天', '每天泡沫轴放松', '每天侧卧抬腿 3 组', '恢复后先跑 3 公里'],
    },
  },
  cat: {
    title: '猫最近不爱吃饭',
    turns: [
      [
        '猫这两天不爱吃猫粮，正常吗？',
        '先观察精神、喝水和上厕所是否正常。如果精神好、只是挑食，可以试试换个口味；如果超过 24 小时完全不吃，要尽快去医院。',
      ],
      [
        '换粮要怎么过渡？',
        '用七天慢慢换：前两天新粮占四分之一，中间三天各一半，最后两天新粮占四分之三。',
      ],
    ],
    extra: {
      table: [
        ['天数', '新粮比例'],
        ['第 1–2 天', '25%'],
        ['第 3–5 天', '50%'],
        ['第 6–7 天', '75%'],
      ],
      summary: ['先看精神、喝水和上厕所', '超过 24 小时不吃就去医院', '换粮用七天慢慢过渡'],
      translation:
        'Switch over seven days: a quarter new food for the first two days, half for the next three, and three quarters for the last two.',
      todo: ['记录今天的进食量', '买一小包新口味', '按七天比例换粮'],
    },
  },
  headphones: {
    title: '降噪耳机怎么选',
    turns: [
      [
        '通勤用，降噪耳机怎么选？',
        '先定预算，再看三点：降噪强度、佩戴舒适度、续航。地铁通勤的话降噪优先，每天戴一两个小时以上的话舒适度更重要。',
      ],
      ['戴眼镜会影响吗？', '会。头戴式的耳罩会压到镜腿，影响密封和降噪；戴眼镜的话入耳式更友好。'],
    ],
    extra: {
      table: [
        ['类型', '降噪', '戴眼镜'],
        ['头戴式', '更强', '会压镜腿'],
        ['入耳式', '够用', '不受影响'],
      ],
      summary: ['先定预算', '地铁通勤优先看降噪', '戴眼镜选入耳式'],
      translation:
        'Yes. Over-ear cups press on your glasses arms, which breaks the seal and weakens noise cancelling. In-ear buds are the easier choice if you wear glasses.',
      todo: ['定预算', '去门店试戴两款', '对比续航和充电盒大小'],
    },
  },
};
