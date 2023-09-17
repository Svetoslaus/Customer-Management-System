package com.example.customersystem.service;

import com.example.customersystem.model.Customer;
import org.springframework.stereotype.Service;

@Service
public interface CustomerService {

    public Customer saveCustomer(Customer customer);
}
