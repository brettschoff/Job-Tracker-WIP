import { useState } from 'react';
import { Button, Form, Segment } from 'semantic-ui-react';

export default function AddNoteForm({handleChange, handleSubmit}){
    return(
        <Segment>
            <Form onSubmit={handleSubmit}>
                <Form.Input 
                    placeholder='Title'
                    type='text'
                    required
                    name="title"
                    onChange={handleChange}
                />
                <Form.Input 
                    type='text'
                    placeholder="note content"
                    name="note"
                    onChange={handleChange}
                />
                <Form.Field 
                    label="Priority"
                    control='select'
                    name="priority"
                    onChange={handleChange}>
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                    
                </Form.Field>
                <Button type="submit">Add Note</Button>
            </Form>
        </Segment>
    )
    




}