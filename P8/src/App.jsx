// import { DerivedState } from "./Components/Hooks/DerivedState";
// import { LiftStateUp } from "./Components/LiftStateUp";
// import { ToggleSwitch } from "./Project1/ToggleSwitch/ToggleSwitch";

import "./Components/EV.css";
import { ToDo } from "./Project1/ToDo/ToDo";
export const App = () => {
    
    return(
        <section className="container">
            {/* <DerivedState />
            <LiftStateUp />
            <ToggleSwitch />
            */}
            <ToDo />
        </section>
    );
};