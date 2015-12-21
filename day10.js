var R = require('ramda');

module.exports = {
    lookAndSay: function (digit) {
        return R.join('', R.flatten(digit.match(/(\d)\1*/g).map(curr => {
            return curr.length + curr[0];
        })));
    },
    lookAndSayNTimes(digit, n, cb){
        digit = this.lookAndSay(digit);
        if(n <= 1){
            cb(digit);
        }else {
            this.lookAndSayNTimes(digit, n - 1, cb);
        }
    }
};
module.exports.lookAndSayNTimes('1321131112', 40, digit => { console.log(digit.length)});