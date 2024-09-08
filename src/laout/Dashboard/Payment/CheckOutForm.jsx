import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useCartData from "../../../Hooks/useCartData";
import useAuth from "../../../Hooks/useAuth";

const CheckOutForm = () => {
  const [error, setError] = useState(null);
  const [clientSecret, setClientSecret] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure();
  const [cart] = useCartData();
  const { user } = useAuth();
  

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


    console.log(paymentIntent,'the payment completed successfully');
  };

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
