var app = getApp()
Page({
  Map: function () {
    wx.getLocation({
      success: function (res) {
        console.log(res.latitude, res.longitude)
        wx.redirectTo({
          url: '../nearby/nearby',
          success: function(res) {},
          fail: function(res) {},
          complete: function(res) {},
        })
      },
    })
  }
  
  
})

