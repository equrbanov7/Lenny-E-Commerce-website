import styles from "./carditem.module.scss";



import Star from "../assets/icons/pages/Home/star.png";
import Heart from "../assets/icons/pages/Home/heart.png";
import TitleDescription from "./TitleDescription";

// eslint-disable-next-line react/prop-types
const CardItem = ({ image, title, desc, price, rating }) => {
  return (
    <div className={styles.cathcCard}>
      <div className={styles.topSide}>
        <div className={styles.imgCatch}>
          <img src={image} alt="product" />
        </div>
      </div>
      <div className={styles.bottomSide}>
        <div className={styles.leftProductInfos}>
          <TitleDescription
            title={title}
            // eslint-disable-next-line react/prop-types
            desc={desc?.slice(0,12)}
          />

          <div className={styles.rating}>
            <div className={styles.starSide}>
              <img src={Star} alt="star" />
              <span>{rating}</span>
            </div>
            <p className={styles.soldCount}>1,238 Sold</p>
          </div>
        </div>
        <div className={styles.rightPrice}>
          <h4>{`$${price}`}</h4>
        </div>
      </div>

    <div className={styles.wishIcon} >
        <img src={Heart} alt="heart" />
    </div>
    </div>
    // <div className="_cathcCard_r8b0g_1">
    //   <div className="_topSide_r8b0g_10">
    //     <div className="_imgCatch_r8b0g_23">
    //       <img src={image} alt="product" />
    //     </div>
    //   </div>
    //   <div className="_bottomSide_r8b0g_14">
    //     <div className="_leftProductInfos_r8b0g_34">
    //       <TitleDescription
    //         title={title}
    //         // eslint-disable-next-line react/prop-types
    //         desc={desc?.slice(0, 12)}
    //       />

    //       <div className="_rating_r8b0g_62">
    //         <div className="_starSide_r8b0g_68">
    //           <img src={Star} alt="star" />
    //           <span>{rating}</span>
    //         </div>
    //         <p className="_soldCount_r8b0g_81">1,238 Sold</p>
    //       </div>
    //     </div>
    //     <div className="_rightPrice_r8b0g_90">
    //       <h4>{`$${price}`}</h4>
    //     </div>
    //   </div>

    //   <div className="_wishIcon_r8b0g_102">
    //     <img src={Heart} alt="heart" />
    //   </div>
    // </div>
  );
};

export default CardItem;
