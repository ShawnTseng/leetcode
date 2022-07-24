const findMedianSortedArrays = require('./index1');

const nums1_1 = [1, 3];
const nums1_2 = [2];
const o1 = findMedianSortedArrays(nums1_1, nums1_2);
console.log(o1);

const nums2_1 = [1, 2];
const nums2_2 = [3, 4];
const o2 = findMedianSortedArrays(nums2_1, nums2_2);
console.log(o2);


const nums3_1 = [1, 2, 5, 7, 8, 9];
const nums3_2 = [3, 4, 9, 12];
const o3 = findMedianSortedArrays(nums3_1, nums3_2);
console.log(o3);