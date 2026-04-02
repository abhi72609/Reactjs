// import { DerivedState } from "./Components/Hooks/DerivedState";
// import { LiftStateUp } from "./Components/LiftStateUp";

import { ToggleSwitch } from "./Project1/ToggleSwitch/ToggleSwitch";
import "./Components/EV.css";
export const App = () => {
    
    return(
        <section className="container">
            {/* <DerivedState />
            <LiftStateUp />
            */}
            <ToggleSwitch />
        </section>
    );
};