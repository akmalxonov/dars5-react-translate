import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import shop from "../../assets/shop.svg";
import sign from "../../assets/nav-icon2.svg";
import star from "../../assets/ei_star.svg";
import food from "../../assets/food.svg";
import makeUp from "../../assets/makeup.svg";
import phone from "../../assets/mobile-phone.svg";
import sofa from "../../assets/sofa.svg";
import shoe from "../../assets/shoe.svg";
import electronics from "../../assets/responsive.svg";

import "../header/header.scss";
import { RxHamburgerMenu } from "react-icons/rx";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { Input, Select, Space } from "antd";
import { GlobalOutlined, SearchOutlined } from "@ant-design/icons";

const Header = () => {
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState("uzb");
  const handleLanguageChange = (value) => {
  setLang(value);
  i18n.changeLanguage(value);
};
  const MdLanguage = <GlobalOutlined />
  const options = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
  },
];
  return (
    <header>
      <div className="top">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="menu">
          <RxHamburgerMenu />
          <p>{t("navbar.menu")}</p>
        </div>
        <Space.Compact className="input">
          <Select defaultValue={t("navbar.allCategories")} options={options} />
          <Input defaultValue={t("navbar.searchPlaceholder")} />
          <SearchOutlined className="search" />
        </Space.Compact>
        <div className="left">
          <span className="flex">
            <img src={sign} alt="" />
            <span>
              <p>{t("navbar.account")}</p>
              <p>{t("navbar.signIn")}</p>
            </span>
          </span>
          <span className="flex">
            <img src={shop} alt="" />
            <span>
              <p>{t("navbar.cart")}</p>
              <p>$240</p>
            </span>
          </span>
        </div>
        <Select
          onChange={handleLanguageChange}
          suffixIcon={MdLanguage}
          defaultValue="eng"
          style={{ width: 70 }}
          className="select"
          value={lang}
          options={[
            { value: "uzb", label: "uzb" },
            { value: "rus", label: "rus" },
            { value: "eng", label: "eng" },
          ]}
        />
      </div>

      <div className="buttom">
        <div className="card">
          <Link to={"/"}>{t("navbar.topOffers")}</Link>
          <img src={star} alt="" />
        </div>
        <div className="card">
          <Link to={"/about"}>{t("navbar.grocery")}</Link>
          <img src={food} alt="" />
        </div>
        <div className="card">
          <Link to={"/contact"}>{t("navbar.mobiles")}</Link>
          <img src={phone} alt="" />
        </div>
        <div className="card">
          <Link to={"/contact"}>{t("navbar.home")}</Link>
          <img src={sofa} alt="" />
        </div>
        <div className="card">
          <Link to={"/contact"}>{t("navbar.electronics")}</Link>
          <img src={electronics} alt="" />
        </div>
        <div className="card">
          <Link to={"/contact"}>{t("navbar.fashion")}</Link>
          <img src={shoe} alt="" />
        </div>
        <div className="card">
          <Link to={"/contact"}>{t("navbar.beauty")}</Link>
          <img src={makeUp} alt="" />
        </div>
      </div>
    </header>
  );
};

export default Header;
