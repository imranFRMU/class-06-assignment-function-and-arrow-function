"use strict";
function mycal(n1, n2, sign) {
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
mycal(10, 5, "/");
