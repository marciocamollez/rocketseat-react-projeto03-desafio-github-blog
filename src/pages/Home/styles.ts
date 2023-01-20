import styled from "styled-components";

export const BoxContainer = styled.main`
    width: 100%;
    max-width: 900px;
    margin: 0 auto;
    padding: 0 1.5rem;
`

export const PostsListContainer = styled.section`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    margin-bottom: 14rem;
    margin-top: 2rem;
`;