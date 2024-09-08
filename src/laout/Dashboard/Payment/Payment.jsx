import SectionHeading from "../../../Components/SectionHeading";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";



import CheckOutForm from "./CheckOutForm";

// todo : add publishable key
const stripePromise = loadStripe(import.meta.env.VITE_stripe_key);



const Payment = () => {
  return (
    <div>
      <SectionHeading heading={"Payment"} subHeading={"please pay to eat"} />
      <div>
        <Elements stripe={stripePromise}>
          <CheckOutForm />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
