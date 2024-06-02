import PropTypes from "prop-types";
import { Link } from "react-router-dom";
function Movie({ id, coverImg, title, summary, genres }) {
    return (
        <div key={id}>
            <img src={coverImg} alt={title} />
            <h2>
                <Link to={`/movie/${id}`}>{title}</Link>
            </h2>
            <p>{summary}</p>
            <ul>
                {genres.map((item, index) => {
                    return <li key={index}>{item}</li>;
                })}
            </ul>
        </div>
    );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    coverImg: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default Movie;
