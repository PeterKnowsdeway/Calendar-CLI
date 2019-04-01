const Moment = require('moment');
const MomentRange = require('moment-range');
const moment = MomentRange.extendMoment(Moment);
const chalk = require('chalk');
var _ = require('lodash');

//var a = moment("2019-01-01");
//var b = moment("2019-12-31");

//for (var m = moment(a); m.isBefore(b); m.add(1, 'days')) {
//    var day = (m.format('dddd'));
//    var date = (m.format('DD'));
//    var month = (m.format('MMMM'))
 //   console.log(_.map(month));
//}
const start = new Date(2019, 1, 1); // 1st
const two   = new Date(2019, 1, 2); // 2nd
const end   = new Date(2019, 12, 31); // 5th
const range1 = moment.range(start, end);
const range2 = moment.range(start, two);
const acc = Array.from(range1.byRange(range2));

acc.length == 31 // true
console.log(chalk.blue(acc.map(m => _.map(m.format('DD'))))); // ['01','02','03','04','05']

