/* 
  Given a string that may have extra spaces at the start and the end,
  return a new string that has the extra spaces at the start and the end trimmed (removed)
  do not remove any other spaces.
*/

/**
 * Trims any leading or trailing white space from the given str.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @return {string} The given string with any leading or trailing white space
 *    stripped.
 */
function trim(str) {
}

console.log(trim("      trim this or else   ")) // "trim this or else"

/*****************************************************************************/

/**
 * - Time: O(n) linear, both while loops plus the .slice loop all add up to
 *    str.length.
 * - Space: O(n) linear, .slice creates a new string, at most it will be as
 *    long as input str.
 */
function trim(str) {
    let startIdx = 0;
    let endIdx = str.length - 1;

    // loose comparison to false works for spaces
    // and other space-like characters (tabs, etc.)
    while (str[startIdx] == false) {
        startIdx++;
    }

    while (str[endIdx] == false) {
        endIdx--;
    }

    return str.slice(startIdx, endIdx + 1);
}
const str1 = "   hello world     ";
const expected1 = "hello world";
console.log(trim(str1) == expected1)

module.exports = { trim };

