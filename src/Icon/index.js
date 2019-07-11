import React from "react";
const files = require.context("./icons", false, /.*\.svg$/);
files.keys().forEach(files);

const Icon = ({ type, size, ...restProps }) => {
    return (
        <svg width={`${size}rem`} height={`${size}rem`} {...restProps}>
            <use xlinkHref={`#${type}`}></use>
        </svg>
    );
};

Icon.defaultProps = {
    size: 3.2
};

export default Icon;
