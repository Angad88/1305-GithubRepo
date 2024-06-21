class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    append(data) {
        let newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.size++;
    }

    printList() {
        let current = this.head;
        let list = [];
        while (current) {
            list.push(current.data);
            current = current.next;
        }
        console.log(list.join(" -> "));
    }
}

function mergeTwoSortedLists(list1, list2) {
    let dummy = new Node(0);
    let tail = dummy;

    let l1 = list1.head;
    let l2 = list2.head;

    while (l1 !== null && l2 !== null) {
        if (l1.data < l2.data) {
            tail.next = l1;
            l1 = l1.next;
        } else {
            tail.next = l2;
            l2 = l2.next;
        }
        tail = tail.next;
    }

    if (l1 !== null) {
        tail.next = l1;
    } else if (l2 !== null) {
        tail.next = l2;
    }

    let mergedList = new LinkedList();
    mergedList.head = dummy.next;
    return mergedList;
}

function deleteNthFromEnd(list, n) {
    let dummy = new Node(0);
    dummy.next = list.head;
    let first = dummy;
    let second = dummy;

    for (let i = 0; i <= n; i++) {
        if (first == null) {
            console.log("N is larger than the list size");
            return;
        }
        first = first.next;
    }

    while (first !== null) {
        first = first.next;
        second = second.next;
    }

    second.next = second.next.next;

    let newList = new LinkedList();
    newList.head = dummy.next;
    return newList;
}

console.log(" ");
console.log("Merge Two Sorted Linked Lists:");
console.log("----- ----- ----- -----");

let list1 = new LinkedList();
list1.append(1);
list1.append(3);
list1.append(5);

let list2 = new LinkedList();
list2.append(2);
list2.append(4);
list2.append(6);

console.log("List 1:");
list1.printList();
console.log(" ");

console.log("List 2:");
list2.printList();
console.log(" ");

let mergedList = mergeTwoSortedLists(list1, list2);
console.log("Merged Lists:");
mergedList.printList(); 
console.log(" ");

console.log(" ");
console.log("Delete the N-th Node from the End: ");
console.log("----- ----- ----- -----");

let newList = new LinkedList();
newList.append(1);
newList.append(2);
newList.append(3);
newList.append(4);
newList.append(5);

console.log("New List");
newList.printList();

console.log(" ");


let updatedNewList = deleteNthFromEnd(newList, 2);
console.log("Updated List after deleting 2nd from end:");
updatedNewList.printList();
console.log(" ");

