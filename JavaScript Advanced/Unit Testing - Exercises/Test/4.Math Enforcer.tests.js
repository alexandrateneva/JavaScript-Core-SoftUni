let expect = require("chai").expect;
let mathEnforcer = require("../4.Math Enforcer").mathEnforcer;

describe("mathEnforcer - calculate(addFive, subtractTen and sum) - tests", function () {
    describe("add five to a number tests", function () {
        it("if parameter is not a number should return undefined", function () {
            expect(mathEnforcer.addFive('2')).to.be.undefined;
        });
        it("if parameter is a positive integer should return correct result", function () {
            expect(mathEnforcer.addFive(5)).to.be.equal(10);
        });
        it("if parameter is a negative integer should return correct result", function () {
            expect(mathEnforcer.addFive(-5)).to.be.equal(0);
        });
        it("if parameter is a positive floating-point number should return correct result", function () {
            expect(mathEnforcer.addFive(3.14)).to.be.closeTo(8.14, 0.01);
        });
        it("if parameter is a negative floating-point number should return correct result", function () {
            expect(mathEnforcer.addFive(-3.14)).to.be.closeTo(1.86, 0.01);
        });
    });

    describe("subtract ten from a number tests", function () {
        it("if parameter is not a number should return undefined", function () {
            expect(mathEnforcer.subtractTen('2')).to.be.undefined;
        });
        it("if parameter is a positive integer should return correct result", function () {
            expect(mathEnforcer.subtractTen(15)).to.be.equal(5);
        });
        it("if parameter is a negative integer should return correct result", function () {
            expect(mathEnforcer.subtractTen(-10)).to.be.equal(-20);
        });
        it("if parameter is a positive floating-point number should return correct result", function () {
            expect(mathEnforcer.subtractTen(3.14)).to.be.closeTo(-6.86, 0.01);
        });
        it("if parameter is a negative floating-point number should return correct result", function () {
            expect(mathEnforcer.subtractTen(-3.14)).to.be.closeTo(-13.14, 0.01);
        });
    });

    describe("sum two numbers tests", function () {
        it("if first parameter is not a number should return undefined", function () {
            expect(mathEnforcer.sum('2', 3)).to.be.undefined;
        });
        it("if second parameter is not a number should return undefined", function () {
            expect(mathEnforcer.sum(2, '3')).to.be.undefined;
        });
        it("if parameters are positive integers should return correct result", function () {
            expect(mathEnforcer.sum(15, 5)).to.be.equal(20);
        });
        it("if any parameter is a negative number should return correct result", function () {
            expect(mathEnforcer.sum(5, -10)).to.be.equal(-5);
        });
        it("if any parameter is a floating-point number should return correct result", function () {
            expect(mathEnforcer.sum(3.14, 5)).to.be.closeTo(8.14, 0.01);
        });
        it("if both parameters are floating-point number should return correct result", function () {
            expect(mathEnforcer.sum(3.14, 3.14)).to.be.closeTo(6.28, 0.01);
        });
        it("if both parameters are negative(one integer and one floating-point) numbers should return correct result", function () {
            expect(mathEnforcer.sum(-3.14, -10)).to.be.closeTo(-13.14, 0.01);
        });
    });
});

