import { useCallback, useEffect, useState } from "react";

export const useFetch = (url, cent = true) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const fetchData = useCallback(async () => {
        setLoading(true);
        if (cent) {
            try {
                const res = await fetch(url);
                if (!res.ok) {
                    throw Error("Error al usar la api");
                }
                const data = await res.json();
                setData(data);
            } catch (error) {
                console.log(error);
                setData([]);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        }else{
            setLoading(false);
        }

    }, []);


    console.log("useFetch");


    useEffect(() => {
        console.log("useEffect");
        fetchData();
    }, []);

    return { data, loading, error }

};