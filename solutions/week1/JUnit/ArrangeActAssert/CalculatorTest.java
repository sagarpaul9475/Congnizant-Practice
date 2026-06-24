package ArrangeActAssert;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import static org.junit.Assert.*;

public class CalculatorTest {

    private Calculator calculator;

    @Before
    public void setUp() {
        // Setup code
        calculator = new Calculator();
        System.out.println("Setup: Calculator object created");
    }

    @After
    public void tearDown() {
        // Cleanup code
        calculator = null;
        System.out.println("Teardown: Calculator object destroyed");
    }

    @Test
    public void testAdd() {

        // Arrange
        int a = 10;
        int b = 20;

        // Act
        int result = calculator.add(a, b);

        // Assert
        assertEquals(30, result);
    }
}