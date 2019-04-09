class Node {
  constructor(val){
    this.val = val
    this.next = null
  }
}

class SinglyLinkedList {
  constructor(){
    this.head = null
    this.tail = null
    this.length = 0
  }

  push(val){
    this.length += 1
    var node = new Node(val)

    if (this.head === null){
      this.head = node
      this.tail = node
    }
    else {
      this.tail.next = node
      this.tail = node
    }
    return this
  }

  pop(){
    if (this.length === 0) {return undefined}
    var current = this.head
    var newTail = current
    while (current.next){
      newTail = current
      current = current.next
    }
    this.tail = newTail
    newTail.next = null
    this.length--
    if (this.length === 0){
      this.head = null
      this.tail = null
    }
    // console.log(this)
    return this.tail
  }

  shift(){
    if (this.length === 0) {return undefined}
    var current = this.head
    this.head = current.next
    this.length--
    if (this.length === 0){
      this.head = null
      this.tail = null
    }
    // console.log(this)
    return current
  }

  //add a new element into begin of list
  unshift(val){
    this.length++
    var node = new Node(val)
    if (this.tail === null){
      this.tail = node
      this.head = node
    }
    else {
      var prev = this.head
      this.head = node
      this.head.next = prev
    }
    // console.log(this)
    return node
  }

  get(index){
    if (index < 0 || index >= this.length){return null}
    var current = this.head
    console.log("at index: ", index)
    while (current){
      if (index === 0){
        console.log(current)
        return current
      }
      index--
      current = current.next
    }
  }
  // tried recursion...
  // pop(){
  //   var counter = this.length
  //   var newTail = this.tail
  //   function traverse(node){
  //     counter--
  //     if (counter === 1){
  //       console.log("im the tail",newTail)
  //       newTail = node
  //       node.next = null
  //       console.log("assign tail to this node", node)
  //       return node
  //     }
  //     traverse(node.next)
  //   }
  //   traverse(this.head)
  //   return this
  // }
}


var list = new SinglyLinkedList()
list.push('hello')
list.push('goodbye')
list.push('between')
list.push('in')
list.shift()
list.shift()
list.unshift("goodbyeisback")
list.get(0)
list.get(1)
list.get(2)
list.get(3)
// list.pop()
// list.pop()
// list.pop()
// list.pop()
