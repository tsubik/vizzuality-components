import compact from 'lodash/compact';

/**
 * CODE COPIED FROM:
 * https://github.com/Vizzuality/layer-manager/blob/v1.13.2/src/utils/query.js
 *
 * By including the content of the file here, we can remove the layer-manager v1 as a dependency
 */
/**
 * Params should have this format => { key:'xxx', key2:'xxx' }
 * Keys to search should be in this format {{key}}
 * @param {String} originalStr
 * @param {Object} params
 */

var substitution = function substitution(originalStr) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var str = originalStr;
  Object.keys(params).forEach(function (key) {
    str = str.replace(new RegExp("{{".concat(key, "}}"), 'g'), params[key]).replace(new RegExp("{".concat(key, "}"), 'g'), params[key]);
  });
  return str;
};
/**
 * Params should have this format => { where1: { { key:'xxx', key2:'xxx' } }},
 * Keys to search should be in this format {{key}}
 * @param {String} originalStr
 * @param {Object} params
 */

var concatenation = function concatenation(originalStr) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var str = originalStr;
  var sql;
  Object.keys(params).forEach(function (key) {
    sql = "".concat(compact(Object.keys(params[key]).map(function (k) {
      var value = params[key][k];

      if (Array.isArray(value) && !!value.length) {
        // window.isNaN is needed here as Number.isNaN returns
        // false in the case Number.isNaN('string'). please dont change.
        var mappedValue = value.map(function (v) {
          return Number.isNaN(v) ? "'".concat(v, "'") : v;
        }); // eslint-disable-line

        return "".concat(k, " IN (").concat(mappedValue.join(', '), ")");
      }

      if (value) {
        return Number.isNaN(value) ? "".concat(k, " = '").concat(value, "'") : "".concat(k, " = ").concat(value); // eslint-disable-line
      }

      return null;
    })).join(' AND '));
    if (sql && key.startsWith('where')) sql = "WHERE ".concat(sql);else if (sql && key.startsWith('and')) sql = "AND ".concat(sql);else sql = '';
    str = str.replace(new RegExp("{{".concat(key, "}}"), 'g'), sql);
    str = str.replace(new RegExp("{".concat(key, "}"), 'g'), sql);
  });
  return str;
};
/**
 * Replace function
 * @param {String} string
 * @param {Object} params
 * @param {Object} sqlParams
 */

var replace = function replace(originalStr) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var sqlParams = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var str = originalStr;

  if (typeof str === 'string') {
    str = substitution(str, params);
    str = concatenation(str, sqlParams);
  }

  return str;
};

export { concatenation, replace, substitution };
//# sourceMappingURL=utils.esm.js.map
