var R = require('ramda');
var fs = require('fs');

module.exports = {
    isNice: function (str) {

        function containsAPairTwice(str) {
            var pairs = [... str].map((val, index, arr) => {
                if(val === arr[index+1] && (val !== arr[index-1] || val === arr[index-2])){
                    return val + val;
                }else if(val !== arr[index+1]){
                    return val + arr[index + 1];
                }
                return index;
            });
            return !R.allUniq(pairs);
        }

        function containsRepeatedLetter(str) {
            var repeats = [... str].filter((val, index, arr) => {
                return val === arr[index+2];
            });
            return repeats.length > 0;
        }
        return containsAPairTwice(str) && containsRepeatedLetter(str);
    },
    isNiceTotal: function (cb) {
        fs.readFile('day5input.txt', 'utf8', (err, data) => {
            if (err) {
                return console.log(err);
            }
            cb(data.split('\n').reduce((sum, curr) => {
                if (module.exports.isNice(curr)) {
                    return sum + 1;
                } else {
                    return sum;
                }
            }, 0));
        });
    }
};