import React, { useState, useEffect } from 'react';
import { Balls } from '../Balls';
import { capitalizeFirstLetter } from '../../utils/capitalizedFirstLetter';
import { Row, Col } from 'react-bootstrap';
import * as S from './styled'
import api from '../../services/api';

export const PostCards = ({pokemonName}) => {

    const [pokemon, setPokemon] = useState('');

    const fetchPokemon = async() =>{
        try{
            const response = await api.get(`/pokemon/${pokemonName}`);
            console.log(response.data.types[0]);
            setPokemon(response.data);
        }catch(error){
            console.log(error.message);
        }
    }

    useEffect(() => {
        fetchPokemon();
    },[]);

    return(
        <>
        {pokemon ? (<>
            <Balls/>
            <S.PostCardsBody>
                <S.PokemonTitle>
                    {capitalizeFirstLetter(pokemon.name)}
                </S.PokemonTitle>
                    <S.PokemonSprite src={pokemon.sprites.front_default}/>
                <S.BodyContent>
                    <Row>
                        <Col md={6}>
                            <S.PokeInfo>ID {pokemon.id}</S.PokeInfo>
                        </Col>
                        <Col md={6}>
                            <S.PokeInfo> Height: {pokemon.height}</S.PokeInfo>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <S.PokeInfo>Weight: {pokemon.weight}kg</S.PokeInfo>
                        </Col>
                        <Col md={6}>
                            <S.PokeInfo>Type: {capitalizeFirstLetter(pokemon.types[0].type.name)}</S.PokeInfo>
                        </Col>
                    </Row>
                </S.BodyContent>
            </S.PostCardsBody>
        </>) : <p>Loagin...</p>}
            
        </>
    );
}