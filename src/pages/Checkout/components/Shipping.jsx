import ThreeElements from "../../../components/ThreeElements";
import "./shipping.scss";
import Location from "../../../assets/icons/pages/shoppingChart/location.svg";
import Button from "../../../components/Button";

const Shipping = () => {
  return (
    <div className="Shipping">
      <div className="titleSection">
        <h1>Shipping Address</h1>
      </div>

      <div className="catchAllInfosAddres">
        <div className="leftMapAddress">
          <div className="mapElementsAddres">
            <ThreeElements
              image={Location}
              dataCreator={["Gofanny Karina", "081277939572"]}
            />
            <div className="identifyAddress">
              <h3>Main Address</h3>
            </div>
          </div>
          <div className="addressNameofPerson">
            <h5>2021 Royalty Boulevard Portland, OR 98199</h5>
          </div>
        </div>
        <div className="rightOtherAddres">
          <Button btnData={"Other Address"} />
        </div>
      </div>
    </div>
  );
};

export default Shipping;
