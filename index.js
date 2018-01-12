/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author KingMario
*/
module.exports = function(source) {
  this.value = source;

  var pd = require('pretty-data').pd;

  return "module.exports = " + JSON.stringify(pd.xmlmin(source))
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029');
}