import "./starsLine.scss";

import Star from "../../../../../../../assets/icons/pages/Home/star.png"


// eslint-disable-next-line react/prop-types
const StarsLine = ({ size }) => {
    // Create an array of star elements using map
    const starElements = Array(size).fill().map((_, index) => (
      <img key={index} src={Star} alt="star" />
    ));
  
    return <div className="catchStars">{starElements}</div>;
  };
  
  export default StarsLine;