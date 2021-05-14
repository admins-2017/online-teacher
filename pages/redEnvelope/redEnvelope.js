// pages/redEnvelope/redEnvelope.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    selectArray: [{
      "id": "10",
      "value": "会计类"
    }, {
      "id": "21",
      "text": "工程类"
    }, '技术类', {'value': '其他'}],
    selectArray2: [{
      "id": "10",
      "value": "会计类"
    }, {
      "id": "21",
      "text": "工程类"
    }, '技术类', {'value': '其他'}]
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

  select: function(e) {
    console.log(e.detail)
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