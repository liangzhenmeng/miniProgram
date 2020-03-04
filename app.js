App({
  onLaunch(options){
    console.log(options,"---------->onLaunch")
  },
  onShow(opts){
    console.log("onShow");
    switch(opts.scene){
      case 1001:
        console.log("小程序主入口")
        break
      case 1005:
        console.log("程序入口")
        break
    }
  },
  //小程序隐藏时触发
  onHide(){
    console.log("onHide");
    
  },
  onError(msg){
    console.log(msg)
  },
  globalData:{
    name:"coderwhy",
    age:18
  }
})