import React, {useState, useEffect} from 'react';
import { Button } from '@mui/base';
import TextField from '@mui/material/TextField';
import { Container, Paper } from '@mui/material';




export default function BasicTextFields() {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [customers, setCustomers] = useState([]);

    const handleClick = (event) => {
        event.preventDefault()
        const customer={name, address}
        console.log(customer)
        fetch("http://localhost:8080/customer/add", {
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(customer)
        }).then(() => {
            console.log("New Customer added")
        })
    }

    useEffect(() => {
        fetch("http://localhost:8080/customer/getAll")
        .then(res => res.json())
        .then((result) => {
            setCustomers(result);
        })
    }, []);

  return (
    <Container>
    <Paper>
     
     <h2 style={{color:"blue"}}>
        <u>
            Add Customer
        </u>
     </h2>
      <TextField id="outlined-basic" label="Name" variant="outlined" fullWidth
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
     
      <TextField id="outlined-basic" label="Email" variant="outlined" fullWidth
        value={address}
        onChange={(event) => setAddress(event.target.value)}
      />
      
      <Button color="secondary" onClick={handleClick}>Submit</Button>
   
      
   
    
    </Paper>
    <h1>Customers</h1>
    {customers.map(customer => (
        <div style={{margin:"10px", padding:"15px", textAlign:"left"}} key={customer.id}>
          Id:{customer.id}
          Name:{customer.name}
          Address:{customer.address}
        </div>
    ))}
    </Container>
  );
}
