package com.cognizant.orm_learn;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import com.cognizant.orm_learn.service.CountryService;
@SpringBootApplication
public class OrmLearnApplication {
	
	private static final Logger LOGGER = LoggerFactory.getLogger(OrmLearnApplication.class);
    private static CountryService countryService;
    private static void testGetAllCountries() {
        LOGGER.info("Start");
        List<Country> countries = countryService.getAllCountries();
        LOGGER.debug("countries={}", countries);
        LOGGER.info("End");
    }

	public static void main(String[] args) {
		SpringApplication.run(OrmLearnApplication.class, args);
	    LOGGER.info("Inside main");
	    countryService = context.getBean(CountryService.class);
	    testGetAllCountries();
	}

}
