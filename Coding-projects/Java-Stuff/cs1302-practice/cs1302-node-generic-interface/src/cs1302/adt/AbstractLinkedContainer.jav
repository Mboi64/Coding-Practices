package cs1302.adt;

import cs1302.node;
abstract class AbstractLinkedContainer<T> extends Container{
    
    private T head;
    private int size;

    public AbstractLinkedContainer(T head) {
        this.head = new Node<T>(head);
        this.size = 0;
    }

    @Override
    public int size() {
        return this.size;
    }

    public peek() {
        this.ensureNotEmpty();
        
    }

    private boolean ensureNotEmpty() {
        if (this.isEmpty()) {
            throw new IllegalStateException("The current linked is empty")
        }
        return true;
    } 

}