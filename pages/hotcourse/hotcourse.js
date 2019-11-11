// pages/hotcourse/hotcourse.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: ['/static/imgs/i1.jpg', '/static/imgs/i2.jpg', '/static/imgs/i3.jpg'
    ],

    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 800,
    navbarActiveIndex: 0,
    navbarTitle: [
      "体能",
      "舞蹈",
      "搏击",
      "静态",
      '蹦床'
    ],
    title_list: ['拉丁舞', '游泳', '散打', '瑜伽']
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
    // this.setData({
    //   navbarActiveIndex: detail.current
    // })
    var that = this
    wx.request({
      url: 'http://120.27.247.213:8000/course/getdirection/',
      // method: 'POST',
      method: 'GET',
      header: {
        'content-type': 'application/json'
      }, // get 请求头
      success: function (res) {

        var lists = res.data.direction
        that.setData({
          navbarActiveIndex: detail.current
        })
        // //取二级分类
        wx.request({
          url: 'http://120.27.247.213:8000/course/getcoursedirection/',
          method: 'POST',
          // method: 'GET',
          // header: {
          // 'content-type': 'application/json'
          // }, // get 请求头
          header: {
            'content-type': 'application/x-www-form-urlencoded'
          }, // post 请求头
          data: {
            'id': lists[detail.current].id,
            // 'lng': lng
          },
          success: function (res) {
            console.log('11111111111', res.data.course_list)
            that.setData({
              title_list: res.data.course_list
            })
          }, // 成功回调
          fail: function (res) {
            console.log(res)
          }, // 失败回调
        })

      }, // 成功回调
      fail: function (res) {
        console.log(res)
      }, // 失败回调
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    wx.request({
      url: 'http://120.27.247.213:8000/course/getdirection/',
      // method: 'POST',
      method: 'GET',
      header: {
        'content-type': 'application/json'
      }, // get 请求头
      success: function (res) {
        // console.log(res.data)
        var lists = res.data.direction
        // console.log('33333',lists)
        that.setData({
          navbarTitle: res.data.direction,
        })

        //取二级分类
        wx.request({
          url: 'http://120.27.247.213:8000/course/getcoursedirection/',
          method: 'POST',

          header: {
            'content-type': 'application/x-www-form-urlencoded'
          }, // post 请求头
          data: {
            'id': lists[0].id,
            // 'lng': lng
          },
          success: function (res) {
            console.log(res.data.course_list)
            that.setData({
              title_list: res.data.course_list
            })
          }, // 成功回调
          fail: function (res) {
            console.log(res)
          }, // 失败回调
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