import { React } from 'react';

const Input = ({ type, value, name, id, placeholder, onChange, autoFocus }) => {

    return (<input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        onChange={onChange}
        autoFocus={autoFocus}
        value={value} />);
}

export default Input;