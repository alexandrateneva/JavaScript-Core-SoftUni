let expect = require("chai").expect;
let SortedList = require("./2.Sorted List");

describe("SortedList class - tests", function () {
    let list;
    beforeEach(function () {
        list = new SortedList();
    });

    it("after initialization, should be created object with property list - empty array", function () {
        expect(list).to.be.deep.equal({list: []});
    });

    it("add(element) function, should which adds a new element to the collection", function () {
        list.add(2);
        list.add(-10);
        list.add(3.14);
        list.add(-178.3409);
        expect(list).to.be.deep.equal({list: [-178.3409, -10, 2, 3.14]});
    });

    describe("remove(index) function - tests", function () {
        it("remove(index) with valid index, should remove the element at position index", function () {
            list.add(2);
            list.add(-10);
            list.add(3.14);
            list.add(-178.3409);
            list.remove(2);
            expect(list).to.be.deep.equal({list: [-178.3409, -10, 3.14]});
        });
        it("remove(index) with first index, should remove the element at position index", function () {
            list.add(2);
            list.add(-10);
            list.add(3.14);
            list.remove(0);
            expect(list).to.be.deep.equal({list: [2, 3.14]});
        });
        it("remove(index) with last index, should remove the element at position index", function () {
            list.add(2);
            list.add(-10);
            list.add(3.14);
            list.remove(2);
            expect(list).to.be.deep.equal({list: [-10, 2]});
        });
        it("remove(index) when the array is empty, should throw error", function () {
            expect(() => list.remove(2)).to.throw(Error, 'Collection is empty.');
        });
        it("remove(index) with invalid negative index, should throw error", function () {
            list.add(2);
            list.add(-10);
            expect(() => list.remove(-2)).to.throw(Error, 'Index was outside the bounds of the collection.');
        });
        it("remove(index) with invalid index out or range, should throw error", function () {
            list.add(2);
            list.add(-10);
            expect(() => list.remove(10)).to.throw(Error, 'Index was outside the bounds of the collection.');
        });
    });

    describe("get(index) function - tests", function () {
        it("get(index) with valid index, should return the value of the element at position index", function () {
            list.add(2);
            list.add(-10);
            list.add(3.14);
            list.add(-178.3409);
            expect(list.get(2)).to.be.equal(2);
        });
        it("get(index) with first index, should return the value of the element at position index", function () {
            list.add(2);
            list.add(-10);
            list.add(3.14);
            expect(list.get(0)).to.be.deep.equal(-10);
        });
        it("get(index) with last index, should return the value of the element at position index", function () {
            list.add(2);
            list.add(-10);
            list.add(3.14);
            expect(list.get(2)).to.be.deep.equal(3.14);
        });
        it("get(index) when the array is empty, should throw error", function () {
            expect(() => list.get(2)).to.throw(Error, 'Collection is empty.');
        });
        it("get(index) with invalid negative index, should throw error", function () {
            list.add(2);
            list.add(-10);
            expect(() => list.get(-2)).to.throw(Error, 'Index was outside the bounds of the collection.');
        });
        it("get(index) with invalid index out or range, should throw error", function () {
            list.add(2);
            list.add(-10);
            expect(() => list.get(10)).to.throw(Error, 'Index was outside the bounds of the collection.');
        });
    });

    it("size(), should return the number of elements inside the collection", function () {
        list.add(2);
        list.add(-10);
        list.add(-2.1697);
        list.remove(2);
        list.add(17);
        expect(list.size).to.be.equal(3);
    });
    it("size() when he collection is empty, should return 0", function () {
        expect(list.size).to.be.equal(0);
    });
});