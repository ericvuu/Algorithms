/* 
  Parens Valid
	Given an str that has parenthesis in it
	return whether the parenthesis are valid
*/

/**
 * Determines whether the parenthesis in the given string are valid.
 * Each opening parenthesis must have exactly one closing parenthesis.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @return {boolean} Whether the parenthesis are valid.
 */
function parensValid(str) {

}

// Test Cases

const str1 = "(()(()))"; 
const expected1 = true;

const str2 = "(()";
const expected2 = false;
// Explanation: not every parenthesis is closed.

const str3 = "())(";   //
const expected3 = false;
// Explanation: because the underlined ")" is premature: there is nothing open for it to close.

const str4 = "))(("; // "))((" ")()("
const expected4 = false;
// Explanation: same number of opens and closes but the 2nd closing closes nothing

module.exports = { parensValid };

/*****************************************************************************/

/*****************************************************************************/

/**
 * - Time: O(n) linear.
 * - Space: O(n) linear.
 */
function parensValid(str) {
	const parensStack = [];
  
	for (const char of str) {
	  if (char === "(") {
		parensStack.push(char);
	  } else if (char === ")") {
		if (parensStack.length === 0) {
		  return false;
		} else {
		  parensStack.pop();
		}
	  }
	}
	return parensStack.length === 0;
  }
  
  /**
   * - Time: O(n) linear.
   * - Space: O(1) constant.
   */
  function parensValidCount(str) {
	let openLessCloseCount = 0;
  
	for (const char of str) {
	  if (char === "(") {
		openLessCloseCount++;
	  } else if (char === ")") {
		if (openLessCloseCount === 0) {
		  return false;
		} else openLessCloseCount--;
	  }
	}
	return openLessCloseCount === 0;
  }
  