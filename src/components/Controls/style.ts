import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 50px;
`

export const Button = styled.button`
    background: none;
    border: none;

    &:hover {
        filter: brightness(0.8);
        cursor: pointer;
    }

    &:active {
        filter: brightness(0.6);
    }
`