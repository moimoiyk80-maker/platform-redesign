import { NavLink } from "react-router-dom";

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
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <NavLink
          to="/"
          className="site-logo"
          aria-label="SLI Scientific 홈"
        >
          SLI Scientific
        </NavLink>

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
          <button type="button">
            검색
          </button>

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
      </div>
    </header>
  );
}

export default Header;