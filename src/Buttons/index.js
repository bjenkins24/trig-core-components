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

const getTypography = (size) => {
    const textMap = {
        'sm': Body3,
        'md': Body2,
        'lg': Body1,
    };
    return textMap[size];
}


const ButtonSecondary = styled.button`
    font-family: inherit;
    height: ${getHeight};
    border: 0;
    background: ${({theme}) => `rgb(${theme.cs})`};
    border-radius: 0.4rem;
    padding: 0 1.6rem;
    cursor: pointer;
`;

const getButton = (buttonComponent) => {
    const componentMap = {
        'sm': Body3,
        'md': Body2,
        'lg': Body1,
    };
    return textMap[size];
}

const Button = ({ children, ButtonComponent, ...restProps }) => {
    const Typography = getTypography(restProps.size);

    return (
        <ButtonSecondary {...restProps}>
            <Typography color="csc" weight="bold">{children}</Typography>
        </ButtonSecondary>
    )
};

Button.defaultProps = {
    'size': 'md'
}

export default Button;
