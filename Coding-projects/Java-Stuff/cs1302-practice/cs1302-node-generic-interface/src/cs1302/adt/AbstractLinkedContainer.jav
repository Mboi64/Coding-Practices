package cs1302.adt;

import cs1302.node.NodeContainer;
abstract class AbstractLinkedContainer<T> implements Container<T>{
    
    protected Node<T> head;
    protected int size;

    /**
     * Constructs the specified adt node by a node head and set the current size to 0.
     * 
     * @param head contains the current object node
     */
    public AbstractLinkedContainer(Node<T> head) {
        this.head = head;
        while (head != null) {
            this.size++;
            head = head.getNext();
        } //while
    } // AbstractLinkedContainer

    /** {@inheritDoc} */
    @Override
    public int size() {
        return this.size;
    } // size

    /** {@inheritDoc} */
    @Override
    public T peek() {
        if(checkEmpty()){
            throw new IllegalStateException("The node is empty");
        }
        return this.head.getItem();
    } // peek

    /** {@inheritDoc} */
    public abstract void add(T item); 
    // unlike interfaces where the abstract is implicit, you have to type "public abstract" to signify that it is an abstract

    /** {@inheritDoc} */
    public abstract T remove();

    /**
     * Returns true if the current node list is empty.
     */
    private boolean checksEmpty() {
        return this.head == null;
    } // ensureNotEmpty

} // AbstractLinkedContainer