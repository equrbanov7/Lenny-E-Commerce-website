import "./aboutOneProduct.scss";
import Image from "../../../assets/images/ipadAir.png";
import TitleandBtnes from "../../../components/TitleandBtnes";
const AboutOneProduct = () => {
  return (
    <div className="AboutOneProductHome my-SpesficContainer ">
      <div className="leftImageHome">
        <img src={Image} alt="image" />
      </div>
      <div className="rightInfoHome">
        <TitleandBtnes
          title={"Ipad Air Gen 5"}
          desc={
            "Lorem ipsum dolor sit amet consectetur. Integer cursus cursus in sapien quam risus sed diam."
          }
          btndatas={["Buy $900","View Detail"]}
        />
      </div>
    </div>
  );
};

export default AboutOneProduct;
