class Queue {
  constructor(...item) {
    this.reverse = false
    this.queue = [...item]
  }

  enqueue(...item) {
    return this.reverse ?
      this.queue.push(...item) :
      this.queue.unshift(...item)
  }

  dequeue() {
    return this.reverse ?
      this.queue.shift() :
      this.queue.pop()
  }
}

const queue = new Queue(1, 2, 3)
queue.reverse = true
console.log(queue);
queue.enqueue([1, 2], 4)
console.log(queue.dequeue());
