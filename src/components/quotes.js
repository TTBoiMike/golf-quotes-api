import React from 'react'
import '../App.css'

class Quotes extends React.Component {

    buildQuoteContainer = () => {
        return this.props.quotes.map((quote) => {
            return <article>
                <h3>"{quote.quote}"</h3>
                <p>{quote.name}</p>
            </article>
        })
    }

    render() {
        return(
            <div className="quotes-container text-center rounded p-5 mt-5">
                {this.buildQuoteContainer()}
            </div>
        )
    }
}

export default Quotes