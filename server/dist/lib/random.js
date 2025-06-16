"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.random = random;
// Exporting a function named `random` that generates a random string of a given length.
function random(len) {
    let options = "erdctfbghujmrdtfbghunjmrxctfvygbhun";
    let length = options.length;
    let ans = "";
    for (let i = 0; i < len; i++) {
        ans += options[Math.floor(Math.random() * length)];
    }
    return ans;
}
