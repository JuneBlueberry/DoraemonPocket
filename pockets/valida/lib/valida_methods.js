/**
 * 哆啦A梦-验证类
 */
class Valida_Methods {

  /**
   * 
   * @param {正则表达式} reg 
   * @param {待验证字符串} str 
   * @param {可选条件} params 
   * @param    {可选条件.最小长度} params.minLength
   * @param    {可选条件.最大长度} params.maxLength
   * @param    {可选条件.返回失败文案} params.errMessage
   * @param    {可选条件.验证通过回调} params.success
   * @param    {可选条件.验证失败回调} params.fail
   * @returns
   */
  static RegCheck (reg, str, params) {
    if(!(reg instanceof RegExp)) throw '请输入正则验证参数'
    if(typeof str !== 'string') throw '待验证参数需为字符串类型'
    // 验证最小值
    if(params && params.minLength && params.minLength > str.length) return false
    // 验证最大值
    if(params && params.maxLength && params.maxLength < str.length) return false
    let _result = reg.test(str)
    if (_result) {
      if (params && params.success) params.success()
    } else {
      if (params && params.fail) params.fail()
      if (params && params.errMessage) return params.errMessage
    }
    return _result
  }
}

export default Valida_Methods