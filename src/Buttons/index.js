import React from 'react';
import styled from 'styled-components';
import { Body1, Body2, Body3 } from '../Typography.js';

const getHeight = ({ size }) => {
    const sizeMap = {
        sm: '2.4rem',
        md: '4rem',
        lg: '4.8rem'
    }
    return sizeMap[size];
}

const StyledButton = styled.button`
    font-family: inherit;
    height: ${getHeight};
    border: 0;
    background: #009E8F;
    border-radius: 0.4rem;
    padding: 0 1.6rem;
    cursor: pointer;
`;

const Button = ({ children, ...restProps }) => {
    const textMap = {
        'sm': Body3,
        'md': Body2,
        'lg': Body1,
    };
    const Typography = textMap[restProps.size];

    return (
        <StyledButton {...restProps}>
            <Typography color="contrast" weight="bold">{children}</Typography>
        </StyledButton>
    )
};

Button.defaultProps = {
    'size': 'md'
}

export default Button;
