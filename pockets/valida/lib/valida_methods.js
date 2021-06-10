/**
 * 常用正则验证
 * str: 验证字符串
 * params: 可选参数
 *   minLength: 最小长度
 *   maxLength: 最大长度
 */
class Valida_Methods {


  static RegCheck (reg, str, params) {
    if(!(reg instanceof RegExp)) throw '请输入正则验证参数'
    if(typeof str !== 'string') throw '待验证参数需为字符串类型'
    // 验证最小值
    if(params && params.minLength && params.minLength > str.length) return false
    // 验证最大值
    if(params && params.maxLength && params.maxLength < str.length) return false
    return reg.test(str)
  }
}

export default Valida_Methods