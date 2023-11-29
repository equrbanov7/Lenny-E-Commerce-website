import "./priceRange.scss"

// eslint-disable-next-line react/prop-types
const PriceRange = ({start,stop,handleClick, controlClass}) => {

 // console.log(controlClass,"aaa")
  return ( 
    <div className={`priceRanges ${controlClass ? 'selectedPriceRange' : ''}`} onClick={handleClick}>
      {`$${start} - $${stop}`}
    </div>
  )
}

export default PriceRange