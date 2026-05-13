import java.util.Scanner;
public class BankTransaction {
    public static final Scanner INPUT = new Scanner(System.in);
    public static void main(String[] args) {
        int n; // number of transactions
        double[] transactions;
        double totalDeposit = 0;
        double totalWithdraw = 0;

        n = INPUT.nextInt();
        transactions = new double[n];

        for(int i = 0; i < transactions.length; i++) {
            transactions[i] = INPUT.nextDouble();
            if(transactions[i] > 0) {
                totalDeposit += transactions[i];
            } else {
                totalWithdraw += transactions[i];
            }
        }
        double balance = totalDeposit + totalWithdraw;

        System.out.println("Total Deposit = " + totalDeposit);
        System.out.println("Total Withdraw = " + totalWithdraw);
        System.out.println("Balance = " + balance);
        
    }
}