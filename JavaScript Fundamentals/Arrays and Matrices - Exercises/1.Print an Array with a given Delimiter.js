function printArrayWithGivenDelimiter(arr) {
    let delimiter = arr.pop();
    console.log(arr.join(delimiter));
}

printArrayWithGivenDelimiter(['One', 'Two', 'Three', 'Four', 'Five', '-']);