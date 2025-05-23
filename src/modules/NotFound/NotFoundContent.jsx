import { useNavigate } from "react-router-dom";
import { BtnBlue } from "../../components/BtnBlue/BtnBlue";

import styles from './NotFoundContent.module.css';

const NotFoundContent = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>
          Page Not Found
        </h1>
        <p className={styles.subtitle}>
          We're sorry, the page you requested could not be found.
          <br />
          Please go back to the homepage.
        </p>
      </div>
      <BtnBlue onClick={handleGoHome} className={styles.button} text='Go home' />
    </div>
  );
};

export default NotFoundContent;
