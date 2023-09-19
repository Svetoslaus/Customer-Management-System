package com.example.customersystem.controller;

import com.example.customersystem.model.Customer;
import com.example.customersystem.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/customer")
@CrossOrigin
public class CustomerController {

    @Autowired
    private CustomerService customerService;

    @PostMapping("/add")
    public String add(@RequestBody Customer customer){
        customerService.saveCustomer(customer);
        return "New Customer is added";
    }

    @GetMapping("/getAll")
    public List<Customer> getAllCustomers(){
        return customerService.getAllCustomers();
    }
}
