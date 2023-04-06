// Write your code here
import {MainDiv, Head, Para, BtnDel} from './styledComponents'

const NoteItem = ({title, note, id, deleteNote}) => (
  <MainDiv>
    <Head>{title}</Head>
    <Para>{note}</Para>
    <BtnDel
      onClick={() => {
        deleteNote(id)
      }}
    >
      Delete
    </BtnDel>
  </MainDiv>
)

export default NoteItem
