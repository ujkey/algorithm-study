class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  // 스택에서 요소 제거 및 반환
  pop() {
    if (this.isEmpty()) return "스택이 비어있습니다.";
    return this.items.pop();
  }

  peek() {
    if (this.isEmpty()) return "스택이 비어있습니다.";
    return this.items[this.items.length - 1];
  }

  size() {
    return this.items.length;
  }

  isEmpty() {
    return this.items.length === 0;
  }

  clear() {
    this.items = [];
  }
}

module.exports = { Stack };
