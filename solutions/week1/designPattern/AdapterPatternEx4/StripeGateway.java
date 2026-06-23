package solutions.week1.designPattern.AdapterPatternEx4;

public class StripeGateway {

    public void charge(double amount) {
        System.out.println("Processing payment of Rs." + amount + " through Stripe.");
    }
}