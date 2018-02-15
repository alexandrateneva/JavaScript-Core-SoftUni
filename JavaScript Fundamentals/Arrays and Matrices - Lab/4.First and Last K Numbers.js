function getFirstAndLastKNumbers(nums) {
    let k = nums[0];
    let firstNums = nums.slice(1, k + 1);
    let lastNums = nums.slice(nums.length - k, nums.length);

    console.log(firstNums.join(' '));
    console.log(lastNums.join(' '));
}

getFirstAndLastKNumbers([2, 7, 8, 9]);
getFirstAndLastKNumbers([3, 6, 7, 8, 9]);