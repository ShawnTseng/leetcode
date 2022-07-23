// Sliding Window
const lengthOfLongestSubstring = function (s) {
    const chars = new Set();
    const n = s.length;
    let left = 0, right = 0;
    let result = 0;

    while (right < n) {
        const char = s.charAt(right);

        let isExist = chars.has(char);
        
        while (isExist) {
            const l = s.charAt(left);
            chars.delete(l);
            left++;
            isExist = chars.has(char);
        }
        chars.add(char);
        
        result = Math.max(result, right - left + 1);

        right++;
    }

    return result;
}

module.exports = lengthOfLongestSubstring;