/*
 * @Author: blueberry 
 * @Date: 2021-06-18 11:31:01 
 * @Last Modified by: blueberry
 * @Last Modified time: 2021-06-24 15:35:46
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
        
        this.year = time.getFullYear()                  //四位数的年份
        this.month = time.getMonth() + 1                //月份
        this.date = time.getDate()                      //每月的第几天
        this.hour = time.getHours()                     //时
        this.minite = time.getMinutes()                 //分
        this.second = time.getMinutes()                 //秒
        this.millisecond = time.getMilliseconds()       //毫秒

        this.weeklist = ['星期一','星期二','星期三','星期四','星期五','星期六','星期天']

        this.day = time.getDay()                        //每周的第几天
        this.week = this.weeklist[this.day]             //周几
    }

    /**
     * 时间格式化
     * @param {格式化的规则} str 
     *      yyyy: 
     *      MM
     * @returns 时间字符串
     */
    format(str){
        if(!str) str = 'YYYY-MM-dd HH:mm:ss'
        // 替换年份
        str = str.replace(/YYYY/, this.year)
        // 替换月份
        str = str.replace(/MM/, this.month >= 10 ? this.month : '0' + this.month)
        str = str.replace(/M/, this.month)
        // 替换每月的第几天
        str = str.replace(/dd/, this.date >= 10 ? this.date : '0' + this.date)
        str = str.replace(/d/, this.date)

        // 替换时
        str = str.replace(/HH/, this.hour >= 10 ? this.hour : '0' + this.hour)
        // 替换分
        str = str.replace(/mm/, this.minite >= 10 ? this.minite : '0' + this.minite)
        // 替换秒
        str = str.replace(/ss/, this.second >= 10 ? this.second : '0' + this.second)

        return str
    }

}

export default Doraemon_Date