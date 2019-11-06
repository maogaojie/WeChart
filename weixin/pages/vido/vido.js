// pages/vido/vido.js
function getRandomColor() {
  let rgb = []
  for (let i = 0; i < 3; ++i) {
    let color = Math.floor(Math.random() * 256).toString(16)
    color = color.length == 1 ? '0' + color : color
    rgb.push(color)
  }
  return '#' + rgb.join('')
}
Page({
  /**
   * 页面的初始数据
   */
  data: {
    
    url:'',
    
    danmuList: [
      {
        text: '开始了',
        color: '#ff0000',
        time: 1
      },
      {
        text: '秀儿',
        color: '#ff00ff',
        time: 3
      }]
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.videoContext = wx.createVideoContext('myVideo')
  },
  onLoad:function(){
    wx.request({
      url: 'http://127.0.0.1:8000',
      // method: 'POST',
      method:'GET',
      header:{
        'content-type':'application/json'
      }, // get 请求头
      // header: {
        // 'content-type': 'application/x-www-form-urlencoded'
      // }, // post 请求头
      // data: {
        // 'username': '老王'
      // },
      success: function (res) {
        console.log(res)
        this.setData({
          url:res.data.url
        })
      }, // 成功回调
      fail: function (res) {
        console.log(res)
      }, // 失败回调
    })
  },
  
  // 电影
  bindInputBlur: function (e) {
    this.inputValue = e.detail.value
  },
  bindSendDanmu: function () {
    this.videoContext.sendDanmu({
      text: this.inputValue,
      color: getRandomColor()
    })
  },
  inputValue:''
  
})