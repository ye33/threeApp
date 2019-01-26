export default (value, fmt = "YYYY-MM-DD") => {
  if (!value) return "";
  let d = new Date(value);
  var o = {
    "M+": d.getMonth() + 1,
    "D+": d.getDate(),
    "h+": d.getHours(),
    "m+": d.getMinutes(),
    "s+": d.getSeconds(),
    "q+": Math.floor((d.getMonth() + 3) / 3),
    S: d.getMilliseconds()
  };
  if (/(Y+)/.test(fmt)) {
    var res = String(d.getFullYear()).substr(4 - RegExp.$1.length);
    fmt = fmt.replace(RegExp.$1, res);
  }
  for (var str in o) {
    var reg = new RegExp("(" + str + ")");
    if (reg.test(fmt)) {
      var res =
        RegExp.$1.length > 1
          ? ("00" + o[str]).substr(String(o[str]).length)
          : o[str];
      fmt = fmt.replace(RegExp.$1, res);
    }
  }
  return fmt;
};
