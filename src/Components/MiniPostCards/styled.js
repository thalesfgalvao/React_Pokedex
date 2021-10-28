import styled from "styled-components";

export const MiniPostCardsBody = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: linear-gradient(152.97deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%);
    backdrop-filter: blur(1rem);
    /* Note: backdrop-filter has minimal browser support */
    border-radius: 1.5rem;
    padding: 2rem 0rem 2rem 0rem;
    margin-top: 7rem;
`
export const PokemonTitle = styled.p`
    font-size: 2rem;
    text-align: center;
    font-style: normal;
    font-weight: bold;
    line-height: 2rem;
    /* identical to box height */
    letter-spacing: 0.04em;
    color: #FFFFFF;
`

export const PokemonSprite = styled.img`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 30rem;
`