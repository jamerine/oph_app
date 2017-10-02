import React, { Component } from 'react'
import axios from 'axios'
// import update from 'immutability-helper'
// import { Button, Container, Grid, Icon, Item } from 'semantic-ui-react'


class OrderContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      order: {
        order_status_id: 1
      }
    }
  }

  componentDidMount() {
    const order = this.state.order
    axios.post('http://localhost:3001/api/v1/orders', {order: order})
      .then(response => {
        this.setState({order: response.data})
      })
      .catch(error => console.log(error))
  }

  render() {
    return (
      <div>
        {this.state.order.id}
      </div>
    )
  }
}

export default OrderContainer
