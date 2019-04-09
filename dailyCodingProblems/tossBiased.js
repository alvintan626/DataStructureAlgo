function tossBiased(times){
  var result = 0
  for (var i=0;i<times;i++){
    result += Math.random()
  }
  return result/times
}

console.log(tossBiased(1000))