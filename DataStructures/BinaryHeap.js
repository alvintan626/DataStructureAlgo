class BinaryHeap {
  constructor(){
    this.val = []
  }

  insert(val){
    this.val.push(val)
    console.log(this.val)
    return this.val
  }
}

let binaryHeap = new BinaryHeap()
binaryHeap.insert(20)