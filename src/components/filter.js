import React from 'react'

class Filters extends React.Component {
    constructor() {
        super()
        this.state = {
            tag: "random",
            limit: 1
        }
    }

    handleSubmit(e) {
        e.preventDefault()
        this.props.generateQuote(this.state.tag, this.state.limit)
    }

    setFilters(e) {
        if(e.currentTarget.tag.value === "random") {
            this.setState({
                tag: e.currentTarget.tag.value,
                limit: 1
            })
        } else {
            this.setState({
                tag: e.currentTarget.tag.value,
                limit: parseInt(e.currentTarget.limit.value)
            })
        }
    }

    render() {
        console.log(this.state)
        return (
            <form onChange={(e) => this.setFilters(e)}>
                <div className="d-flex mb-5">
                    <select className="form-control" name="tag" id="tag">
                        <option value="random">Random</option>
                        <option value="coach">Coach</option>
                        <option value="famous">Famous</option>
                        <option value="funny">Funny</option>
                        <option value="icon">Icon</option>
                        <option value="inspirational">Inspirational</option>
                    </select>
                    <select style={this.state.tag === "random" ? {display: "none"} : {display: "block"}} className="form-control" name="limit" id="limit">
                        <option value="1">1</option>
                        <option value="5">5</option>
                        <option value="10">10</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-block bg-masters text-light p-3" onClick={(e) => this.handleSubmit(e)}>New Quote!</button>
            </form>
        )
    }
}

export default Filters