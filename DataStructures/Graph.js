class Graph {
  constructor(){
    this.adjacencyList = {}
  }

  addVertex(val){
    this.adjacencyList[val] = []
    return this.adjacencyList[val] 
  }

  addEdge(vert1,vert2){
    this.adjacencyList[vert1].push(vert2)
    this.adjacencyList[vert2].push(vert1)
    return this
  }

  removeEdge(vert1,vert2){
    var index1 = this.adjacencyList[vert1].indexOf(vert2)
    var index2 = this.adjacencyList[vert2].indexOf(vert1)
    console.log(index1,index2)
    if (index1 === -1 || index2 === -1 ){
      return 
    }
    this.adjacencyList[vert1].splice(index1,1)
    this.adjacencyList[vert2].splice(index2,1)
    return this
  }

  removeVertex(vert){
    for (var key in this.adjacencyList){
      this.removeEdge(vert,key)
    }
    delete this.adjacencyList[vert]
    console.log(this)
    return this
  }
}


var graph = new Graph()
graph.addVertex("tokyo")
graph.addVertex("sanfrancisco")
graph.addVertex("canada")
graph.addVertex("spain")
graph.addVertex("mexico")
graph.addEdge("tokyo", "sanfrancisco")
graph.addEdge("spain", "sanfrancisco")
graph.addEdge("mexico", "sanfrancisco")
graph.addEdge("tokyo", "mexico")
graph.addEdge("canada", "sanfrancisco")
graph.removeVertex("sanfrancisco")