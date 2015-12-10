var fs = require('fs');

module.exports = {

    lights: null,
    brightness: 0,

    command: function(str){

        if(!this.lights){
            lights = this.createList();
        }

        var words = str.split(' ');
        var from = {x:0, y:0};
        var to = {x:0, y:0};
        var op;
        var result = 0;

        if(str.includes('turn')){
            from.x = words[2].split(',')[0];
            from.y = words[2].split(',')[1];
            to.x = words[4].split(',')[0];
            to.y = words[4].split(',')[1];
        }

        if(str.includes('on')){ op = 'ON'};
        if(str.includes('off')){ op = 'OFF'};

        if(str.includes('toggle')){
            op = 'TOGGLE';
            from.x = words[1].split(',')[0];
            from.y = words[1].split(',')[1];
            to.x = words[3].split(',')[0];
            to.y = words[3].split(',')[1];
        }

        this.lights = this.lights.map((curr, index) => {
            if(index <= to.x && index >= from.x) {
                return curr.map((c, i) => {
                    if(i <= to.y && i >= from.y) {
                        if (op === 'ON') {
                            return c + 1;
                        }
                        if (op === 'OFF') {
                            if(c > 0) return c - 1;
                        }
                        if (op === 'TOGGLE') {
                            return c + 2;;
                        }
                    }
                    return c;
                });
            }
            return curr;
        });

        return this.lights.reduce((sum, value) => {
            return sum + value.reduce((s, v) =>{
                return s + v;
            },0);
        }, 0);

    },

    createList: function(){
        this.lights = [];
        for(var i = 0; i < 1000; i++){
            this.lights[i] = 0;
        }
        this.lights = this.lights.map((curr, index, array) => { return array });
    },

    total: function(cb){
        fs.readFile('day6input.txt', 'utf8', (err, data) => {
            if (err) {
                return console.log(err);
            }

            data.split('\n').forEach((line) => {
                this.brightness = this.command(line);
            });

            cb(this.brightness);
        });
    }
};
//
//console.log(module.exports.command('toggle 0,0 through 999,999'));
//console.log(module.exports.command('toggle 0,0 through 999,999'));
//console.log(module.exports.command('turn on 0,0 through 0,0'));
//console.log(module.exports.command('turn off 0,0 through 499,499'));



