import { Card } from "semantic-ui-react";


export default function NoteCard({notes}){
    return(
        <>
        <Card>
            <Card.Content>
                <Card.Header>title</Card.Header>
                <Card.Description>note</Card.Description>
            </Card.Content>
            <Card.Content extra>
                <span>priority</span>
            </Card.Content>
        </Card>
        </>
    )
}