/**
 * Created by lipeishang on 17-4-17.
 */
const moment = require('moment');

function getMoment() {
   var time = moment().format('MMMM Do YYYY, h:mm:ss a');
    console.log(time);

   var duringTime = moment("20111031", "YYYYMMDD").fromNow();
    console.log(duringTime);
}

getMoment();