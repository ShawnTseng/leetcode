const lengthOfLongestSubstring = function (s) {
    const n = s.length;
    let res = 0;
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            if (checkRepetition(s, i, j)) {
                res = Math.max(res, j - i + 1);
            }
        }
    }
    return res;
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