// Write your code here
import {MainDiv, Head, Para} from './styledComponents'

const NoteItem = ({title, note}) => (
  <MainDiv>
    <Head>{title}</Head>
    <Para>{note}</Para>
  </MainDiv>
)

export default NoteItem
