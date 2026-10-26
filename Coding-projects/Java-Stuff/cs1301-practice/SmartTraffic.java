import java.util.Scanner;

public class SmartTraffic {
    public static final Scanner INPUT = new Scanner(System.in);
    public static void main(String[] args) {
        int[][] traffic = new int[3][3];
        int total = 0;
        int maxRoute = traffic[0][0];

        for (int[] route : traffic) {
            for (int j = 0; j < route.length; j++) {
             route[j] = INPUT.nextInt();
                total += route[j];
                if  (route[j] > maxRoute) {
                    maxRoute = route[j];
                }
            }
        }


        System.out.println("Total = " + total);
        System.out.println("Max Route = " + maxRoute);
    
    }

}