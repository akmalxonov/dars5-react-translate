import React from "react";
import "../footer/footer.scss";
import { useTranslation } from "react-i18next";
const Footer = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="footer">
      <div className="top">
        <ul className="list">
          <li>{t("footer.about")}</li>
          <li>{t("footer.contactUs")}</li>
          <li>{t("footer.aboutUs")}</li>
          <li>{t("footer.careers")}</li>
          <li>{t("footer.flipkartStories")}</li>
          <li>{t("footer.press")}</li>
          <li>{t("footer.flipkartWholesale")}</li>
          <li>{t("footer.corporateInfo")}</li>
        </ul>
        <ul className="list">
          <li>{t("footer.help")}</li>
          <li>{t("footer.payments")}</li>
          <li>{t("footer.shipping")}</li>
          <li>{t("footer.cancellationReturns")}</li>
          <li>{t("footer.faq")}</li>
          <li>{t("footer.reportInfringement")}</li>
        </ul>
        <ul className="list">
          <li>{t("footer.policy")}</li>
          <li>{t("footer.termsOfUse")}</li>
          <li>{t("footer.returnPolicy")}</li>
          <li>{t("footer.cancellationReturns")}</li>
          <li>{t("footer.security")}</li>
          <li>{t("footer.privacy")}</li>
          <li>{t("footer.sitemap")}</li>
          <li>{t("footer.eprCompliance")}</li>
        </ul>
        <ul className="list">
          <li>{t("footer.social")}</li>
          <li>Facebook</li>
          <li>YouTube</li>
          <li>Twitter</li>
        </ul>
        <div className="left">
          <p className="font-semibold">{t("footer.mailUs")}</p>
          <p>
            Flipkart Internet Private Limited,
            <br />
            Buildings Alyssa, Begonia &
             <br />
             Clove Embassy Tech Village,
            <br />
            Outer Ring Road, <br />
            Devarabeesanahalli Village,
            <br />
            Bengaluru, 560103,
            <br />
            Karnataka, India
          </p>
        </div>
      </div>
      <div className="bottom">
        <ul className="list">
          <li>{t("footer.becomeSeller")}</li>
          <li>{t("footer.advertise")}</li>
          <li>{t("footer.giftCards")}</li>
          <li>{t("footer.helpCenter")}</li>
        </ul>
        <p>© 2007-2022 Flipkart.com</p>
      </div>
    </div>
  );
};

export default Footer;
