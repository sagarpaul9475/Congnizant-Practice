package solutions.week1.designPattern.AdapterPatternEx4;

public class RazorpayGateway {

    public void pay(double amount) {
        System.out.println("Processing payment of Rs." + amount + " through Razorpay.");
    }
}