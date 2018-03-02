let expect = require("chai").expect;
let lookupChar = require("../3.Char Lookup").lookupChar;

describe("lookupChar(string, index) - tests", function () {
    it("with a non-string first parameter should return undefined", function () {
        expect(lookupChar({}, 1)).to.be.undefined;
    });
    it("with a non-integer second parameter should return undefined", function () {
        expect(lookupChar('test', '2')).to.be.undefined;
    });
    it("with index a floating-point number should return undefined", function () {
        expect(lookupChar('test', 3.14)).to.be.undefined;
    });
    it("with index equal to the string length should return undefined", function () {
        expect(lookupChar('test', 4)).to.be.equal('Incorrect index');
    });
    it("with index bigger than the string length should return undefined", function () {
        expect(lookupChar('test', 10)).to.be.equal('Incorrect index');
    });
    it("with index a negative number should return undefined", function () {
        expect(lookupChar('test', -1)).to.be.equal('Incorrect index');
    });
    it("with correct parameters should return correct result", function () {
        expect(lookupChar('test', 0)).to.be.equal('t');
    });
    it("with correct parameters should return correct result", function () {
        expect(lookupChar('test', 3)).to.be.equal('t');
    });
    it("with correct parameters should return correct result", function () {
        expect(lookupChar('test', 1)).to.be.equal('e');
    });
});