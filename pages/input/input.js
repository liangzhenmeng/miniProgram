// pages/input/input.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:"value"
  },
  ipthandle(e){
    console.log(e)
    this.setData({
      name:e.detail.value
    })
  },
  handleFocus(e){
    console.log("------>handleFocus",e)
  },
  handleblur(e){
    console.log("--------handleblur--->",e)
  }
})