import PropTypes from "prop-types";

function Movie({ item }) {
    return (
        <div key={item.id}>
            <img src={item.medium_cover_image} alt={item.title} />
            <h2>{item.title}</h2>
            <p>{item.summary}</p>
            <ul>
                {item.genres.map((item, index) => {
                    return <li key={index}>{item}</li>;
                })}
            </ul>
        </div>
    );
}

Movie.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        summary: PropTypes.string.isRequired,
        medium_cover_image: PropTypes.string.isRequired,
        genres: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    }).isRequired,
};

export default Movie;
