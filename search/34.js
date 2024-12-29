class MinHeap {
    constructor() {
        this.heap = [];
    }

    // Helper method to get the index of the left child
    leftChild(index) {
        return 2 * index + 1;
    }

    // Helper method to get the index of the right child
    rightChild(index) {
        return 2 * index + 2;
    }

    // Helper method to get the index of the parent
    parent(index) {
        return Math.floor((index - 1) / 2);
    }

    // Method to swap elements in the heap
    swap(index1, index2) {
        [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
    }

    // Method to heapify up the tree (for insertion)
    heapifyUp(index) {
        let parentIndex = this.parent(index);

        if (index > 0 && this.heap[index] < this.heap[parentIndex]) {
            this.swap(index, parentIndex);
            this.heapifyUp(parentIndex);
        }
    }

    // Method to heapify down the tree (for deletion)
    heapifyDown(index) {
        let left = this.leftChild(index);
        let right = this.rightChild(index);
        let smallest = index;

        if (left < this.heap.length && this.heap[left] < this.heap[smallest]) {
            smallest = left;
        }

        if (right < this.heap.length && this.heap[right] < this.heap[smallest]) {
            smallest = right;
        }

        if (smallest !== index) {
            this.swap(index, smallest);
            this.heapifyDown(smallest);
        }
    }

    // Method to insert a new value into the heap
    insert(value) {
        this.heap.push(value);
        this.heapifyUp(this.heap.length - 1);
    }

    // Method to remove and return the smallest value (root of the heap)
    removeMin() {
        if (this.heap.length === 0) return null;

        // Swap the root with the last element
        this.swap(0, this.heap.length - 1);
        const min = this.heap.pop();

        // Heapify down to restore the heap property
        this.heapifyDown(0);

        return min;
    }

    // Method to return the smallest value (root of the heap) without removing it
    peek() {
        return this.heap.length > 0 ? this.heap[0] : null;
    }

    // Method to get the size of the heap
    size() {
        return this.heap.length;
    }

    // Method to print the heap (for debugging purposes)
    print() {
        console.log(this.heap);
    }
}

// Example usage:
const minHeap = new MinHeap();
minHeap.insert(10);
minHeap.insert(5);
minHeap.insert(20);
minHeap.insert(1);

minHeap.print(); // Output: [1, 5, 20, 10]

console.log(minHeap.removeMin()); // Output: 1
console.log(minHeap.removeMin()); // Output: 1
console.log(minHeap.removeMin()); // Output: 1
console.log(minHeap.removeMin()); // Output: 1
minHeap.print(); // Output: [5, 10, 20]
