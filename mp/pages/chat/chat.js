// pages/chat/chat.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  onLoad: function (options) {
    let chatItems = []
    for (let c=0; c<20; c++) {
      let item = {
        idx: c,
        text: 'hello ' + c
      }
      chatItems.push(item)
    }
    this.setData({
      chatItems: chatItems,
      scrollTop: 0
    })
  },

  onBlur: function(options) {
    console.log('blurred')
  },

  bindKeyInput: function(options) {
    console.log('options', options)
  }

})