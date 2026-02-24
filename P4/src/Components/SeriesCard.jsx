export const SeriesCard = ({ currElement }) => {
  const { img_url, name, rating, description, genre, cast, watch_url } =
    currElement;

  const btn_Style = {
    padding: "1.2rem 2.4rem",
    border: "none",
    fontSize: "1.6rem",
    backgroundColor: "var( --bnt-hover-bg-color)",
    color: "var(--bg-color)",
  };
  
  return (
    <li className="card">
      <div>
        <img src={img_url} height="40%" width="40%" />
      </div>
      <div className="card-content">
        <h2>Name : {name}</h2>
        <h3>Rating : {rating}</h3>
        <p>Summary : {description}</p>
        <p>Genre : {genre}</p>
        <p>Cast : {cast}</p>
        <a href={watch_url} target="_blank">
          <button style={btn_Style}>Watch Now</button>
        </a>
      </div>
    </li>
  );
};
