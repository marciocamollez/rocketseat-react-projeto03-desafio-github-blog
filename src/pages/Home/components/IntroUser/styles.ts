import styled from "styled-components";

export const IntroBox = styled.header`
    width: 100%;
    display: flex;
    flex-direction: column;
`
export const IntroCard = styled.div`
    background: ${(props) => props.theme['profile']};
    color: ${(props) => props.theme['text']};
    display: flex;
    padding: 2rem;
    gap: 2rem;
    margin-top: -3rem;
    border-radius: 1rem;
    align-items: center;
`
export const IntroImage = styled.div`
    width: 140px;
    height: 140px;

    img{
        border-radius: 1rem;
        max-width: 100%;
    }
`
export const IntroText = styled.div`
    display: flex;
    flex-direction: column;

    div{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 0.5rem;
        margin-top: 0.5rem;
        flex: 1;

        a{
            color: ${(props) => props.theme['blue']};
            text-decoration: none;

            &:hover{
                color: ${(props) => props.theme.white};
            }
        }
    }

`
