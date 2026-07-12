package com.example4.employee;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example4.employee.Employee;

public interface EmployeeRepository extends JpaRepository<Employee,Integer>{

}