var removeDuplicates = function(nums) {
    if (nums.length === 0)
        return 0;
    let uNumCount = 1;

    for (let k = 1; k < nums.length; k++) {
        if (nums[k] !== nums[k - 1]) {
            nums[uNumCount] = nums[k];
            uNumCount++;
        }
    }

    return uNumCount;
};