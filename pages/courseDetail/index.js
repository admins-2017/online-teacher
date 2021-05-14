// pages/courseDetail/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    titleName: [
      "详情","目录"
    ],
    detailUrl: "http://kangdongwei.cn/backLearn1.png",
    directory: [
      {number:"1",title:"元音的发音技巧",date:"",status:"免费"},
      {number:"2",title:"辅音的发音技巧",date:"",status:"免费"},
      {number:"3",title:"三步成音学会拼读",date:"",status:"免费"},
      {number:"4",title:"重音的读法技巧",date:"3.1(周三) 19:20-21:20",status:"收费"},
      {number:"5",title:"特殊音的拼读",date:"3.3(周五) 19:20-21:20",status:"收费"},
      {number:"6",title:"课后总结",date:"",status:"免费"},

    ],
    num:"50"
  },

  changeTabs(e){
    console.log("执行changeTabs")
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