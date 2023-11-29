import Button from "./Button";
import TitleDescription from "./TitleDescription";
import styles from "./titleandBtnes.module.scss"

// eslint-disable-next-line react/prop-types
const TitleandBtnes = ({title,desc,btndatas}) => {
  return (
    <>
      <TitleDescription
        title={title}
        desc={desc}
      />
      <div className={styles.btnes}>
        <Button btnData={btndatas[0]} />
        <Button btnData={btndatas[1]} />
      </div>
    </>
  );
};

export default TitleandBtnes;
