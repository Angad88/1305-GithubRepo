// Time Complexity is O(n)

function Question4(main) {
    let output = false;
    let quick;
    quick = main;
    let sl;
    sl = main;
    while ((quick != null) && (quick.next !== null)) {
        quick = quick.next.next;
        sl = sl.next;
        if (sl == quick) {
            output = true;
            return output;
        }
    }
    return output;
}

class ListNode {
    constructor(v) {
        this.val = v;
        this.next = null;
    }
}

let Ln = new ListNode('A');
Ln.next = new ListNode('B');
Ln.next.next = new ListNode('C');
Ln.next.next.next = Ln;  

if(Question4(Ln)){
    console.log("Linked List 1 is true")
}
else{
    console.log("Linked List 1 is false")
}


Ln2 = new ListNode(1);
Ln2.next = new ListNode(2);
Ln2.next.next = new ListNode(3);
Ln2.next.next.next = null;  

if(Question4(Ln2)){
    console.log("Linked List 2 is true")
}
else{
    console.log("Linked List 2 is false")
}

Ln3 = new ListNode(1);
Ln3.next = new ListNode(2);
Ln3.next.next = new ListNode(3);
Ln3.next.next.next = Ln3;  


if(Question4(Ln3)){
    console.log("Linked List 3 is true")
}
else{
    console.log("Linked List 3 is false")
}

