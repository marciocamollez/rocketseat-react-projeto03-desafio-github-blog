import styled from "styled-components";


export const SearchFormContainer = styled.form`
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
    margin-bottom: 1rem;



    div{
        justify-content: space-between;
        display: flex;
        margin-bottom: 1rem;
        margin-top: 1rem;
    }

    input{
        flex: 1;
        border-radius: 6px;
        border: 0;
        background: ${props => props.theme['input']};
        color: ${props => props.theme['text']};
        padding: 1rem;
        border: 1px solid ${props => props.theme['border']};

        &::placeholder{
            color: ${props => props.theme['text']};
        }
    }

    
`;