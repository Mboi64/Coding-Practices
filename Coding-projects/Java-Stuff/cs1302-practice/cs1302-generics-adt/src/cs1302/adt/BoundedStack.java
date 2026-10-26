package cs1302.adt;

/**
 * Class that takes in an object paremeter for an adt stack
 * 
 * @param <T> is a parameter object for BoundedStack
 */
public class BoundedStack<T> {
    
    private T[] items;
    private int size;

    // The cast is safe (the array is private and only receives T values)
    @SuppressWarnings("unchecked");
    public BoundedStack(int capacity) {
        if (capacity < 1) {
            throw new IllegalArgumentException("Curent capacity is less than 1");
        }
        this.items = (T[]) new Object[capacity];
        this.size = 0;
    } // BoundedStack

    public void push(T item) {
        if (isFull()) {
            throw new IllegalStateException("The stack is full");
        } // if
        this.size++;
        this.items[this.size - 1] = item;
    } // push

    public T pop() {
        this.ensureNotEmpty();
        T popped = this.items[this.size - 1];
        this.size--;
        return popped;
    } // pop
    
    public T peek() {
        this.ensureNotEmpty();
        return this.items[this.size - 1];
    } // peek

    public boolean isEmpty() {
        return this.size == 0;
    } // isEmpty

    public boolean isFull() {
        return this.size == this.items.length;
    } // isFull

    public int size() {
        return this.size;
    } // size

    private boolean ensureNotEmpty() {
        if (this.isEmpty()) {
          throw new IllegalStateException("The stack is empty");
        } // if
        return true;
    }

} // BoundedStack