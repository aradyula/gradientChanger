// Style your elements here
import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  background-size: cover;
  background: linear-gradient(${props => props.gradientDirection});

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Heading = styled.h1`
  color: #ffffff;
  font-size: 30px;
  font-family: 'Roboto';
  font-weight: 400px;
`
export const Caption = styled.p`
  color: #ffffff;
  font-size: 20px;
  font-family: 'Roboto';
  font-weight: 300px;
`
export const Generate = styled.button`
  width: 100px;
  height: 30px;
  border: none;
  border-radius: 5px;
  background-color: #00c9b7;
  color: #1e293b;
  margin: 20px;
`
export const InputColor = styled.input`
  width: 50px;
  border: none;
`

export const ColorDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
`
export const ListItem = styled.ul`
  display: flex;
  list-style-type: none;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
`
export const Div = styled.div`
  display: flex;
  flex-direction: column;
`

export const Color = styled.p`
  font-size: 18px;
  font-weight: normal;
  color: #ffffff;
`
