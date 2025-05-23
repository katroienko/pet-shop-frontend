import PageLayout from "../../components/PageLayout/PageLayout";
import ProductsSale from "../../components/ProductsSale/ProductsSale";
import Title from "../../components/Title/Title";
import Categories from "../../components/Categories/Categories";

import { ElementDiscountForm } from "../../modules/Getdiscount/ElementDiscountForm/ElementDiscountForm";
import { BtnBlue } from "../../components/BtnBlue/BtnBlue";
 
import styles from './HomePage.module.css'

const onClick = () => {
  alert('Check out')
}
const HomePage = () => {
  return (
    <PageLayout >
      <div className={styles.wrapper}>
        <img
          src="src/assets/papy1.jpg"
          alt="papy1"
          style={{
            display: "block",
            width: "calc(100% + 80px)",
            marginLeft: "-40px",
            marginRight: "-40px",
            height: "auto"
          }}
        />
        <div className={styles.container}>
          <p>Amazing Discounts on Pets Products!</p>
          <BtnBlue text='Check out' className={styles.btnCheckout} onClick={onClick} />
        </div>
        <Categories />
        <ElementDiscountForm />
        <Title>Sale</Title>
        <ProductsSale />
      </div>
    </PageLayout>
  );
};

export default HomePage;
