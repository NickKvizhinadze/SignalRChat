import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Input } from '../../components/Shared/Form/Input';


class Form extends Component {
    state = {
        username: '',
        password: '',
        errors: {}
    }

    onSubmit = () => {
        console.log('test');
    }

    onChange = (e) => {
        console.log(e);
    }

    render() {
        const { username, password, errors } = this.state;
        return (<div>
            <form onSubmit={this.onSubmit}>               
                <div>
                    {errors.error ? (<div className="text-danger">{errors.error}</div>) : null}
                    <div>
                        <Input 
                            type="text"
                            name="username"
                            id="username"
                            placeholder="Username"
                            onChange={this.onChange}
                            value={username}
                            autoFocus
                        />
                    </div>
                    {errors.username ? (<span className="text-danger">{errors.username}</span>) : null}
                    <div>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Password"
                            required
                            onChange={this.onChange}
                            value={password} />
                    </div>
                    {errors.password ? (<span className="text-danger">{errors.password}</span>) : null}
                </div>
                
                <button type="submit" className="btn" >Log In</button>
            </form>
        </div>);
    }
}


export default connect(null, null)(Form);