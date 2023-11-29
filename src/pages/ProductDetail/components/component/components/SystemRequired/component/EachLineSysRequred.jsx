import "./eachLineSysRequred.scss"

// eslint-disable-next-line react/prop-types
const EachLineSysRequred = ({data}) => {
  return (
    <div className="EachLineSysRequred">
        <p className="sysItem">  {`- ${data}`}</p>
    </div>
  )
}

export default EachLineSysRequred