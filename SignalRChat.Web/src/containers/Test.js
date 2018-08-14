import React, { Component } from 'react';
import Form from './Shared/Forms';
import { required } from '../helpers/Validators';


class Test extends Component {
    render() {
        return (<Form formState={{
            username: { value: '', validators: [required] },
            password: { value: '', validators: [required] }
        }}></Form>)
    }
}

export default Test;