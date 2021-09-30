import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Container, Table } from "reactstrap";
import "../App.css";

function UserDetails() {
  let [details, setDetails] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    fetch(`https://61483545e950620017779cab.mockapi.io/users/${id}`)
      .then((value) => value.json())
      .then((result) => setDetails(result));
  }, [id]);

  return (
    <Container>
      <Table bordered className="table">
        <thead>
          <tr>
            <th>
              <b>Name</b>
            </th>
            <th>
              <b>Email_id</b>
            </th>
            <th>
              <b>Phone_Number</b>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{details?.name}</td>
            <td>{details?.email_id}</td>
            <td>{details?.phone_number}</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
}

export default UserDetails;
