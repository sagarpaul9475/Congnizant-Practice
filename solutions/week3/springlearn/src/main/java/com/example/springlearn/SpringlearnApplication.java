package com.example.springlearn;

import java.text.SimpleDateFormat;
import java.util.Date;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

@SpringBootApplication
public class SpringlearnApplication {
	
	 public static void displayDate() {
	        try {
	            ApplicationContext context =
	                    new ClassPathXmlApplicationContext("date-format.xml");
	            SimpleDateFormat format =
	                    context.getBean("dateFormat", SimpleDateFormat.class);
	            Date date = format.parse("31/12/2018");
	            System.out.println(date);
	            ((ClassPathXmlApplicationContext) context).close();

	        } catch (Exception e) {
	            e.printStackTrace();
	        }
	   }

	public static void main(String[] args) {
		displayDate();
		SpringApplication.run(SpringlearnApplication.class, args);
	}

}
	