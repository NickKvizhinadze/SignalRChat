import React, { Component } from 'react';
import Input from '../../components/Shared/Form/Input';
import { required } from '../../helpers/Validators';


class Form extends Component {
    //TODO: generate state from props
    state = {
        username: {
            value: '',
            errors: {
                server: 'test'
            },
            isValid: false, //TODO: validate before render // Can be done with ref and componentDidMount
            isDirty: false
        },
        password: {
            value: '',
            errors: {},
            isValid: false,
            isDirty: false
        },
        errors: {}
    }

    onSubmit = () => {
        console.log('test');
    }

    onChange = (e) => {
        let error = '';
        error = required(e);
        this.setState({
            [e.target.name]: {
                value: e.target.value,
                errors: {
                    ...this.state[e.target.name].errors,
                    required: error
                },
                isValid: error === '' ? true : false,
                isDirty: true
            }
        });
    }

    isFormValid = () => {
        var keys = Object.keys(this.state);
        for (let i = 0; i < keys.length; i++) {
            if (this.state[keys[i]].isValid === false)
                return false;
        }
        return true;
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
                            object={username}
                            autoFocus
                        />
                    </div>
                    <div>
                        <Input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Password"
                            onChange={this.onChange}
                            object={password} />
                    </div>
                </div>
                <button type="submit" className="btn" disabled={!this.isFormValid()}>Log In</button>
            </form>
        </div>);
    }
}


export default Form;