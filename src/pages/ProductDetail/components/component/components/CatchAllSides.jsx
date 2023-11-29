import IntheBox from "./InTheBox/IntheBox"
import Specification from "./Specification/Specification"
import SystemRequired from "./SystemRequired/SystemRequired"
import "./catchAllSides.scss"

const CatchAllSides = () => {
  return (
    <div className="catchAllSides">
        <Specification />
        <IntheBox />
        <SystemRequired />
    </div>
  )
}   

export default CatchAllSides