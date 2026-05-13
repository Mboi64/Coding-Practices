import java.util.Scanner;

public class Hospital {
    public static final Scanner INPUT = new Scanner(System.in);
    public static void main(String[] args) {
        double[][] temperature = new double[5][7];
        double[] average = new double[5];
        int counter = 0;

        for (int i = 0; i < temperature.length; i++) {
            for (int j = 0; j < temperature[i].length; j++) {
                temperature[i][j] = INPUT.nextDouble();
                average[i] += temperature[i][j];
            } // for
            average[i] = average[i] / 7.0;
            if (average[i] > 37.5){
                System.out.printf("Patient %d has a fever with an average temperature of %.2f!\n", (i + 1), average[i]);
                counter += 1;
            } else {
                System.out.printf("Paitent %d average temperature is %.2f.\n", (i + 1), average[i]);
            } // if-else
        } // for

        System.out.printf("There are %d patient(s) with fevers and %d who are healthy!\n", counter, (temperature.length - counter));

    }
}