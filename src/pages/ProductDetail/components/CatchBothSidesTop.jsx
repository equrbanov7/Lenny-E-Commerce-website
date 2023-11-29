/* eslint-disable react/prop-types */
import ProductImageGallery from "./ProductImageGallery"
import ProductInfoRight from "./ProductInfoRight"
import "./catchBothSidesTop.scss"

const CatchBothSidesTop = ({searchId}) => {

  //console.log(searchId, "searchhh")
  return (
    <div className="CatchBothSidesTop">
        <ProductImageGallery imageId={searchId} />
        <ProductInfoRight infoId={searchId} />
    </div>
  )
}

export default CatchBothSidesTop