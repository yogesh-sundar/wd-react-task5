import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Table } from "reactstrap";
import "../App.css";
import Forms from "./Forms";
import { useHistory } from "react-router";
import axios from "axios";

function UserList() {
  const [state, setState] = useState([]);
  let history = useHistory();

  const userData = async () => {
    let details = await fetch(
      "https://61483545e950620017779cab.mockapi.io/users"
    );
    let users = await details.json();
    setState(users);
  };

  useEffect(() => {
    
    userData();
  }, []);

  const readUserDetails = (id) => {
    history.push(`user/${id}`);
  };
  const updateUserDetails = (id) => {
    history.push(`updateuser/${id}`);
  };

  const deleteUserDetails = (id) => {
    axios
      .delete("https://61483545e950620017779cab.mockapi.io/users/" + id)
      .then((resp) => {
        alert("user is deleted");
        userData();
      })
      .catch((err) => console.log(err));
  };

  return (
    <Container>
      <Forms />
      <Table bordered responsive className="table">
        <thead>
          <tr>
            <th>id</th>
            <th>Name</th>
            <th>Phone_Number</th>
            <th>Email_id</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          {state.map((list, index) => (
            <tr key={index}>
              <td>{list.id}</td>
              <td>{list.name}</td>
              <td>{list.phone_number}</td>
              <td>{list.email_id}</td>
              <td>
                <button
                  className="button"
                  onClick={() => readUserDetails(list.id)}
                >
                  Read
                </button>
                <button
                  className="button"
                  onClick={() => updateUserDetails(list.id)}
                >
                  Update
                </button>
                <button
                  className="button"
                  onClick={() => deleteUserDetails(list.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default UserList;
