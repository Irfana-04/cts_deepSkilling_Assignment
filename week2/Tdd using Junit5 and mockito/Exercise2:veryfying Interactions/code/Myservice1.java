package com.example;

public class Myservice1 {
    private ExternalApi1 api;

    public Myservice1(ExternalApi1 api) {
        this.api = api;
    }

    public String fetchData() {
        return api.getData();  
    }
}
