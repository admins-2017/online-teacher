// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    topImgList : [
      "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg3.qianzhan.com%2Fnews%2F201511%2F04%2F20151104-aaae0871a879feb2_600x5000.jpg&refer=http%3A%2F%2Fimg3.qianzhan.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1614346735&t=7b93879469cb03fc22e36301d559ed87",
      "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=211469365,2163943837&fm=26&gp=0.jpg",
      "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3048805424,1372403420&fm=26&gp=0.jpg"
    ],
    navigationDetails:[
      {img:"../../images/index/1.png",description:"赚金币",type:"navigate",url:"../gold/gold"},
      {img:"../../images/index/2.png",description:"赚课时",type:"navigate",url:"../times/times"},
      {img:"../../images/index/3.png",description:"父母课程",type:"reLaunch",url:"../learn/learn?sub=2"},
      {img:"../../images/index/4.png",description:"领红包",type:"navigate",url:"../redEnvelope/redEnvelope"}
    ],
    courseList:[
      {url:"../../images/index/course1.png",count:"3000",title:"质",context:"如何不吼不叫搞定孩子作业拖拉",author:"北大教授的不传之密",buttomText:"助力解锁",viewModel:"../../pages/courseDetail/index"},
      {url:"../../images/index/coures2.png",count:"281",title:"英",context:"如何快速学习英语",author:"南开英语系副教授",buttomText:"立即学习",viewModel:"../../pages/courseDetail/index"},
      {url:"../../images/index/coures3.png",count:"493",title:"数",context:"怎么让孩子爱上音乐",author:"康老师",buttomText:"立即学习",viewModel:"../../pages/courseDetail/index"}
    ],
    parents:[
      {imgUrl:"../../images/index/back11.png",title:"学习技巧",url:"../parents/index?sub=0"},
      {imgUrl:"../../images/index/back12.png",title:"人物故事",url:"../parents/index?sub=1"},
      {imgUrl:"../../images/index/back13.png",title:"新年计划",url:"../parents/index?sub=2"},
      {imgUrl:"../../images/index/back14.png",title:"亲子沟通",url:"../parents/index?sub=3"},
      {imgUrl:"../../images/index/back5.png",title:"少儿成长",url:"../parents/index?sub=4"}
    ],
    tarList:[]
  },
  onLoad:function(){
    console.log(app.globalData)
    this.setData({
      tarList: app.globalData.tarList
    })
  }
  
})
