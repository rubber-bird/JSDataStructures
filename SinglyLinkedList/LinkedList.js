import SinglyLinkedListNode from './SinglyLinkedListNode'

export default class SinglyLinkedList {
	constructor() {
		this.head = null
		this.tail = null
	}


	// O(1) time | O(1) space
	push(value) {
		let newNode = new Node(value)

		if(this.head === null) {
			this.head = newNode
			this.tail = newNode
		} else {
			this.tail.next = newNode
			this.tail = newNode
		}
	}
}
