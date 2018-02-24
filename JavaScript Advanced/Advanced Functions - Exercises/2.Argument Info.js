function printArgumentInfo() {
    let summary = new Map();
    for (let i = 0; i < arguments.length; i++) {
        let arg = arguments[i];
        let type = typeof arg;
        console.log(type + ': ' + arg);

        if(!summary.has(type)){
            summary.set(type, 0);
        }
        let newValue = summary.get(type) + 1;
        summary.set(type, newValue);
    }

    for (let [type, count] of [...summary].sort((a, b) => b[1] - a[1])) {
        console.log(type + ' = ' + count);
    }
}

printArgumentInfo(42, function () { console.log('Hello world!'); }, 'cat', 'dog');