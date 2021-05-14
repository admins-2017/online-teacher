// pages/parents/parents.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title:["学习技巧","人物故事","新年计划","亲子沟通","少儿成长"],
    details: [],
    sub: 0
  },

  changeTabs(e){
    console.log(e.detail.currentIndex)
    if(e.detail.currentIndex == 0){
      this.setData({
        details: [
          {url:"../../images/index/back11.png",title:"掌握读书技巧，写出好的日记",number:"204"},
          {url:"http://kangdongwei.cn/skill1.png",title:"学会用技巧解开物理难题",number:"355"},
          {url:"http://kangdongwei.cn/skill2.png",title:"高三提高成绩不可不读",number:"1002"},
          {url:"http://kangdongwei.cn/skill3.png",title:"提升口语，看这篇就够了",number:"742"}
        ]
      })
    }else if(e.detail.currentIndex == 1){
      this.setData({
        details: [
          {url:"../../images/index/back12.png",title:"看小袁老师如何逆袭人生",number:"521"},
          {url:"http://kangdongwei.cn/story1.png",title:"回忆你人生中的精彩",number:"75"}
        ]
      })
    }else if(e.detail.currentIndex == 2){
      this.setData({
        details: [
          {url:"../../images/index/back13.png",title:"新年学习清单查收",number:"114"},
          {url:"http://kangdongwei.cn/new1.png",title:"其乐教育新年计划",number:"74"}
        ]
      })
    }else if(e.detail.currentIndex == 3){
      this.setData({
        details: [
          {url:"../../images/index/back14.png",title:"其乐春节亲子活动邀请函",number:"334"},
          {url:"http://kangdongwei.cn/children1.png",title:"被父母支持的孩子，都赢得漂亮",number:"1119"},
          {url:"http://kangdongwei.cn/children2.png",title:"父亲节活动邀请函请查收",number:"430"}
        ]
      })
    }else if(e.detail.currentIndex == 4){
      this.setData({
        details: [
          {url:"../../images/index/back5.png",title:"关爱儿童成长，给孩子健康的世界观",number:"123"},
          {url:"http://kangdongwei.cn/mature1.png",title:"让孩子爱上美术，打好基础",number:"224"}
        ]
      })
    }
  },

  init(id){
    if(0 == id){
      this.setData({
        details: [
          {url:"../../images/index/back11.png",title:"掌握读书技巧，写出好的日记",number:"204"},
          {url:"http://kangdongwei.cn/skill1.png",title:"学会用技巧解开物理难题",number:"355"},
          {url:"http://kangdongwei.cn/skill2.png",title:"高三提高成绩不可不读",number:"1002"},
          {url:"http://kangdongwei.cn/skill3.png",title:"提升口语，看这篇就够了",number:"742"}
        ]
      })
    }else if(1 == id){
      this.setData({
        details: [
          {url:"../../images/index/back12.png",title:"看小袁老师如何逆袭人生",number:"521"},
          {url:"http://kangdongwei.cn/story1.png",title:"回忆你人生中的精彩",number:"75"}
        ]
      })
    }else if(2 == id){
      this.setData({
        details: [
          {url:"../../images/index/back13.png",title:"新年学习清单查收",number:"114"},
          {url:"http://kangdongwei.cn/new1.png",title:"其乐教育新年计划",number:"74"}
        ]
      })
    }else if(3 == id){
      this.setData({
        details: [
          {url:"../../images/index/back14.png",title:"其乐春节亲子活动邀请函",number:"334"},
          {url:"http://kangdongwei.cn/children1.png",title:"被父母支持的孩子，都赢得漂亮",number:"1119"},
          {url:"http://kangdongwei.cn/children2.png",title:"父亲节活动邀请函请查收",number:"430"}
        ]
      })
    }else if(4 == id){
      this.setData({
        details: [
          {url:"../../images/index/back5.png",title:"关爱儿童成长，给孩子健康的世界观",number:"123"},
          {url:"http://kangdongwei.cn/mature1.png",title:"让孩子爱上美术，打好基础",number:"224"}
        ]
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if(options.sub != undefined){
      this.init(options.sub);
      this.setData({
        sub:options.sub
      })
    }else{
      this.init(0);
    }
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