/**
 * Solution for day2 of http://adventofcode.com/
 */

var fs = require('fs');

module.exports = {

    calculate: function(dimensions){

        var dims = dimensions.split('x')
        var l, w, h;
        l = dims[0];
        w = dims[1];
        h = dims[2];

        dims.sort(function(a, b){
            return a - b;
        });

        var area = (2*l*w + 2*w*h + 2*h*l);

        return area + dims[0] * dims[1];
    },

    calculateTotal: function(cb){
        fs.readFile('day2input.txt', 'utf8', function (err, data) {
            if (err) {
                return console.log(err);
            }
            process(data);
        });

        function process(data) {

            var result;
            var input = data.split('\n');

            result = input.reduce(function(sum, curr){
                return sum + module.exports.calculate(curr);
            }, 0);

            cb(result);
        }
    },

    ribbon: function(dimensions){

        var dims = dimensions.split('x')
        var l, w, h;
        l = dims[0];
        w = dims[1];
        h = dims[2];

        dims.sort(function(a, b){
            return a - b;
        });

        return (dims[0]*2 + dims[1]*2) + (l*w*h);

    },

    calculateTotalRibbon: function(cb){

        fs.readFile('day2input.txt', 'utf8', function (err, data) {
            if (err) {
                return console.log(err);
            }
            process(data);
        });

        function process(data) {

            var result = 10;
            var input = data.split('\n');

            result = input.reduce(function(sum, curr){
                return sum + module.exports.ribbon(curr);
            }, 0);

            cb(result);
        }

    }
};

//module.exports.calculateTotal(function(result){ console.log(result)});


