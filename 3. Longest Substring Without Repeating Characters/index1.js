// Brute Force
const lengthOfLongestSubstring = function (s) {
    const n = s.length;
    let result = 0;
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            if (checkRepetition(s, i, j)) {
                result = Math.max(result, j - i + 1);
            }
        }
    }
    return result;
}

const checkRepetition = function(s, start, end) {
    const chars = new Set();
    for (let i = start; i <= end; i++) {
        const char = s.charAt(i);
        const isExist = chars.has(char);
        if (isExist) {
            return false;
        }
        chars.add(char);
    }
    return true;
}

module.exports = lengthOfLongestSubstring;