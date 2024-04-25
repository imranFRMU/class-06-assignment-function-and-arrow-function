"use strict";
function mycalc(n1, n2, sign) {
    if (sign == "+") {
        console.log(n1 + n2);
    }
    else if (sign == "-") {
        console.log(n1 - n2);
    }
    else {
        console.log("invalid");
    }
}
mycalc(10, 5, "+");
