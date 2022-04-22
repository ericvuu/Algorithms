/* 
Recursion....
What is recursion?

Function that calls itself, inside the function.
- Base Case --> end condition -> if statement that returns
- Starting variables get passed in as arguments
- Some change --> recursive function call

*/

function sumRecursive(num) {

    if (num == 0)
}

//   starting    continue    increment/decrement
//   condition   condition      change
//                  (end)
for (var i = 0;     i < 10;     i++) {

}

function sumIterative(num) {
    // variables?
    var sum = 0;
    // loop?
    for (var i = num; num >= 0 ; i--) {
        sum += i
    }
    // return value
    return sum;
}

console.log(sumIterative(10));