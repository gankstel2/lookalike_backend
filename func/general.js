/**
 * Created by adithep on 10/16/2017 AD.
 */

//Server
var express = require('express');

class general {
    pop_undefined(options) {
        return options.filter((n) => n != undefined || n != '' || n != null);
    }

    caltimediff(diff) {
        //var diffDays = diff / (24 * 60 * 60 * 1000);
        //return format time 00:00:oo ==> H:i:s
        //var stringTime = 
        //return new Array(diffHours, diffMinutes, diffSeconds);
        var diffSeconds = parseInt(diff / 1000 % 60);
        var diffMinutes = parseInt(diff / (60 * 1000) % 60);
        var diffHours = parseInt(diff / (60 * 60 * 1000) % 24);
        var h = (diffHours.toString().length == 1) ? '0' + diffHours.toString() : diffHours;
        return h + ':' + diffMinutes + ':' + diffSeconds;
    }
}
// general.prototype.pop_undefined = function(options) {  return options.filter((n) => n != undefined || n != ''  ); };

module.exports = general;