var R = require('ramda');
var fs = require('fs');

module.exports = {

    isNice: function(str){
        var vowels = ['a','e','i','o','u'];
        var naughtyStrings = ['ab','cd','pq','xy'];

        function containsThreeVowels(s){
            return [... s].filter(function(val){
                return R.contains(val, vowels);
            }).length > 2;
        }

        function containsNoNaughtys(s){
            return [... s].filter(function(val, index, arr){
                    return R.contains(val + arr[index+1], naughtyStrings);
                }).length === 0;
        }

        function containsADouble(s){
            return [... s].filter(function(val, index, arr){
                    return val === arr[index+1];
                }).length > 0;
        }
        return(containsThreeVowels(str) && containsNoNaughtys(str) && containsADouble(str));
    },

    isNiceTotal: function(cb){
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
