import { Link } from "react-router-dom";

import categories from "../../data/categories";

const resourceLinks = [
  "제품 브로셔",
  "기술 사양서",
  "사용설명서",
  "응용 자료",
  "제품 선택 가이드",
];

const companyLinks = [
  {
    label: "회사소개",
    to: "/about",
  },
  {
    label: "실험실 운영 지원",
    to: "/about",
  },
  {
    label: "문의하기",
    to: "/contact",
  },
];

function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__brand">
          <strong>SLI Scientific</strong>

          <p>
            연구와 실험 현장에 필요한 제품과 정보를 연결합니다.
          </p>
        </div>

        <div className="site-footer__column">
          <h2>제품 카테고리</h2>

          <ul>
            {categories.map((category) => (
              <li key={category.id}>
                <Link to={`/products/${category.slug}`}>
                  {category.nameKo}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="site-footer__column">
          <h2>제품 자료</h2>

          <ul>
            {resourceLinks.map((item) => (
              <li key={item}>
                <Link to="/resources">{item}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="site-footer__column">
          <h2>회사</h2>

          <ul>
            {companyLinks.map((item) => (
              <li key={item.label}>
                <Link to={item.to}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="site-footer__bottom">
        <p>© 2026 SLI Scientific.</p>

        <p>
          SLI Scientific은 포트폴리오를 위해 구성한 가상의 브랜드입니다.
        </p>
      </div>
    </footer>
  );
}

export default Footer;