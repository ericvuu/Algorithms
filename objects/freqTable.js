/* 
  Given an array of strings
  return an object with sums to represent how many times 
  each array item is found (a frequency table)
  Useful methods:
    Object.hasOwnProperty("keyName")
        my_object.hasOwnProperty("my_key")
      - returns true or false if the object has the key or not
    Python: key in dict

    if "user_id" not in request.session:
        return redirect('/')
*/

const arr1 = ["a", "a", "a"];
const expected1 = {
  a: 3,
};

const arr2 = ["a", "b", "a", "c", "B", "c", "c", "d"];
const expected2 = {
  a: 2,
  b: 1,
  c: 3,
  B: 1,
  d: 1,
};

const arr3 = [];
const expected3 = {};

/**
 * Builds a frequency table based on the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<string>} arr
 * @return {Object<string, number>} A frequency table where the keys are items
 *    from the given arr and the values are the amnt of times that item occurs.
 */
function frequencyTableBuilder(arr) {}

module.exports = { frequencyTableBuilder };

/*****************************************************************************/
