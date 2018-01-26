function getSmallestTwoNumbers(nums) {
    let result = nums.sort((a, b) => a - b).splice(0, 2);
    console.log(result.join(' '));
}

getSmallestTwoNumbers([30, 15, 50, 5]);
getSmallestTwoNumbers([3, 0, 10, 4, 7, 3]);