import { Card, Button } from "semantic-ui-react";

export default function NoteCard({ notes, color, handleDelete }) {
    function handleClick(){
        handleDelete(notes._id)
    }
  return (
    <>
      <Card raised color={color}>
        <Card.Content textAlign="left">
          <Card.Header>{notes.title}</Card.Header>
          <Card.Description>{notes.note}</Card.Description>
        </Card.Content>
        <Card.Content extra textAlign="left">
          <span>{notes.priority}</span>
          <Button basic color="red" size="mini" onClick={handleClick} floated="right">
            Delete
          </Button>
        </Card.Content>
      </Card>
    </>
  );
}
