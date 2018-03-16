let expect = require("chai").expect;
let createList = require("./2. Add, Swap, Shift Left or Right in List");

describe("createList() function - tests", function () {
    let list;
    beforeEach(function () {
        list = createList();
    });

    it("we can not access data[], it should be undefined", function () {
        expect(list.data).to.be.undefined;
    });

    it("add(item) function, should append given item (of any type) to the end of the list", function () {
        list.add(5);
        list.add(-10);
        list.add('hello');
        list.add(true);
        list.add(3.14);
        list.add({name: 'Pesho', age: 22});
        expect(list.toString()).to.be.equal('5, -10, hello, true, 3.14, [object Object]');
    });

    describe("shiftLeft() function - tests", function () {
        it("shiftLeft() function, should shifts all elements one position left and the first elements comes last", function () {
            list.add(5);
            list.add('hello');
            list.add(true);
            list.add(new Date(15, 3, 2018));
            list.shiftLeft();
            expect(list.toString()).to.be.equal('hello, true, Fri Oct 08 1920 00:00:00 GMT+0300 (FLE Daylight Time), 5');
        });

        it("shiftLeft() function with one element, should return single element", function () {
            list.add(111.56209);
            list.shiftLeft();
            expect(list.toString()).to.be.equal('111.56209');
        });

        it("shiftLeft() function with two elements, should change their positions", function () {
            list.add(111.56209);
            list.add('hi');
            list.shiftLeft();
            expect(list.toString()).to.be.equal('hi, 111.56209');
        });
    });

    describe("shiftRight() function - tests", function () {
        it("shiftRight() function, should shifts all elements one position right and the last elements comes first", function () {
            list.add(5);
            list.add('hello');
            list.add(true);
            list.add(new Date(15, 3, 2018));
            list.shiftRight();
            expect(list.toString()).to.be.equal('Fri Oct 08 1920 00:00:00 GMT+0300 (FLE Daylight Time), 5, hello, true');
        });

        it("shiftRight() function with one element, should return single element", function () {
            list.add(111.56209);
            list.shiftRight();
            expect(list.toString()).to.be.equal('111.56209');
        });

        it("shiftLeft() function with two elements, should change their positions", function () {
            list.add(111.56209);
            list.add('hi');
            list.shiftRight();
            expect(list.toString()).to.be.equal('hi, 111.56209');
        });
    });

    describe("swap(index1, index2) function - tests", function () {
        it("swap(index1, index2) function, should swap the items at the specified indexes and returns true", function () {
            list.add(111.56209);
            list.add('hi');
            list.add(true);
            list.add(14);
            list.swap(0, 3);
            expect(list.toString()).to.be.equal('14, hi, true, 111.56209');
        });
        it("swap(index1, index2) function, should swap the items at the specified indexes and returns true", function () {
            list.add(111.56209);
            list.add('hi');
            list.add(true);
            list.add(14);
            list.swap(0, 3);
            expect(list.swap(0, 3)).to.be.equal(true);
        });
        it("swap(index1, index2) function with no integer first index, should return false", function () {
            list.add(14);
            list.add('hi');
            expect(list.swap('lalal', 1)).to.be.equal(false);
        });
        it("swap(index1, index2) function with equal indexes, should return false", function () {
            list.add(14);
            list.add('hi');
            expect(list.swap(1, 1)).to.be.equal(false);
        });
        it("swap(index1, index2) function with equal indexes, the collection should stay unchanged", function () {
            list.add(14);
            list.add('hi');
            list.add(true);
            list.swap(1, 1);
            expect(list.toString()).to.be.equal('14, hi, true');
        });
        it("swap(index1, index2) function with no integer second index, should return false", function () {
            list.add(14);
            list.add('hi');
            expect(list.swap(1, 'lalal')).to.be.equal(false);
        });
        it("swap(index1, index2) function with negative first index, should return false", function () {
            list.add(14);
            list.add('hi');
            expect(list.swap(-1, 1)).to.be.equal(false);
        });
        it("swap(index1, index2) function with negative first index, the collection should stay unchanged", function () {
            list.add(14);
            list.add('hi');
            list.add(true);
            list.swap(-1, 1);
            expect(list.toString()).to.be.equal('14, hi, true');
        });
        it("swap(index1, index2) function with negative second index, should return false", function () {
            list.add(14);
            list.add('hi');
            expect(list.swap(1, -1)).to.be.equal(false);
        });
        it("swap(index1, index2) function with negative second index, the collection should stay unchanged", function () {
            list.add(14);
            list.add('hi');
            list.add(true);
            list.swap(1, -1);
            expect(list.toString()).to.be.equal('14, hi, true');
        });
        it("swap(index1, index2) function with first index out of range, should return false", function () {
            list.add(14);
            list.add('hi');
            expect(list.swap(3, 1)).to.be.equal(false);
        });
        it("swap(index1, index2) function with first index out of range,  the collection should stay unchanged", function () {
            list.add(14);
            list.add('hi');
            list.add(true);
            list.swap(3, 1);
            expect(list.toString()).to.be.equal('14, hi, true');
        });
        it("swap(index1, index2) function with second index out of range, should return false", function () {
            list.add(14);
            list.add('hi');
            expect(list.swap(1, 3)).to.be.equal(false);
        });
        it("swap(index1, index2) function with second index out of range,  the collection should stay unchanged", function () {
            list.add(14);
            list.add('hi');
            list.add(true);
            list.swap(1, 3);
            expect(list.toString()).to.be.equal('14, hi, true');
        });
        it('with zero second indexes, should return true', function () {
            list.add('one');
            list.add('two');
            list.add('three');
            expect(list.swap(2, 0)).to.equal(true);
        });
        it('with zero second index, should swap the values', function () {
            list.add('one');
            list.add('two');
            list.add('three');
            list.swap(1, 0);
            expect(list.toString()).to.equal("three, two, one");
        });
    });

    it("toString() function, should return the string representations of the list items, separated by “, “", function () {
        list.add(14);
        list.add('hi');
        list.add(true);
        expect(list.toString()).to.be.equal('14, hi, true');
    });
});
