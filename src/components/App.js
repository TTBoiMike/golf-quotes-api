import React from 'react'
import {Navbar} from 'react-bootstrap'
import {Container} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import Quotes from './quotes'
import Filters from './filter'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      quotes: [],
      filters: {
        "random": true,
        "filter": false,
        "tag": undefined
      }
    }
  }

  componentDidMount = () => {
    fetch(`https://golf-quotes-api.herokuapp.com/quotes/random`)
      .then(data => data.json())
      .then(json => {
        let quotes = this.state.quotes;
        quotes.push(json)
        this.setState({
          quotes: quotes
        })
      })
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <Navbar className="bg-primary">
          <Navbar.Brand className="text-light">Golf is Game of Quotes</Navbar.Brand>
        </Navbar>
        <Container>
          <Quotes quotes={this.state.quotes}/>
          <Filters />
        </Container>
      </div>
    )
  }
}

export default App;
