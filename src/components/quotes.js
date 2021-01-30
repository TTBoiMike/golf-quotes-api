import React from 'react'
import {Carousel} from 'react-bootstrap'
import '../App.css'

class Quotes extends React.Component {

    buildQuoteContainer = () => {
        return this.props.quotes.map((quote) => {
            return <Carousel.Item className="quote-carousel text-light" interval={5000}>
                    <p className="mb-3 quote-text">"{quote.quote}"</p>
                    <p className="spec-font">{quote.name}</p>
                   </Carousel.Item>
        })
    }

    render() {
        return(
            <Carousel className="bg-masters quotes-container text-center rounded p-5 my-5">
                {this.buildQuoteContainer()}
            </Carousel>
        )
    }
}

export default Quotes