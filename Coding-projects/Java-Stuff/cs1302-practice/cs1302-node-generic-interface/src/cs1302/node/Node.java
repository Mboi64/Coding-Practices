package cs1302.node;

/**
 * Represents a Node that can hold objects of any types
 * 
 * @param <T> is the parameter for the Node class
 */
public class Node<T> {
    private T item;
    private Node<T> next;

    /**
     * Constructs the node with a specified item object.
     * 
     * @param item represents the current item contained in this node 
     */
    public Node(T item) {
        setItem(item);
    } // Node
    
    /**
     * Constructs the node with a specified item object and next node structure.
     * 
     * @param item represents the current item contained in this node
     * @param next represents the following node in the structure
     */
    public Node(T item, Node<T> next) {
        setItem(item);
        setNext(next);
    } // Node

    /**
     * Sets the item in this node.
     * 
     * @param item represents the current item in the node
     */
    public void setItem(T item) {
        this.item = item;
    } // setItem

    /**
     * Returns the specified item object based on the specified data type
     */
    public T getItem() {
        return this.item;
    } // getItem

    /**
     * Sets the next node.
     * 
     * @param next represents the following node in this structure
     */
    public void setNext(Node<T> next) {
        // I wasted soo much time thinking this method meaning to append 
        this.next = next;
    } // setNext

    /**
     * Returns the following node.
     */
    public Node<T> getNext() {
        return this.next;
    } // getNext

    /**
     * Returns true if the next node is a set.
     */
    public boolean hasNext() {
        return this.getNext() != null;
    } // hasNext
} // Node