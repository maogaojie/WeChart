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
    // 
    // url: '',
    url: 'http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400',


  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.videoContext = wx.createVideoContext('myVideo')
  },
  onLoad: function () {
    // wx.request({
    //   url: 'http://127.0.0.1:8000',
    //   // method: 'POST',
    //   method: 'GET',
    //   header: {
    //     'content-type': 'application/json'
    //   }, // get 请求头
    //   // header: {
    //   // 'content-type': 'application/x-www-form-urlencoded'
    //   // }, // post 请求头
    //   // data: {
    //   // 'username': '老王'
    //   // },
    //   success: function (res) {
    //     console.log(res)
    //     this.setData({
    //       url: res.data.url
    //     })
    //   }, // 成功回调
    //   fail: function (res) {
    //     console.log(res)
    //   }, // 失败回调
    // })
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
  inputValue: ''

})