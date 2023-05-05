import { Form, Button, Grid, Header, Image, Segment } from 'semantic-ui-react'
import { useState } from 'react'
import userService from '../../utils/userService'

import ErrorMessage from '../../components/ErrorMessage/ErrorMessage'
import { useNavigate } from 'react-router-dom' 

export default function SignupPage({handleSignupOrLogin}){

    const navigate = useNavigate()

    const [state, setState] = useState({
        username: '',
        email: '',
        password: '',
        passwordConf: '',
    })
    
    const [error, setError] = useState("");

    async function handleChange(e){
        setState({
            ...state,
            [e.target.name]:e.target.value
        })
    }

    async function handleSubmit(e){
        e.preventDefault()
        await userService.signup(state)
        handleSignupOrLogin()
        navigate('/')
    }
    return (
        <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
	  	<Header as="h2" color="purple" textAlign="center">
          <Image src="https://i.imgur.com/TM4eA5g.jpg" /> Sign Up
        </Header>
        <Form autoComplete="off" onSubmit={handleSubmit}>
          <Segment stacked>
            <Form.Input
              name="username"
              placeholder="username"
              value={state.username}
              onChange={handleChange}
              required
            />
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
            <Form.Input
              name="passwordConf"
              type="password"
              placeholder="Confirm Password"
              value={state.passwordConf}
              onChange={handleChange}
              required
            />
            <Button type="submit" className="btn">
              Signup
            </Button>
          </Segment>
          {error ? <ErrorMessage error={error} /> : null}
        </Form>
      </Grid.Column>
    </Grid>
    )
}