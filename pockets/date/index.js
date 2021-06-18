/*
 * @Author: blueberry 
 * @Date: 2021-06-18 11:31:01 
 * @Last Modified by: blueberry
 * @Last Modified time: 2021-06-18 18:46:40
 */

/**
 * 初始化
 * @param {传入时间} time 
 *      Date类型
 *      时间戳(13位标准时间戳，10-12位后后面补0)
 *      时间格式化字符串(格式：yyyy-MM-dd HH:mm:ss:fff,年月日需要有，时间没有的补全)
 */
function Doraemon_Date(time) {
    let _time
    if(!time) _time = new Date()
    else if(Object.prototype.toString.call(time) === '[object Date]') _time = time
    else if(typeof time === 'number') {
        if(time.toString().length == 13) _time = new Date(time)
        else if (time.toString().length >= 10 && time.toString().length < 13) _time = new Date(parseInt(time.toString().padEnd(13, 0)))
        else throw '请输入正确的时间戳'
    }
    else if(typeof time === 'string') {

    }
    else throw '输入的时候参数不合法'
    return new Date_Method(_time)
}

class Date_Method {
    
    constructor(time){
        this.time = time
        this.year = time.getFullYear()
        this.month = time.getMonth()
        this.date = time.getDate()
        this.hour = time.getHours()
        this.minite = time.getMinutes()
        this.second = time.getMinutes()
        this.millisecond = time.getMilliseconds()

        this.day = time.getDay()
    }

    /**
     * 时间格式化
     * @param {格式化的规则} str 
     *      yyyy: 
     *      MM
     * @returns 时间字符串
     */
    format(str){
        return `${this.year}-${this.month}-${this.date} ${this.hour}:${this.minite}:${this.second}`
    }

}

export default Doraemon_Date