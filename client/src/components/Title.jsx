import React, { Component } from 'react'
import { Container, Header } from 'semantic-ui-react'

class Title extends Component {
  render() {
    return (
      <div>
        <Container>
          <Header textAlign='center'>The Original Pancake House</Header>
          <Header textAlign='center'>Online Order Pickup Application</Header>
        </Container>
      </div>
    );
  }
}

export default Title
