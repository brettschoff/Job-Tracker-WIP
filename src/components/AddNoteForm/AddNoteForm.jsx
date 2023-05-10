import { useState } from "react";
import { Button, Form, Grid, Segment } from "semantic-ui-react";

export default function AddNoteForm({ handleChange, handleSubmit }) {
  return (
    <Grid centered style={{paddingTop:30}}>
      <Grid.Row>
        <Grid.Column style={{ maxWidth: 900 }}>
          <Segment>
            <Form onSubmit={handleSubmit}>
              <Form.Input
                placeholder="Title"
                type="text"
                required
                name="title"
                onChange={handleChange}
              />
              <Form.TextArea
                placeholder="note content"
                name="note"
                onChange={handleChange}
              />
              <Form.Field
                label="Priority"
                control="select"
                name="priority"
                onChange={handleChange}
              >
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </Form.Field>
              <Button type="submit" color="blue">Add Note</Button>
            </Form>
          </Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}
