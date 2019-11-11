// pages/nearby/nearby.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: ['/static/imgs/i1.jpg', '/static/imgs/i2.jpg', '/static/imgs/i3.jpg'
    ],
    stores: '',
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 800,
  },
  Map: function () {
    wx.getLocation({
      success: function (res) {
        console.log(res.latitude, res.longitude)
        wx.navigateTo({
          url: '../dimal/dimal'
        })
      },
    })
  },
  room_detail: function (opt) {
    var stores = wx.getStorageSync('stores')
    this.setData({
      stores: stores
    })
    // console.log('2222222222222', opt.currentTarget.id)

    wx.navigateTo({
      url: '../room_detail/room_detail?id=' + opt.currentTarget.id,
    })
  },
  back:function(){
    wx.reLaunch({
      url: '../index/index',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    wx.getLocation({
      success: function (res) {
        console.log(res.latitude, res.longitude)

        var lat = res.latitude
        var lng = res.longitude
        wx.request({
          url: 'http://120.27.247.213:8000/course/getstore/',
          method: 'POST',
          // method:'GET',
          // header:{
          //   'content-type':'application/json'
          // }, // get 请求头
          header: {
            'content-type': 'application/x-www-form-urlencoded'
          }, // post 请求头
          data: {
            'lat': lat,
            'lng': lng
          },
          success: function (res) {
            console.log(res.data)
            wx.setStorageSync('stores', res.data.store)
            that.setData({
              // imgUrls: res.data.imgUrls,
              city: res.data.city,
              district: res.data.district,
              store: res.data.store
            })

          }, // 成功回调
          fail: function (res) {
            console.log(res)
          }, // 失败回调
        })
        
      },
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

  },
  openmap:function(){
    wx.showLoading({
      title: '',
      mask: true,
      success: function(res) {
        wx.navigateTo({
          url: '../dimal/dimal'
        })
      },
      fail: function(res) {},
      complete: function(res) {},
      duration: 2000
    })
 
  }
})