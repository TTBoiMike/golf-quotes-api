import React from 'react'
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import {Navbar} from 'react-bootstrap'
import {Container} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import Quotes from './quotes'
import Filters from './filter'
import {ApiClient} from '../apiClient'
import About from './about'

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

  generateQuote(tag) {
    this.ApiClient.getQuote(tag)
      .then(data => data.json().then(json => {
        let newQuotes = [json]
        this.setState({
          quotes: newQuotes
        })
      }))
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Navbar className="bg-masters d-flex justify-content-between">
            <Container>
              <Navbar.Brand className="text-light">Golf is Game of Quotes</Navbar.Brand>
              <Link to="/about"><button className="btn text-light">About</button></Link>
            </Container>
          </Navbar>
          <Container>
            <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/">
                <Quotes quotes={this.state.quotes}/>
                <Filters generateQuote={(tag, limit) => this.generateQuote(tag, limit)}/>
              </Route>
            </Switch>
          </Container>
        </Router>
      </div>
    )
  }
}

export default App;
