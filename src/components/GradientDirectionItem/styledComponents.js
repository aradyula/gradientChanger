import styled from 'styled-components'

export const Button = styled.button`
  width: 50px;
  height: 30px;
  border: none;
  border-radius: 5px;
  background-color: #ffffff;
  color: #1e293b;
  margin: 5px;
  text-align: center;
  opacity: ${props => (props.active === true ? 1 : 0.5)};
`
