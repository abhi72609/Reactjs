// import JSXasProps from "./Components/JSXasProps"
import NetflixSeries from "./Components/NetflixSeries";
import "./Components/NetflixStyle.css"

// import "./index.css" 
// in lecture he has included this part in main.jsx thus he had not mention in this file in lecture and therefore i had done the same thing although it's globally accepted then also you need to import a one place and use where-ever you wanted

export const App = () => {
    // return <JSXasProps />;  
    // Lecture - #17 add css to react.js
    return(
        <section className="container">
            <h1 className="card-heading"> List of Best Web series On Netflix</h1>
            <NetflixSeries />
        </section>
    );
};