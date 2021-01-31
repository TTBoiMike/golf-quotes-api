import React from 'react'
import '../App.css'

class Quotes extends React.Component {

    buildQuoteContainer = () => {
        return this.props.quotes.map((quote) => {
            return <article className="quote-carousel text-light">
                    <p className="mb-3 quote-text">"{quote.quote}"</p>
                    <p className="spec-font">{quote.name.firstname} {quote.name.surname}</p>
                   </article>
        })
    }

    render() {
        return(
            <div className="bg-masters quotes-container text-center rounded p-5 my-5">
                {this.buildQuoteContainer()}
            </div>
        )
    }
}

export default Quotes