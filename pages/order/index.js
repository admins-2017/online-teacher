// pages/order/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    allOrder:[
      {url:"http://kangdongwei.cn/learnCourse1.png",detail:"9节标准课，带你领略科学的奥秘-初中科学基础概念详解",price:"99.0",status:2},
      {url:"http://kangdongwei.cn/learnCourse2.png",detail:"如何利用假期打好学习英语-通过音标快速记单词，提高口语能力",price:"99.0",status:1},
      {url:"http://kangdongwei.cn/learnCourse3.png",detail:"初中作文特训营-学霸老师带你快速提高写作能力",price:"128.0",status:1},
      {url:"http://kangdongwei.cn/learnCourse6.png",detail:"初二数学专项课-Get辅助线解题技巧，秒解全等三角形难题",price:"300.0",status:1},
      {url:"http://kangdongwei.cn/learnCourse8.png",detail:"高二数学冲刺-学会高氏快速解题法，破解几何难题",price:"288.0",status:2},
      {url:"http://kangdongwei.cn/learnCourse9.png",detail:"初中英语集训班-如何让孩子爱上英语，快速记单词",price:"99.0",status:1}
    ],
    completedOrder: [
      {url:"http://kangdongwei.cn/learnCourse2.png",detail:"如何利用假期打好学习英语-通过音标快速记单词，提高口语能力",price:"99.0",status:1},
      {url:"http://kangdongwei.cn/learnCourse3.png",detail:"初中作文特训营-学霸老师带你快速提高写作能力",price:"128.0",status:1},
      {url:"http://kangdongwei.cn/learnCourse6.png",detail:"初二数学专项课-Get辅助线解题技巧，秒解全等三角形难题",price:"300.0",status:1},
      {url:"http://kangdongwei.cn/learnCourse9.png",detail:"初中英语集训班-如何让孩子爱上英语，快速记单词",price:"99.0",status:1}
    ],
    undoneOrder:[
      {url:"http://kangdongwei.cn/learnCourse1.png",detail:"9节标准课，带你领略科学的奥秘-初中科学基础概念详解",price:"99.0",status:2},
      {url:"http://kangdongwei.cn/learnCourse8.png",detail:"高二数学冲刺-学会高氏快速解题法，破解几何难题",price:"288.0",status:2}
    ]
  },

  changeTabs(e){
    console.log(e.detail.currentIndex)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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