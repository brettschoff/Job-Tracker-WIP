import { Card } from 'semantic-ui-react';
import { useParams } from 'react-router-dom';
import NoteCard from '../../components/NoteCard/NoteCard';
import { useEffect, useState } from 'react';
import * as notesApi from '../../utils/notesAPi';
import AddNoteForm from '../../components/AddNoteForm/AddNoteForm';


export default function NotesPage(){
    const { id } = useParams();
    // get the notes for the id in params and map over them to create a NoteCard for each
    const [notes, setNotes] = useState([])
    const [form, setForm] = useState({
        title: '',
        note: '',
        priority: ''
    })

    async function getNotes(id){
        // fetch the notes for the id in params
        // setNotes to the response
        try {
            const response = await notesApi.getAll(id)
            console.log(response, 'this is the response from getNotes')
            setNotes(response.application.notes)
        }catch(err){
            console.log(err)
        }
    }

    function handleChange(e){
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    async function handleSubmit(e){
        e.preventDefault()
        console.log(form)
        try{
            await notesApi.create(id, form)
            setNotes([form, ...notes])
        }catch(err){
            console.log(err)
        }
    }

    useEffect(() => {
        getNotes(id)
    }, [])

    return (
        <>
        <AddNoteForm handleSubmit={handleSubmit} handleChange={handleChange} />
        {notes.map((app) => {
            return (
                <NoteCard key={app._id} notes={app} />
            )
        })}
        </>
    ) }
