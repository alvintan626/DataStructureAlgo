function validAnagram(str1,str2){
  
  if (str1.length !== str2.length){
      return false
  }
  
  var str1obj = {}
  var str2obj = {}
  
  for (var key in str1){
      if (str1obj[str1[key]] === undefined){
        str1obj[str1[key]] = 1
      }
      else str1obj[str1[key]] += 1
  }
  
  for (var key in str2){
      if (str2obj[str2[key]] === undefined){
        str2obj[str2[key]] = 1
      }
      else str2obj[str2[key]] += 1
  }
  
  for (var key in str1obj){
      if (!str2obj[key]){
          return false
      }
      else if (str2obj[key] !== str1obj[key]){

          return false
      }
  }
  
  return true
}