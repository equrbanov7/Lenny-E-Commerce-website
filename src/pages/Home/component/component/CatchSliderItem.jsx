import SliderLeftSide from "./SliderLeftSide";
import SliderRightItem from "./SliderRightItem";
import styles from "./catchSliderItem.module.scss";

const CatchSliderItem = () => {
  return (
    <div className={styles.catchSides}>
      <SliderLeftSide />
      <SliderRightItem />
    </div>
  );
};

export default CatchSliderItem;
