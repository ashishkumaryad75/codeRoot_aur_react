import React, { useContext } from "react";
import Modal from "./UI/Modal";
import CartContext from "../store/CartContext";
import { currencyFormatter } from "../util/formatting";
import Input from "./UI/Input";
import Button from "./UI/Button";
import UserProgressContext from "../store/UserProgress";

function Checkout() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const cartTotal = cartCtx.items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0
  );

  function handleClose() {
    userProgressCtx.hideCheckout();
  }

  return (
    <>
      <Modal open={userProgressCtx.progess === "checkout"} onClose={handleClose}>
        <form>
          <h2>Checkout</h2>
          <p>Total Amount: {currencyFormatter.format(cartTotal)}</p>

          <Input lable="Full Name" type="text" id="full-name" />
          <Input lable="E-Mail Address" type="email" id="email" />
          <Input lable="Street" type="text" id="street" />
          <div className="control-row">
            <Input lable="Postal Code" type="text" id="postal-code" />
            <Input lable="City" type="text" id="city" />
          </div>

          <p className="modal-actions">
            <Button type="button" textOnly onClick={handleClose}>
              Close
            </Button>
            <Button>Submit Order</Button>
          </p>
        </form>
      </Modal>
    </>
  );
}

export default Checkout;
