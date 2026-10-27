package cs1302.adt;

import cs1302.node.NodeContainer;
public class LinkedQueue<T> extends AbstractLinkedContainer<T> {

    private Node<T> tail;

    public LinkedQueue(Node<T> head) {
        super(head);
        while (head != null) {
            this.tail = head;
            head = head.getNext();
        } // while 
    } // LinkedQueue

    @Override
    public void add(T item) {
        if (isEmpty()) {
            this.head = new Node<T>(item);
            this.tail = this.head;
        } else {
            this.tail.setNext(new Node<T>(item));
            this.tail = this.tail.getNext();
        } // if
        this.size++;
    } // add

    @Override
    public T remove() {
        if (this.isEmpty()) {
            throw new IllegalStateException("The node queue is empty");
        } // if

        T removed = this.head.getItem();
        this.head = this.head.getNext();
        if (this.head == null) {
            this.tail = null;
        } // if
        this.size--;
        return removed;
    } // removed

} // LinkedQueue
