import React, { Component } from 'react'
// import { Container, Header, Segment, Button, Icon, Dimmer, Loader, Divider, Table } from 'semantic-ui-react'
// import update from 'immutability-helper'
import Title from './components/Title'
import ProductsContainer from './components/ProductsContainer'




class App extends Component {



  render() {

    return (

        <div>
          <Title />
          <ProductsContainer />
        </div>

    )
  }
}

export default App;
