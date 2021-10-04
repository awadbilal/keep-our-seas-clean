import React from "react";
import "./style.css";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="footer">
      <p className="footerText">
        {t("footer.text")} <b> Sea Saver </b>2021
      </p>
    </footer>
  );
};

export default Footer;
