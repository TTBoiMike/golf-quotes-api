import React from 'react'

class Filters extends React.Component {
    constructor() {
        super()
        this.state = {
            tag: "random"
        }
    }

    handleSubmit(e) {
        e.preventDefault()
        this.props.generateQuote(this.state.tag)
    }

    render() {
        return (
            <form onChange={(e) => this.setState({tag: e.currentTarget.tag.value})}>
                <div className="mb-5 width">
                    <select className="form-control" name="tag" id="tag">
                        <option value="random">Random quotes</option>
                        <option value="coach">Coaching quotes</option>
                        <option value="famous">Famous quotes</option>
                        <option value="funny">Funny quotes</option>
                        <option value="inspirational">Inspirational quotes</option>
                        <option value="player">Player quotes</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-block width bg-masters text-light p-3" onClick={(e) => this.handleSubmit(e)}>Random Quote</button>
            </form>
        )
    }
}

export default Filters