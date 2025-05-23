// import PageLayout from "../../components/PageLayout/PageLayout";

// import Cart from "../../components/Cart/Cart";
// import Form from "../../components/Form/Form";


// const CartPage = () => {
//   return (
//     <PageLayout title="Cart page">
//       <Cart />
//       <Form />
//     </PageLayout>
//   );
// };

// export default CartPage;

import { useState } from "react";
import PageLayout from "../../components/PageLayout/PageLayout";
import Cart from "../../components/Cart/Cart";

import Modal from "../../components/Modal/Modal";

const CartPage = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <PageLayout title="Cart page">
      <Cart onOrderPlaced={openModal} />
  
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2>Congratulations!</h2>
        <p>Your order has been successfully placed on the website. A manager will contact you shortly to confirm your order.</p>
      </Modal>
    </PageLayout>
  );
};

export default CartPage;
