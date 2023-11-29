import "./button.scss"

// eslint-disable-next-line react/prop-types
const Button = ({btnData,handleClick}) => {
   // console.log(btnData.btnData)

  return (
        <button  className="btn " id="myButton" onClick={handleClick} >{btnData}  </button>
  )
}
 
export default Button