import { Link, useSearchParams } from "react-router-dom";
import { useFetch } from "../useFetch";
export const Blog = () => {
    let [searchParams, setSearchParams] = useSearchParams();

    const { data, error, loading } = useFetch("https://rickandmortyapi.com/api/character");

    if (loading) {
        return (<h1> Buscando el Morty adecuado... </h1>);
    }
    if (error) {
        return (<h1> La pistola de portales no funciona... </h1>);
    }

    console.log(data.results);


    const handleChange = (e) => {
        setSearchParams({ [e.target.name]: e.target.value });
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
                    data.results.map(element => {
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