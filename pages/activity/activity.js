// pages/activity/activity.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    titleName: [
      "热门活动","趣味测试"
    ],
    actives:[]
  },

  changeTabs(e){
    console.log("执行changeTabs")
    console.log(e.detail.activeKey)
    if(e.detail.activeKey==0){
      this.setData({
        actives: [{
          name: "翻牌轰动",
          date: "11.20 - 12.12",
          status: "已结束",
          ts:true,
          url: "http://kangdongwei.cn/fanpai.png",
        },
        {
          name: "红包来临",
          date: "10.01 - 10.08",
          status: "已结束",
          ts:false,
          url: "http://kangdongwei.cn/hongbao.png",
        },
        {
          name: "一周年领奖",
          date: "7.01 - 7.18",
          status: "已结束",
          ts:true,
          url: "http://kangdongwei.cn/zhounian.png",
        },{
          name: "5月答题赢奖",
          date: "5.01 - 5.20",
          status: "已结束",
          ts:true,
          url: "http://kangdongwei.cn/dati.png",
        }
      ]
      })
    }else if(e.detail.activeKey==1){
      this.setData({
        actives: [{
          name: "趣味测试",
          date: "12.01 - 12.20",
          status: "已结束",
          ts:true,
          url: "http://kangdongwei.cn/quwei.png",
        },
        {
          name: "情商测试",
          date: "11.11 - 11.20",
          status: "已结束",
          ts:true,
          url: "http://kangdongwei.cn/qingshang.png",
        }
      ]
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      actives: [{
        name: "翻牌轰动",
          date: "11.20 - 12.12",
          status: "已结束",
          ts:true,
          url: "http://kangdongwei.cn/fanpai.png",
        },
        {
          name: "红包来临",
          date: "10.01 - 10.08",
          status: "活动中",
          ts:false,
          url: "http://kangdongwei.cn/hongbao.png",
        },
        {
          name: "一周年领奖",
          date: "7.01 - 7.18",
          status: "已结束",
          ts:true,
          url: "http://kangdongwei.cn/zhounian.png",
        },{
          name: "5月答题赢奖",
          date: "5.01 - 5.20",
          status: "已结束",
          ts:true,
          url: "http://kangdongwei.cn/dati.png",
        }
    ]
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