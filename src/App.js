import React, {Component} from 'react'
import './App.css'
import axios from 'axios'

class App extends Component {

    constructor() {
        super()

        this.state = {
            login: '',
            name: '',
            numberOfRepos: '',
            location: ''
        }
        this.handleClickWithAxios = this.handleClickWithAxios.bind(this)
        this.handleClickWithFetch = this.handleClickWithFetch.bind(this)
        this.clear = this.clear.bind(this)

    }


    render() {

        return (
            <div>
                <button className='button' onClick={this.handleClickWithAxios}>Get details with Axios</button>
                <br/>
                <br/>
                <button className='button' onClick={this.clear}>Clear details</button>
                <br/>
                <br/>
                <button className='button' onClick={this.handleClickWithFetch}>Get Details with Fetch</button>
                <br/>
                <br/>

                Login: {this.state.login}
                <br/>
                <br/>
                Name: {this.state.name}
                <br/>
                <br/>
                Number of Repos: {this.state.numberOfRepos}
                <br/>
                <br/>
                Location: {this.state.location}
                <br/>
                <br/>
            </div>)
    }

    clear() {

        this.setState({
            name: '',
            login: '',
            numberOfRepos: '',
            location: ''
        })
    }


    handleClickWithFetch() {
        fetch('https://api.github.com/users/gurpreetari', {
            method: 'GET'
        }).then(function (response) {
            return response.json();
        }).then(data => this.setState(
            {
                name: data.name,
                login: data.login,
                numberOfRepos: data.public_repos,
                location: data.location
            }
        ))
            .catch(error => console.log(error));


    }


    handleClickWithAxios() {

        axios.get("https://api.github.com/users/gurpreetari")
            .then(response => this.setState(
                {
                    name: response.data.name,
                    login: response.data.login,
                    numberOfRepos: response.data.public_repos,
                    location: response.data.location
                }
            ))
            .catch(error => console.log(error));

    }
}
export default App;
