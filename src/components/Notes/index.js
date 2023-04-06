// Write your code here
import {useState} from 'react'
import {v4} from 'uuid'
import NoteItem from '../NoteItem'
import {
  MainDiv,
  Head,
  Form,
  InpEle,
  Btn,
  EmptyDiv,
  EmptyHead,
  EmptyPara,
  EmptyImage,
  NotesDiv,
  TaEle,
} from './styledComponents'

const Notes = () => {
  const [notesList, setNotesList] = useState([])
  const [title, setTitle] = useState('')
  const [note, setNote] = useState('')
  const emptyNotesView = () => (
    <EmptyDiv>
      <EmptyImage
        src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
        alt="notes empty"
      />
      <EmptyHead>No Notes Yet</EmptyHead>
      <EmptyPara>Notes you add will appear here</EmptyPara>
    </EmptyDiv>
  )

  const onSubmitForm = event => {
    event.preventDefault()
    const newNote = {id: v4(), title, note}
    setNotesList(prev => [...prev, newNote])
    setTitle('')
    setNote('')
  }

  return (
    <MainDiv>
      <Head>Notes</Head>
      <Form onSubmit={onSubmitForm}>
        <InpEle
          value={title}
          onChange={e => {
            setTitle(e.target.value)
          }}
          placeholder="Title"
        />
        <TaEle
          rows="8"
          cols="48"
          value={note}
          onChange={e => {
            setNote(e.target.value)
          }}
          placeholder="Take a Note..."
        >
          {note}
        </TaEle>
        <Btn type="submit">Add</Btn>
      </Form>

      {notesList.length === 0 ? (
        emptyNotesView()
      ) : (
        <NotesDiv>
          {notesList.map(each => (
            <NoteItem key={each.id} title={each.title} note={each.note} />
          ))}
        </NotesDiv>
      )}
    </MainDiv>
  )
}

export default Notes