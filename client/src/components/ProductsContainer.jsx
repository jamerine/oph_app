import React, { Component } from 'react'
import axios from 'axios'
// import update from 'immutability-helper'
import { Button, Container, Grid, Icon, Item } from 'semantic-ui-react'


class ProductsContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      products: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3001/api/v1/products.json')
      .then(response => {
        this.setState({products: response.data})
      })
      .catch(error => console.log(error))
  }

  render() {
    return (
      <div>
        <Container text fluid>
          <Item.Group divided>
            {this.state.products.map((product) => {
              return(
                <Item key={product.id} >
                  <Item.Content>
                    <Item.Header>
                      { product.name}
                    </Item.Header>
                    <Item.Description >
                      <Grid columns={2}>
                        <Grid.Column width={12}>
                          { product.short_description}
                        </Grid.Column>
                        <Grid.Column width={4} verticalAlign='middle'>
                          <Button positive floated='right' size='small'>
                            Add Item
                            <Icon name='right chevron' />
                          </Button>
                        </Grid.Column>
                      </Grid>
                    </Item.Description>
                  </Item.Content>
                </Item>
              )
            })}
          </Item.Group>
        </Container>
      </div>
    );
  }

}


export default ProductsContainer
