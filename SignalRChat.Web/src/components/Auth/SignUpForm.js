import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PropTypes } from 'prop-types';
import React from 'react';
import Loading from '../Shared/Loading';


const SignUpForm = ({ onMouseEnter, onSubmit, onChange, user, errors, ifShow, loading }) => {
    return (
        <div className="split signup" onMouseEnter={onMouseEnter}>
            <h1 className={`signupheader ${ifShow ? 'up' : ''}`}>Sign Up</h1>
            <form className={`signup-form ${ifShow ? 'show' : ''}`} onSubmit={onSubmit}>
                <div className="social">
                    <a href="#/test"><FontAwesomeIcon icon={['fab', 'facebook-f']} /></a>
                    <a href="#/test"><FontAwesomeIcon icon={['fab', 'google']} /></a>
                </div>
                <div>
                    <input
                        type="text"
                        name="username"
                        id="signUpUsername"
                        placeholder="Username"
                        className="input-control"
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
                        className="input-control"
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
                        className="input-control"
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
                        className="input-control"
                        onChange={onChange}
                        value={user.passwordConfirm}
                        required />
                    {errors.username ? (<span className="text-danger">{errors.passwordConfirm}</span>) : null}
                </div>

                {loading ? (
                    <button type="submit" className="btn" disabled>
                        <Loading size={10} color={'#0e64de'} />
                    </button>
                ) : (<button type="submit" className="btn" >Sign Up</button>)
                }
            </form>

        </div>
    );
}


SignUpForm.propTypes = {
    onMouseEnter: PropTypes.func.isRequired,
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
    ifShow: PropTypes.bool.isRequired,
    loading: PropTypes.bool.isRequired
};

export default SignUpForm;