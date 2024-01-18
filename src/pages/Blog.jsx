import { Link } from "react-router-dom";
import { useFetch } from "../useFetch";
export const Blog = () => {

    const { data, error, loading } = useFetch("https://rickandmortyapi.com/api/character");

    if (loading) {
        return (<h1> Buscando el Morty adecuado... </h1>);
    }
    if (error) {
        return (<h1> La pistola de portales no funciona... </h1>)
    }

    console.log(data.results);

    return (
        <>
            <h1> Blog - Elije tu personaje favorito </h1>
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