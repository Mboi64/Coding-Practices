package cs1302.app;

import java.util.ArrayList;
import java.util.List;
import cs1302.adt.BoundedStack;

public class Main {
    public static void main(String[] args) {
        BoundedStack<Integer> num = new BoundedStack<>(4);
        BoundedStack<String> str = new BoundedStack<>(4); 

        List<Integer> numList = new ArrayList<>();
        List<Integer> numList2 = new ArrayList<>();

        numList.add(2);
        numList.add(4);
        numList.add(6);
        numList.add(8);

        StackUtils.<Integer>pushAll(num, numList);
        System.out.println("Current numList is: " + numList);

        try {
            num.push(99);
        } catch (IllegalStateException e) {
            System.out.println("Caught: " + e.getMessage());
        } //try

        Integer intMax = StackUtils.<Integer>maxElement(num);
        System.out.println("The max element in this int stack is: " + intMax);

        StackUtils.<Integer>drainTo(num, numList2);
        System.out.println("Drained list: " + numList2);
        System.out.printf("Is the current num empty?: %b%n", num.isEmpty());
    
        List<String> strList = new ArrayList<>();
        List<String> strList2 = new ArrayList<>();

        strList.add("a");
        strList.add("b");
        strList.add("c");
        strList.add("d");

        StackUtils.<String>pushAll(str, strList);
        System.out.println("Current strList is: " + strList);

        String strMax = StackUtils.<String>maxElement(str);
        System.out.println("The max element in this str stack is: " + strMax);

        StackUtils.<String>drainTo(str, strList2);
        System.out.printf("Is the current num empty?: %b%n", str.isEmpty());
    }
}