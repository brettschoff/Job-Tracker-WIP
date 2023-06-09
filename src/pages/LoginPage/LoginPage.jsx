import React, { useState } from 'react';
import './LoginPage.css';
import {
  Button,
  Form,
  Image,
  Grid,
  Header,
  Message,
  Segment,
} from "semantic-ui-react";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import userService from '../../utils/userService';
import { Link, useNavigate } from 'react-router-dom';

export default function LoginPage(props){
  const [error, setError] = useState("");
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  function handleChange(e) {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try{
      await userService.login(state);
      props.handleSignupOrLogin();
      navigate('/');
    }catch(err){
      setError(err.message);
    }
  }

  return (
    <Grid
      textAlign="center"
      style={{ height: "100vh", width: "100vw" }}
      verticalAlign="middle"
    >
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="blue" textAlign="center">
          <Image src="https://i.imgur.com/stqXJe2.png" /> Log In
        </Header>
        <Form onSubmit={handleSubmit}>
          <Segment stacked>
            <Form.Input
              type="email"
              name="email"
              placeholder="email"
              value={state.email}
              onChange={handleChange}
              required
            />
            <Form.Input
              name="password"
              type="password"
              placeholder="password"
              value={state.password}
              onChange={handleChange}
              required
            />
            <Button
              color="teal"
              fluid
              size="large"
              type="submit"
              className="btn"
            >
              Login
            </Button>
          </Segment>
        </Form>
        <Message>
          New to us? <Link to="/signup">Sign Up</Link>
        </Message>
        {error ? <ErrorMessage error={error} /> : null}
      </Grid.Column>
    </Grid>
  );
}

