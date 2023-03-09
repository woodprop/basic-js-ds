const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class Node {
  constructor(data) {
    this.data = data;
    this.right = null;
    this.left = null;
  }
}


class BinarySearchTree {
    constructor() {
    this.mainNode = null;
    this.minVal = null;
    this.maxVal = null;
  }

  root() {
    console.log(this.mainNode);
    return this.mainNode;
  }

  add(data) {
      if (this.minVal === null || data < this.minVal) this.minVal = data;
      if (this.maxVal === null || data > this.maxVal) this.maxVal = data;

    const newNode = new Node(data);

    if (!this.mainNode) {
      this.mainNode = newNode;
      return this;
    }

    let current = this.mainNode;
    while (1) {
      if (data === current.data) return this;
      if (data < current.data) {
        if (!current.left) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  has(data) {
    if (this.find(data)) return true;
    return false;
  }

  find(data) {
    if (!this.mainNode) return null;
    let current = this.mainNode;
    while (1) {
      if (!current) return null;
      if (data === current.data) return current;
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }

  }


  remove(data) {
    this.mainNode = this.removeInner(data, this.mainNode);
  }

  removeInner(value, node) {
    if (value < node.data) {
      node.left = this.removeInner(value, node.left);
    } else if (value > node.data) {
      node.right = this.removeInner(value, node.right);
    } else if (node.left && node.right) {
      node.data = this.findMinValue(node.right);
      node.right = this.removeInner(node.data, node.right);
    } else {
      node = node.left || node.right;
    }
    return node;
  }

  findMinValue(node) {
    if (this.root !== null) {
      if (!node) node = this.mainNode;
      while (node.left) {
        node = node.left;
      }
      return node.data;
    }
  }


  min() {
    return this.minVal;
  }

  max() {
    return this.maxVal;
  }
}

module.exports = {
  BinarySearchTree
};