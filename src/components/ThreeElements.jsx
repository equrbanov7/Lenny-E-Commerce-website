import "./threeElements.scss";
// import Logo from "../assets/icons/pages/detail product/LogiTech.svg";
// eslint-disable-next-line react/prop-types 
const ThreeElements = ({ image, dataCreator, dataBottom, imageSecond,handleId }) => {
  return (
    <div className="catchAllThreeElements" onClick={handleId}>
      <div className="leftImgLogo">
        <img src={image} alt="logo" /> 
      </div>
      <div className="rightInfoLogo">
        <div className="rightInfosCatch">
         
        {imageSecond ? <div className="secondImagesLine">{imageSecond} </div>  : ""}
          <h4>{dataCreator[0]} </h4>
          <h3>{dataCreator[1]}</h3>
        </div>
        {dataBottom ? (
          <div className="bottomInfosMerchant">
            {dataBottom[0] ? <h5>{dataBottom[0]}</h5> : ""}
            {dataBottom[1] ? <h5>{dataBottom[1]}</h5> : ""}
            
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default ThreeElements;
