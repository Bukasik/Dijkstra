class PriorityQueue {
  constructor() {
    this.nodes = [];
  }

  enqueue(priority, key) {
    this.nodes.push({
      key,
      priority,
    });
    this.sort();
  }

  dequeue() {
    if (this.nodes.length <= 0) {
      return null;
    }
    return this.nodes.shift().key;
  }

  sort() {
    this.nodes.sort((a, b) => {
      return a.priority - b.priority;
    });
  }

  isEmpty() {
    return !this.nodes.length;
  }
}

export default PriorityQueue;
