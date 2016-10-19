Page({
  data:{
    current: 0,
    list:[],
    loadingHidden: false,
    refreshHidden: true,
    loadmoreHidden: true,  
    imgUrls:[
      '/images/1.png',
      '/images/2.png'
    ],
    banner:{
      autoplay:true,
      interval:800,
      duration:300
    }
  },

  onLoad:function(){
    var that=this;
    wx.request({
      url:'http://localhost/mock/list.json',
      header:{
        'Content-Type':'application/json'
      },
      success:function(res){
        setTimeout(function(){
          that.setData({
            list:res.data,
            loadingHidden:true
        });
        },1500); 
      },
       fail:function(error){
        console.log(error);
      }
    });
  },



//上拉刷新，下拉加载。
  actionToupper: function () {
    var that = this;
    this.setData({
      refreshHidden: false
    });
    wx.request({
      url: 'http://localhost/mock/refresh.json',
      success: function (res) {
        setTimeout(function () {
          that.setData({
            list: res.data.concat(that.data.list),
            refreshHidden: true
          });
        }, 1500);
      }
    });
  },

  onPullDownRefresh: function () {
    console.log(0);
  },

  actionTolower: function () {
    console.log(6);
    var that = this;
    this.setData({
      loadmoreHidden: false
    });
    wx.request({
      url: 'http://localhost/mock/more.json',
      success: function (res) {
        setTimeout(function () {
          that.setData({
            list: that.data.list.concat(res.data),
            loadmoreHidden: true
          });
        }, 1500);
      }
    });
  }

  // switchSlider: function (event) {
  //   this.setData({
  //     current: event.target.dataset.index
  //   })
  // },

  // changeSlider: function (event) {
  //   this.setData({
  //     current: event.detail.current
  //   });
  // }
})
