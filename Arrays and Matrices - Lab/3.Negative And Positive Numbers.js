function getNegativeAndPositiveNums(nums) {
    let result = [];
    for (let num of nums) {
        if (num < 0) {
            result.unshift(num);
        }
        else {
            result.push(num);
        }
    }
    return result;
}

console.log(getNegativeAndPositiveNums([7, -2, 8, 9]));
console.log(getNegativeAndPositiveNums([3, -2, 0, -1]));