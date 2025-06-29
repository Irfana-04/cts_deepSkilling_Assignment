package com.example.test;

import com.example.ExternalApi1;
import com.example.Myservice1;

import org.junit.jupiter.api.Test;
import static org.mockito.Mockito.*;

public class MyserviceTest1 {

    @Test
    public void testVerifyInteraction() {
      
        ExternalApi1 mockApi = mock(ExternalApi1.class);

        Myservice1 service = new Myservice1(mockApi);
        service.fetchData();

        verify(mockApi).getData();
    }
}
