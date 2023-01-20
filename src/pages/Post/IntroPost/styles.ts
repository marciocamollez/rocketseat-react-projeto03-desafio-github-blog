import styled from "styled-components";

export const PostTitle = styled.div`
    background: ${(props) => props.theme['profile']};
    color: ${(props) => props.theme['text']};
    display: flex;
    padding: 2rem;
    gap: 2rem;
    margin-top: -3rem;
    border-radius: 1rem;
    flex-direction: column;

    a{
        color: ${(props) => props.theme['blue']};
        text-decoration: none;
        margin-right: 1rem;
    }
`