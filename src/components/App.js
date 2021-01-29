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
    return this.generateQuote(undefined)
  }

  generateQuote(tag, limit) {
    if(tag === undefined) {
      this.ApiClient.getQuote(`https://golf-quotes-api.herokuapp.com/quotes/random`)
      .then(data => data.json().then(json => {
        let quote = this.state.quotes // []
        quote[0] = json
        this.setState({
          quotes: quote
        })
      }))
    } else {
      this.ApiClient.getQuote(`https://golf-quotes-api.herokuapp.com/quotes/random/tag/${tag}?limit=${limit}`)
        .then(data => data.json().then(json => {
          console.log(json)
          let newQuotes = [...json]
          this.setState({
            quotes: newQuotes
          })
        }))
    }
  }

  render() {
    return (
      <div className="App">
        <Navbar className="bg-masters">
          <Container>
          <Navbar.Brand className="text-light">Golf is Game of Quotes</Navbar.Brand>
          </Container>
        </Navbar>
        <Container>
          <Quotes quotes={this.state.quotes}/>
          <Filters generateQuote={(tag) => this.generateQuote(tag)}/>
        </Container>
      </div>
    )
  }
}

export default App;
