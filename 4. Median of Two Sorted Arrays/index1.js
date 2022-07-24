// O(log(min(m,n))
const findMedianSortedArrays = function (nums1, nums2) {
    // Step1. Make sure the size of num1 is smaller than num2's.
    if (nums1.length > nums2.length) {
        const tmp = nums1;
        nums1 = nums2;
        nums2 = tmp;
    }
    const total = nums1.length + nums2.length;
    const half = Math.floor(total / 2);
    let l = 0, r = nums1.length - 1;
    while (true) {
        let i = Math.floor((l + r) / 2); // num1
        let j = half - i - 2; // num2

        const leftA = i >= 0 ? nums1[i] : -Infinity;
        const rightA = i + 1 < nums1.length ? nums1[i + 1] : Infinity;
        const leftB = j >= 0 ? nums2[j] : -Infinity;
        const rightB = j + 1 < nums2.length ? nums2[j + 1] : Infinity;

        if (leftA <= rightB && leftB <= rightA) {
            if (total % 2 === 1) {
                return Math.min(rightA, rightB);
            } else {
                return (Math.max(leftA, leftB) + Math.min(rightA, rightB)) / 2;
            }
        } else if (leftA > rightB) {
            r = i - 1;
        } else {
            l = i + 1;
        }
    }
}

module.exports = findMedianSortedArrays;