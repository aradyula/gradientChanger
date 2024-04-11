import {Component} from 'react'
import {
  Container,
  Heading,
  Caption,
  Generate,
  InputColor,
  Color,
  ColorDiv,
  Div,
  ListItem,
} from './styledComponents'
import GradientDirectionItem from '../GradientDirectionItem'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]

class GradientGenerator extends Component {
  state = {
    lColor: '#8ae323',
    rColor: '#014f7b',

    activeTab: gradientDirectionsList[0].value,
    gradientValue: `to ${gradientDirectionsList[0].value}, #8ae323, #014f7b`,
  }

  firstChange = e => {
    this.setState({lColor: e.target.value})
  }

  secondChange = e => {
    this.setState({rColor: e.target.value})
  }

  directionChange = value => {
    //  console.log(`${value} clicked`)
    this.setState({activeTab: value})
  }

  applyBackground = () => {
    const {activeTab, lColor, rColor} = this.state
    this.setState({
      gradientValue: `to ${activeTab}, ${lColor}, ${rColor}`,
    })
  }

  render() {
    const {lColor, rColor, gradientValue, activeTab} = this.state
    //  console.log(lColor, rColor)
    return (
      <Container
        data-testid="gradientGenerator"
        gradientDirection={gradientValue}
      >
        <Heading>Generate a CSS Color Gradient</Heading>
        <Caption>Choose Direction</Caption>
        <ListItem>
          {gradientDirectionsList.map(each => (
            <GradientDirectionItem
              key={each.directionId}
              itemDetails={each}
              onDirection={this.directionChange}
              active={each.value === activeTab}
            />
          ))}
        </ListItem>
        <Caption>Pick the Colors</Caption>
        <ColorDiv>
          <Div>
            <Color>{lColor}</Color>
            <InputColor
              type="color"
              value={lColor}
              onChange={this.firstChange}
            />
          </Div>
          <Div>
            <Color>{rColor}</Color>
            <InputColor
              type="color"
              value={rColor}
              onChange={this.secondChange}
            />
          </Div>
        </ColorDiv>
        <Generate type="button" onClick={this.applyBackground}>
          Generate
        </Generate>
      </Container>
    )
  }
}
export default GradientGenerator
