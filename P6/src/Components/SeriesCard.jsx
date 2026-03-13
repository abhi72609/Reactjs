// import style from "./NetflixStyle.module.css"

// export const SeriesCard = ({ currElement }) => {
//   const { img_url, name, rating, description, genre, cast, watch_url } =
//     currElement;

//   const btn_Style = {
//     padding: "1.2rem 2.4rem",
//     border: "none",
//     fontSize: "1.6rem",
//     backgroundColor: `${rating >= 8.5 ? "rgba(127, 255, 212, 0.763)" : "#f7dc6f"}`,
//     color: "black",
//     fontWeight : "bold",
//     cursor : "pointer"
//   };

//   const ratingClass = rating >= 8.5 ? style.super_hit : style.average; {/*2. here rating is not applied bcz it object therefore it need to be style.super-hit bcz it's objects' property and since it's js we not need {}*/}
  
//   return (
//     // When using CSS Modules in React, we cannot directly write className="card" because CSS Modules generate unique class names.
//     // Instead, we need to import the CSS file as an object and access the class name as a property, like className={styles.card}.
//     // This is similar to accessing an object property in JavaScript using dot notation (ObjectName.propertyName).
//     <li className={style.card}>
//       <div>
//         <img src={img_url} height="40%" width="40%" />
//       </div>
//       <div className={style["card-content"]}>
//         <h2>Name : {name}</h2>
//         <h3>Rating : 
//           {/*           here rating was String but now it is object's property */}
//           {/* <span className={`rating ${ratingClass}`}>{rating}</span> */}
//           {/*   So it should be */}
//           <span className={`${style.rating} ${ratingClass}`}>{rating}</span>  {/*here rating is not applied bcz it object */}
//         </h3>
//         <p>Summary : {description}</p>
//         <p>Genre : {genre}</p>
//         <p>Cast : {cast}</p>
//         <a href={watch_url} target="_blank">
//           <button style={btn_Style}>Watch Now</button>
//         </a>
//       </div>
//     </li>
//   );
// };













// Lecture - #21  [     STYLED COMPONENT IN RECAT JS    ]
import style from "./NetflixStyle.module.css"
import styled from 'styled-components';
export const SeriesCard = ({ currElement }) => {
  const { img_url, name, rating, description, genre, cast, watch_url } =
    currElement;
  
    //  This is using Style Object
  // const ProjectButton = styled.button({
  //   padding: "1.2rem 2.4rem",
  //   border: "none",
  //   fontSize: "1.6rem",
  //   backgroundColor: `${rating >= 8.5 ? "rgba(127, 255, 212, 0.763)" : "#f7dc6f"}`,
  //   color: "black",
  //   fontWeight : "bold",
  //   cursor : "pointer"
  // });


  // Now using Template litrals - here We have to write pure CSS therefore no (,)  only (;) also     {/* background-color: `${rating >= 8.5 ? "rgba(127, 255, 212, 0.763)" : "#f7dc6f"}`; */} can't use template literals in pure CSS therefore In styled-components, you can pass a function within the template literals to dynamically set CSS properties based on props or state.
  const ProjectButton = styled.button`
    padding: 1.2rem 2.4rem;
    border: none;
    fontSize: "1.6rem";
    background-color: ${(props) => props.rating >= 8.5 ? "rgba(127, 255, 212, 0.763)" : "#f7dc6f"}; 
    color: black;
    font-weight : bold;
    cursor : pointer;
  `;

  // USing STyle component <h3> into Rating
  const Rating = styled.h3`
    font-size : 1.6rem;
    color : #7dcea0;
    text-transform: capitalize;
  `;


  const ratingClass = rating >= 8.5 ? style.super_hit : style.average; 
  
  return (
    
    <li className={style.card}>
      <div>
        <img src={img_url} height="40%" width="40%" />
      </div>
      <div className={style["card-content"]}>
        <h2>Name : {name}</h2>
        {/* let change component <h3> into Rating using Style Component */}
        <Rating>Rating : 
          <span className={`${style.rating} ${ratingClass}`}>{rating}</span>  
        </Rating>
        <p>Summary : {description}</p>
        <p>Genre : {genre}</p>
        <p>Cast : {cast}</p>
        <a href={watch_url} target="_blank">
          {/* <button style={btn_Style}>Watch Now</button> */}
          <ProjectButton rating={rating}>Watch Now</ProjectButton>
        </a>
      </div>
    </li>
  );
};
