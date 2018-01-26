function sortArrayBy2Functions(arr) {
    let result = arr.sort((a, b) => sortFunc(a, b));

    result.forEach(e => console.log(e));

    function sortFunc(ob1, ob2) {
        if (ob1.length > ob2.length) {
            return 1;
        } else if (ob1.length < ob2.length) {
            return -1;
        }

        if (ob1.toLowerCase() < ob2.toLowerCase()) {
            return -1;
        } else if (ob1.toLowerCase() > ob2.toLowerCase()) {
            return 1
        } else {
            return 0;
        }
    }
}

sortArrayBy2Functions(['alpha', 'beta', 'gamma']);
sortArrayBy2Functions(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);
sortArrayBy2Functions(['test', 'Deny', 'omen', 'Default']);