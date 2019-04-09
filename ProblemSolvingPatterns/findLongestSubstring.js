function findLongestSubstring(str){
  // add whatever parameters you deem necessary - good luck!
  var max = 0
  var temp = 0
  for (var i = 0; i < str.length; i++){
    var strobj = {}
    if (temp > max){
      max = temp
    }
    temp = 0
      for (var j = i; j < str.length; j++){
        if (strobj[str[j]] === 1){
          temp = j - i
          break;
        }
        else {
          strobj[str[j]] = 1
          temp += 1
        }
      }
    
  }

  return max

}

console.log(findLongestSubstring('rithmschool'))