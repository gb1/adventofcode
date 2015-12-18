var expect = require('chai').expect;
var day1 = require('../day1.js');
var day2 = require('../day2.js');
var day3 = require('../day3.js');
var day4 = require('../day4.js');
var day5 = require('../day5.js');
var day5p2 = require('../day5p2.js');
var day6 = require('../day6.js');
var day6p2 = require('../day6p2.js');
var day9 = require('../day9.js');

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
});

describe('day5p2', function(){

    it('should calculate the examples correctly', function(){
        expect(day5p2.isNice('qjhvhtzxzqqjkmpb')).to.be.equal(true);
        expect(day5p2.isNice('xxyxx')).to.be.equal(true);
        expect(day5p2.isNice('uurcxstgmygtbstg')).to.be.equal(false);
        expect(day5p2.isNice('ieodomkazucvgmuy')).to.be.equal(false);
    });

    it('should calculate the file input correctly', function(done){
        day5p2.isNiceTotal(function (result) {
            expect(result).to.be.equal(69);
            done();
        });
    });

});

describe('day6', function(){

    it('should calculate the examples correctly', function(){
        expect(day6.command('turn on 0,0 through 999,999')).to.be.equal(1000000);
        expect(day6.command('turn off 499,499 through 500,500')).to.be.equal(999996);
        expect(day6.command('toggle 0,0 through 999,999')).to.be.equal(4);
    });

    //it('should calculate the file input correctly', function(done){
    //    this.timeout(60000);
    //    day6.total(function (result) {
    //        expect(result).to.be.equal(569999);
    //        done();
    //    });
    //});

});

describe('day6p2', function(){

    it('should calculate the examples correctly', function(){
        //expect(day6p2.command('turn on 0,0 through 0,0')).to.be.equal(1);;
        //expect(day6p2.command('toggle 0,0 through 999,999')).to.be.equal(2000001);;

    });

    //it('should calculate the file input correctly', function(done){
    //    this.timeout(60000);
    //    day6p2.total(function (result) {
    //        expect(result).to.be.equal(569999);
    //        done();
    //    });
    //});
});

describe('day9', function(){

    it('should calculate the examples correctly', function(){

        day9.loadInstruction('London to Dublin = 464');
        day9.loadInstruction('London to Belfast = 518');
        day9.loadInstruction('Dublin to Belfast = 141');
        expect(day9.calculate()).to.be.equal(605);
    });

    it('should calculate file input correctly', function(done){
        day9.reset();
        day9.loadInstructionsFromFile(function(result){
            expect(result).to.be.equal(207);

        });

        day9.reset();
        day9.loadInstructionsFromFile(function(result){
            expect(result).to.be.equal(804);
            done();
        }, true);
    });

});



