import { Link, useSearchParams } from "react-router-dom";
import { useFetch } from "../useFetch";
import { useEffect, useState } from "react";
export const Blog = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const [filteredData, setFilteredData] = useState([]);
    const { data, error, loading } = useFetch("https://rickandmortyapi.com/api/character");
    
    if (loading) {
        return (<h1> Buscando el Morty adecuado... </h1>);
    }

    if (error) {
        return (<h1> La pistola de portales no funciona... </h1>);
    }

    const handleChange = (e) => {
        setSearchParams({ filter: e.target.value });
    }

    return (
        <>
            <h1> Blog - Elije tu personaje favorito </h1>
            <input
                type="text"
                name=""
                onChange={handleChange}
                className="form-control my-3"
                alt="Buscador"
                value={searchParams.get("filter") || ""}>
            </input>
            <ul className="list-group">
                {
                    
                    data.results.filter((e) => e.name.match(new RegExp("(" + searchParams.get("filter") + ")", "ig"))).map(element => {
                        return (
                            <Link className="list-group-item"
                                key={element.id}
                                to={`/blog/${element.id}`}
                            >{element.name}</Link>
                        )
                    })
                }
            </ul>
        </>
    )
}