import React from 'react'
import {Jumbotron} from 'react-bootstrap'
import {Container} from 'react-bootstrap'
import {Table} from 'react-bootstrap'
import {Link} from 'react-router-dom'

class About extends React.Component {
    render() {
        return (
            <>
            <div>
                <Jumbotron className="my-5">
                    <h2>About this project</h2>
                    <p>
                        'Golf is a Game of Quotes' is a project by <a href="https://www.awebdevnamedmike.co.uk">a web dev named mike</a> using 50 of the greatest golf quotes of all time. 
                        If you play, follow or simply enjoy watching golf you may be familiar with a few of these phrases. If you haven't you'll definitely recognise who said them.
                    </p>
                    <p>
                        This a custom REST API built using express and a simple UI built using React and Bootstrap to showcase random quotes about Golf: what Arnold Palmer descirbed as 'the greatest game mankind as ever invented.' 
                    </p>
                    <Link to="/">
                        <button className="btn bg-masters text-light">View</button>
                    </Link>
                </Jumbotron>
                <Container>
                    <h5 className="mb-3">Paths for - https://golf-quotes-api.herokuapp.com</h5>
                    <Table striped variant="dark">
                        <thead>
                            <tr>
                                <h6>All Quotes</h6>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <p className="m-2"><span className="text-danger font-weight-bold">GET</span> /quotes</p>
                            </tr>
                        </tbody>
                    </Table>
                    <Table striped variant="dark">
                        <thead>
                            <tr>
                                <h6>All Quotes by Tag and/or Name</h6>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <p className="m-2"><span className="text-danger font-weight-bold">GET</span> /quotes?name=name</p>
                            </tr>
                             <tr>
                                <p className="m-2"><span className="text-danger font-weight-bold">GET</span> /quotes?tag=tag</p>
                            </tr>
                             <tr>
                                <p className="m-2"><span className="text-danger font-weight-bold">GET</span> /quotes?name=name&tag=tag</p>
                            </tr>
                        </tbody>
                    </Table>
                    <Table striped variant="dark">
                        <thead>
                            <tr>
                                <h6>Random Quotes</h6>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <p className="m-2"><span className="text-danger font-weight-bold">GET</span> /quotes/random</p>
                            </tr>
                        </tbody>
                    </Table>
                    <Table striped variant="dark">
                        <thead>
                            <tr>
                                <h6>Random Quotes by Tag</h6>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <p className="m-2"><span className="text-danger font-weight-bold">GET</span> /quotes/random/tag/:tag</p>
                            </tr>
                        </tbody>
                    </Table>
                    <Table striped variant="dark">
                        <thead>
                            <tr>
                                <h6>Random Quotes by Name</h6>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <p className="m-2"><span className="text-danger font-weight-bold">GET</span> /quotes/random/name/:name</p>
                            </tr>
                        </tbody>
                    </Table>
                    <Table striped variant="dark">
                        <thead>
                            <tr>
                                <h6>Random Quotes by Name and Tag</h6>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <p className="m-2"><span className="text-danger font-weight-bold">GET</span> /quotes/random/name/:name?tag=tag</p>
                            </tr>
                        </tbody>
                    </Table>
                </Container>
            </div>
            </>
        )
    }
}
export default About