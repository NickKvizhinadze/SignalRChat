import React, { Component } from 'react';

class Input extends Component {
    formComponent = React.createRef();

    render() {
        const { type, object, name, id, placeholder, onChange, autoFocus } = this.props;
        return (
            <div>
                <div>
                    <input
                        type={type}
                        name={name}
                        id={id}
                        placeholder={placeholder}
                        onChange={onChange}
                        autoFocus={autoFocus}
                        value={object.value}
                        ref={e => this.formComponent = e}
                    />
                </div>
                {object.isDirty ?
                    Object.keys(object.errors)
                        .map(key => object.errors[key] ?
                            (<div key={key}><span className="text-danger">{object.errors[key]}</span></div>)
                            : null)
                    : null}
            </div>);
    }
}

export default Input;