package solutions.week1.designPattern.AdapterPatternEx4;

public class AdapterPatternTest {

    public static void main(String[] args) {

        PaymentProcessor paypal =
                new PayPalAdapter(new PayPalGateway());

        PaymentProcessor stripe =
                new StripeAdapter(new StripeGateway());

        PaymentProcessor razorpay =
                new RazorpayAdapter(new RazorpayGateway());

        paypal.processPayment(1000);
        stripe.processPayment(2500);
        razorpay.processPayment(5000);
    }
}