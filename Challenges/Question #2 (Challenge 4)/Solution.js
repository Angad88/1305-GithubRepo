/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} 
 */
var merge = function(nums1, m, nums2, n) {
    let sorted = [];
    let i = 0, j = 0;
    
    while (i < m && j < n) {
        if (nums1[i] < nums2[j]) {
            sorted.push(nums1[i]);
            i++;
        } else {
            sorted.push(nums2[j]);
            j++;
        }
    }

    while (i < m) {
        sorted.push(nums1[i]);
        i++;
    }

    while (j < n) {
        sorted.push(nums2[j]);
        j++;
    }

    for (let k = 0; k < m + n; k++) {
        nums1[k] = sorted[k];
    }
};

