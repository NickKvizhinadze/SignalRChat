import React, { Component } from 'react';
import Form from './Shared/Forms';
import { required, min } from '../helpers/Validators';


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
        }}></Form>);
    }
}

export default Test;