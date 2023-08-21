// https://git.generalassemb.ly/sei-foxtails/stacks-and-queues/blob/master/bracketMatcher.md
// One really convenient application for LIFO (Last In First Out) structures is matching brackets.
// That's because every time you encounter a closing bracket, it needs to match the most
// recently used open bracket.

// Create a method in JavaScript called bracketMatcher() that takes a string as an input.
// The function should determine if all brackets are correctly matching and properly nested.
// The return value of the function is true if the bracket combination is valid and false if it is not.
// This is a tool that could be used to detect syntax errors in your code!

// It should check for the following: [ ], { }, and ( ).
// Anything else (numbers, letters, punctuation, whitespace, etc.) should be skipped / ignored.
// This is a valid bracket sequence:
// abc(123)!{def}456:D
// Once you ignore or remove all of the other characters, it just becomes:
// (){}

// STACK IMPLEMENTATION
class Stack {
  constructor() {
    this.items = [];
  }
  push(item) {
    this.items.push(item);
  }
  pop() {
    return this.items.pop();
  }
  peek() {
    return this.items[this.items.length - 1];
  }
  isEmpty() {
    return this.items.length === 0;
  }
}

// this function will take in a string as input
// it will return true or false based on whether the brackets are properly matched
// the valid brackets it will scan for are {}, [], and ()
// you must use a Stack in your implementation of this function
// refer to the bracket matching readMe.md for more details

function bracketMatching(input) {}

class Node {
  constructor(data, priority) {
    this.data = data;
    this.priority = priority;
    this.next = null;
  }
}

// This priority queue is implemented as a Linked List
// Your challenge is to implement the insert method of the priority queue
class priorityQueue {
  constructor() {
    this.head = null;
  }
  enqueue(data, priority) {
    // Insert the new data into the proper place in the queue
    // the lowest priority number should be the head node
    // the priorities should remain in order
    // if two nodes have the same priority, put the new one first
  }
  peek() {
    // return the highest priority node in the queue
  }
  dequeue() {
    // remove and return the highest priority node in the queue
  }
}

module.exports = {
  bracketMatching,
  priorityQueue,
};
