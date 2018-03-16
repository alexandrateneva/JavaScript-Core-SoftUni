let expect = require("chai").expect;
let makeList = require("./2. Add Left Or Right And Clear");

describe("Make List - tests", function () {
    let myList = {};
    beforeEach(function () {
        myList = makeList();
    });

    it("we can not access data[], it should be undefined", function () {
        expect(myList.data).to.be.undefined;
    });

    it("addLeft() function, should work correct with any type of data", function () {
        myList.addLeft(-5);
        myList.addLeft('hello');
        myList.addLeft(7.9999);
        myList.addLeft({name: 'Pesho', age: 22});
        expect(myList.toString()).to.be.equal('[object Object], 7.9999, hello, -5');
    });

    it("addRight() function, should work correct with any type of data", function () {
        myList.addRight(-5);
        myList.addRight('hello');
        myList.addRight(7.9999);
        myList.addRight({name: 'Pesho', age: 22});
        expect(myList.toString()).to.be.equal('-5, hello, 7.9999, [object Object]');
    });

    it("clear() function, should remove all elements in the list", function () {
        myList.addRight(-5);
        myList.addRight('hello');
        myList.addRight(7.9999);
        myList.clear();
        expect(myList.toString()).to.be.equal('');
    });

    it("toString() function, returns the string representations of the list items, separated by “, “", function () {
        myList.addLeft(-5);
        myList.addLeft('hi');
        myList.addLeft(7);
        expect(myList.toString()).to.be.equal('7, hi, -5');
    });
});