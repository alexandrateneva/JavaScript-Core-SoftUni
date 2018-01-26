function rotateArray(arr) {
    let num = Number(arr.pop());
    let remainder = num % arr.length;
    let result = [arr.length];
    for (let i = 0; i < arr.length; i++) {
        let value = arr[i];
        let newIndex = i + remainder - arr.length;
        if (newIndex < 0) {
            newIndex += arr.length;
        }
        result[newIndex] = value;
    }
    console.log(result.join(' '));
}

rotateArray([1, 2, 3, 4, 2]);
rotateArray(['Banana', 'Orange', 'Coconut', 'Apple', '15']);