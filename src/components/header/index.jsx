import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import "../header/header.scss";
import { RxHamburgerMenu } from "react-icons/rx";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import i18n from "../../i18n";
const Header = () => {
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState("uzb");
  const handleLanguageChange = (e) => {
    const selectedLang = e.target.value;
    setLang(selectedLang);
    i18n.changeLanguage(selectedLang);
  };
  return (
    <header>
      <div className="top">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="menu">
          <RxHamburgerMenu />
        </div>
        <select value={lang} onChange={handleLanguageChange}>
          <option value="uzb">uzb</option>
          <option value="eng">eng</option>
          <option value="rus">rus</option>
        </select>
      </div>
      <div className="buttom">
        <Link to={"/"}>{t("navbar.topOffers")}</Link>
        <Link to={"/about"}>{t("navbar.grocery")}</Link>
        <Link to={"/contact"}>{t("navbar.mobiles")}</Link>
        <Link to={"/contact"}>{t("navbar.home")}</Link>
        <Link to={"/contact"}>{t("navbar.electronics")}</Link>
        <Link to={"/contact"}>{t("navbar.fashion")}</Link>
        <Link to={"/contact"}>{t("navbar.beauty")}</Link>
      </div>
    </header>
  );
};

export default Header;
