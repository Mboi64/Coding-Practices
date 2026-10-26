package cs1302.app;

import java.util.List;
import cs1302.adt.BoundedStack;

public class StackUtils {

    // When creating a generic method, you use the parameter <T> to specify the object being used 
    public static <T> void pushAll(BoundedStack<T> stack, List<? extends T> items){
        for (T i : items) {
            stack.push(i);
        } // for
    } // pushAll

    // <? super T> and <? extends T> are wildcard generics that emphasis the use of inheritance within the generic datatype
    public static <T> void drainTo(BoundedStack<? extends T> source, List<? super T> destination) {
        while (!source.isEmpty()) {
            destination.add(source.pop());
        } // while
    } // dainTo

    public static <T extends Comparable<T>> T maxElement(BoundedStack<T> stack) {
        T max = stack.peek();
        BoundedStack<T> temp = new BoundedStack<>(stack.size());

        while (!stack.isEmpty()) {
            T curr = stack.pop();
            if (curr.compareTo(max) > 0) {
                max = curr;
            } // if
           temp.push(curr);
        } // while

        while (!temp.isEmpty()) {
            stack.push(temp.pop());
        } // while

        return max;
    } // maxElement
}