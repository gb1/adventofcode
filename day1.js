/**
 * Solution for day1 of http://adventofcode.com/
 */

var fs = require('fs');

exports.run = function (cb) {
    fs.readFile('day1input.txt', 'utf8', function (err, data) {
        if (err) {
            return console.log(err);
        }
        process(data);
    });

    function process(data) {

        var input = data.split('');

        result = input.reduce((sum, curr) => {

            if (curr === '(') {
                return sum + 1;
            } else {
                return sum - 1;
            }

        }, 0);

        cb(result);
    }
}

//exports.run( function(result){ console.log(result)});