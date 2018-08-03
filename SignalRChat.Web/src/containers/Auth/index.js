import { PropTypes } from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getToken } from '../../actions/authAction';
import LoginForm from '../../components/Auth/LoginForm';
import SignUpForm from '../../components/Auth/SignUpForm';
import queryString from 'query-string';

import './index.css';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showSignUp: false,
            loginLoading: false,
            signUpLoading: false,
            login: {
                username: '',
                password: ''
            },
            signUp: {
                firstName: '',
                lastName: '',
                username: '',
                email: '',
                password: '',
                passwordConfirm: ''
            },
            errors: {}
        };

        this.onLoginChange = this.onLoginChange.bind(this);
        this.onLoginSubmit = this.onLoginSubmit.bind(this);
        this.onSignUpChange = this.onSignUpChange.bind(this);
        this.onSignUpSubmit = this.onSignUpSubmit.bind(this);
        this.onSignUpMouseEnter = this.onSignUpMouseEnter.bind(this);
        this.onLoginMouseEnter = this.onLoginMouseEnter.bind(this);

    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            loginLoading: false,
            signUpLoading: false
        });
        if (nextProps.auth) {
            if (nextProps.auth.errors)
                this.setState({ errors: nextProps.auth.errors });
            if (nextProps.auth.user && nextProps.auth.user.token) {
                const { returnUrl } = queryString.parse(this.props.location.search);
                if (returnUrl)
                    this.props.history.push(returnUrl);
                else
                    this.props.history.push('/home');
            }
        }
    }

    onLoginChange(e) {
        this.setState({
            login: {
                ...this.state.login,
                [e.target.name]: e.target.value
            }
        });
    }

    onLoginSubmit(e) {
        e.preventDefault();
        this.setState({
            loginLoading: true,
            errors: {}
        });
        this.props.getToken({
            username: this.state.login.username,
            password: this.state.login.password
        });
    }

    onSignUpChange(e) {
        this.setState({
            signUp: {
                ...this.state.signUp,
                [e.target.name]: e.target.value
            }
        });
    }

    onSignUpSubmit(e) {
        e.preventDefault();
        this.setState({
            signUpLoading: true,
            errors: undefined
        });
        console.log(this.state.signUp);
        //TODO: Call api
    }
    onSignUpMouseEnter(e) {
        if (!this.state.showSignUp)
            this.setState({ showSignUp: true });
    }

    onLoginMouseEnter(e) {
        if (this.state.showSignUp)
            this.setState({ showSignUp: false });
    }


    render() {
        let containerClass = 'container';
        if (this.state.showSignUp)
            containerClass += ' hover-signup';
        else
            containerClass += ' hover-login';

        return (<div className={containerClass}>
            <LoginForm
                onSubmit={this.onLoginSubmit}
                onChange={this.onLoginChange}
                onMouseEnter={this.onLoginMouseEnter}
                username={this.state.login.username}
                password={this.state.login.password}
                errors={this.state.errors}
                ifShow={!this.state.showSignUp}
                loading={this.state.loginLoading} />
            <SignUpForm
                onMouseEnter={this.onSignUpMouseEnter}
                onSubmit={this.onSignUpSubmit}
                onChange={this.onSignUpChange}
                user={this.state.signUp}
                errors={this.state.errors}
                ifShow={this.state.showSignUp}
                loading={this.state.signUpLoading} />

        </div>);
    }
};

Login.propTypes = {
    getToken: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

const mapDispatchToProps = dispatch => {
    return {
        getToken: (auth) => dispatch(getToken(auth))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);