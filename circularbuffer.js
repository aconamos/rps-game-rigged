class CircularBuffer {
    constructor(length) {
        this.length = length;
        this.array = [];
    }

    get(index) {
        let array = this.array;
        if (index > array.length - 1) throw 'Index higher than length!';
        return array[index]
    }

    push(value) {
        let array = this.array;
        array.unshift(value)
        if (array.length > this.length) array.pop()
        this.array = array;
    }
}