import styled from 'styled-components';

const StyledDiv = styled.div`
    width: 100%;
    height: 100px;
    background-color: green;
    transform: skew(45deg);
`;

export const Track = ({ children }) => {
    return <StyledDiv>{children}</StyledDiv>;
};
