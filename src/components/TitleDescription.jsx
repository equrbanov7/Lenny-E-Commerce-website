import styles from "./titleDescription.module.scss"

// eslint-disable-next-line react/prop-types
const TitleDescription = ({title,desc}) => {
  return (
        <div className={styles.catchInfos} >
            <h2 className={styles.titleDes}>{title} </h2>
            <p className={styles.description}>{desc} </p>
        </div>
  )
}

export default TitleDescription