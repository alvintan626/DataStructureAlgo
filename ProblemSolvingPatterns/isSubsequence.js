// takes in two strings and checks whether the characaters in the first string form a subsequence of the charactesr in the second string
// function should check whether the characaters in first string appear somewhre in second string, without their order changing

function isSubsequence() {
  // good luck. Add any arguments you deem necessary.
}


console.log(isSubsequence('hello','hello world')) //true
console.log(isSubsequence('sing','sting')) // true
console.log(isSubsequence('abc','acb')) //false, order matters
console.log(isSubsequence('abc','abracadabra')) // true