import React from 'react'

class Filters extends React.Component {
    constructor() {
        super()
        this.state = {
            random: true,
            tag: undefined
        }
    }

    setFilter = (filterValue) => {
        if(filterValue === "filter") {
            this.setState({
                random: false
            })
        } else {
            this.setState({
                random: true,
                tag: undefined
            })
        }
    }

    handleSubmit(e) {
        e.preventDefault()
        this.props.generateQuote(this.state.tag)
    }

    render() {
        return (
            <form>
                <div>
                    <select className="form-control" name="tag" id="tag" style={ this.state.random ? {display:"none"} : {display:"block"}} onChange={(e) => this.setState({tag: e.target.value})}>
                        <option value="Random">Random</option>
                        <option value="coach">Coach</option>
                        <option value="famous">Famous</option>
                        <option value="funny">Funny</option>
                        <option value="icon">Icon</option>
                        <option value="inspirational">Inspirational</option>
                    </select>
                    <select className="form-control" name="filter" id="filter" onChange={(e) => this.setFilter(e.target.value)}>
                        <option value="random">Random</option>
                        <option value="filter">Filter</option>
                    </select>
                </div>
                <button type="submit" className="btn bg-masters text-light" onClick={(e) => this.handleSubmit(e)}>New Quote!</button>
            </form>
        )
    }
}

export default Filters