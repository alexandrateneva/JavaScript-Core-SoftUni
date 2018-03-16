let expect = require("chai").expect;

describe("List - tests", function () {
    let list;
    beforeEach(function () {
        list = (function () {
            let data = [];
            return {
                add: function (item) {
                    data.push(item);
                },
                delete: function (index) {
                    if (Number.isInteger(index) && index >= 0 && index < data.length) {
                        return data.splice(index, 1)[0];
                    } else {
                        return undefined;
                    }
                },
                toString: function () {
                    return data.join(", ");
                }
            };
        })();
    });
    it("after or before invoke, we should not be able to access data[]", function () {
        expect(list.data).to.be.undefined;
    });

    it("add(item) function, should append given item to the end of the list", function () {
        list.add('hello');
        list.add(3.14);
        list.add({name: 'Pesho', age: 22});
        expect(list.toString()).to.be.equal('hello, 3.14, [object Object]');
    });

    it("delete(index) function with valid index, should delete the item at given index", function () {
        list.add('hello');
        list.add(3.14);
        list.add(true);
        list.delete(2);
        expect(list.toString()).to.be.equal('hello, 3.14');
    });

    it("delete(index) function with index out of range, should return undefined", function () {
        expect(list.delete(-3)).to.be.undefined;
    });

    it("delete(index) function with index out of range, should return undefined", function () {
        expect(list.delete(10)).to.be.undefined;
    });

    it("delete(index) function with floating-point index, should return undefined", function () {
        expect(list.delete(2.10)).to.be.undefined;
    });

    it("delete(index) function with negative floating-point index, should return undefined", function () {
        expect(list.delete(-17.236)).to.be.undefined;
    });

    it("delete(index) function with string index, should return undefined", function () {
        expect(list.delete('1')).to.be.undefined;
    });

    it("toString() function, should return the string representations of the list items, separated by “, “", function () {
        list.add('hello');
        list.add('world');
        list.add('on');
        list.add(new Date(14, 3, 2017));
        expect(list.toString()).to.be.equal('hello, world, on, Wed Oct 08 1919 00:00:00 GMT+0300 (FLE Daylight Time)');
    });
});

