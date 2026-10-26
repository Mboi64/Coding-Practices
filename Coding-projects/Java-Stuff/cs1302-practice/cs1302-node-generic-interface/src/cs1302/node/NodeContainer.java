package cs1302.node;

public class Node<T> {
    private T data;
    private Node<T> next;

    Node(T data) {
        setData(data);
    } // Node

    Node(T data, Node<T> node) {
        setNode(data, node);
    } // Node

    public void setData(T data) {
        this.data = data;
    } // setData

    public void setData(T data, Node<T> node) {
        this.data = data;
        this.next = new Node<T>(node);
    } // setData

    public T getData() {
        return this.data;
    } // getData

    public void setNext(T data) {
        this.next = new Node<T>(data, this.next);
    } // setNext

    public Node<T> getNext() {
        return this.next;
    } // getNext

} // Node