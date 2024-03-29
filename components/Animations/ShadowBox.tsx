import styled from "styled-components";

export const ShadowBox = styled.div`
    
    box-shadow: 5px 5px;
    background-color: #708090;
    display: inline-block;

    &:hover {
        position: relative;
        top: -3px;
        left: -3px;
        box-shadow: 8px 8px;
    }
`