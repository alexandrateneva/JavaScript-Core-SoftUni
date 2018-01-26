function getSumOfFirstAndLast(nums) {
    let sum = Number(nums[0]) + Number(nums[nums.length - 1]);
    return sum;
}

console.log(getSumOfFirstAndLast(['20', '30', '40']));
console.log(getSumOfFirstAndLast(['5', '10']));