import React, { useState } from "react";
import { Button, Form, FormGroup, Input, InputGroup, Label } from "reactstrap";
import axios from "axios";

function Forms() {
  const [name, setName] = useState("");
  const [email_id, setEmail_id] = useState("");
  const [phone_number, setPhone_number] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://61483545e950620017779cab.mockapi.io/users/", {
        name: name,
        phone_number: phone_number,
        email_id: email_id,
      })
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
      setName("");
      setEmail_id("");
      setPhone_number("");
  };
  
  return (
    <Form className="mb-3" onSubmit={handleSubmit}>
      <FormGroup>
        <Label>UserName </Label>
        <InputGroup>
          <Input
          type="text"
            name="name"
            value={name}
            placeholder="username"
            onChange={(e) => setName(e.target.value)}
            maxLength = "40"
            required
          />
        </InputGroup>

        <Label>Phone_Number </Label>
        <InputGroup>
          <Input
          type="number"
            name="phone_number"
            value={phone_number}
            placeholder="Phone_number"
            onChange={(e) => setPhone_number(e.target.value)}
            minLength = "10"
            required
          />
        </InputGroup>
        <Label>Email_id </Label>
        <InputGroup>
          <Input
          type = "email"
            name="email_id"
            value={email_id}
            placeholder="Email_id"
            onChange={(e) => setEmail_id(e.target.value)}
            required
          />
        </InputGroup>
        <Button className="mt-2" color="warning">
          Create
        </Button>
      </FormGroup>
    </Form>
  );
}

export default Forms;