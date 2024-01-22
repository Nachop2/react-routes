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


    let filteredData = data.results.filter((e) => e);

    const handleChange = (e) => {
        setSearchParams({ filter: e.target.value });

        console.log(data.results);
        let term = e.target.value;
        console.log(term);
        term = term.replace("(", "\\(");
        term = term.replace(")", "\\)");
        // Regex filtering
        let regexSearch = new RegExp("(" + term + ")", "ig");
        filteredData = data.results.filter((e) => e.name.match(regexSearch));
        console.log(filteredData);
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