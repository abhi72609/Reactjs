import NetflixSeries from "./Components/NetflixSeries";
// import "./Components/NetflixStyle.css"
import "./Components/NetflixStyle.module.css"; 

export const App = () => {
    // lecture No - 20 (CSS Module)
    return(
        <section className="container">
            <h1 className="card-heading"> List of Best Web series On Netflix</h1>
            <NetflixSeries />
        </section>
    );
};