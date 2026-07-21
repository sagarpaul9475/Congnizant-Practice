package com.example.springlearn.Contoller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class helloContoller {
	@GetMapping("/hello")
	public String sayHello() {
		return "Hello World!";
	}
}

