// pages/nearby/nearby.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: ['/static/imgs/1.png', '/static/imgs/1.png', '/static/imgs/1.png', '/static/imgs/1.png'
    ],
    
    indicatorDots: true,
    autoplay: true,
    interval: 2000,
    duration: true,
  },
  room_detail: function (opt) {
    wx.navigateTo({
      url: '../room_detail/room_detail',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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