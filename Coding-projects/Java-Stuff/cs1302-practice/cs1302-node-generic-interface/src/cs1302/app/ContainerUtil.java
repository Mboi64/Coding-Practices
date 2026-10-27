package cs1302.app;

import java.util.List;
import cs1302.adt.*;
import cs1302.node.Node;

public class ContainerUtil {

    public static <T> void addAll(Container<? super T> dest, List<? extends T> items) {
        for (T i : items) {
            dest.add(i);
        } // for
    } // addAll

    public static <T> void transfer(Container<? extends T> src, Container<? super T> dest) {
        while (!src.isEmpty()) {
            dest.add(src.remove());
        } // while
    } // transfer

}