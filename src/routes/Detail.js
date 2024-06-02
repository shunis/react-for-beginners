import { useEffect } from "react";
import { useParams } from "react-router-dom";
function Detail(params) {
    const { id } = useParams();
    const getMovie = async (id) => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        console.log(json);
        if (json.status === "ok") {
            const data = json.data.movie;
            console.log("data : ", data);
        }
    };
    useEffect(() => {
        if (id) {
            getMovie(id);
        }
    }, [id]);
    return <h1>Detail Page</h1>;
}
export default Detail;
