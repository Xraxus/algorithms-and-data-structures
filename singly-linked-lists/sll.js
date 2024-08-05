class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  push(val) {
    const newNode = new Node(val)

    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail.next = newNode
      this.tail = newNode
    }
    this.length += 1

    return this
  }

  traverse() {
    let current = this.head
    while (current) {
      console.log(current.val)
      current = current.next
    }
  }

  pop() {
    if (!this.head) return undefined

    let current = this.head
    let newTail = current

    while (current.next) {
      newTail = current
      current = current.next
    }

    this.tail = newTail
    this.tail.next = null
    this.length -= 1

    return current.val
  }
}

const list = new SinglyLinkedList()

list.push('HELLO')
list.push('BYE')
list.push('!')

console.log(list.pop())
