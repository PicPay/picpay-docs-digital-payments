import React from 'react';
import Link from '@docusaurus/Link';
import '../../css/NavBarCustom.css';
import LocaleDropdown from '@theme/NavbarItem/LocaleDropdownNavbarItem';
import SearchBar from '../../theme/SearchBar';
import { useLocation } from 'react-router-dom';
import Translate from '@docusaurus/Translate';

const NavBarCustom = () => {
    const location = useLocation();
    let urlLocale = "https://picpay.github.io/picpay-docs-ms-ecommerce-checkout/docs/introduction";

    if (location.pathname.includes('/en/')) {
        urlLocale = "https://picpay.github.io/picpay-docs-ms-ecommerce-checkout/en/docs/introduction";
    } else {
        urlLocale = "https://picpay.github.io/picpay-docs-ms-ecommerce-checkout/docs/introduction";
    }

    return (
        <nav className="navbar navbar--fixed-top">
        <div className="navbar__inner">
          <div className="navbar__items">
            <Link className="navbar__brand" to="/">
              <img src="/img/PP-logo.png" alt="Logo PicPay" className="navbar__logo" />
            </Link>
            <Link className="navbar__item navbar__link navbar_custom_link navbar_custom_link_with_border" to="/checkout/intro/getting-started">
            <Translate
                id="navBar.qrCodeAndPush.linkLabel">
                QR Code e Push
            </Translate>
            </Link>
            <Link className="navbar__item navbar__link navbar_custom_link navbar_custom_link_with_border" to="/one-click/intro/overview">
              PicPay 1-Click
            </Link>
            <a className="navbar__item navbar__link navbar_custom_link" href={urlLocale} >
             PicPay Checkout
            </a>
          </div>
          <div className="navbar__items navbar__items--right">
            <LocaleDropdown dropdownItemsBefore={[]} dropdownItemsAfter={[]} />
            <SearchBar />
          </div>
        </div>
      </nav>
    );
  };
  
export default NavBarCustom;