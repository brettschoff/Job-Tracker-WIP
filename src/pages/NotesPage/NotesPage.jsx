import { Card, Grid } from "semantic-ui-react";
import { useParams,useNavigate } from "react-router-dom";
import NoteCard from "../../components/NoteCard/NoteCard";
import PageHeader from "../../components/Header/Header";
import { useEffect, useState,  } from "react";
import * as notesApi from "../../utils/notesAPi";
import AddNoteForm from "../../components/AddNoteForm/AddNoteForm";
import AppDetail from "../../components/AppDetail/AppDetail";

export default function NotesPage({handleLogout}) {
  const { id } = useParams();
  const applicationId = id
  const navigate = useNavigate()
  // get the notes for the id in params and map over them to create a NoteCard for each
  const [notes, setNotes] = useState([]);
  const [form, setForm] = useState({
    title: "",
    note: "",
    priority: "Low",
  });
  const [appDetail, setAppDetail] = useState({})
  let highPrioNote = [];
  let mediumPrioNote = [];
  let lowPrioNote = [];

  const [loading,setLoading]=useState(true)
  async function getNotes(id) {
    // fetch the notes for the id in params
    // setNotes to the response
    try {
      const response = await notesApi.getAll(id);
      console.log(response, "this is the response from getNotes");
      setNotes(response.application.notes);
      setAppDetail(response.application);
      setLoading(false)
    } catch (err) {
      console.log(err);
    }
  }

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(form);
    try {
      await notesApi.create(id, form);
      setNotes([form, ...notes]);
      setForm({
        title: "",
        note: "",
        priority: "Low",
      })
    } catch (err) {
      console.log(err);
    }
  }

  async function handleDelete(id) {
    try {
        setLoading(true)
        console.log(id)
        await notesApi.deleteNote(id);
        setLoading(false)
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getNotes(id);
  }, [loading]);

  notes.map((note) => {
    if (note.priority === "High") {
      highPrioNote.push(note);
    } else if (note.priority === "Medium") {
      mediumPrioNote.push(note);
    } else {
      lowPrioNote.push(note);
    }
  });

  return (
    <>

      <PageHeader handleLogout={handleLogout} appDetail={appDetail} isNotePage={true}/>
      <AddNoteForm handleSubmit={handleSubmit} handleChange={handleChange} form={form}/>
      <Grid centered>
        <Grid.Row columns={3}>
          <Grid.Column textAlign="center">
            <h2>High</h2>
            <Card.Group itemsPerRow={1}>
              {highPrioNote.map((note) => {
                return (
                  <NoteCard
                    key={note._id}
                    notes={note}
                    color="red"
                    handleDelete={handleDelete}
                  />
                );
              })}
            </Card.Group>
          </Grid.Column>
          <Grid.Column textAlign="center">
            <h2>Medium</h2>
            <Card.Group itemsPerRow={1}>
              {mediumPrioNote.map((note) => {
                return (
                  <NoteCard
                    key={note._id}
                    notes={note}
                    color="orange"
                    handleDelete={handleDelete}
                  />
                );
              })}
            </Card.Group>
          </Grid.Column>
          <Grid.Column textAlign="center">
            <h2>Low</h2>
            <Card.Group itemsPerRow={1}>
              {lowPrioNote.map((note) => {
                return (
                  <NoteCard
                    key={note._id}
                    notes={note}
                    color="green"
                    handleDelete={handleDelete}
                  />
                );
              })}
            </Card.Group>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  );
}
