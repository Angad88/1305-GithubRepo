/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    const quickSort = (array, start, end) => {
        if (start < end) {
            const pivotIndex = partition(array, start, end);
            quickSort(array, start, pivotIndex - 1);
            quickSort(array, pivotIndex + 1, end);
        }
    };

    const partition = (array, start, end) => {
        const randomIndex = Math.floor(Math.random() * (end - start + 1)) + start;
        [array[randomIndex], array[end]] = [array[end], array[randomIndex]]; 
        let partitionIndex = start - 1;
        for (let current = start; current < end; current++) {
            if (array[current] < pivot) {
                partitionIndex++;
                [array[partitionIndex], array[current]] = [array[current], array[partitionIndex]];
            }
        }
        [array[partitionIndex + 1], array[end]] = [array[end], array[partitionIndex + 1]]; 
        return partitionIndex + 1;
    };

    quickSort(nums, 0, nums.length - 1);
    return nums;
};


