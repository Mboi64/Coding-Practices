package cs1302.app;

import cs1302.adt.*;
import cs1302.node.Node;

public class Main {
    
    public static void main(String[] args){
        Container<String> numStack = new LinkedStack<>(null);
        Container<String> numQueue = new LinkedQueue<>(null);

        numStack.add("A");
        numStack.add("B");
        numStack.add("C");
        System.out.println("Current Stack: " + numStack.toString());

        numQueue.add("A");
        numQueue.add("B");
        numQueue.add("C");
        System.out.println("Current Queue: " + numQueue.toString());

        // Container<String> num = new LinkedStack<>();
        // ContainerUtil.<String>transfer(numStack, num);
        // System.out.println("New numStack " +  num);

    }

}