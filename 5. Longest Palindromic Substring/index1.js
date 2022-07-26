// Brute Force
// O(n^3)
const longestPalindrome = function (s) {
    const n = s.length;

    let result = '';
    for (let l = 0; l < n; l++) {
        for (let r = l + 1; r <= n; r++) {
            const s1 = s.substring(l, r);
            let s2 = '';
            const arr1 = s1.split('');
            for (let k = s1.length - 1; k >= 0; k--) {
                s2 += arr1[k];
            }
            if (s1 === s2) {
                if (s1.length > result.length) {
                    result = s1;
                }
            }
        }
    }
    return result;
};

module.exports = longestPalindrome;