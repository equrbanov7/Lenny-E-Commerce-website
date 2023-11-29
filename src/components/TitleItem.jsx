
import styles from "./titleItem.module.scss"

import Button from './Button'

// eslint-disable-next-line react/prop-types
const TitleItem = ({titleInfo, btnInfo}) => {
  return (
    <div className={styles.titleitem} >
        <h1>{titleInfo} </h1>
        <Button btnData={btnInfo} />
    </div> 
  )
}

export default TitleItem