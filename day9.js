var Combinatorics = require('js-combinatorics');
var R = require('ramda');
var fs = require('fs');

module.exports = {

    places: new Set(),
    perms: [],
    distances: new Map(),

    loadInstruction: function (str) {
        var from = str.split(' ')[0];
        var to  = str.split(' ')[2];
        this.places.add(from);
        this.places.add(to);

        var distance = str.split(' ')[4];
        this.distances.set(from + to, parseInt(distance));
        this.distances.set(to + from, parseInt(distance));
    },

    calculate: function(){
        this.perms = Combinatorics.permutation(Array.from(this.places)).toArray();
        return this.perms.reduce( (acc, val) => {
            var distance = R.aperture(2, val).reduce( (a, v) => {
                return a + parseInt(this.distances.get(v[0] + v[1]));
            }, 0);
            if(distance < acc) acc = distance;
            return acc;
        }, 1000);
    },

    calculateLongest: function(){
        this.perms = Combinatorics.permutation(Array.from(this.places)).toArray();
        return this.perms.reduce( (acc, val) => {
            var distance = R.aperture(2, val).reduce( (a, v) => {
                return a + parseInt(this.distances.get(v[0] + v[1]));
            }, 0);
            if(distance > acc) acc = distance;
            return acc;
        }, 0);
    },

    reset: function(){
        this.places = new Set();
        this.perms = [];
        this.distances = new Map();
    },

    loadInstructionsFromFile: function(cb, longest){
        fs.readFile('day9input.txt', 'utf8', (err, data) => {
            if (err) {
                console.log(err);
            }

            data.split('\n').forEach((row) => {
               this.loadInstruction(row);
            });

            if(longest){
                cb(this.calculateLongest());
            }else{
                cb(this.calculate());
            }
        });
    }
}

