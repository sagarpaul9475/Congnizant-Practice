package com.example4.employee;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example4.employee.Employee;
import com.example4.employee.EmployeeService;

@RestController
@RequestMapping("/employee")
public class EmployeeController {

    @Autowired
    private EmployeeService employeeService;

    @PostMapping("/add")
    public String addEmployee(@RequestBody Employee employee){

        employeeService.addEmployee(employee);

        return "Employee Saved Successfully";
    }

}
