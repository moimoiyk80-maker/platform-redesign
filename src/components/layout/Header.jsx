import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const navigationItems = [
  { label: "제품", to: "/products" },
  { label: "자료실", to: "/resources" },
  { label: "회사소개", to: "/about" },
  { label: "문의하기", to: "/contact" },
];

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="site-header">
      <div className="site-header__inner page-container">
        <NavLink
          to="/"
          className="site-logo"
          aria-label="SLI Scientific 홈"
          onClick={closeMobileMenu}
        >
          <span className="site-logo__mark">SLI</span>

          <span className="site-logo__text">
            <strong>SLI Scientific</strong>
            <small>Science Lab Instruments</small>
          </span>
        </NavLink>

        <nav className="site-navigation" aria-label="주요 메뉴">
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
          <button
            type="button"
            className="header-search-button"
            aria-label="제품 검색 열기"
          >
            <span aria-hidden="true">⌕</span>
            <span>검색</span>
          </button>

          <a
            href="#catalog"
            className="header-action-link"
            onClick={(event) => event.preventDefault()}
          >
            카탈로그
          </a>

          <a
            href="#shop"
            className="header-shop-link"
            onClick={(event) => event.preventDefault()}
          >
            쇼핑몰
          </a>
        </div>

        <button
          type="button"
          className="mobile-menu-button"
          aria-label="모바일 메뉴 열기"
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen((current) => !current)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="mobile-navigation">
          <nav
            className="mobile-navigation__inner page-container"
            aria-label="모바일 주요 메뉴"
          >
            {navigationItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  isActive
                    ? "mobile-navigation__link mobile-navigation__link--active"
                    : "mobile-navigation__link"
                }
                onClick={closeMobileMenu}
              >
                {item.label}
              </NavLink>
            ))}

            <div className="mobile-navigation__actions">
              <button type="button">제품 검색</button>
              <a
                href="#catalog"
                onClick={(event) => event.preventDefault()}
              >
                카탈로그
              </a>
              <a
                href="#shop"
                onClick={(event) => event.preventDefault()}
              >
                쇼핑몰
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;