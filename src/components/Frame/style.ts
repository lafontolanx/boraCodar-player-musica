import styled from "styled-components";

export const FrameFora = styled.div`
    background-color: var(--gray-500);
    width: 100%;
    height: 6px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    border-radius: 9.6px;
`

export const FrameDentro = styled.div`
    background-color: var(--gray-100);
    width: 165px;
    height: 6px;
    border-radius: 9.6px;
`

export const Time = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
        font-weight: 400;
        font-size: 0.9rem; // 14px
        color: var(--gray-200);
        margin-top: -19px;
    }
`