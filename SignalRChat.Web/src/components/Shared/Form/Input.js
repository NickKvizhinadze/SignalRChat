import React from 'react';

const Input = ({ type, object, name, id, placeholder, onChange, autoFocus }) => {
    return (<div>
        <div>
            <input
                type={type}
                name={name}
                id={id}
                placeholder={placeholder}
                onChange={onChange}
                autoFocus={autoFocus}
                value={object.value} />
        </div>
        {object.isDirty ?
            Object.keys(object.errors)
                .map(key => object.errors[key] ?
                    (<div key={key}><span className="text-danger">{object.errors[key]}</span></div>)
                    : null)
            : null}
    </div>);
}

export default Input;