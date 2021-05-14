// pages/learn/learn.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgList: [
      "http://kangdongwei.cn/learnTop1.png",
      "http://kangdongwei.cn/learnTop2.png",
      "http://kangdongwei.cn/learnTop3.png"
    ],
    courses: [],
    TabCur: 0,
    scrollLeft: 0,
    titleName: [
      "学科公开课","素质提升课","好家长课堂","少儿编程课"
    ],
    tarList: [],
    // 角标
    sub: 0
  },

  tabSelect(e) {
    console.log("执行该方法")
    console.log(e)
    this.setData({
      TabCur: e.currentTarget.dataset.id,
      scrollLeft: (e.currentTarget.dataset.id-1)*60
    })
  },

  changeTabs(e){
    console.log("执行changeTabs")
    console.log(e.detail.activeKey)
    if(e.detail.activeKey==0){
      this.setData({
        courses: [{
          url: "http://kangdongwei.cn/learnCourse1.png",
          count: "122",
          title: "科",
          context: "9节标准课，带你领略科学的奥秘",
          author: "初中科学基础概念详解",
          buttomText: "立即学习",
          viewModel: "../../pages/courseDetail/index"
        },
        {
          url: "http://kangdongwei.cn/learnCourse2.png",
          count: "200",
          title: "英",
          context: "如何利用假期打好学习英语",
          author: "通过音标快速记单词，提高口语能力",
          buttomText: "立即学习",
          viewModel: "../../pages/courseDetail/index"
        },
        {
          url: "http://kangdongwei.cn/learnCourse3.png",
          count: "993",
          title: "语",
          context: "初中作文特训营",
          author: "学霸老师带你快速提高写作能力",
          buttomText: "立即学习",
          viewModel: "../../pages/courseDetail/index"
        },{
          url: "http://kangdongwei.cn/learnCourse4.png",
          count: "129",
          title: "通",
          context: "智慧课程放假通知",
          author: "放假及放假安排公告",
          buttomText: "立即了解",
          viewModel: "../../pages/courseDetail/index"
        },
        {
          url: "http://kangdongwei.cn/learnCourse5.png",
          count: "301",
          title: "数",
          context: "初一数学专项课",
          author: "习得一题多解数与式，打实基础",
          buttomText: "立即学习",
          viewModel: "../../pages/courseDetail/index"
        },
        {
          url: "http://kangdongwei.cn/learnCourse6.png",
          count: "133",
          title: "数",
          context: "初二数学专项课",
          author: "Get辅助线解题技巧，秒解全等三角形难题",
          buttomText: "立即学习",
          viewModel: "../../pages/courseDetail/index"
        },{
          url: "http://kangdongwei.cn/learnCourse7.png",
          count: "455",
          title: "数",
          context: "初三数学专项课",
          author: "攻克二次函数疑难杂症，拿稳综合体满分",
          buttomText: "立即学习",
          viewModel: "../../pages/courseDetail/index"
        },
        {
          url: "http://kangdongwei.cn/learnCourse8.png",
          count: "300",
          title: "数",
          context: "高二数学冲刺",
          author: "学会高氏快速解题法，破解几何难题",
          buttomText: "助力解锁",
          viewModel: "../../pages/courseDetail/index"
        },
        {
          url: "http://kangdongwei.cn/learnCourse9.png",
          count: "100",
          title: "英",
          context: "初中英语集训班",
          author: "如何让孩子爱上英语，快速记单词",
          buttomText: "助力解锁",
          viewModel: "../../pages/courseDetail/index"
        }
      ]
      })
    }else if(e.detail.activeKey==1){
      this.setData({
        courses: [{
          url: "http://kangdongwei.cn/qualityCourse1.png",
          count: "98",
          title: "质",
          context: "如何提升学习能力，加快学习效率",
          author: "帮助孩子掌握记忆方法，提高学习效率",
          buttomText: "助力解锁",
          viewModel: "../../pages/courseDetail/index"
        },
        {
          url: "http://kangdongwei.cn/qualityCourse2.png",
          count: "56",
          title: "质",
          context: "科技发展史",
          author: "了解科技的发展历程，探索科技的魅力",
          buttomText: "助力解锁",
          viewModel: "../../pages/courseDetail/index"
        },
        {
          url: "http://kangdongwei.cn/qualityCourse3.png",
          count: "155",
          title: "质",
          context: "不要只会看手机",
          author: "让孩子不只是会用手机玩游戏",
          buttomText: "立即学习",
          viewModel: "../../pages/courseDetail/index"
        }
      ]
      })
    }else if(e.detail.activeKey==2){
      this.setData({
        courses: [{
          url: "http://kangdongwei.cn/parentCourse1.png",
          count: "1241",
          title: "咨",
          context: "如何不吼不叫搞定孩子作业拖拉",
          author: "北大教授的不传之密",
          buttomText: "助力解锁",
          viewModel: "../../pages/courseDetail/index"
        },
        {
          url: "http://kangdongwei.cn/parentCourse2.png",
          count: "201",
          title: "咨",
          context: "家长是孩子第一任老师",
          author: "教会你如何与孩子沟通，家长的陪伴远远大于教育",
          buttomText: "助力解锁",
          viewModel: "../../pages/courseDetail/index"
        },
        {
          url: "http://kangdongwei.cn/parentCourse3.png",
          count: "493",
          title: "咨",
          context: "家庭教育不可或缺",
          author: "一个好的家庭带给孩子的是无尽的财富",
          buttomText: "助力解锁",
          viewModel: "../../pages/courseDetail/index"
        },
        {
          url: "http://kangdongwei.cn/parentCourse5.png",
          count: "147",
          title: "咨",
          context: "怎么让孩子爱上音乐",
          author: "让孩子提高音乐天赋，培养音乐兴趣",
          buttomText: "立即学习",
          viewModel: "../../pages/courseDetail/index"
        }
      ]
      })
    }else{
      this.setData({
        courses: [{
          url: "http://kangdongwei.cn/programCourse1.png",
          count: "1210",
          title: "编",
          context: "少儿编程专业课",
          author: "让孩子爱上编程，走进编程的世界",
          buttomText: "助力解锁",
          viewModel: "../../pages/courseDetail/index"
        },
        {
          url: "http://kangdongwei.cn/programCourse2.png",
          count: "124",
          title: "编",
          context: "少儿编程俱乐部",
          author: "让你的孩子假期不是玩游戏，而是开发游戏",
          buttomText: "立即学习",
          viewModel: "../../pages/courseDetail/index"
        },
        {
          url: "http://kangdongwei.cn/programCourse3.png",
          count: "993",
          title: "编",
          context: "Java语言儿童课",
          author: "资深秃头程序猿带孩子走进java世界",
          buttomText: "助力解锁",
          viewModel: "../../pages/courseDetail/index"
        }
      ]
      })
    }
  },

  initTabs(id){
    if(id==0 || id==undefined){
      this.setData({
        courses: [{
          url: "http://kangdongwei.cn/learnCourse1.png",
          count: "122",
          title: "科",
          context: "9节标准课，带你领略科学的奥秘",
          author: "初中科学基础概念详解",
          buttomText: "立即学习",
          viewModel: "../../pages/courseDetail/index"
        },
        {
          url: "http://kangdongwei.cn/learnCourse2.png",
          count: "200",
          title: "英",
          context: "如何利用假期打好学习英语",
          author: "通过音标快速记单词，提高口语能力",
          buttomText: "立即学习",
          viewModel: "../../pages/courseDetail/index"
        },
        {
          url: "http://kangdongwei.cn/learnCourse3.png",
          count: "993",
          title: "语",
          context: "初中作文特训营",
          author: "学霸老师带你快速提高写作能力",
          buttomText: "立即学习",
          viewModel: "../../pages/courseDetail/index"
        },{
          url: "http://kangdongwei.cn/learnCourse4.png",
          count: "129",
          title: "通",
          context: "智慧课程放假通知",
          author: "放假及放假安排公告",
          buttomText: "立即了解",
          viewModel: "../../pages/courseDetail/index"
        },
        {
          url: "http://kangdongwei.cn/learnCourse5.png",
          count: "301",
          title: "数",
          context: "初一数学专项课",
          author: "习得一题多解数与式，打实基础",
          buttomText: "立即学习",
          viewModel: "../../pages/courseDetail/index"
        },
        {
          url: "http://kangdongwei.cn/learnCourse6.png",
          count: "133",
          title: "数",
          context: "初二数学专项课",
          author: "Get辅助线解题技巧，秒解全等三角形难题",
          buttomText: "立即学习",
          viewModel: "../../pages/courseDetail/index"
        },{
          url: "http://kangdongwei.cn/learnCourse7.png",
          count: "455",
          title: "数",
          context: "初三数学专项课",
          author: "攻克二次函数疑难杂症，拿稳综合体满分",
          buttomText: "立即学习",
          viewModel: "../../pages/courseDetail/index"
        },
        {
          url: "http://kangdongwei.cn/learnCourse8.png",
          count: "300",
          title: "数",
          context: "高二数学冲刺",
          author: "学会高氏快速解题法，破解几何难题",
          buttomText: "助力解锁",
          viewModel: "../../pages/courseDetail/index"
        },
        {
          url: "http://kangdongwei.cn/learnCourse9.png",
          count: "100",
          title: "英",
          context: "初中英语集训班",
          author: "如何让孩子爱上英语，快速记单词",
          buttomText: "助力解锁",
          viewModel: "../../pages/courseDetail/index"
        }
      ]
      })
    }else if(id==1){
      this.setData({
        courses: [{
          url: "http://kangdongwei.cn/qualityCourse1.png",
          count: "98",
          title: "质",
          context: "如何提升学习能力，加快学习效率",
          author: "帮助孩子掌握记忆方法，提高学习效率",
          buttomText: "助力解锁",
          viewModel: "../../pages/courseDetail/index"
        },
        {
          url: "http://kangdongwei.cn/qualityCourse2.png",
          count: "56",
          title: "质",
          context: "科技发展史",
          author: "了解科技的发展历程，探索科技的魅力",
          buttomText: "助力解锁",
          viewModel: "../../pages/courseDetail/index"
        },
        {
          url: "http://kangdongwei.cn/qualityCourse3.png",
          count: "155",
          title: "质",
          context: "不要只会看手机",
          author: "让孩子不只是会用手机玩游戏",
          buttomText: "立即学习",
          viewModel: "../../pages/courseDetail/index"
        }
      ]
      })
    }else if(id==2){
      this.setData({
        courses: [{
          url: "http://kangdongwei.cn/parentCourse1.png",
          count: "1241",
          title: "咨",
          context: "如何不吼不叫搞定孩子作业拖拉",
          author: "北大教授的不传之密",
          buttomText: "助力解锁",
          viewModel: "../../pages/courseDetail/index"
        },
        {
          url: "http://kangdongwei.cn/parentCourse2.png",
          count: "201",
          title: "咨",
          context: "家长是孩子第一任老师",
          author: "教会你如何与孩子沟通，家长的陪伴远远大于教育",
          buttomText: "助力解锁",
          viewModel: "../../pages/courseDetail/index"
        },
        {
          url: "http://kangdongwei.cn/parentCourse3.png",
          count: "493",
          title: "咨",
          context: "家庭教育不可或缺",
          author: "一个好的家庭带给孩子的是无尽的财富",
          buttomText: "助力解锁",
          viewModel: "../../pages/courseDetail/index"
        },
        {
          url: "http://kangdongwei.cn/parentCourse5.png",
          count: "147",
          title: "咨",
          context: "怎么让孩子爱上音乐",
          author: "让孩子提高音乐天赋，培养音乐兴趣",
          buttomText: "立即学习",
          viewModel: "../../pages/courseDetail/index"
        }
      ]
      })
    }else if(id==3){
      this.setData({
        courses: [{
          url: "http://kangdongwei.cn/programCourse1.png",
          count: "1210",
          title: "编",
          context: "少儿编程专业课",
          author: "让孩子爱上编程，走进编程的世界",
          buttomText: "助力解锁",
          viewModel: "../../pages/courseDetail/index"
        },
        {
          url: "http://kangdongwei.cn/programCourse2.png",
          count: "124",
          title: "编",
          context: "少儿编程俱乐部",
          author: "让你的孩子假期不是玩游戏，而是开发游戏",
          buttomText: "立即学习",
          viewModel: "../../pages/courseDetail/index"
        },
        {
          url: "http://kangdongwei.cn/programCourse3.png",
          count: "993",
          title: "编",
          context: "Java语言儿童课",
          author: "资深秃头程序猿带孩子走进java世界",
          buttomText: "助力解锁",
          viewModel: "../../pages/courseDetail/index"
        }
      ]
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if(options){
      this.setData({
        sub: options.sub
      })
      this.initTabs(options.sub);
    }
    this.setData({
    tarList: app.globalData.tarList
    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})