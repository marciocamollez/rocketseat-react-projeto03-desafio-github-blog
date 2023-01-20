import styled from "styled-components";

export const PostContainer = styled.div`
    background: ${(props) => props.theme['post']};
    border-radius: 1rem;
    display: flex;
    padding: 1rem;
    flex-direction: column;

    a{
        color: ${(props) => props.theme['text']};
        text-decoration: none;

        &:hover{
            color: ${(props) => props.theme['blue']};
        }
    }
`