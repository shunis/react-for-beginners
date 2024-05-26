import { useEffect, useState } from "react";
import Movie from "../components/Movie";
function Home() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);

    const getMovies = async () => {
        const json = await (
            await fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year")
        ).json();

        console.log(json);
        setMovies(json.data.movies);
        setLoading(false);
    };

    useEffect(() => {
        getMovies();
    }, []);
    console.log(movies);

    return (
        <div>
            <h1>The Coins!!! {loading ? "" : `(${movies.length})`}</h1>
            {loading ? (
                <strong>Loading...</strong>
            ) : (
                <div>
                    {movies.map((item) => {
                        return <Movie item={item} />;
                    })}
                </div>
            )}
        </div>
    );
}
export default Home;
