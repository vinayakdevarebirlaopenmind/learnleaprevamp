import Header from "../header";
import FailerPayment from "../../assets/image/payment failed.jpg"; // Ensure the path is correct
import ModernFooter from "../Footer/Footer";

export default function Failure() {
  return (
    <>
      <Header />
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>Payment Failed! ❌</h1>
        <img
          src={FailerPayment}
          alt="Payment Failed"
          style={{ width: "300px", height: "auto", margin: "20px 0" }} // Adjust size as needed
        />
        <p>Please try again later.</p>
      </div>{" "}
      <ModernFooter />
    </>
  );
}
