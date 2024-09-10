import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useCartData from "../../../Hooks/useCartData";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const CheckOutForm = () => {
  const [error, setError] = useState(null);
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const axiosSecure = useAxiosSecure();
  const [cart, refetch] = useCartData();
  const { user } = useAuth();
  const navigate = useNavigate();

  const stripe = useStripe();
  const elements = useElements();

  const totalPrice = cart.reduce((accumulator, currentValue) => {
    return accumulator + parseInt(currentValue.price);
  }, 0);
  //  getting payment intent from server
  useEffect(() => {
    const postData = async () => {
      try {
        const { data } = await axiosSecure.post("/create-payment-intent", {
          price: totalPrice,
        });
        setClientSecret(data.clientSecret);
      } catch (err) {
        console.log(err);
      }
    };
    if (cart.length > 0) {
      postData();
    }
  }, [totalPrice, cart, axiosSecure]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null);

    if (!stripe || !elements) return;
    const card = elements.getElement(CardElement);
    if (card === null) return;

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("payment error", error);
      setError(error.message);
    }
    if (paymentMethod) {
      console.log("payment method", paymentMethod);
    }
    // confirm payment : =>
    const { paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: card,
        billing_details: {
          name: user?.displayName || "Anonymous",
          email: user?.email || "Anonymous",
        },
      },
    });

    if (paymentIntent.status === "succeeded") {
      console.log("Payment succeeded!", paymentIntent.id);
      setTransactionId(paymentIntent.id);
      // clear cart and show success message

      const payment = {
        email: user?.email,
        price: totalPrice,
        date: new Date(), // convert date to utc for country wise conflict use moment js for convert
        cartIds: cart.map((item) => item._id),
        menuIds: cart.map((item) => item.itemID),
        status: "pending",
        transactionId: paymentIntent.id,
      };

      // post the custiomer payment info to a cullection in the server
      try {
        const { data } = await axiosSecure.post("/payment", payment);
        if (data.removedCartItems.deletedCount > 0) {
          refetch();
          Swal.fire({
            title: "Payment Successful",
            text: "Your order has been placed successfully",
            icon: "success",
            confirmButtonText: "Okay",
            timer: 2000,
          });

          navigate("/dashboard/payment-history");
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  console.log(transactionId, "the transactions id ");
  return (
    <div className="p-20 ">
      <form onSubmit={handleSubmit} className="p-10 bg-blue-200 rounded-xl">
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="mt-10 btn w-64 btn-primary"
          type="submit"
          disabled={!stripe}
        >
          Pay
        </button>
        {error && <p className="text-red-500"> {error} </p>}
      </form>
    </div>
  );
};

export default CheckOutForm;
