import styled from "styled-components";

export const PostCardsBody = styled.div`
    margin: 0rem auto;
    align-items: center;
    width: 50rem;
    height: 60rem;
    margin-top: 5rem;
    background: linear-gradient(152.97deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%);
    backdrop-filter: blur(1rem);
    /* Note: backdrop-filter has minimal browser support */
    border-radius: 1.5rem;
    padding: 5rem 7rem 5rem 7rem;
`
export const PokemonTitle = styled.h1`
    margin: 0 auto;
    text-align: center;
    font-style: normal;
    font-weight: bold;
    line-height: 10rem;
    letter-spacing: 0.04em;
    color: #FFFFFF;
`
export const PokemonSprite = styled.img`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    width: 30rem;
    height: 30rem;
`
export const BodyContent = styled.div`
    margin: 0 auto;
    text-align: center;
    font-style: normal;
    font-weight: normal;
    font-size: 2.5rem;
    line-height: 3rem;
    letter-spacing: 0.04em;
    color: #FFFFFF;
`
export const PokeInfo = styled.p`
    font-style: normal;
    font-weight: normal;
    font-size: 1.5rem;
    line-height: 23px;
    letter-spacing: 0.04em;
    color: #FFFFFF;
`