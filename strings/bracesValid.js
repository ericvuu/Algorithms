/* 
  Braces Valid
  Given a string sequence of parentheses, braces and brackets, determine whether it is valid. 
*/

/**
 * Determines whether the string's braces, brackets, and parenthesis are valid
 * based on the order and amount of opening and closing pairs.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @return {boolean} Whether the given strings braces are valid.
 */
function bracesValid(str) {

}

const str1 = "({}[({})])[{}]";
const expected1 = true;

const str2 = "({}[]){";
const expected2 = false;

const str3 = "()[(]{)}";
const expected3 = false;

module.exports = { bracesValid };

/*****************************************************************************/
/* Note: The first solutions is an example of a "switch statement", 
which is another control structure like if-else statements
Anything you can do with a switch statement you can do with an if-else block.
If interested, here is some documentation on switch statements in JS:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch
*/

/**
 * - Time: O(n) linear.
 * - Space: O(n) linear.
 */
function bracesValid(str) {
  const stack = [];
  const closeToOpen = { ")": "(", "}": "{", "]": "[" };

  for (let i = 0; i < str.length; i++) {
    switch (str[i]) {
      case "(":
      case "{":
      case "[":
        stack.push(str[i]);
        break;
      case ")":
      case "}":
      case "]":
        if (closeToOpen[str[i]] === stack[stack.length - 1]) {
          stack.pop();
        } else {
          return false;
        }
        break;
      default:
        break;
    }
  }
  return stack.length === 0;
}

/**
 * - Time: O(n * m) where n = str.length and m = opens.length,
 *    since opens.length is constant length of 3 -> O(3n) -> O(n) linear.
 * - Space: O(n) linear.
 */
function bracesValid2(str) {
  const stack = [];
  const opens = "({[";
  const closeToOpen = { ")": "(", "}": "{", "]": "[" };

  for (let i = 0; i < str.length; i++) {
    if (opens.includes(str[i])) {
      stack.push(str[i]);
    } else if (str[i] in closeToOpen) {
      if (closeToOpen[str[i]] === stack[stack.length - 1]) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return stack.length === 0;
}
