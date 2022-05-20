import CardList from "../components/CardList";
import SearchBox from '../components/SearchBox';
// import {robots} from './robots';
import Scroll from '../components/Scroll';
import React, { Component } from "react";
import Loading from '../components/Loading';
import ErrorBoundary from "../components/ErrorBoundary";
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ robots: users })
            );
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }

    render() {
        const { robots, searchfield } = this.state
        const filterRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        if (!robots.length) {
            // return <h1 className="title">Loading</h1>
            return <Loading />
        } else {
            return (
                <div className="tc">
                    <h1 className="title">Robo Friends</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                        <ErrorBoundary>
                            <CardList robots={filterRobots} />
                        </ErrorBoundary>
                    </Scroll>
                </div>

            );
        }

    }
}

export default App;