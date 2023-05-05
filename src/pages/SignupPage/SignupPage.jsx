import { Form, Button } from 'semantic-ui-react'



export default function SignupPage(){
    return (
        <Form color='blue'>
            <Form.Field>
                <label>Username:</label>
                <input placeholder='Username' />
            </Form.Field>
            <Form.Field>
                <label>Email:</label>
                <input placeholder='Email' />
            </Form.Field>
            <Form.Field>
                <label>Password:</label>
                <input placeholder='Password' />
            </Form.Field>
            <Form.Field>
                <label>Confirm Password:</label>
                <input placeholder='Confirm Password' />
            </Form.Field>
            <Button type='submit'>Sign Up</Button>
        </Form>
    )
}