function node(value) {
  return {
    prev: null,
    value: value,
    next: null,
  };
}

class List {
  constructor(value) {
    this.head = {
      prev: null,
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    let newNode = node(value);
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    let newNode = node(value);
    this.head.prev = newNode;
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  insert(index, value) {
    if (index <= 0) {
      return this.append(value);
    }
    if (this.length == index) {
      return this.prepend(value);
    }
    let encontrado = this.search(index - 1);
    let pointer = this.search(index - 2);
    let newNode = node(value);
    newNode.prev = encontrado.prev;
    newNode.next = encontrado;
    encontrado.prev = newNode;
    pointer.next = newNode;
    this.length++;
    return this;
  }

  search(index) {
    let aux = this.head;
    let count = 0;
    while (count !== index) {
      aux = aux.next;
      count++;
    }
    return aux;
  }
}

let myList = new List(1);
