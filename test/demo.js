import {Doraemon_Date} from '../index'

console.log(Doraemon_Date().format())
console.log(Doraemon_Date(new Date()).format())
console.log(Doraemon_Date(1562169599).format())

console.log(Doraemon_Date().format('YYYY-M-dd'))
console.log(Doraemon_Date(new Date()).format('YYYY-MM-dd'))
console.log(Doraemon_Date(1562169599).format('YYYY-MM-d'))