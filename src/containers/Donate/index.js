import React from "react";
import DonationFormPage from "../../components/DonationFormPage";
import DonateHeader from "../../components/DonateHeader";

const Donate = () => {
  return (
    <div style={{ minHeight: "84.6vh" }}>
      <DonateHeader />
      <DonationFormPage />
    </div>
  );
};

export default Donate;
