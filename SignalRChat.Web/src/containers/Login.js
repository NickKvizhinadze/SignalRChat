import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getToken } from '../actions/authAction';
import LoginForm from '../components/LoginForm';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.auth)
            console.log(nextProps.auth);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();
        const auth = {
            username: this.state.username,
            password: this.state.password
        };
        this.props.getToken(auth);
    }


    render() {
        return (<LoginForm
            onSubmit={this.onSubmit}
            onChange={this.onChange}
            username={this.state.username}
            password={this.state.password} />);
    }
}

const mapStateToProps = state => ({
    auth: state.auth
});

const mapDispatchToProps = dispatch => {
    return {
        getToken: (auth) => dispatch(getToken(auth))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);