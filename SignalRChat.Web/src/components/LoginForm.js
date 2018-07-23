import React from 'react';
import { PropTypes } from 'prop-types';

const LoginForm = ({ onSubmit, onChange, username, password, errors }) => {
    console.log(errors.username)
    return (
        <div>
            <h1>Authorization</h1>
            {errors.error ? (<div>{errors.error}</div>) : null}
            <form onSubmit={onSubmit} >
                <div>
                    <label>Username: </label><br />
                    <input type="text" name="username" onChange={onChange} value={username} />
                    {errors.username ? (<span>{errors.username}</span>) : null}
                </div>
                <div>
                    <label>Body: </label><br />
                    <input type="password" name="password" onChange={onChange} value={password} />
                    {errors.password ? (<span>{errors.password}</span>) : null}
                </div>
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

LoginForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired
};

export default LoginForm;
