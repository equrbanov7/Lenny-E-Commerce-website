import "./eachBoxLine.scss"
import TickCircle from "../../../../../../../assets/icons/pages/detail product/tick-circle.svg"

// eslint-disable-next-line react/prop-types
const EachBoxLine = ({data}) => {
  return (
    <div className="EachBoxLine">
        <img src={TickCircle} alt="tick" />
        <p className="valueOfItem">{data}</p>
    </div>
  )
}

export default EachBoxLine