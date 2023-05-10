import { Card } from "semantic-ui-react";


export default function NoteCard({notes}){
    return(
        <>
        <Card>
            <Card.Content>
                <Card.Header>{notes.title}</Card.Header>
                <Card.Description>{notes.note}</Card.Description>
            </Card.Content>
            <Card.Content extra>
                <span>{notes.priority}</span>
            </Card.Content>
        </Card>
        </>
    )
}