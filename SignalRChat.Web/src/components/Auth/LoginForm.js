import React from 'react';
import { PropTypes } from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const LoginForm = ({ onSubmit, onChange, username, password, errors, ifShow }) => {
    return (
        <div className="split login">
            <h1 className={`loginheader ${ifShow ? 'up' : ''}`}>Log In</h1>
            <form className={`login-form ${ifShow ? 'show' : ''}`} onSubmit={onSubmit}>
                <div className="social">
                    <a href="#/test"><FontAwesomeIcon icon={['fab', 'facebook-f']} /></a>
                    <a href="#/test"><FontAwesomeIcon icon={['fab', 'google']} /></a>
                </div>
                <div>
                    {errors.error ? (<div className="text-danger">{errors.error}</div>) : null}
                    <div>
                        <input
                            type="text"
                            name="username"
                            id="username"
                            placeholder="Username"
                            required
                            onChange={onChange}
                            value={username}
                            autoFocus />
                    </div>
                    {errors.username ? (<span className="text-danger">{errors.username}</span>) : null}
                    <div>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Password"
                            required
                            onChange={onChange}
                            value={password}
                            autoFocus />
                    </div>
                    {errors.password ? (<span className="text-danger">{errors.password}</span>) : null}
                </div>
                <button type="submit" className="btn">Log In</button>
            </form>
        </div>
    );
}

LoginForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    errors: PropTypes.object,
    ifShow: PropTypes.bool.isRequired
};

export default LoginForm;
