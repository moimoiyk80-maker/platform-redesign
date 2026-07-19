import { useEffect, useState } from "react";
import {
  Link,
  NavLink,
  useLocation,
} from "react-router-dom";

import "./Header.css";

const navigationItems = [
  {
    label: "제품",
    to: "/products",
  },
  {
    label: "자료실",
    to: "/resources",
  },
  {
    label: "회사소개",
    to: "/about",
  },
  {
    label: "문의하기",
    to: "/contact",
  },
];

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] =
    useState(false);

  const location = useLocation();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname, location.search]);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen
      ? "hidden"
      : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <header className="site-header">
      <div className="site-header__inner page-container">
        <Link
          to="/"
          className="site-logo"
          aria-label="SLI Scientific 홈"
        >
          <span
            className="site-logo__mark"
            aria-hidden="true"
          >
            SLI
          </span>

          <span className="site-logo__text">
            <strong>SLI Scientific</strong>
            <small>Science Lab Instruments</small>
          </span>
        </Link>

        <nav
          className="site-navigation"
          aria-label="주요 메뉴"
        >
          {navigationItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                isActive
                  ? "site-navigation__link site-navigation__link--active"
                  : "site-navigation__link"
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="site-header__actions">
          <Link
            to="/products"
            className="header-search-link"
          >
            <span aria-hidden="true">⌕</span>
            제품 검색
          </Link>

          <Link
            to="/contact?type=product"
            className="header-inquiry-link"
          >
            제품 문의
          </Link>
        </div>

        <button
          type="button"
          className={
            mobileMenuOpen
              ? "mobile-menu-button mobile-menu-button--open"
              : "mobile-menu-button"
          }
          aria-label={
            mobileMenuOpen
              ? "모바일 메뉴 닫기"
              : "모바일 메뉴 열기"
          }
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() =>
            setMobileMenuOpen((current) => !current)
          }
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {mobileMenuOpen && (
        <nav
          id="mobile-navigation"
          className="mobile-navigation"
          aria-label="모바일 메뉴"
        >
          <div className="mobile-navigation__inner page-container">
            {navigationItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  isActive
                    ? "mobile-navigation__link mobile-navigation__link--active"
                    : "mobile-navigation__link"
                }
              >
                {item.label}
              </NavLink>
            ))}

            <div className="mobile-navigation__actions">
              <Link to="/products">
                제품 검색
              </Link>

              <Link to="/contact?type=product">
                제품 문의
              </Link>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}

export default Header;