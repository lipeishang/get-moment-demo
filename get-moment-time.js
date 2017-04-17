/**
 * Created by lipeishang on 17-4-17.
 */
const moment = require('moment');

function getMoment() {
    var time = moment().format('YYYY-MM-DD HH:mm:ss');
    console.log(time);

    var time1 = moment().add(9,'hours').format('HH:mm:ss');  //2014年10月01日 //2 years ago
    console.log(time1);

    var day = moment("1995-12-25").format('d');
    console.log(day);

   var duringTime = moment("20150417", "YYYYMMDD").fromNow();
    console.log(duringTime);
}

getMoment();