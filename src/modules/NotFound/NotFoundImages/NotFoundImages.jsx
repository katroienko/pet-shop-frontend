import { LeftErrorSvg, RightErrorSvg } from "../NotFoundSvgs";
import styles from './NotFoundImages.module.css';

const NotFoundImages = () => {
  return (
    <div className={styles.container}>
      <LeftErrorSvg />
      <img src="src/assets/catDog.png" alt="catDog" />
      <RightErrorSvg />
    </div>
  );
};

export default NotFoundImages;