// Style your elements here
import styled from 'styled-components'

export const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 35px 25px 35px 25px;
`
export const Head = styled.h1`
  font-family: 'Bree Serif';
  color: #4c63b6;
  font-size: 30px;
  font-weight: 900;
  margin-bottom: 30px;
  text-align: center;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 20px;
  box-shadow: 1px 1px 1px 1px #475569;
  border-radius: 5px;
  margin-bottom: 25px;
`

export const InpEle = styled.input`
  border: none;
  outline: none;
  background-color: transparent;
  color: #334155;
  padding: 5px;
  margin-bottom: 25px;
`
export const TaEle = styled.textarea`
  border: none;
  outline: none;
  background-color: transparent;
  color: #334155;
  padding: 5px;
  margin-bottom: 25px;
  width: 80%;
`

export const Btn = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  color: #ffffff;
  font-size: 15px;
  padding: 5px;
  align-self: flex-end;
  border-radius: 5px;
  background-color: #4c63b6;
  margin-bottom: 10px;
`

export const BtnSave = styled(Btn)`
  align-self: center;
  margin-bottom: 30px;
  background-color: green;
  height: 60px;
  width: 100px;
`

export const EmptyDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const EmptyHead = styled.h1`
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 800;
  color: #334155;
  margin-bottom: 15px;
  text-align: center;
`
export const EmptyPara = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 600;
  color: #475569;
  margin-bottom: 15px;
  text-align: center;
`

export const EmptyImage = styled.img`
  width: 200px;
  height: 200px;
  margin-bottom: 20px;
`

export const NotesDiv = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  list-style-type: none;
`
