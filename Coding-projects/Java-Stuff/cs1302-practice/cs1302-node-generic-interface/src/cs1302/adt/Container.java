package cs1302.adt;

public interface Container<T> {
    
    /**
     * Adds an item into an adt.
     */
    void add(T item);

    /**
    * Removes and returns the next item.
    *
    *  @throws IllegalStateException if the container is empty
    */
    T remove();

    /**
    * Looks at the current item.
    * 
    * @throws IllegalStateException if the container is empty
    */
    T peek();

    /**
     * Returns the current size of the ADT
     */
    int size();

    // default methods give an implementation inside the interface (implicitly public)
    default boolean isEmpty() {
        return this.size() == 0;    
    }
}