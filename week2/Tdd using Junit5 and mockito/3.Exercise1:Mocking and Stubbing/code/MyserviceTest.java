package com.example.test;

import com.example.ExternalApi;
import com.example.Myservice;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*; 

public class MyserviceTest {

    @Test
    public void testExternalApi() {
        ExternalApi mockApi = mock(ExternalApi.class);
        when(mockApi.getData()).thenReturn("Mock Data");
        Myservice service = new Myservice(mockApi);
        String result = service.fetchData();
        assertEquals("Mock Data", result);
    }
}
