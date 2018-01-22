function assignProperties(data) {
    let obj = {};
    for (let i = 0; i < data.length; i += 2) {
        let propKey = data[i];
        let propValue = data[i + 1];

        obj[`${propKey}`] = propValue;
    }

    return obj;
}

console.log(assignProperties(['name', 'Pesho', 'age', '23', 'gender', 'male']));
console.log(assignProperties(['ssid', '90127461', 'status', 'admin', 'expires', '600']));
