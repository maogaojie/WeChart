// pages/room_detail/room_detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sijiaoke: '',
    store_list: '',
    tuanjian: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.id)
    var that = this
    wx.request({
      url: 'http://120.27.247.213:8000/course/getprivatecourse/',
      // method: 'POST',
      method: 'GET',
      header: {
        'content-type': 'application/json'
      }, // get 请求头
      // header: {
      // 'content-type': 'application/x-www-form-urlencoded'
      // }, // post 请求头
      data: {
        'store_id': options.id,
        // 'time': ''
      },
      success: function (res) {
        console.log(res)
        that.setData({
          // imgUrls: res.data.imgUrls,
          sijiaoke: res.data.private_course_list,
          store_list: res.data.store_info
        })

      }, // 成功回调
      fail: function (res) {
        console.log(res)
      }, // 失败回调
    })

    // 获取当天团课
    
  },
  mydata(e) { //可获取日历点击事件
    console.log('id', e.currentTarget.id)
    let time = e.detail.data
    console.log(time)
    var that = this
    wx.request({
      url: 'http://120.27.247.213:8000/course/getpubliccourse/',
      method: 'POST',
      // method: 'GET',
      // header: {
      // 'content-type': 'application/json'
      // }, // get 请求头
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      }, // post 请求头
      data: {
        'time': time,
        'store_id': e.currentTarget.id
      },
      success: function (res) {
        console.log(res)
        that.setData({
          // imgUrls: res.data.imgUrls,
          tuanjian: res.data.public_course_list
        })

      }, // 成功回调
      fail: function (res) {
        console.log(res)
      }, // 失败回调
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