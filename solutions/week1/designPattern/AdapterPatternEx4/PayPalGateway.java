package solutions.week1.designPattern.AdapterPatternEx4;
public class PayPalGateway {

    public void makePayment(double amount) {
        System.out.println("Processing payment of Rs." + amount + " through PayPal.");
    }
}