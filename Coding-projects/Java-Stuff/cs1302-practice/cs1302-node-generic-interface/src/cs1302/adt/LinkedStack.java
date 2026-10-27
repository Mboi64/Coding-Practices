package cs1302.adt;

import cs1302.node.NodeContainer;
public class LinkedStack<T> extends AbstractLinkedContainer<T> {

    public LinkedStack(Node<T> head){
        super(head);
    } // LinkedStack

    @Override
    public void add(T head) {
        this.head = new Node<T>(head, this.head);
        this.size++;
    } // add

    @Override
    public T remove() {
        if (this.isEmpty()){
            throw new IllegalStateException("The node stack is empty");
        } // if

        T removed = this.head.getItem();
        this.head = this.head.getNext();
        this.size--;
        return removed;
    } // remove


} // LinkedStack
