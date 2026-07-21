package com.example.springlearn.Contoller;

import com.example.springlearn.model.Country;
import com.example.springlearn.service.CountryService;

import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CountryController {
    @Autowired
    private CountryService countryService;

    private static final Logger LOGGER =
            LoggerFactory.getLogger(CountryController.class);

    @RequestMapping("/country")
    public Country getCountryIndia() {

        LOGGER.info("START");

        ApplicationContext context =
                new ClassPathXmlApplicationContext("country.xml");

        Country country = context.getBean("india", Country.class);

        LOGGER.info("END");

        ((ClassPathXmlApplicationContext) context).close();

        return country;
    }

    @GetMapping("/countries/{code}")
    public Country getCountry(@PathVariable String code) {
        return countryService.getCountry(code);
    }
    @GetMapping("/countries")
    public List<Country> getAllCountries() {

        LOGGER.info("START");

        ApplicationContext context =
                new ClassPathXmlApplicationContext("country.xml");

        List<Country> countries = new ArrayList<>();

        countries.add(context.getBean("india", Country.class));
        countries.add(context.getBean("usa", Country.class));
        countries.add(context.getBean("uk", Country.class));
        countries.add(context.getBean("canada", Country.class));
        countries.add(context.getBean("australia", Country.class));
        countries.add(context.getBean("japan", Country.class));

        LOGGER.info("END");

        ((ClassPathXmlApplicationContext) context).close();

        return countries;
    }
}