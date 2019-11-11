// pages/public_index/public_index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    course:''
  },

  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    wx.request({
      url: 'http://120.27.247.213:8000/course/getprivatecourse/',
      // method: 'POST',
      method:'GET',
      header:{
        'content-type':'application/json'
      }, // get 请求头
      // header: {
        // 'content-type': 'application/x-www-form-urlencoded'
      // }, // post 请求头
      // data: {
        // 'lat': lat,
      //   'lng': lng
      // },
      success: function (res) {
        console.log(res.data)
        
        
        that.setData({
          // imgUrls: res.data.imgUrls,
          course: res.data.private_course_list
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