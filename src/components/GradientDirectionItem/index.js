import {Button} from './styledComponents'

const GradientDirectionItem = props => {
  const {itemDetails, onDirection, active} = props
  const {displayText, value} = itemDetails
  console.log(active)
  const directionChange = () => {
    onDirection(value)
  }
  return (
    <li>
      <Button type="button" onClick={directionChange} active={active}>
        {displayText}
      </Button>
    </li>
  )
}
export default GradientDirectionItem
