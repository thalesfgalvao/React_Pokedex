import styled, { css } from 'styled-components';

export const Wrapper = styled.div``

export const WelcomeText = styled.h1`
    position: flex;
    text-align: center;
    margin-top: 5rem;
    font-style: normal;
    font-weight: normal;
    font-size: 3.5rem;
    line-height: 4.2rem;
    color: #FFFFFF;
`
export const InputSearch = styled.input`
    position: flex;
    margin-top: 2rem;
    margin-left: 2rem;
    background: #FFFFFF;
    border-radius: 1rem 0rem 0rem 1rem;
    border: none;    
    padding: 0.5rem 7rem 0.5rem 0.5rem;
    transition: 0.1s;
    font-size: 1.1rem;
    &:focus{
        background: #F2F2F2;
        transition: 0.1s;
    }
    &:hover{
        background: #F2F2F2;
        transition: 0.1s;
    }
`
export const ButtonSearch = styled.button`
${({isLoadingButton}) => css`
    position: flex;
    margin-left: 0rem;
    margin- 0rem;
    margin-top: 0rem;
    margin-bottom: 0rem;
    background: #EF4036;
    border-radius: 0rem 1rem 1rem 0rem;
    color: #ffffff;
    border: none;
    padding: 0.5rem 5rem 0.5rem 5rem;
    font-size: 1.1rem;
    transition: 0.1s;
        ${isLoadingButton && css`
            background: green;
            `
        }
    `
}&:hover{
    cursor: pointer;
    background: #d13830;
    transition: 0.1s;
}
`