var md5 = require('md5');

module.exports = {

    md5: function(input){
        return md5(input);
    },

    calculate: function(input){
        var answer = 0;
        var hash = '';

        while(!hash.startsWith('00000')) {
            hash= md5(input + answer);
            answer++;
        };
        return answer--;
    }
};