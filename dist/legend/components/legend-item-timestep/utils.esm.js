import { objectSpread2 as _objectSpread2, defineProperty as _defineProperty } from '../../../_virtual/_rollupPluginBabelHelpers.js';
import dayjs from 'dayjs';

/**
 * Translate Moment units into DayJS units
 */

var getDayJsInterval = function getDayJsInterval(interval) {
  // Shorthand units don't have to be translated
  var momentToDayJSUnit = {
    years: 'year',
    quarters: 'quarter',
    months: 'month',
    weeks: 'week',
    days: 'day',
    hours: 'hour',
    minutes: 'minute',
    seconds: 'second',
    milliseconds: 'millisecond'
  };
  return momentToDayJSUnit[interval] || interval;
};

var addToDate = function addToDate(date, count) {
  var interval = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'days';
  var toEnd = arguments.length > 3 ? arguments[3] : undefined;
  var d = dayjs(date);
  return toEnd ? d.add(count, getDayJsInterval(interval)).endOf(getDayJsInterval(interval)) : d.add(count, getDayJsInterval(interval));
};
var formatDate = function formatDate(date) {
  var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'YYYY-MM-DD';
  return dayjs(date).format(format);
};
var formatDatePretty = function formatDatePretty(date) {
  var dateFormat = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'YYYY-MM-DD';
  var d = dayjs(date);
  var hasDays = dateFormat.includes('DD');
  var hasMonths = dateFormat.includes('MM');
  var months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEPT', 'OCT', 'NOV', 'DEC'];
  var day = d.format('DD');
  var month = d.month();
  var year = d.year();
  return "".concat(hasDays ? "".concat(day, " ") : '').concat(hasMonths ? "".concat(months[month], " ") : '').concat(year);
}; // startDate and endDate are string dates

var dateDiff = function dateDiff(startDate, endDate, interval) {
  var diff = dayjs(endDate).diff(dayjs(startDate), getDayJsInterval(interval));
  return diff * -1;
};
var getTicks = function getTicks() {
  var _newMarks2;

  var timelineConfig = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var minDate = timelineConfig.minDate,
      maxDate = timelineConfig.maxDate,
      interval = timelineConfig.interval,
      marks = timelineConfig.marks,
      dateFormat = timelineConfig.dateFormat; // If user defines their own markers let's parse them if he pass a date as a value

  if (marks) {
    var _newMarks = Object.keys(marks).reduce(function (acc, m) {
      if (typeof m === 'string') {
        var key = dayjs(m).diff(dayjs(minDate), getDayJsInterval(interval));
        return _objectSpread2(_objectSpread2({}, acc), {}, _defineProperty({}, key, marks[m]));
      }

      return _objectSpread2(_objectSpread2({}, acc), {}, _defineProperty({}, m, marks[m]));
    }, {});

    return _newMarks;
  } // Otherwise, let's add default marks at the begginig and the end


  var minMark = 0;
  var maxMark = dayjs(maxDate).diff(dayjs(minDate), getDayJsInterval(interval));
  var newMarks = (_newMarks2 = {}, _defineProperty(_newMarks2, minMark, {
    label: dayjs(minDate).format(dateFormat)
  }), _defineProperty(_newMarks2, maxMark, {
    label: dayjs(maxDate).format(dateFormat)
  }), _newMarks2);
  return newMarks;
}; // startDate and endDate are string dates

var gradientConverter = function gradientConverter(gradient, minDate, interval) {
  return Object.keys(gradient).reduce(function (acc, val) {
    return _objectSpread2(_objectSpread2({}, acc), {}, _defineProperty({}, dateDiff(val, minDate, interval), gradient[val]));
  }, {});
};

export { addToDate, dateDiff, formatDate, formatDatePretty, getTicks, gradientConverter };
//# sourceMappingURL=utils.esm.js.map
