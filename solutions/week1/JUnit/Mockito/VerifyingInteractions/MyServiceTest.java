package Mockito.VerifyingInteractions;

import static org.mockito.Mockito.*;

import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

public class MyServiceTest {

    @Test
    public void testVerifyInteraction() {

        // Create Mock Object
        ExternalApi mockApi = Mockito.mock(ExternalApi.class);

        // Inject Mock into Service
        MyService service = new MyService(mockApi);

        // Call Method Under Test
        service.fetchData();

        // Verify Method Invocation
        verify(mockApi).getData();
    }
}
