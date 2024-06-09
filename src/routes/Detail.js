import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Movie from "../components/Movie";
function Detail(params) {
    const [movie, setMovie] = useState(null);
    const { id } = useParams();
    useEffect(() => {
        if (id) {
            getMovie(id);
        }
    });

    const getMovie = async (id) => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        console.log(json);
        if (json.status === "ok") {
            const data = json.data.movie;
            setMovie(() => data);
        }
    };
    return movie !== null ? (
        <>
            <h1>
                <b>{movie.title}</b>
            </h1>
            <br />
            <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                coverImg={movie.medium_cover_image}
                title={movie.title}
                summary={movie.description_intro}
                genres={movie.genres}
            />
        </>
    ) : null;
}
export default Detail;
