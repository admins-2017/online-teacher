// components/my-model/my-model.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    courses : {
      type : Array,
      value: [
        {url:"../../images/index/course1.png",count:"100",title:"质",context:"如何不吼不叫搞定孩子作业拖拉",author:"北大教授的不传之密",buttomText:"助力解锁",viewModel:"../../pages/courseDetail/index"},
        {url:"../../images/index/coures2.png",count:"11",title:"英",context:"如何快速学习英语",author:"南开英语系副教授",buttomText:"立即学习",viewModel:"../../pages/courseDetail/index"},
        {url:"../../images/index/coures3.png",count:"193",title:"数",context:"怎么让孩子爱上音乐",author:"康老师",buttomText:"立即学习",viewModel:"../../pages/courseDetail/index"}
      ]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
