import React, {Component} from 'react';

class Login extends Component {

    state = {
        credentials: {username: '', password: ''}
    }

    login = event => {
        fetch('http://127.0.0.1:8000/auth/', {
            method:'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(this.state.credentials)
        })
        .then(data => data.json())
        .then(
            data => {
                this.props.userLogin(data.token);
            }
        )
        .catch(error => console.log(error))
    }

    register = event => {
        fetch('http://127.0.0.1:8000/api/users/', {
            method:'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(this.state.credentials)
        })
        .then(data => data.json())
        .then(
            data => {
                console.log(data.token);
            }
        )
        .catch(error => console.log(error))
    }

    inputChanged = event => {
        const cred = this.state.credentials;
        cred[event.target.name] = event.target.value;
        this.setState({credentials: cred});
    }

    render() {
        return (
            <div>
                <h3>Login</h3>

                <label>
                    Username:
                    <input type="text" name="username" 
                    value={this.state.credentials.username} 
                    onChange={this.inputChanged}/>
                </label>
                <br/>
                <br/>
                <label>
                    Password:
                    <input type="password" name="password" 
                    value={this.state.credentials.password} 
                    onChange={this.inputChanged}/>
                </label>
                <br/>
                <br/>
                <button onClick={this.login}>Login</button>&nbsp;
                <button onClick={this.register}>Register</button>
            </div>
        );
    }
}

export default Login;