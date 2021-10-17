import React from "react";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "./styles.css";

const Hero = () => {
  const { t } = useTranslation();
  const content = [
    "https://images.unsplash.com/photo-1589634749000-1e72ec00a13f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
    "https://images.unsplash.com/photo-1621451537084-482c73073a0f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
    "https://images.unsplash.com/photo-1558640476-437a2b9438a2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2098&q=80",
  ];

  return (
    <div>
      <Slider className="slider-wrapper">
        {content.map((item, index) => (
          <div
            key={index}
            className="slider-content"
            style={{ background: `url('${item}') no-repeat center center` }}
          >
            <div className="inner">
              <h1>{t("heroContent.title")}</h1>
              <p>{t("heroContent.description")}</p>
              <Link className="heroButton" to="/donate">
                {t("heroContent.button")}
              </Link>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Hero;
