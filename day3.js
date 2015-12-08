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
    },

    //filter by index%2
    //use tail from rambda

    calculateRoboSanta: function(directions){

        var dirs = directions.split('');

        var santa = dirs.filter(function(elem, index){
            return index % 2 === 0;
        });

        var robo = dirs.filter(function(elem, index){
            return index % 2 !== 0;
        });

        var position = {x:0, y:0};
        var visited = new Set();
        visited.add(JSON.stringify(position));

        santa.forEach(function(go){
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

        var position = {x:0, y:0};
        robo.forEach(function(go){
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

    calculateTotalRoboSanta: function(cb){
        fs.readFile('day3input.txt', 'utf8', function (err, data) {
            if (err) {
                return console.log(err);
            }
            cb(module.exports.calculateRoboSanta(data));
        });
    },

};















