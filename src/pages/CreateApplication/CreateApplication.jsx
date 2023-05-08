import { useState } from 'react'
import { Button, Form } from 'semantic-ui-react'
import { useNavigate } from 'react-router-dom'

import * as applicationsApi from '../../utils/applicationsApi'

export default function CreateApplication(){

    const navigate = useNavigate()


    const options = [
        {key:'a', text:'Applied', value:'Applied'},
        {key:'i', text:'Interview', value:'Interview'},
        {key:'o', text:'Offer', value:'Offer'},
        {key:'r', text:'Rejected', value:'Rejected'}
    ]

    const [application, setApplication] = useState({
        title: '',
        company: '',
        status:'',
        dateApplied: '',
        contactEmail: '',
        jobLink: '',
    })

    function handleChange(e, data) {
        const { name, value } = data || e.target;
        setApplication({
          ...application,
          [name]: value
        });
      }
    async function handleSubmit(e){
        e.preventDefault();
        try{
            await applicationsApi.create(application)
            navigate('/')
        }catch(err){
            console.log(err)
        }
    }
    return(
        <Form onSubmit={handleSubmit}>
            <Form.Field>
                <input name='title' value={application.title} onChange={handleChange} />
            </Form.Field>
            <Form.Field>
                <input name='company' value={application.company} onChange={handleChange} />
            </Form.Field>
            <Form.Select 
            fluid
            name='status'
            options={options}
            placeholder='Status'
            onChange={handleChange}
            />
            <Form.Field>
            <input
                type="date"
                name="dateApplied"
                value={application.dateApplied}
                onChange={handleChange}
            />
            </Form.Field>
            <Form.Field>
                <input name='contactEmail' value={application.contactEmail} onChange={handleChange} />
            </Form.Field>
            <Form.Field>
                <input name='jobLink' value={application.jobLink} onChange={handleChange} />
            </Form.Field>
            <Button type='submit'>Submit</Button>
        </Form>
    )
}