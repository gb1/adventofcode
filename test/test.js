
var expect = require('chai').expect;
var day1 = require('../day1.js');
var day2 = require('../day2.js');
var day3 = require('../day3.js');

describe('test the testing tests', function(){
    it('should pass when tests is working', function(){
        expect(true).to.be.true;
    })
});

describe('day1', function(){

    it('should calculate the floor correctly', function(done){
        day1.run(function(result){
            expect(result).to.be.equal(74);
            done();
        });
    })

});

describe('day2', function(){

    it('should calculate the examples correctly', function(done){
        expect(day2.calculate('2x3x4')).to.be.equal(58);
        expect(day2.calculate('1x1x10')).to.be.equal(43);
        done();
    });


    it('should calculate the total correctly', function(done){
        day2.calculateTotal(function(result){
            expect(result).to.be.equal(1588178);
            done();
        });
    });

    it('should calculate the ribbon examples correctly', function(done){
        expect(day2.ribbon('2x3x4')).to.be.equal(34);
        expect(day2.ribbon('1x1x10')).to.be.equal(14);
        done();
    });

    it('should calculate the total ribbon correctly', function(done){
        day2.calculateTotalRibbon(function(result){
            expect(result).to.be.equal(3783758);
            done();
        });
    });

});

describe('day3', function(){

    it('should calculate the examples correctly', function(done){
        expect(day3.calculate('>')).to.be.equal(2);
        expect(day3.calculate('^>v<')).to.be.equal(4);
        done();
    });

    it('should calculate the file input correctly', function(done){
        day3.calculateTotal(function(result){
            expect(result).to.be.equal(2565);
            done();
        });
    });

});

describe('day3-robo-santa', function(){

    it('should calculate the examples correctly', function(done){
        expect(day3.calculateRoboSanta('^v')).to.be.equal(3);
        expect(day3.calculate('^>v<')).to.be.equal(3);
        expect(day3.calculate('^v^v^v^v^v')).to.be.equal(11);
        done();
    });

    it('should calculate the file input correctly', function(done){
        day3.calculateTotalRoboSanta(function(result){
            expect(result).to.be.equal(1234);
            done();
        });
    });

});