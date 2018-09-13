const search = 'http://fanyi.baidu.com/?aldtype=16047';

// URL 查询参数转JSON格式
// ES6

export const queryByES6 = (search = '') => ((querystring = '') => (q => (querystring.split('&').forEach(item => (kv => kv[0] && (q[kv[0]] = kv[1]))(item.split('='))), q))({}))(search.split('?')[1]);

// ES5

export const queryByES5One = (search) => {
  if (search === void 0) { search = ''; }
  return (function(querystring) {
    if (querystring === void 0) { querystring = '';}
    return (function(q) {
      return (querystring.split('&').forEach(function(item) {
        return (function(kv) {
          return kv[0] && (q[kv[0]] = kv[1]);
        })(item.split('='));
      }), q)
    })({})
  })(search.split('?')[1])
}


// export const queryByES5Two = (search) => {
//   if (search === void 0) return {};
//   return (function(querystring) {
//     if (querystring === void 0) return {};
//     let obj = {};
//     const arr = querystring.split('&');
//     arr.filter((item, index) => index % 2 === 0).forEach((q, i) => obj[q] = arr[i + 1]);
//     return obj;
//   })(search.split('?')[1]);
// }
// console.log(queryByES5Two(window.location.search));
