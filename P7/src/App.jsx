// import { State } from "./Components/Hooks/state";
import { DerivedState } from "./Components/Hooks/DerivedState";
import "./Components/EV.css";

export const App = () => {
    
    return(
        <section className="container">
            {/* <State /> */}
            <DerivedState />
        </section>
    );
};