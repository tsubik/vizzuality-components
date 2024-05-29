import { typeof as _typeof, objectSpread2 as _objectSpread2, defineProperty as _defineProperty } from '../_virtual/_rollupPluginBabelHelpers.js';
import { isValidElement } from 'react';

// marks: https://github.com/react-component/slider/blob/master/src/common/Marks.tsx
// To maintain the same default styles as before (not to break apps), we remove them

var defaultMarkStyle = {
  transform: 'none',
  msTransform: 'none'
};
var getStyledMarks = function getStyledMarks(marks) {
  var keys = Object.keys(marks);
  return keys.map(function (key) {
    var mark = marks[key];
    var markIsObject = _typeof(mark) === 'object' && ! /*#__PURE__*/isValidElement(mark);

    if (markIsObject) {
      return _objectSpread2({
        style: defaultMarkStyle
      }, mark);
    }

    return {
      label: mark,
      style: defaultMarkStyle
    };
  }).reduce(function (res, mark, index) {
    return _objectSpread2(_objectSpread2({}, res), {}, _defineProperty({}, keys[index], mark));
  }, {});
};

export { getStyledMarks };
//# sourceMappingURL=utils.esm.js.map
