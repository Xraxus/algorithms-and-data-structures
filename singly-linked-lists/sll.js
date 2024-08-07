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

  traverse() {
    let current = this.head
    while (current) {
      console.log(current.val)
      current = current.next
    }
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

    if (this.length === 0) {
      this.head = null
      this.tail = null
    }

    return current.val
  }

  shift() {
    if (!this.head) return undefined

    let currentHead = this.head
    this.head = currentHead.next

    this.length--

    if (this.length === 0) this.tail = null

    return currentHead
  }

  unshift(val) {
    const newNode = new Node(val)

    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      newNode.next = this.head
      this.head = newNode
    }

    this.length++

    return this
  }

  get(index) {
    if (index < 0 || index >= this.length) return null

    let currentNode = this.head
    let i = 0

    while (i < index) {
      currentNode = currentNode.next
      i++
    }

    return currentNode
  }

  set(index, newValue) {
    const foundNode = this.get(index)

    if (foundNode) {
      foundNode.val = newValue
      return true
    } else {
      return false
    }
  }

  insert(index, value) {
    if (index < 0 || index > this.length) return false
    else if (index === this.length) this.push(value)
    else if (index === 0) this.unshift(value)
    else {
      const newNode = new Node(value)
      const prevNode = this.get(index - 1)
      const nextNode = prevNode.next

      prevNode.next = newNode
      newNode.next = nextNode
    }
    this.length++
    return true
  }
}

const list = new SinglyLinkedList()

list.push('HELLO')
list.push('BYE')
list.push('!')
list.push('<3')
list.push('?')

console.log(list.insert(0, 'startnowy'))
console.log(list.insert(3, 'srodeknowy'))
console.log(list.insert(7, 'koniecnowy'))

list.traverse()
