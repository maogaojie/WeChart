// pages/public_detail/public_detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    classs: '',
    one_course:'',
    rule:['六腹肌','帅气','热心','年轻','就是我']
  },
  showRule: function () {
    this.setData({
      isRuleTrue: true
    })
  },
  hideRule: function () {
    this.setData({
      isRuleTrue: false
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('id', options.id)
    var that = this
    wx.request({
      url: 'http://120.27.247.213:8000/course/getcoursedetail/',
      // method: 'POST',
      method: 'GET',
      header: {
        'content-type': 'application/json'
      }, // get 请求头
      // header: {
      // 'content-type': 'application/x-www-form-urlencoded'
      // }, // post 请求头
      data: {
        'course_id': options.id,
        // 'lng': lng
      },
      success: function (res) {
        console.log(res)
        that.setData({
          // imgUrls: res.data.imgUrls,
          classs: res.data.data,
          one_course: res.data.one_course
        })

      }, // 成功回调
      fail: function (res) {
        console.log(res)
      }, // 失败回调
    })
  },

 
})