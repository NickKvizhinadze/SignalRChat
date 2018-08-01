import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PropTypes } from 'prop-types';
import React from 'react';
import Loading from '../Shared/Loading';

const LoginForm = ({ onSubmit, onChange, onMouseEnter, username, password, errors, ifShow, loading }) => {
    return (
        <div className="split login" onMouseEnter={onMouseEnter}>
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
                {loading ? (
                    <button type="submit" className="btn" disabled>
                        <Loading size={10} color={'#0e64de'} />
                    </button>
                ) : (<button type="submit" className="btn" >Log In</button>)
                }
            </form>
        </div>
    );
}

LoginForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    onMouseEnter: PropTypes.func.isRequired,
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    errors: PropTypes.object,
    ifShow: PropTypes.bool.isRequired,
    loading: PropTypes.bool.isRequired
};

export default LoginForm;
