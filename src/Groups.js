import styled from 'styled-components';

const HorizontalGroup = styled.div`
    display: flex;
    & > * {
        margin-right: ${({margin}) => margin ? `${margin}rem` : 0};
        padding-right: ${({padding}) => padding ? `${padding}rem` : 0};
    }
`;

const VerticalGroup = styled.div`
    display: flex;
    flex-direction: row;
`;

export { HorizontalGroup, VerticalGroup };