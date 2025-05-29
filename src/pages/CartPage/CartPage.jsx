import { useState } from "react";
import PageLayout from "../../shared/components/PageLayout/PageLayout";
// import Cart from "../../shared/components/Cart/Cart";
import Cart from "../../modules/Cart/Cart";
import Modal from "../../shared/components/Modal/Modal";

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
