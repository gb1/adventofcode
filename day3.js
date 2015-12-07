/**
 * Solution for day3 of http://adventofcode.com/
 */

var fs = require('fs');

module.exports = {

    calculate: function(directions){

        var position = {x:0, y:0};
        var visited = new Set();
        visited.add(JSON.stringify(position));

        directions.split('').forEach(function(go){
           switch(go){
               case '^':
                   position.x++;
                   break;
               case '>':
                   position.y++;
                   break;
               case '<':
                   position.y--;
                   break;
               case 'v':
                   position.x--;
                   break;
           }
           visited.add(JSON.stringify(position));
        });

        return visited.size;
    },

    calculateTotal: function(cb){
        fs.readFile('day3input.txt', 'utf8', function (err, data) {
            if (err) {
                return console.log(err);
            }
            cb(module.exports.calculate(data));
        });
    }
};



