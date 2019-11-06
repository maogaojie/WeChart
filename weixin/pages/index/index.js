var app = getApp()
Page({
  Map: function () {
    wx.getLocation({
      success: function (res) {
        console.log(res.latitude, res.longitude)
        wx.reLaunch({
          url: '../nearby/nearby',
        })
      },
    })
  }
  
  
})

