import "./eachRatingLine.scss"
import Star from "../../../../../../../assets/icons/pages/Home/star.png"
//import Star5 from "../../../../../../../assets/icons/pages/detail product/5StarsLine.svg"

// eslint-disable-next-line react/prop-types
const EachRatingLine = ({StarNumber,StarWidth,StarCount }) => {
  return (
    <div className="EachRatingLine">
      <div className="leftStarRank">
        <span>{StarNumber} </span>
        <img src={Star} alt="stars" />
      </div>
      <div className="linearStar">
        {/* <img src={StarLineImage} alt="starLinear" /> */}
        <span className={`showRank`} style={{width:StarWidth}}></span>
      </div>
      <div className="totalStarInfo">
        <span>{StarCount}</span>
      </div>
    </div>
  )
}

export default EachRatingLine