Page({
  data:{
    message:"哈哈哈哈哈",
    list:[]
  },
  changeHandle(){
    this.setData({
      message:"呵呵呵呵呵"
    })
  },
  msgTapHandle(){
    this.setData({
      message:"哈哈哈哈哈"
    })
  },
  // 页面被加载出来时
  onLoad(){
    console.log("onLoad");
    wx.request({
      url:"http://rap2api.taobao.org/app/mock/237627/list/user",
      success:(res)=>{
        this.setData({
          list:res.data.result
        })
      }
    })
  },
  // 页面显示出来时
  onShow(){
    console.log("onShow");
    
  },
  // 页面初次渲染出来时
  onReady(){
    console.log("onready");
    
  },
  onError(msg){
    console.log("error",msg)
  },
  onUnload(){
    console.log("onUnLoad");
    
  },
  onPageScroll(arg){
    // console.log(arg)
    this.setData({
      message:arg.scrollTop
    })
  },
  onPullDownRefresh(){
    console.log("下拉刷新 pullDownRefresh")
  },
  onReachBottom(arg){
    console.log("页面滚动到了底部",arg)
  }
})