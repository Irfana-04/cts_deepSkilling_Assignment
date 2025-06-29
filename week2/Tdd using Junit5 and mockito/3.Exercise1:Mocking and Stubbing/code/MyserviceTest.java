package com.example.test;

import com.example.ExternalApi;
import com.example.Myservice;

import org.junit.Test;
import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.*;

public class MyserviceTest {

    @Test
    public void testExternalApi() {
        // ✅ Mock the ExternalApi
        ExternalApi mockApi = mock(ExternalApi.class);

        // ✅ Stub the method to return predefined value
        when(mockApi.getData()).thenReturn("Mock Data");

        // ✅ Inject mock into Myservice
        Myservice service = new Myservice(mockApi);

        // ✅ Call the method and assert
        String result = service.fetchData();
        assertEquals("Mock Data", result);
    }
}
