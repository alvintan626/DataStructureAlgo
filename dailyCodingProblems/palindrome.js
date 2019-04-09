function isPalindrome(word)
{
  // Please write your code here.
  var compare = []
  for (var i = word.length-1; i >= 0 ;i--){
    compare.push(word[i])
  }
  console.log(compare.join("").toLowerCase())
  if (compare.join("").toLowerCase() === word.toLowerCase()){
    return true
  }
  return false
}

console.log(isPalindrome("Deleveled"))