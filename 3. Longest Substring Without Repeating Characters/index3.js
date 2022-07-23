// Sliding Window Optimized
const lengthOfLongestSubstring = function (s) {
    const map = new Map();
    const n = s.length;
    let result = 0;
    for (let i = 0, j = 0; j < n; j++) {
        const element = s[j];
        if (map.has(element)) {
            i = Math.max(map.get(element), i);
        }
        result = Math.max(result, j - i + 1);
        map.set(element, j + 1);
    }

    return result;
}

module.exports = lengthOfLongestSubstring;