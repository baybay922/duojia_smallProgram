 // pages/login.js
import api from '../../server/api.js'
import { passwordLogin } from '../../server/interface.js' 
Page({
  data: {
    phoneVal: '',
    passwordVal: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //
  },
  getPhoneVal(e){//获取用户手机号
    console.log(e.detail.value)
    this.setData({
      phoneVal: e.detail.value
    })
  },
  getPasswordVal(e){//获取用户密码
    this.setData({
      passwordVal: e.detail.value
    })
  },
  loginBtnClick(){//登录
    api.post(passwordLogin, {
      data: {
        loginName: this.phoneVal, 
        pwd: this.passwordVal,
        validCode: ''
      }
    }).then(res => {
      console.log(res)
    }).catch(err => {
      wx.showToast({
        title: err.msg,
        icon: 'none'
      })
    })
  }
  
})