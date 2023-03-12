const SINGL_LIST_HEAD = {
    value: 0,
    next: null
  }
  
const DEFAULT_PARAMETRS = [1, 'two', () => console.log('hello'), true];
  
  function singlListCreator(DEFAULT_PARAMETRS){
    function addTolist(value) {
    const newNode = { value, next: null };
    let currentNode = SINGL_LIST_HEAD;
    while (currentNode.next !== null) {
      currentNode = currentNode.next;
    }
    currentNode.next = newNode;
  }
  DEFAULT_PARAMETRS.forEach(value => addTolist(value));
}
// singlListCreator(DEFAULT_PARAMETRS) 


  const DOUBLE_LIST_HEAD = {
    value: 0,
    next: null,
    prev: null
  }
  
  function doubleListCreator(DEFAULT_PARAMETRS) {
    function addTolist(value){
    const newNode = { value, next: null, prev: null };
    let currentNode = DOUBLE_LIST_HEAD;
    while (currentNode.next !== null) {
      currentNode = currentNode.next;
    }
    currentNode.next = newNode;
    newNode.prev = currentNode;
  }
  DEFAULT_PARAMETRS.forEach(value => addTolist(value));
}
// doubleListCreator(DEFAULT_PARAMETRS) 

const CIRCLE_LIST_HEAD = {
    value: 0,
    next: null
  }
function circleListCreator(DEFAULT_PARAMETRS){
    function addTolist(value) {
    const newNode = { value, next: null };
    let currentNode = CIRCLE_LIST_HEAD;
    while (currentNode.next !== null) {
      currentNode = currentNode.next;
    }
    currentNode.next = newNode;
  }
  function findTale(CIRCLE_LIST_HEAD){
    let currentNode = CIRCLE_LIST_HEAD
    while (currentNode.next !== null) {
        currentNode = currentNode.next;
      }
      currentNode.next = CIRCLE_LIST_HEAD
  }
  DEFAULT_PARAMETRS.forEach(value => addTolist(value));
  findTale(CIRCLE_LIST_HEAD)
}

// circleListCreator(DEFAULT_PARAMETRS)