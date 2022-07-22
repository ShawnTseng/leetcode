/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    const count = s.length;
    let longestSubstring = '';
    for (let i = 0; i < count; i++) {
        const curr = s[i];
        let tempLongestSubstring = '';
        if (i === 0) {
            tempLongestSubstring = curr;
        } else if (i > 0) {
            if (tempLongestSubstring[i - 1] !== curr) {
                tempLongestSubstring += curr;
            } else {
                if (tempLongestSubstring.length > longestSubstring) {
                    longestSubstring = tempLongestSubstring;
                }
                break;
            }
        }
    }
    return longestSubstring.length;
};

module.exports = lengthOfLongestSubstring;