var expect = require('chai').expect;
var day1 = require('../day1.js');
var day2 = require('../day2.js');
var day3 = require('../day3.js');
var day4 = require('../day4.js');
var day5 = require('../day5.js');

describe('test the testing tests', function () {
    it('should pass when tests is working', function () {
        expect(true).to.be.true;
    })
});

describe('day1', function () {

    it('should calculate the floor correctly', function (done) {
        day1.run(function (result) {
            expect(result).to.be.equal(74);
            done();
        });
    })

});

describe('day2', function () {

    it('should calculate the examples correctly', function (done) {
        expect(day2.calculate('2x3x4')).to.be.equal(58);
        expect(day2.calculate('1x1x10')).to.be.equal(43);
        done();
    });


    it('should calculate the total correctly', function (done) {
        day2.calculateTotal(function (result) {
            expect(result).to.be.equal(1588178);
            done();
        });
    });

    it('should calculate the ribbon examples correctly', function (done) {
        expect(day2.ribbon('2x3x4')).to.be.equal(34);
        expect(day2.ribbon('1x1x10')).to.be.equal(14);
        done();
    });

    it('should calculate the total ribbon correctly', function (done) {
        day2.calculateTotalRibbon(function (result) {
            expect(result).to.be.equal(3783758);
            done();
        });
    });

});

describe('day3', function () {

    it('should calculate the examples correctly', function (done) {
        expect(day3.calculate('>')).to.be.equal(2);
        expect(day3.calculate('^>v<')).to.be.equal(4);
        done();
    });

    it('should calculate the file input correctly', function (done) {
        day3.calculateTotal(function (result) {
            expect(result).to.be.equal(2565);
            done();
        });
    });

});

describe('day3-robo-santa', function () {

    it('should calculate the examples correctly', function (done) {
        expect(day3.calculateRoboSanta('^v')).to.be.equal(3);
        expect(day3.calculateRoboSanta('^>v<')).to.be.equal(3);
        expect(day3.calculateRoboSanta('^v^v^v^v^v')).to.be.equal(11);
        done();
    });

    it('should calculate the file input correctly', function (done) {
        day3.calculateTotalRoboSanta(function (result) {
            expect(result).to.be.equal(2639);
            done();
        });
    });
});

describe('day4', function () {

    it('should calculate MD5 hashes correctly', function (done) {
        expect(day4.md5('abcdef609043')).to.be.equal('000001dbbfa3a5c83a2d506429c7b00e');
        done();
    });

    //too slow to run each time :-S!
    //it('should calculate the examples correctly', function (done) {
    //    this.timeout(30000);
    //    expect(day4.calculate('abcdef')).to.be.equal(609043);
    //    done();
    //});
});

describe('day5', function(){

    it('should calculate the examples correctly', function(){
        expect(day5.isNice('ugknbfddgicrmopn')).to.be.equal(true);
        expect(day5.isNice('aaa')).to.be.equal(true);
        expect(day5.isNice('jchzalrnumimnmhp')).to.be.equal(false);
        expect(day5.isNice('haegwjzuvuyypxyu')).to.be.equal(false);
        expect(day5.isNice('dvszwmarrgswjxmb')).to.be.equal(false);
    });

    it('should calculate the file input correctly', function(done){
        day5.isNiceTotal(function (result) {
            expect(result).to.be.equal(238);
            done();
        });
    });


})