package com.cognizant.spring_learn.controller;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.GetMapping;
import com.cognizant.spring_learn.Country;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import java.util.List;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
@RestController
public class CountryController {
    private static final Logger LOGGER = LoggerFactory.getLogger(CountryController.class);
    @RequestMapping("/country")
    public Country getCountryIndia() {
        LOGGER.debug("START - getCountryIndia()");
        ApplicationContext context = new ClassPathXmlApplicationContext("country.xml");
        Country country = context.getBean("country", Country.class);
        LOGGER.debug("Country : {}", country);
        LOGGER.debug("END - getCountryIndia()");
        return country;
    }

    @GetMapping("/countries")
    public List<Country> getAllCountries() {
        LOGGER.debug("START - getAllCountries()");
        ApplicationContext context = new ClassPathXmlApplicationContext("country.xml");
        List<Country> countries = context.getBean("countryList", List.class);
        LOGGER.debug("Countries: {}", countries);
        LOGGER.debug("END - getAllCountries()");
        return countries;
    }
}
