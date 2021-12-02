class Node {
	/**
	 * @param {number} key
	 * @param {number} value
	 * @param {Node} [next]
	 * @param {Node} [prev]
	 */
	constructor(key = -1, value = -1, next = null, prev = null) {
		this.value = value;
		this.key = key;
		this.next = next;
		this.prev = prev;
	}
}

/**
 * builds a double linked list
 * @param {number} capacity
 */
function dbLinkedList(capacity) {
	let head = new Node();
	let tail = new Node();
	let size = 0;
	const map = new Map();

	tail.prev = head;
	head.next = tail;

	/**
	 * @param {Node}node
	 */
	function _moveToHead(node) {
		_removeNode(node);
		_addNode(node);
	}

	/**
	 * @param {Node}node
	 */
	function _removeNode(node) {
		const prev = node.prev;
		const next = node.next;

		prev.next = next;
		next.prev = prev;
	}

	function _popTail() {
		let node = tail.prev;
		map.delete(node.key);
		_removeNode(node);
		size -= 1;
	}

	/**
	 * @param {Node}node
	 */
	function _addNode(node) {
		if (!map.has(node.key)) {
			map.set(node.key, node);
			size += 1;
		}

		node.next = head.next;
		node.prev = head;
		head.next.prev = node;
		head.next = node;
	}

	/**
	 * @param {number} key
	 * @returns {number}
	 */
	function get(key) {
		if (!map.has(key)) return -1;

		const node = map.get(key);
		_moveToHead(node);

		return node.value;
	}

	/**
	 * @param key {number}
	 * @param value {number}
	 */
	function add(key, value) {
		if (map.has(key)) {
			const node = map.get(key);
			node.value = value;
			_moveToHead(node);
		} else {
			const node = new Node(key, value);

			_addNode(node);
			if (size > capacity) {
				_popTail();
			}
		}
	}

	return {
		add,
		get
	}
}

/**
 * @param {number} capacity
 */
const LRUCache = function (capacity) {
	this.cache = dbLinkedList(capacity);
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
	return this.cache.get(key)
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
	this.cache.add(key, value);
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

module.exports = LRUCache;
