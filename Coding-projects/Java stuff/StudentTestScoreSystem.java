import java.util.Scanner;
public class StudentTestScoreSystem {
    public static final Scanner INPUT = new Scanner(System.in);
    public static void main(String[] args) {
        int[][] scores = new int[20][3];
        double[] average = new double[20];

        System.out.println(scores.length);
        System.out.println(scores[0].length);

        for (int i = 0; i < scores.length; i++){
            for (int j = 0; j < scores[i].length; j++) {
                scores[i][j] = INPUT.nextInt();
                average[i] += scores[i][j];
            }
            average[i] = average[i] / 3.0; // averages scores
            System.out.println("Student " + (i + 1) + " Average = " + average[i]); 
        } // for

        System.out.println();


        double highestAverageScore = average[0]; 
        for (double highAvg : average) {
            if (highAvg > highestAverageScore){
                highestAverageScore = highAvg;
            } 
        } // for each
        
        double lowestAverageScore = average[0];
        for (double lowAvg : average) {  
            if (lowAvg < lowestAverageScore){
                lowestAverageScore = lowAvg;
            } 
        } // for each

        System.out.println("Highest Average = " + highestAverageScore);
        System.out.println("Lowest Average = " + lowestAverageScore);
    }
}