import { Link } from "react-router-dom";

import categories from "../../data/categories";
import "./Footer.css";

const resourceLinks = [
  { label: "제품 브로셔", type: "product-brochure" },
  { label: "기술 사양서", type: "technical-specification" },
  { label: "사용설명서", type: "user-manual" },
  { label: "응용 자료", type: "application-note" },
  { label: "제품 선택 가이드", type: "selection-guide" },
];

const companyLinks = [
  { label: "회사소개", to: "/about" },
  { label: "실험실 운영 지원", to: "/about#support" },
  { label: "문의하기", to: "/contact" },
];

const contactLinks = [
  { label: "제품 문의", type: "product" },
  { label: "견적 문의", type: "quotation" },
  { label: "기술 지원", type: "technical-support" },
  { label: "설치 및 교육", type: "installation-training" },
];

function Footer() {

  return (
    <footer className="site-footer">
      <div className="site-footer__inner page-container">
        <div className="site-footer__brand">
          <Link
            to="/"
            className="footer-logo"
            aria-label="SLI Scientific 홈"
          >
            <span className="footer-logo__mark">SLI</span>

            <span className="footer-logo__text">
              <strong>SLI Scientific</strong>
              <small>Science Lab Instruments</small>
            </span>
          </Link>

          <p className="site-footer__description">
            연구와 실험 현장에 필요한
            <br />
            제품과 정보를 연결합니다.
          </p>

          <div className="site-footer__external">
            <Link to="/resources">
              제품 자료
              <span aria-hidden="true">→</span>
            </Link>

            <Link to="/products">
              제품 둘러보기
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        <div className="site-footer__navigation">
          <section className="site-footer__column">
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
          </section>

          <section className="site-footer__column">
            <h2>제품 자료</h2>

            <ul>
              {resourceLinks.map((item) => (
                <li key={item.type}>
                  <Link to={`/resources?type=${item.type}`}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section className="site-footer__column">
            <h2>회사</h2>

            <ul>
              {companyLinks.map((item) => (
                <li key={item.label}>
                  <Link to={item.to}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </section>

          <section className="site-footer__column">
            <h2>문의</h2>

            <ul>
              {contactLinks.map((item) => (
                <li key={item.type}>
                  <Link to={`/contact?type=${item.type}`}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>

      <div className="site-footer__bottom">
        <div className="site-footer__bottom-inner page-container">
          <p>© 2026 SLI Scientific. All rights reserved.</p>

          <p>
            SLI Scientific은 포트폴리오 프로젝트를 위해 구성한
            가상의 브랜드입니다.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;