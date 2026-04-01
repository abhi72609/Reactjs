// import { DerivedState } from "./Components/Hooks/DerivedState";
import { LiftStateUp } from "./Components/LiftStateUp";
import "./Components/EV.css";

export const App = () => {
    
    return(
        <section className="container">
            {/* <DerivedState /> */}
            <LiftStateUp />
        </section>
    );
};