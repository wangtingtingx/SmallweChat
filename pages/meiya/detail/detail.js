Page({
  data: {
    id:'0',
    content: '',
    list:{}
  },
  onLoad: function (params) {
    var that=this;
    this.setData({
      id: params.id,
      index:params.index
    })
    if(that.data.index==0){
        wx.request({
          url:'http://localhost/mock/list.json',
          header:{
            'Content-Type':'application/json'
          },
          success:function(res){
            for(var i in res.data){
              if(that.data.id==res.data[i].id){
                  that.setData({
                  list:res.data[i]
                })
              }
            }
            console.log(that.data.list)
          } 
       })
    }else if(that.data.index==1){
        wx.request({
          url:'http://localhost/mock/more.json',
          header:{
            'Content-Type':'application/json'
          },
          success:function(res){
            for(var i in res.data){
              if(that.data.id==res.data[i].id){
                  that.setData({
                  list:res.data[i]
                })
              }
            }
            console.log(that.data.list)
          }
          
        })
    }else if(that.data.index==2){
        wx.request({
          url:'http://localhost/mock/refresh.json',
          header:{
            'Content-Type':'application/json'
          },
          success:function(res){
            for(var i in res.data){
              if(that.data.id==res.data[i].id){
                  that.setData({
                  list:res.data[i]
                })
              }
            }
            console.log(that.data.list)
          }
          
        })
    }
  },
})
