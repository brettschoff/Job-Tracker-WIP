import { Card } from 'semantic-ui-react';
import { useParams } from 'react-router-dom';

export default function NotesPage(){
    const { id } = useParams();
    return (
        <h1>This is the notes page.</h1>
    )
}