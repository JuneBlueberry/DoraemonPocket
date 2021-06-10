## 验证类

> 说明

- 提供常用正则验证
- 提供全面的正则表达式

> 安装

- 待完善

> 使用

``` javascript
import { Doraemon_Valida } from '../index'

//验证是否为姓名
Doraemon_Valida.RegCheck(Doraemon_Valida.RegTypes.Reg_Name ,'doraemon123456')
```

> 文档

###### 常见的正则验证

- Reg_Name: 姓名
- Reg_Username: 用户名（字母，数字，下划线，减号）
- Reg_Password: 邮箱
- Reg_Mobile: 手机号
- Reg_IDCard: 身份证
- Reg_QQCode: QQ号
- Reg_WXCode: 微信号
- Reg_CarCode: 车牌号