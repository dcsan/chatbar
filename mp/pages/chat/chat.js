// pages/chat/chat.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    chatItems: []
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

  blurInput: function(options) {
    console.log('blurred')
  },

  focusInput: function(options) {
    console.log('focused')
  },

  bindKeyInput: function(options) {
    console.log('options', options)
  }

})