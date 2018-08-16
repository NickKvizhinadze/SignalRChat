import React, { Component } from 'react';
import Form from './Shared/Forms';
import { required, min } from '../helpers/Validators';
import Input from '../components/Shared/Form/Input';


class Test extends Component {
    render() {
        return (<Form formState={{
            username: {
                value: '',
                validators: [
                    { validator: required, parameters: null },
                    { validator: min, parameters: 3 }]
            },
            password: {
                value: '',
                validators: [
                    { validator: required, parameters: null }]
            }
        }}>
            <Input
                type='text'
                name='username'
                id='username'
                ref='username'
                placeholder='Username'
                autoFocus />
                
            <Input
                type='password'
                name='password'
                id='password'
                ref='password'
                placeholder='Password'
                autoFocus />
        </Form>);
    }
}

export default Test;