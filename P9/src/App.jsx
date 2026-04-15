// import { DerivedState } from "./Components/Hooks/DerivedState";
// import { LiftStateUp } from "./Components/LiftStateUp";
// import { ToggleSwitch } from "./Project1/ToggleSwitch/ToggleSwitch";
// import { ToDo } from "./Project1/ToDo/ToDo";
import "./Components/EV.css";
import { Keys } from "./Keys";

export const App = () => {
    
    return(
        <section className="container">
            {/* <DerivedState />
            <LiftStateUp />
            <ToggleSwitch />
            <ToDo />
            */}
            <Keys />
        </section>
    );
};