import java.util.Scanner;

public class a05_loop {
    public static void main(String[] args) {
        int left = 0, right = 0, count = 0;
        Scanner sc = new Scanner(System.in);

        System.out.println("Please enter left bond:");
        left = sc.nextInt();

        System.out.println("Please enter right bond:");
        right = sc.nextInt();

        for (; left <= right; ++left) {
            if (left % 3 == 0 & left % 5 == 0) {
                ++count;
            }
        }
        sc.close();

        System.out.println("There are " + count + " lease common multiple");
        sc.close();
    }
}
