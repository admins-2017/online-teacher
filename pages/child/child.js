// pages/child/child.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    tarList:[],
    titleList:[
      {url:"http://kangdongwei.cn/childTitle1.png",title:"试听报告"},
      {url:"http://kangdongwei.cn/childTitle2.png",title:"课程评价"},
      {url:"http://kangdongwei.cn/childTitle3.png",title:"阶段小结"},
      {url:"http://kangdongwei.cn/childTitle4.png",title:"学情分析"}
    ],
    footerList:[
      {icon:"like",name:"我的公开课",colors:"#FF5777",url:"../myOpenClass/index"},{icon:"favor",name:"我收藏的公开课",colors:"#ea4f33",url:"../collect/index"},{icon:"order",name:"我的订单",colors:"#3792cf",url:"../order/index"},{icon:"user",name:"老师团队",colors:"#ea4f33",url:"../teacher/index"},{icon:"customer-service",name:"意见反馈",colors:"#2c61b4",url:"../opinion/index"}
    ],
    systemList:[
      {icon:"address",name:"收货地址",colors:"#de3b30",url:"../receiptAddress/index"},{icon:"notification",name:"项目地址",colors:"#53b4df",url:"../projectAddress/index"},{icon:"ellipsis",name:"关于我们",colors:"#3375ad",url:"../about/index"}
    ],
    maxDate:0,

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
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