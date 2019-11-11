let hospitalData = require('hospitalData')
 Page({
    data: {
       centerX: 0.0,
       centerY: 0.0,
        //可能我标识的地点和你所在区域比较远，缩放比例建议5;
       scale: 15,
        markers: [],
       controls: [{
          id: 1,
         iconPath: '/static/imgs/l2.png',
             position: {
               left: 0,
              top: 10,
              width: 40,
               height: 40
 
    },
           clickable: true

  }]
     },
  onReady: function (e) {
      // 使用 wx.createMapContext 获取 map 上下文 
       this.mapCtx = wx.createMapContext('myMap')
  
  },
 
   onLoad: function () {
        console.log('地图定位！')
     let that = this
        wx.getLocation({
            type: 'gcj02', //返回可以用于wx.openLocation的经纬度
            success: (res) => {
               let latitude = res.latitude;
               let longitude = res.longitude;
               let marker = this.createMarker(res);
               this.setData({
                 centerX: longitude,
                     centerY: latitude,
                markers: this.getHospitalMarkers()
         })
     }
     });
  },

   /**
    * 标示点移动触发
   */
  regionchange(e) {
      // console.log(e.type)

},

   /**
    * 点击标识点触发
   */
   markertap(e) {
      //  console.log(e)

},

  /**
     * control控件点击时间
    */
   controltap(e) {
    //  console.log(e.controlId)
   this.moveToLocation()

},

  /**
   * 获取医院标识
   */
   getHospitalMarkers() {
    let markers = [];
     for (let item of hospitalData) {
       let marker = this.createMarker(item);
        markers.push(marker)

  }
     return markers;

},

  /**
   * 移动到自己位置
    */
   moveToLocation: function() {
    let mpCtx = wx.createMapContext("map");
    mpCtx.moveToLocation();
 
},


  /**
   * 还有地图标识，可以在name上面动手
   */
  createMarker(point) {
    let latitude = point.latitude;
    let longitude = point.longitude;
    let marker = {
      iconPath: "/static/imgs/l2.png",
       id: point.id || 0,
       name: point.name || '',
      latitude: latitude,
       longitude: longitude,
          width: 25,
        height: 48

  };
       return marker;
  
},
   

  
 })