import React, { useContext } from "react";
import Modal from "./UI/Modal.jsx";
import CartContext from "../store/CartContext.jsx";
import { currencyFormatter } from "../util/formatting.js";
import Input from "./UI/Input.jsx";
import Button from "./UI/Button.jsx";
import useHttp from "../hooks/useHttp.js";
import UserProgressContext from "../store/UserProgress.jsx";
import Error from "./Error.jsx";

const requestConfig = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
};

function Checkout() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const {
    data,
    isLoading: isSending,
    error,
    sendRequest,
    clearData,
  } = useHttp("http://localhost:3000/orders", requestConfig);

  const cartTotal = cartCtx.items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0
  );

  function handleClose() {
    userProgressCtx.hideCheckout();
  }

  function handleFinish() {
    userProgressCtx.hideCheckout();
    cartCtx.clearCart();
    clearData();
  }

  function handleSubmit(event) {
    event.preventDefault();

    const fd = new FormData(event.target);
    const customerData = Object.fromEntries(fd.entries()); //{email: test@example.com}

    sendRequest({
      order: {
        items: cartCtx.items,
        customer: customerData,
      },
    });

    // console.log(customerData);
  }

  let actions = (
    <>
      <Button type="button" textOnly onClick={handleClose}>
        Close
      </Button>
      <Button>Submit Order</Button>
    </>
  );

  if (isSending) {
    actions = <span>Sending Order Data...</span>;
  }

  if (data && !error) {
    return (
      <Modal
        open={userProgressCtx.progess === "checkout"}
        onClose={handleClose}
      >
        <h2>Success!</h2>
        <p>Your Order was Submittted Successfully..</p>
        <p>
          We will get back to you with more details via email with in the next
          few menutes.
        </p>
        <p className="model-actions">
          <Button onClick={handleFinish}>Okay</Button>
        </p>
      </Modal>
    );
  }

  return (
    <>
      <Modal
        open={userProgressCtx.progess === "checkout"}
        onClose={handleClose}
      >
        <form onSubmit={handleSubmit}>
          <h2>Checkout</h2>
          <p>Total Amount: {currencyFormatter.format(cartTotal)}</p>

          <Input lable="Full Name" type="text" id="name" />
          <Input lable="E-Mail Address" type="email" id="email" />
          <Input lable="Street" type="text" id="street" />
          <div className="control-row">
            <Input lable="Postal Code" type="text" id="postal-code" />
            <Input lable="City" type="text" id="city" />
          </div>

          {error && (
            <Error title="Failed to Submit the Order.." message={error} />
          )}
          <p className="modal-actions">{actions}</p>
        </form>
      </Modal>
    </>
  );
}

export default Checkout;
