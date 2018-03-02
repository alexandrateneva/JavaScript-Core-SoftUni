let expect = require("chai").expect;
let createCalculator = require("../7.Add and Subtract").createCalculator;

describe("createCalculator() - check for correct calculation", function () {
    let calc;
    beforeEach(function () {
        calc = createCalculator();
    });

    it("should return an object", function () {
        expect(typeof calc).to.be.equal('object');
    });
    it("should have 0 value when created", function () {
        expect(calc.get()).to.be.equal(0);
    });
    it("should return 5 for add(3) and add(5)", function () {
        calc.add(3);
        calc.add(5);
        expect(calc.get()).to.be.equal(8);
    });
    it("should return -5 for subtract(3) and subtract(2)", function () {
        calc.subtract(3);
        calc.subtract(2);
        expect(calc.get()).to.be.equal(-5);
    });
    it("should return 4.2 for add(5.3) and subtract(1.1)", function () {
        calc.add(5.3);
        calc.subtract(1.1);
        expect(calc.get()).to.be.closeTo(4.2, 0.0001);
    });
    it("should parse correct", function () {
        calc.add(10);
        calc.subtract('7');
        calc.add('-2');
        calc.subtract(-1);
        expect(calc.get()).to.be.equal(2);
    });
    it("should return NaN for add invalid string", function () {
        calc.add('hello');
        expect(calc.get()).to.be.NaN;
    });
    it("should return NaN for subtract invalid string", function () {
        calc.subtract('hello');
        expect(calc.get()).to.be.NaN;
    });
});