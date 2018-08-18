"use strict";
var DaysoftheWeek;
(function (DaysoftheWeek) {
    DaysoftheWeek[DaysoftheWeek["SUN"] = 0] = "SUN";
    DaysoftheWeek[DaysoftheWeek["MON"] = 1] = "MON";
    DaysoftheWeek[DaysoftheWeek["TUE"] = 2] = "TUE";
    DaysoftheWeek[DaysoftheWeek["WED"] = 3] = "WED";
    DaysoftheWeek[DaysoftheWeek["THU"] = 4] = "THU";
    DaysoftheWeek[DaysoftheWeek["FRI"] = 5] = "FRI";
    DaysoftheWeek[DaysoftheWeek["SAT"] = 6] = "SAT";
})(DaysoftheWeek || (DaysoftheWeek = {}));
var day;
day = DaysoftheWeek.FRI;
console.log(day);
