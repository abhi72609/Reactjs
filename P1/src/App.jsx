import React from "react";

export const App = () => {
  
  // 1
  // return <h1>Dekh rh hai binod kaise React sikha ja rh hai</h1>;
  // So internally babel use to convert above <h1> code into below code
  // return React.createElement("h1",null,"Dekh rh hai binod.");


  // 2
  return <div>
      <div>
        <img src="breaking-bad-card.jpg" alt="OOPS" width="40%" height="40%"></img>
      </div>
      <h1>Name: Breaking Bad</h1>
      <h2>Rating: 9.8</h2>
      <p>Breaking Bad
        A mild-mannered chemistry teacher turns into a ruthless drug kingpin after a cancer diagnosis, as power and pride slowly destroy everything he loves. 💥
      </p>
  </div>
};

