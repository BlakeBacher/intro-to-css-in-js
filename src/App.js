import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components'
import { main, secondary, white, boxShadow, textShadow, PrimaryButton } from './styles/globalStyles'
import { background, flex } from './styles/functions'
import Fireworks from 'fireworks-react'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fireworks: false
    }
    this.toggleFireworks = this.toggleFireworks.bind(this)
  }
  toggleFireworks() {
    this.setState({fireworks: !this.state.fireworks})
  }
  render() {
    return (
      <Wrapper>
        <Title> Independence day </Title>
        <CardContainer>
          <Card>Happy</Card>
          <Card>4th</Card>
          <Card>of</Card>
          <Card>July</Card>
        </CardContainer>
        {
          this.state.fireworks
            ?
            <Fireworks width={800} height={300} />
            :
            <Placeholder></Placeholder>
        }
        <PrimaryButton onClick={()=>this.toggleFireworks()}>Launch!</PrimaryButton>
      </Wrapper>
    );
  }
}
export default App;

//  ==== styles ====

const Title = styled.h1`
font-size: 1.5em;
text-align: center;
color: ${white};
`
const Wrapper = styled.div`
${flex()}
align-items: center;
background: ${background(main, white, secondary)};
height:100vh;
width;100vw;
overflow:hidden;
`
const CardContainer = styled.div`
${flex('row')};
color:${white};
justify-content:center;
width:100%;
`
const Card = styled.div`
${flex()};
justify-content: center;
align-items: center;
height:30vh;
width:20vw;
margin:10px;
${boxShadow};
`
const Placeholder = styled.div`
height:300px;
`

