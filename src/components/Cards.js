import { useState } from "react";
// import "./Cards.css";
function Cards(props) {
  const { id, image, price, name, info } = props.tour;

  // this is calleed object destructuring
  const description =  `${info.substring(0, 200)}....`;
  //   console.log(props.tour);
  //   const [read, setreading] = useState({
  //     reading: "Read More",
  //     dis: description,
  //   });
  const [readmore, setreadmore] = useState(true);

  const onreadmore = (e) => {
    console.log("clicked");
    e.preventDefault();
    if (readmore) {
      setreadmore(false);
    } else {
      setreadmore(true);
    }
    // if (read.reading === "Read More") {
    //   setreading({
    //     reading: "Show Less",
    //     dis: info,
    //   });
    // } else {
    //   setreading({
    //     reading: "Read More",
    //     dis: description,
    //   });
    // }
  };
  return (
    <div className="card">
      <img loading="lazy" className="img" src={image} alt={name} />
      <div className="tour-info">
        <div className="tour-details">
          <h4 className="tour-price"> {price} </h4>
          <h4 className="tour-name"> {name} </h4>
        </div>
        <div className="description">
          {readmore ? description : info}
          <span className="read-more" onClick={onreadmore}>
            {readmore ? "Read More" : "Show Less"}
          </span>
        </div>
      </div>

      <button className="btn-red" onClick={() => props.removetour(id)}>Not Interested </button>
    </div>
  );
}
export default Cards;
