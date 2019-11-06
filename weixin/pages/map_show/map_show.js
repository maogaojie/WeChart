var fileData = require('../../utils/maplist.js')
Page({
  data:{
    latitude:'',
    longitude:'',
  },
  click: function (e) {
    wx.getLocation({
      success: function(res) {
        wx.openLocation({
          latitude: 39.0,
          longitude: 110.0,
          scale: 18,
          name: '老王之家',
          address: '北京市'
        })
      },
    })
 
  },
})