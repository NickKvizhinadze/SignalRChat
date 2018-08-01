import React from 'react';
import { PropTypes } from 'prop-types';
import './index.css';

const Loading = ({ size, color }) => {
    if (!size)
        size = 18;
    if (!color)
        color = '#fff';

    const dotStyle = {
        width: size,
        height: size,
        backgroundColor: color
    };
    return (<div className="spinner" >
        <div className="bounce1" style={dotStyle}></div>
        <div className="bounce2" style={dotStyle}></div>
        <div className="bounce3" style={dotStyle}></div>
    </div>);
};

Loading.propTypes = {
    size: PropTypes.number,
    color: PropTypes.string,
};

export default Loading;