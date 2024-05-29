import React from 'react';
import { SortableHandle } from 'react-sortable-hoc';
import Icon from '../../../icon/index.esm.js';

var LegendItemDrag = function LegendItemDrag() {
  return /*#__PURE__*/React.createElement("span", {
    className: "vizzuality__c-legend-handler"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "icon-drag-dots",
    className: "-small"
  }));
};

var LegendItemDrag$1 = SortableHandle(LegendItemDrag);

export default LegendItemDrag$1;
//# sourceMappingURL=index.esm.js.map
