import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { Button, Container, Form, FormGroup, Input, InputGroup, Label } from "reactstrap";
import axios from "axios";

function UpdateUserDetails() {
  const [details, setDetails] = useState({
    name: "",
    email_id: "",
    phone_number: "",
    id: "",
  });
  const {name, email_id, phone_number} = details;
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    fetch(`https://61483545e950620017779cab.mockapi.io/users/${id}`)
      .then((value) => value.json())
      .then((result) => setDetails(result));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    details.id = id;
    axios.put("https://61483545e950620017779cab.mockapi.io/users/"+id, details);
    history.push("/users")
  };

  const handleChange =(e)=>{
setDetails({...details, [e.target.name]: e.target.value})
  }
  return (
    <Container>
      <Form className="mb-3" onSubmit={handleSubmit}>
        <FormGroup>
          <Label>UserName </Label>
          <InputGroup>
            <Input type="text" name="name" value={name} placeholder="username" onChange={handleChange}/>
          </InputGroup>
          <Label>Email_id </Label>
          <InputGroup>
            <Input type="email" name="email_id" value={email_id} placeholder="Email_id" onChange={handleChange}/>
          </InputGroup>
          <Label>Phone_Number </Label>
          <InputGroup>
            <Input
            type="text"
              name="phone_number"
              value={phone_number}
              placeholder="Phone_number"
              onChange={handleChange}
              minLength = "10"
            />
          </InputGroup>
          <Button className="mt-2" color="warning">
            Update
          </Button>
        </FormGroup>
      </Form>
    </Container>
  );
}

export default UpdateUserDetails;
