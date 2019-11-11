// pages/plan/plan.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navbarActiveIndex: 0,
    navbarTitle: [
      "等位中",
      "即将开始",
    ],
    dengdai:'',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getSetting({
      success:function(res){
        console.log('11111',res)
        var openid = wx.getStorage({
          key: 'openid',
          success: function(res) {
            console.log('22222',res)
          },
        })
        // wx.getUserInfo({
        //   success: function (res) {
        //     console.log('22222',res)
        //   }
        // })
      }
    })
    // var that= this
    // wx.request({
    //   url: 'http://120.27.247.213:8000/course/getstore/',
    //   // method: 'POST',
    //   method:'GET',
    //   header:{
    //     'content-type':'application/json'
    //   }, // get 请求头
    //   // header: {
    //     // 'content-type': 'application/x-www-form-urlencoded'
    //   // }, // post 请求头
    //   data: {
    //     'id':0
    //   },
    //   success: function (res) {
    //     console.log(res.data)
    //     that.setData({
    //       dengdai:res.data
    //     })

    //   }, // 成功回调
    //   fail: function (res) {
    //     console.log(res)
    //   }, // 失败回调
    // })
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

  onNavBarTap: function (event) {
    // 获取点击的navbar的index
    let navbarTapIndex = event.currentTarget.dataset.navbarIndex
    // 设置data属性中的navbarActiveIndex为当前点击的navbar
    this.setData({
      navbarActiveIndex: navbarTapIndex
    })
  },

  onBindAnimationFinish: function ({ detail }) {
    // 设置data属性中的navbarActiveIndex为当前点击的navbar
    this.setData({
      navbarActiveIndex: detail.current
    })
  },
})