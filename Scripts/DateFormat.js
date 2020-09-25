﻿//时间格式化处理,y年,M月,d日,H小时24小时制,h小时12小时制,m分钟,s秒,f毫秒,q季度
String.prototype.dateFormat = function (fmt) { var jsondate = this.replace("/Date(", "").replace(")/", ""); if (jsondate.indexOf("+") > 0) { jsondate = jsondate.substring(0, jsondate.indexOf("+")) } else { if (jsondate.indexOf("-") > 0) { jsondate = jsondate.substring(0, jsondate.indexOf("-")) } } var date = new Date(parseInt(jsondate, 10)); var o = { "M+": date.getMonth() + 1, "d+": date.getDate(), "H+": date.getHours(), "h+": date.getHours() > 12 ? date.getHours() - 12 : date.getHours(), "m+": date.getMinutes(), "s+": date.getSeconds(), "q+": Math.floor((date.getMonth() + 3) / 3), }; if (/(y+)/.test(fmt)) { fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length)) } if (/(f+)/.test(fmt)) { fmt = fmt.replace(RegExp.$1, (date.getMilliseconds() + "").substr(0, RegExp.$1.length)) } for (var k in o) { if (new RegExp("(" + k + ")").test(fmt)) { fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length))) } } return fmt };

String.prototype.dateFormatStr = function (fmt) { var jsondate = this.replace(/-/g, "/"); var date = new Date(jsondate); var o = { "M+": date.getMonth() + 1, "d+": date.getDate(), "H+": date.getHours(), "h+": date.getHours() > 12 ? date.getHours() - 12 : date.getHours(), "m+": date.getMinutes(), "s+": date.getSeconds(), "q+": Math.floor((date.getMonth() + 3) / 3), }; if (/(y+)/.test(fmt)) { fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length)) } if (/(f+)/.test(fmt)) { fmt = fmt.replace(RegExp.$1, (date.getMilliseconds() + "").substr(0, RegExp.$1.length)) } for (var k in o) { if (new RegExp("(" + k + ")").test(fmt)) { fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length))) } } return fmt };