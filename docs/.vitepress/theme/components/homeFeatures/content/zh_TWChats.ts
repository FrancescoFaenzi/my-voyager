import type { HomeFeaturesContent } from '../types';

export const zhTWChats: HomeFeaturesContent['chats'] = {
  kyoto: {
    title: '京都三天怎麼玩',
    star: true,
    starred: [3],
    turns: [
      [
        '十一月要去京都，三天行程怎麼排？',
        '十一月剛好是紅葉季，建議按區域分三天走：\n- 第一天東山：清水寺、二年坂、八坂神社\n- 第二天嵐山：竹林小徑、天龍寺、嵯峨野小火車\n- 第三天伏見稻荷，下午回市區逛錦市場',
      ],
      [
        '清水寺幾點去人比較少？',
        '早上 6 點開門到 7 點之間人最少，晨光照在清水舞台上也最漂亮。9 點以後旅行團就陸續到了。',
      ],
      ['嵐山小火車要先訂嗎？', '紅葉季建議一個月前就在官網訂位，坐右側可以看到保津川峽谷。'],
      [
        '住哪一區交通最方便？',
        '京都車站或四條河原町附近。京都車站去伏見、嵐山都順路；河原町晚上吃飯、逛街比較方便。',
      ],
      [
        '推薦幾家不用排隊的拉麵',
        '避開中午 12 點和晚上 6 點的用餐尖峰，大部分店都不太需要排。河原町附近的在地小店，晚上 9 點後通常直接就能入座。',
      ],
    ],
    extra: {
      table: [
        ['天', '上午', '下午'],
        ['第一天', '清水寺', '二年坂、八坂神社'],
        ['第二天', '竹林小徑', '天龍寺、小火車'],
        ['第三天', '伏見稻荷', '錦市場'],
      ],
      summary: [
        '紅葉季按東山、嵐山、伏見分三天走',
        '清水寺早上 6 到 7 點去，小火車一個月前先訂',
        '住京都車站或河原町，吃飯避開尖峰就不用排',
      ],
      translation:
        'Avoid the noon and 6 pm rush and most ramen shops have little or no line. Around Kawaramachi, small local spots usually seat you right away after 9 pm.',
      todo: [
        '訂嵐山小火車（一個月前）',
        '訂京都車站附近的飯店',
        '查清水寺開門時間',
        '買一張 ICOCA 卡',
      ],
    },
  },
  packing: {
    title: '出發前行李清單',
    turns: [
      [
        '十一月的京都要帶厚外套嗎？',
        '早晚大約 8 度，白天 15 度上下。帶一件輕羽絨或刷毛外套就夠了，裡面穿長袖。',
      ],
      [
        '日本的插頭跟台灣一樣嗎？',
        '一樣是兩根扁腳的 A 型插頭，電壓 100V，跟台灣的 110V 差不多。手機和筆電的充電器多半支援 100–240V，直接插就能用，不用帶轉接頭。',
      ],
      [
        '西瓜卡跟 ICOCA 哪個好？',
        '兩張在關西都能用。ICOCA 在關西比較普遍，在京都車站的售票機就買得到。',
      ],
    ],
    extra: {
      table: [
        ['物品', '要不要帶', '備註'],
        ['輕羽絨', '要', '早晚 8 度'],
        ['轉接頭', '不用', '台灣插頭直接用'],
        ['交通卡', '到了再買', 'ICOCA'],
      ],
      summary: [
        '帶輕羽絨或刷毛外套，裡面穿長袖',
        '插頭一樣是 A 型，不用轉接頭',
        '交通卡到京都車站買 ICOCA',
      ],
      translation:
        'Both work in Kansai, but ICOCA is more common there. You can buy one from the ticket machines at Kyoto Station.',
      todo: ['輕羽絨外套', '長袖兩件', '充電器和行動電源', '護照和訂房確認信'],
    },
  },
  dinner: {
    title: '冰箱剩下的菜能煮什麼',
    turns: [
      [
        '冰箱裡有雞蛋、番茄、半顆洋蔥，晚餐煮什麼好？',
        '洋蔥番茄炒蛋最快，十分鐘就能上桌：先把蛋炒到半熟盛起來，再炒洋蔥和番茄炒出湯汁，最後把蛋倒回去拌勻。',
      ],
      [
        '還想要一碗湯',
        '剩下的番茄可以煮番茄蛋花湯：番茄炒軟後加水煮滾，淋上一顆蛋液，起鍋前加點鹽。',
      ],
      ['沒有蔥可以嗎？', '可以，起鍋前撒點黑胡椒或滴幾滴香油，一樣很香。'],
    ],
    extra: {
      table: [
        ['菜', '材料', '時間'],
        ['洋蔥番茄炒蛋', '雞蛋 3 顆、番茄 1 顆、洋蔥半顆', '10 分鐘'],
        ['番茄蛋花湯', '番茄 1 顆、雞蛋 1 顆', '8 分鐘'],
      ],
      summary: ['主菜做洋蔥番茄炒蛋', '湯煮番茄蛋花湯', '沒有蔥就用黑胡椒或香油提味'],
      translation:
        'Sure. A pinch of black pepper or a few drops of sesame oil right before serving smells just as good.',
      todo: ['煮飯', '炒蛋盛起', '炒番茄洋蔥', '煮蛋花湯'],
    },
  },
  week: {
    title: '一週便當菜單',
    turns: [
      [
        '幫我排一週的便當菜單，不要太麻煩',
        '週末一次備好三道主菜：滷雞腿、番茄燉牛腩、蒜炒綠花椰，分裝冷凍。平日每天拿一盒主菜，配一份新煮的白飯就好。',
      ],
      [
        '每天能控制在 100 元以內嗎？',
        '可以。雞腿和牛腩買大包裝、綠花椰挑當季的，算下來一份大約 70 元。',
      ],
    ],
    extra: {
      table: [
        ['星期', '主菜'],
        ['週一', '滷雞腿'],
        ['週二', '番茄燉牛腩'],
        ['週三', '滷雞腿'],
        ['週四', '番茄燉牛腩'],
        ['週五', '蒜炒綠花椰配雞腿'],
      ],
      summary: ['週末一次備好三道主菜，分裝冷凍', '平日只要煮飯', '一份大約 70 元'],
      translation:
        'Yes. Buy chicken legs and beef brisket in large packs and pick broccoli in season, and each lunch comes to about NT$70.',
      todo: ['買雞腿 6 支', '買牛腩 1 公斤', '買綠花椰 3 顆', '準備 10 個便當盒'],
    },
  },
  landlord: {
    title: '跟房東說熱水器壞了',
    turns: [
      [
        '熱水器壞了，要怎麼跟房東說比較好？',
        '先講清楚狀況和從什麼時候開始，再問對方哪天方便請師傅來修，最後說明自己可以配合的時間。',
      ],
      [
        '幫我寫一則 LINE 訊息',
        '陳先生您好，家裡的熱水器從昨晚開始點不著火，一直沒有熱水。想麻煩您這兩天安排師傅來看一下，我平日晚上和週末都在家，時間可以配合。謝謝！',
      ],
    ],
    extra: {
      table: [
        ['要說的', '怎麼說'],
        ['狀況', '從昨晚開始點不著火'],
        ['請求', '安排師傅來修'],
        ['配合', '平日晚上和週末都在家'],
      ],
      summary: ['先說狀況和開始的時間', '再請房東安排維修', '最後說明自己能配合的時間'],
      translation:
        "Hi Mr. Chen, the water heater hasn't been able to ignite since last night, so there's no hot water. Could you have someone come take a look in the next couple of days? I'm home on weekday evenings and weekends, so I can work around your schedule. Thanks!",
      todo: ['錄一段熱水器點不著的影片', '傳 LINE 給房東', '約好維修時間'],
    },
  },
  run: {
    title: '跑步膝蓋痛',
    turns: [
      [
        '最近跑步膝蓋外側會痛，還能繼續跑嗎？',
        '膝蓋外側痛常跟髂脛束太緊有關。建議先停跑三到五天，等不痛了再從短距離慢跑開始恢復。如果連走路都會痛，最好去看骨科或復健科。',
      ],
      [
        '有什麼伸展動作？',
        '- 用滾筒放鬆大腿外側，每邊兩分鐘\n- 站姿交叉腿側伸展，每邊 30 秒\n- 側躺抬腿練臀中肌，每邊 15 下',
      ],
    ],
    extra: {
      table: [
        ['動作', '時間或次數'],
        ['滾筒放鬆', '每邊 2 分鐘'],
        ['交叉腿側伸展', '每邊 30 秒'],
        ['側躺抬腿', '每邊 15 下'],
      ],
      summary: ['外側痛多半是髂脛束太緊', '先停跑三到五天', '每天滾筒放鬆加臀中肌訓練'],
      translation:
        '- Foam-roll the outer thigh, 2 minutes per side\n- Standing cross-leg side stretch, 30 seconds per side\n- Side-lying leg raises for the glutes, 15 reps per side',
      todo: ['停跑三天', '每天用滾筒放鬆', '每天側躺抬腿 3 組', '恢復後先跑 3 公里'],
    },
  },
  cat: {
    title: '貓咪最近不太吃飯',
    turns: [
      [
        '貓咪這兩天不太吃飼料，正常嗎？',
        '先觀察牠的精神、喝水和上廁所是否正常。如果精神不錯、只是挑嘴，可以換個口味試試；如果超過 24 小時完全不吃，要盡快帶去看獸醫。',
      ],
      [
        '換飼料要怎麼過渡？',
        '用七天慢慢換：前兩天新飼料佔四分之一，中間三天各一半，最後兩天新飼料佔四分之三。',
      ],
    ],
    extra: {
      table: [
        ['天數', '新飼料比例'],
        ['第 1–2 天', '25%'],
        ['第 3–5 天', '50%'],
        ['第 6–7 天', '75%'],
      ],
      summary: ['先看精神、喝水和上廁所', '超過 24 小時不吃就去看獸醫', '換飼料用七天慢慢過渡'],
      translation:
        'Switch over seven days: a quarter new food for the first two days, half for the next three, and three quarters for the last two.',
      todo: ['記錄今天吃了多少', '買一小包新口味', '照七天比例換飼料'],
    },
  },
  headphones: {
    title: '降噪耳機怎麼挑',
    turns: [
      [
        '通勤用的降噪耳機要怎麼挑？',
        '先訂預算，再看三點：降噪強度、配戴舒適度、續航力。搭捷運通勤的話降噪優先；如果每天要戴一兩個小時以上，舒適度更重要。',
      ],
      [
        '戴眼鏡會有影響嗎？',
        '會。耳罩式的耳罩會壓到鏡腳，影響密合和降噪效果；戴眼鏡的話入耳式比較友善。',
      ],
    ],
    extra: {
      table: [
        ['類型', '降噪', '戴眼鏡'],
        ['耳罩式', '較強', '會壓到鏡腳'],
        ['入耳式', '夠用', '不受影響'],
      ],
      summary: ['先訂預算', '搭捷運通勤優先看降噪', '戴眼鏡選入耳式'],
      translation:
        'Yes. Over-ear cups press on the arms of your glasses, which breaks the seal and weakens noise cancelling. In-ear buds are the easier choice if you wear glasses.',
      todo: ['訂好預算', '去門市試戴兩款', '比較續航力和充電盒大小'],
    },
  },
};
