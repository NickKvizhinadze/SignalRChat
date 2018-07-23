import React from 'react';

const LoginForm = ({ onSubmit, onChange, username, password }) => {
    return (
        <div>
            <h1>Authorization</h1>
            <form onSubmit={onSubmit} >
                <div>
                    <label>Username: </label><br />
                    <input type="text" name="username" onChange={onChange} value={username} />
                </div>
                <div>
                    <label>Body: </label><br />
                    <input type="password" name="password" onChange={onChange} value={password} />
                </div>
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default LoginForm;
