class Node {
  constructor(val){
    this.val = val
    this.left = null
    this.right = null
  }
}
class BinarySearchTree {
  constructor(){
    this.root = null
  }

  insert(val){
    var newNode = new Node(val)
    if (this.root === null){this.root = newNode}
    else {traverse(this.root)}

    function traverse(node){
      if (val < node.val && node.left === null){node.left = newNode}
      if (val < node.val && node.left !== null){traverse(node.left)}
      if (val > node.val && node.right === null){node.right = newNode}
      if (val > node.val && node.right !== null){traverse(node.right)}
    }
    return this
  }

  find(val){
    if (this.root===null){return false;}
    var found = null;

    function traverse(node){
      if (node.val === val){
        found = node
        return node
      }
      else {
        if (val < node.val && node.left !== null){return traverse(node.left)}
        else if (val > node.val && node.right !== null){return traverse(node.right)}
        return found
      }
    }
    traverse(this.root)
  }
}

var tree = new BinarySearchTree()
tree.insert(10)
tree.insert(2)
tree.insert(1)
tree.insert(12)
tree.insert(13)
tree.insert(14)
tree.insert(15)
// tree.find(2)
// tree.find(10)

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
var isSubtree = function(s, t) {
  let node = s
  let queue = [s]
  
  while (queue.length){
      node = queue.shift()
      
      if (node.val === t.val) {
          
          function traverse(node1,node2){
              if (node1.val !== node2.val){return 0}
              if (node1.left && !node2.left || !node1.left && node2.left) return 0
              if (node1.right && !node2.right || !node1.right && node2.right) return 0
              if (node1.left && node2.left){
                  traverse(node1.left,node2.left)
              }
              if (node1.right && node2.right){
                  traverse(node1.right,node2.right)
              }
          }
          
          if (!traverse(node,t)){
              return true

          }
      }
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
  }
  return false
};

var see = new BinarySearchTree()
see.insert(10)
see.insert(2)
see.insert(1)
see.insert(12)
see.insert(13)
see.insert(14)

console.log(isSubtree(tree,see))