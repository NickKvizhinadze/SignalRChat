import React from 'react';
import { PropTypes } from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const SignUpForm = ({ onMouseEnter, onMouseLeave, onSubmit, onChange, user, errors, ifShow }) => {
    return (
        <div className="split signup" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <h1 className={`signupheader ${ifShow ? 'up' : ''}`}>Sign Up</h1>
            <form className={`signup-form ${ifShow ? 'show' : ''}`} onSubmit={onSubmit}>
                <div className="social">
                    <a href="#/test"><FontAwesomeIcon icon={['fab', 'facebook-f']} /></a>
                    <a href="#/test"><FontAwesomeIcon icon={['fab', 'google']} /></a>
                </div>

                <div>
                    <input
                        type="text"
                        name="firstName"
                        id="firstName"
                        placeholder="First Name"
                        onChange={onChange}
                        value={user.firstName}
                        required />
                        {errors.username ? (<span className="text-danger">{errors.firstName}</span>) : null}
                </div>

                <div>
                    <input
                        type="text"
                        name="lastName"
                        id="lastName"
                        placeholder="Last Name"
                        onChange={onChange}
                        value={user.lastName}
                        required />
                        {errors.username ? (<span className="text-danger">{errors.lastName}</span>) : null}
                </div>

                <div>
                    <input
                        type="text"
                        name="username"
                        id="signUpUsername"
                        placeholder="Username"
                        onChange={onChange}
                        value={user.username}
                        required />
                        {errors.username ? (<span className="text-danger">{errors.username}</span>) : null}
                </div>

                <div>
                    <input
                        type="email"
                        name="email"
                        id="signUpEmail"
                        placeholder="Email"
                        onChange={onChange}
                        value={user.email}
                        required />
                        {errors.username ? (<span className="text-danger">{errors.email}</span>) : null}
                </div>

                <div>
                    <input
                        type="password"
                        name="password"
                        id="signUpPassword"
                        placeholder="Password"
                        onChange={onChange}
                        value={user.password}
                        required />
                        {errors.username ? (<span className="text-danger">{errors.password}</span>) : null}
                </div>

                <div>
                    <input
                        type="password"
                        name="passwordConfirm"
                        id="passwordConfirm"
                        placeholder="Confirm Password"
                        onChange={onChange}
                        value={user.passwordConfirm}
                        required />
                        {errors.username ? (<span className="text-danger">{errors.passwordConfirm}</span>) : null}
                </div>

                <button type="submit" className="btn">Sign Up</button>
            </form>

        </div>
    );
}


SignUpForm.propTypes = {
    onMouseEnter: PropTypes.func.isRequired,
    onMouseLeave: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    user: PropTypes.shape({
        firstName: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        password: PropTypes.string.isRequired,
        passwordConfirm: PropTypes.string.isRequired
    }).isRequired,
    errors: PropTypes.object,
    ifShow: PropTypes.bool.isRequired
};

export default SignUpForm;