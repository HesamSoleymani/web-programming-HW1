export function persianDigits(str) {
  var persian = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  return str.replace(/[0-9]/g, function (w) {
    return persian[+w];
  });
}
