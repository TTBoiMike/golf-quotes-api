import React from 'react'
import {Carousel} from 'react-bootstrap'
import '../App.css'

class Quotes extends React.Component {

    buildQuoteContainer = () => {
        console.log(this.props.quotes)
        return this.props.quotes.map((quote) => {
            return <Carousel.Item interval={5000}>
                    <h4>"{quote.quote}"</h4>
                    <p>{quote.name}</p>
                   </Carousel.Item>
        })
    }

    render() {
        return(
            <Carousel className="quotes-container text-center rounded p-5 mt-5">
                {this.buildQuoteContainer()}
            </Carousel>
        )
    }
}

export default Quotes