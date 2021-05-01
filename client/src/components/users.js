import React, { useEffect, useState } from "react";
import NavigationBar from "./navigationBar";
import { Container, Form, Row, Col } from "react-bootstrap";
import Entry from "./Entry";
import styled from "styled-components";

const Styles = styled.div`
  .age-sort,
  .username-sort {
    font-size: 20px;
    color: #f5f5f7;
  }

  .div {
    overflow: hidden !important;
  }

  Form {
    color: #f5f5f7;
  }

  .title {
    font-weight: 500;
    color: #f5f5f7;
  }

  .sort {
  }

  .options {
    display: block;
    margin: auto;
  }
`;

function User(props) {
  const [view, setView] = useState(true);
  const [address, setAddress] = useState("/firstForward");
  const [sort, setSort] = useState(false);

  function handleView() {
    setView(!view);
  }

  function handleSort() {
    setSort(!sort);

    if (sort == true) {
      setAddress("/firstForward");
      console.log("First forward");
    }
    if (sort == false) {
      setAddress("/lastForward");
      console.log("Last forward");
    }
  }

  function createEntry(userData) {
    return (
      <Entry
        firstname={userData.firstname}
        lastname={userData.lastname}
        username={userData.username}
      />
    );
  }

  const [users, setUsers] = useState([
    {
      firstname: "",
      lastname: "",
      username: "",
      phone: "",
      address: "",
      city: "",
      state: "",
      zip: "",
      email: "",
      password: "",
      passwordConfirm: "",
    },
  ]);

  useEffect(() => {
    fetch(address)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonRes) => setUsers(jsonRes));
  });

  return (
    <Styles>
      <React.Fragment>
        <div className="div">
          <NavigationBar loggedIn={props.loggedIn} />
          <Container>
            <h1 className="title">Users:</h1>
            <Form>
              <Row>
                <Col>
                  <Form.Check
                    defaultChecked={true}
                    type="switch"
                    id="sort-switch"
                    name="sort-switch"
                    onChange={handleSort}
                    label="Check switch for lastname sort"
                  />
                </Col>
                <Col>
                  <Form.Check
                    defaultChecked={true}
                    type="switch"
                    id="view-switch"
                    name="view-switch"
                    onChange={handleView}
                    label="Check switch for List display"
                  />
                </Col>
              </Row>
            </Form>
          </Container>

          {view ? (
            <Container fluid="md">{users.map(createEntry)}</Container>
          ) : (
            <Container fluid="md">
              <Row xl="5" lg="3" md="2" sm="1" xs="1">
                {users.map(createEntry)}
              </Row>
            </Container>
          )}
        </div>
      </React.Fragment>
    </Styles>
  );
}

export default User;
