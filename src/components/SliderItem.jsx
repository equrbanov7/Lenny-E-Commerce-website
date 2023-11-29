
import styles from "./slideritem.module.scss";




// eslint-disable-next-line react/prop-types
const SliderItem = ({image,title,handleId}) => {
  return (
    <div className={styles.allInfos} onClick={handleId}> 
        <div className={styles.catchElm} >
 
            <div className={styles.imageCatch} >
                <img src={image} alt="categoryIcon" />
            </div>

            <div className={styles.bottomInfo} >
                <h3>{title}</h3>
                <p>8,9k products</p>
            </div>
        </div> 

    </div>
  )
}

export default SliderItem