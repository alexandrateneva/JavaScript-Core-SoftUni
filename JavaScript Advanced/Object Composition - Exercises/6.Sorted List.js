function sortedList() {
    let list = [];

    return {
        size: 0,

        add: function add(element) {
            list.push(element);
            list.sort((a, b) => a - b);
            this.size++;
        },

        remove: function remove(index) {
            if (index >= 0 && index < list.length) {
                list.splice(index, 1);
                this.size--;
            }
        },

        get: function get(index) {
            if (index >= 0 && index < list.length) {
                return list[index];
            }
        }
    };
}

let myList = sortedList();
myList.add(5);
myList.add(3);
myList.remove(0);
console.log(myList.get(0));
console.log(myList.size);

