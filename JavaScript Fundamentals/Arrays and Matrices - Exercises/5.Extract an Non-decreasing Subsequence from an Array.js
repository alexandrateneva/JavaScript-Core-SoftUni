function extractNondecreasingSubsequence(arr) {
    let biggestElement = Number.MIN_SAFE_INTEGER;
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let currentElement = arr[i];
        if (currentElement >= biggestElement) {
            biggestElement = currentElement;
            result.push(currentElement);
        }
    }
    result.forEach(e => console.log(e));
}

extractNondecreasingSubsequence([1, 3, 8, 4, 10, 12, 3, 2, 24]);
extractNondecreasingSubsequence([20, 3, 2, 15, 6, 1]);