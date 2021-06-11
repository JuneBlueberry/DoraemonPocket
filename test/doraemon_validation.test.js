const chai = require('chai')
const expect = chai.expect
import { Doraemon_Valida } from '../index'

describe('Doraemon_Valida_Test', function() {
  it('123456 => 数字 => yes', function() {
    expect(Doraemon_Valida.RegCheck(Doraemon_Valida.RegTypes.Reg_Number ,'123456')).to.equal(true)
  })
  it('wu123 => 数字 => no', function() {
    expect(Doraemon_Valida.RegCheck(Doraemon_Valida.RegTypes.Reg_Number, 'wu123')).to.equal(false)
  })
  it('123456 => 长度大于等于3的数字 => yes', function() {
    expect(Doraemon_Valida.RegCheck(Doraemon_Valida.RegTypes.Reg_Number,'123456', {minLength: 3})).to.equal(true)
  })
  it('12 => 长度大于等于3的数字 => no', function() {
    expect(Doraemon_Valida.RegCheck(Doraemon_Valida.RegTypes.Reg_Number,'12', {minLength: 3})).to.equal(false)
  })
  it('123456 => 长度大于等于3，小于等于10的数字 => yes', function() {
    expect(Doraemon_Valida.RegCheck(Doraemon_Valida.RegTypes.Reg_Number,'123456', {minLength: 3, maxLength: 10})).to.equal(true)
  })
  it('1236wwe => 长度大于等于3，小于等于10的数字 => no', function() {
    expect(Doraemon_Valida.RegCheck(Doraemon_Valida.RegTypes.Reg_Number,'1236wwe', {minLength: 3, maxLength: 10})).to.equal(false)
  })
  it('123456ss => 数字 => no', function() {
    expect(Doraemon_Valida.RegCheck(Doraemon_Valida.RegTypes.Reg_Number ,'123456ss', {errMessage: '请输入正确的数字'})).to.equal('请输入正确的数字')
  })
})