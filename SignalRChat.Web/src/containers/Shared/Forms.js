import React, { Component } from 'react';
import Input from '../../components/Shared/Form/Input';


class Form extends Component {
    constructor(props) {
        super(props);
        const obj = {};
        Object.keys(props.formState).forEach(key => {
            obj[key] = {
                value: props.formState[key].value,
                errors: {},
                validators: props.formState[key].validators,
                isValid: false,
                isDirty: false
            };
        });
        
        this.state = {
            ...obj,
            errors: {}
        };
    }
    
    
    componentDidMount() {
        Object.keys(this.refs).forEach(key => {
            const obj = this.state[key];

            obj.errors = {
                ...obj.errors,
                ...this.executeValidators(this.state[key].validators, this.refs[key].formComponent)
            };
            obj.isValid = !this.isValid(obj.errors) ? true : false;
            this.setState({
                [key]: { ...obj }
            });
        });
    }

    onSubmit = () => {
        console.log('test');
    }

    onChange = (e) => {
        const errors = {
            ...this.state[e.target.name].errors,
            ...this.executeValidators(this.state[e.target.name].validators, e.target)
        };
        this.setState({
            [e.target.name]: {
                value: e.target.value,
                errors: errors,
                isValid: this.isValid(errors) === '' ? true : false,
                isDirty: true,
                validators: this.state[e.target.name].validators
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

    isValid = (errors) => {
        var keys = Object.keys(errors);
        for (let i = 0; i < keys.length; i++) {
            if (!errors[keys[i]] || errors[keys[i]] === '')
                return false;
        }
        return true;
    }

    executeValidators(validators, node) {
        var result = {};
        if (validators.length > 0) {
            validators.forEach(item => {
                result[item.validator.name] = item.validator({ node, parameters: item.parameters })
            });
        }
        return result
    }

    render() {
        const { username, password, errors } = this.state;
        return (<div>
            <form onSubmit={this.onSubmit}>
                <div>
                    {errors.error ? (<div className='text-danger'>{errors.error}</div>) : null}
                    <div>
                        <Input
                            type='text'
                            name='username'
                            id='username'
                            ref='username'
                            placeholder='Username'
                            onChange={this.onChange}
                            object={username}
                            autoFocus
                        />
                    </div>
                    <div>
                        <Input
                            type='password'
                            name='password'
                            id='password'
                            ref='password'
                            placeholder='Password'
                            onChange={this.onChange}
                            object={password} />
                    </div>
                </div>
                <button type='submit' className='btn' disabled={!this.isFormValid()}>Log In</button>
            </form>
        </div>);
    }
}


export default Form;