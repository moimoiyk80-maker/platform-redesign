import { Link } from "react-router-dom";

import categories, {
  totalProductCount,
} from "../data/categories";

import { featuredProducts } from "../data/products";
import { featuredSupportServices } from "../data/supportServices";
import { featuredResources } from "../data/resources";
import { companyProfile } from "../data/company";

import ProductCard from "../components/product/ProductCard";

import "./HomePage.css";

function HomePage() {
  return (
    <>
      <section className="home-hero">
        <div className="home-hero__inner page-container">
          <div className="home-hero__content">
            <p className="home-hero__eyebrow">
              Scientific Instruments & Laboratory Supplies
            </p>

            <h1 className="home-hero__title">
              연구와 실험에 필요한 제품을
              <br />
              더 빠르게 찾을 수 있도록
            </h1>

            <p className="home-hero__description">
              기초 실험장비부터 분석·측정장비, 실험기구와
              소모품까지 연구환경에 필요한 제품과 기술정보를
              제공합니다.
            </p>

            <div className="home-hero__actions">
              <Link
                to="/products"
                className="button button--primary"
              >
                제품 둘러보기
              </Link>

              <Link
                to="/contact?type=quotation"
                className="button button--secondary"
              >
                견적 문의
              </Link>
            </div>

            <dl className="home-hero__summary">
              <div>
                <dt>취급 제품</dt>
                <dd>
                  {totalProductCount.toLocaleString()}
                  <span>+</span>
                </dd>
              </div>

              <div>
                <dt>제품 카테고리</dt>
                <dd>
                  {categories.length}
                  <span>개</span>
                </dd>
              </div>

              <div>
                <dt>지원 범위</dt>
                <dd>
                  제품 선정
                  <span>부터 운영까지</span>
                </dd>
              </div>
            </dl>
          </div>

          <div
            className="home-hero__visual"
            aria-label="연구장비 제품 이미지 영역"
          >
            <div className="home-hero__image-placeholder">
              <span>Hero Product Image</span>
            </div>

            <div className="home-hero__visual-card">
              <span className="home-hero__visual-label">
                Product Discovery
              </span>

              <strong>
                제품명, 모델명 또는
                <br />
                카테고리로 검색
              </strong>

              <Link to="/products">
                제품 검색 시작
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="home-categories">
        <div className="page-container">
          <div className="section-heading">
            <div>
              <p className="section-heading__eyebrow">
                Product Categories
              </p>

              <h2>제품 카테고리</h2>

              <p className="section-heading__description">
                장비와 용품의 종류를 기준으로 제품을
                탐색할 수 있습니다.
              </p>
            </div>

            <Link
              to="/products"
              className="section-heading__link"
            >
              전체 제품 보기
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="category-grid">
            {categories.map((category, index) => (
              <Link
                key={category.id}
                to={`/products/${category.slug}`}
                className="category-card"
              >
                <div className="category-card__top">
                  <span className="category-card__number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span
                    className="category-card__arrow"
                    aria-hidden="true"
                  >
                    ↗
                  </span>
                </div>

                <div className="category-card__content">
                  <p className="category-card__name-en">
                    {category.nameEn}
                  </p>

                  <h3>{category.nameKo}</h3>

                  <p className="category-card__description">
                    {category.shortDescription}
                  </p>
                </div>

                <div className="category-card__bottom">
                  <span>
                  {category.productCount.toLocaleString()}+ Items
                  </span>

                  <span>
                    {category.subcategories.length} Product Groups
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="home-featured-products">
        <div className="page-container">
          <div className="section-heading">
            <div>
              <p className="section-heading__eyebrow">
                Featured Products
              </p>

              <h2>주요 제품</h2>

              <p className="section-heading__description">
                연구와 실험 현장에서 자주 찾는 주요 장비를
                확인해 보세요.
              </p>
            </div>

            <Link
              to="/products"
              className="section-heading__link"
            >
              전체 제품 보기
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="featured-product-grid">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="home-support">
        <div className="page-container">
          <div className="home-support__header">
            <div>
              <p className="section-heading__eyebrow">
                Laboratory Support
              </p>

              <h2>실험실 운영 지원</h2>
            </div>

            <p>
              제품 공급을 넘어 실험실 구축, 구매, 설치와
              운영에 필요한 서비스를 지원합니다.
            </p>
          </div>

          <div className="support-service-grid">
            {featuredSupportServices.map((service, index) => (
              <article
                key={service.id}
                className="support-service-card"
              >
                <span className="support-service-card__number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <p className="support-service-card__name-en">
                  {service.nameEn}
                </p>

                <h3>{service.nameKo}</h3>

                <p className="support-service-card__description">
                  {service.shortDescription}
                </p>

                <ul className="support-service-card__scope">
                  {service.supportScope.slice(0, 3).map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                <Link
                  to={`/contact?type=${service.inquiryType}`}
                  className="support-service-card__link"
                >
                  {service.actionLabel}
                  <span aria-hidden="true">→</span>
                </Link>
              </article>
            ))}
          </div>

          <div className="home-support__cta">
            <div>
              <h3>
                실험실 구축과 운영에 필요한 지원이
                필요하신가요?
              </h3>

              <p>
                제품 선정부터 설치, 구매, 교육 및 유지관리까지
                필요한 지원 범위를 안내해 드립니다.
              </p>
            </div>

            <Link
              to="/contact?type=laboratory-support"
              className="button button--primary"
            >
              지원 서비스 문의
            </Link>
          </div>
        </div>
      </section>

      <section className="home-resources">
        <div className="page-container">
          <div className="section-heading">
            <div>
              <p className="section-heading__eyebrow">
                Technical Resources
              </p>

              <h2>제품 자료</h2>

              <p className="section-heading__description">
                제품 선택과 설치, 운영에 필요한 기술자료를
                확인할 수 있습니다.
              </p>
            </div>

            <Link
              to="/resources"
              className="section-heading__link"
            >
              전체 자료 보기
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="resource-grid">
            {featuredResources.slice(0, 4).map((resource) => (
              <article
                key={resource.id}
                className="resource-card"
              >
                <div className="resource-card__meta">
                  <span>{resource.typeLabel}</span>

                  <span>
                    {resource.fileType} · {resource.fileSize}
                  </span>
                </div>

                <div className="resource-card__content">
                  <p className="resource-card__title-en">
                    {resource.title}
                  </p>

                  <h3>{resource.titleKo}</h3>

                  <p>{resource.description}</p>
                </div>

                <div className="resource-card__footer">
                  <button
                    type="button"
                    className="resource-card__action"
                  >
                    {resource.actionLabel}
                    <span aria-hidden="true">↓</span>
                  </button>

                  <span className="resource-card__date">
                    {resource.publishedAt}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-about">
        <div className="home-about__inner page-container">
          <div className="home-about__visual">
            <div className="home-about__image-placeholder">
              <span>Laboratory & Logistics Image</span>
            </div>

            <div className="home-about__stat">
              <strong>
                {totalProductCount.toLocaleString()}+
              </strong>

              <span>
                Laboratory Products
              </span>
            </div>
          </div>

          <div className="home-about__content">
            <p className="section-heading__eyebrow">
              About SLI Scientific
            </p>

            <h2>{companyProfile.overview.title}</h2>

            {companyProfile.overview.paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="home-about__description"
              >
                {paragraph}
              </p>
            ))}

            <ul className="home-about__capabilities">
              {companyProfile.capabilities
                .slice(0, 4)
                .map((capability) => (
                  <li key={capability.id}>
                    <span aria-hidden="true">✓</span>

                    <div>
                      <strong>{capability.titleKo}</strong>
                      <p>{capability.description}</p>
                    </div>
                  </li>
                ))}
            </ul>

            <Link
              to="/about"
              className="button button--secondary"
            >
              회사소개 보기
            </Link>
          </div>
        </div>
      </section>

      <section className="home-final-cta">
        <div className="home-final-cta__inner page-container">
          <div>
            <p className="home-final-cta__eyebrow">
              Product & Technical Inquiry
            </p>

            <h2>
              연구환경에 적합한 제품을
              <br />
              찾고 계신가요?
            </h2>

            <p>
              사용 목적과 필요한 사양을 알려주시면
              적합한 제품과 기술자료를 안내해 드립니다.
            </p>
          </div>

          <div className="home-final-cta__actions">
            <Link
              to="/contact?type=quotation"
              className="button button--light"
            >
              견적 문의
            </Link>

            <Link
              to="/products"
              className="button button--ghost-light"
            >
              제품 둘러보기
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;