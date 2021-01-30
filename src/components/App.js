import React from 'react'
import {Navbar} from 'react-bootstrap'
import {Container} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import Quotes from './quotes'
import Filters from './filter'
import {ApiClient} from '../apiClient'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      quotes: []
    }
    this.ApiClient = new ApiClient()
  }

  componentDidMount = () => {
    return this.generateQuote("random")
  }

  generateQuote(tag, limit) {
    console.log(tag, limit)
    this.ApiClient.getQuote(tag, limit)
      .then(data => data.json().then(json => {
        let newQuotes = [...json]
        this.setState({
          quotes: newQuotes
        })
      }))
  }

  render() {
    return (
      <div className="App">
        <Navbar className="bg-masters">
          <Navbar.Brand className="text-light">Golf is Game of Quotes</Navbar.Brand>
        </Navbar>
        <Container>
          <Quotes quotes={this.state.quotes}/>
          <Filters generateQuote={(tag, limit) => this.generateQuote(tag, limit)}/>
        </Container>
      </div>
    )
  }
}

export default App;
