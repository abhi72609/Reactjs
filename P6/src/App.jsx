// import NetflixSeries from "./Components/NetflixSeries";
// import "./Components/NetflixStyle.css"

// import {EventHandling} from "./Components/EventHandling"

// import { EventProps } from "./Components/EventProps";
import { EventPropagation } from "./Components/EventPropagation";
import "./Components/NetflixStyle.module.css"; 


export const App = () => {
    
    return(
        <section className="container">
            {/* <h1 className="card-heading"> List of Best Web series On Netflix</h1>
            <NetflixSeries /> */}
            
            {/* lecture No - 23 (   EVENT HANDLING  ) */}
            {/* <EventHandling /> */}

            {/* lecture No - 24 (   PASSING EVENT AS PROPS  ) */}
            {/* <EventProps /> */}
            
            <EventPropagation />
        </section>
    );
};