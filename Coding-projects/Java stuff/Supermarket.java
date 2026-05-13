import java.util.Scanner;
public class Supermarket {
    public static final Scanner INPUT = new Scanner(System.in);
    public static void main(String[] args) {
        int n;
        double[] price;
        double total = 0;
        double discount;

        System.out.println("How many items are you buying?");
        n = INPUT.nextInt();
        price = new double[n];
        
        for (int i = 0; i < price.length; i++) {
            System.out.println("What is the price of item " + (i + 1) + "?");
            price[i] = INPUT.nextDouble();
            total += price[i];
        } // for

        if (total > 100) {
            discount = total * .10;
        } else {
            discount = 0;
        } // if-else

        System.out.printf("Total = %d\n", (int)total);
        System.out.printf("Discount = %d\n", (int)discount);
        System.out.printf("Final = %d\n", (int)(total - discount));
    }
}