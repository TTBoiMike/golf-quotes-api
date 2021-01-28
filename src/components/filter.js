import React from 'react'

class Filters extends React.Component {
    constructor() {
        super()
        this.state = {
            random: true,
            tag: "undefined"
        }
    }

    setFilter = (value) => {
        if(value === "filter") {
            this.setState({
                random: false
            })
        } else {
            this.setState({
                random: true
            })
        }
    }

    newQuoteSubmit = () => {
        // value of filter to make request to /quotes/random
        // if filter isn't random - name of tag to make request to /quotes/random/tag

    }

    render() {
        return (
            <form>
                <div>
                    <select className="form-control" name="tag" id="tag" style={ this.state.random ? {display:"none"} : {display:"block"}}>
                        <option value="">All</option>
                        <option value="coach">Coach</option>
                        <option value="Famous">Famous</option>
                        <option value="Funny">Funny</option>
                        <option value="Icon">Icon</option>
                        <option value="Inspirational">Inspirational</option>
                    </select>
                    <select className="form-control" name="filter" id="filter" onChange={(e) => this.setFilter(e.target.value)}>
                        <option value="random">Random</option>
                        <option value="filter">Filter</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-primary">New Quote!</button>
            </form>
        )
    }
}

export default Filters