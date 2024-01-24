import { Link, useParams } from "react-router-dom";
import { useFetch } from "../useFetch";
import { CharactersContext } from "../App";
import { useContext } from "react";
import { useEffect, useState } from "react";

export const BlogCharacter = () => {
    const params = useParams();
    const { charactersList, setCharactersList } = useContext(CharactersContext);

    const { data, error, loading } = useFetch("https://rickandmortyapi.com/api/character/", charactersList == null);
    console.log(loading);

    // useEffect(() => {
    //     if (data) {
    //         setCharactersList(data.results);
    //     }
    // }, [data]);

    if (loading) {
        return (<h1> Buscando el Morty adecuado... </h1>);
    }
    if (error) {
        return (<h1> La pistola de portales no funciona... </h1>)
    }

    let character = "";
    if(data){
        character = data.results[params.id];
        setCharactersList(data.results);
    }else{
        character = charactersList[params.id];
    }

    console.log("Ejecutando por characterList");

    return (
        <div className="card">
            <img src={character.image} className="card-img-top" alt="..."></img>
            <div className="card-body">
                <h5 className="card-title">{character.name}</h5>
                <p className="card-text"> {character.species}</p>
            </div>

            <div className="container m-3">
                <Link className="btn btn-outline-primary" to="/blog">Volver</Link>
            </div>
        </div>
    )
}