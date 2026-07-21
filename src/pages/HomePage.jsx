import { Link } from "react-router-dom";

import  categories, {
  totalProductCount,
} from "../data/categories";

import { featuredProducts } from "../data/products";
import { featuredSupportServices } from "../data/supportServices";
import { featuredResources } from "../data/resources";
import { companyProfile } from "../data/company";
import supportServices from "../data/supportServices";

import ProductCard from "../components/product/ProductCard";

import "./HomePage.css";
import siteImages from "../data/siteImages";

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
              연구장비를 더 빠르게
              <br />
              탐색하고 검토하세요.
            </h1>

            <p className="home-hero__description">
            기초 실험장비부터 분석·측정장비,
            실험기구와 소모품까지 연구환경에 필요한
            제품 정보와 기술자료를 제공합니다.
            </p>

            <div className="home-hero__actions">
              <Link
                to="/products"
                className="button button--primary"
              >
                제품 찾아보기
              </Link>

              <Link
                to="/contact?type=quotation"
                className="button button--secondary"
              >
                제품 문의
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
                <dt>지원 서비스</dt>
                <dd>
                 {supportServices.length}
                 <span>개 영역</span>
                </dd>
              </div>
            </dl>
          </div>

          <div
              className="home-hero__visual"
              aria-label="연구장비 제품 이미지 영역"
            >
              <img
                src={siteImages.home.hero}
                alt="연구장비와 실험기구가 배치된 현대적인 연구실"
                className="home-hero__visual-image"
              />

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
                key={category.id ?? category.slug}
                to={`/products/${category.slug}`}
                className="home-category-card"
              >
                <div className="home-category-card__visual">
                  <img
                    src={category.image}
                    alt={category.imageAlt || `${category.nameKo} 카테고리 이미지`}
                  />

                  <span className="home-category-card__number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="home-category-card__content">
                  <div className="home-category-card__heading">
                    <div>
                      <p className="home-category-card__name-en">
                        {category.nameEn}
                      </p>

                      <h3>{category.nameKo}</h3>
                    </div>

                    <span
                      className="home-category-card__arrow"
                      aria-hidden="true"
                    >
                      →
                    </span>
                  </div>

                  <p className="home-category-card__description">
                    {category.shortDescription}
                  </p>
                </div>

                <div className="home-category-card__bottom">
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

      <section className="home-discovery">
        <div className="page-container">
          <div className="section-heading">
            <div>
              <p className="section-heading__eyebrow">
                Product Discovery
              </p>

              <h2>제품 탐색부터 문의까지</h2>

              <p className="section-heading__description">
                필요한 제품을 찾고 사양과 자료를 검토한 뒤
                제품 문의로 이어지는 과정을 제공합니다.
              </p>
            </div>
          </div>

          <ol className="discovery-flow">
            <li className="discovery-flow__item">
              <span className="discovery-flow__number">
                01
              </span>

              <div>
                <p className="discovery-flow__label">
                  Explore
                </p>

                <h3>카테고리 탐색</h3>

                <p>
                  장비와 용품을 목적과 제품군에 따라
                  탐색합니다.
                </p>
              </div>
            </li>

            <li className="discovery-flow__item">
              <span className="discovery-flow__number">
                02
              </span>

              <div>
                <p className="discovery-flow__label">
                  Review
                </p>

                <h3>제품 정보 검토</h3>

                <p>
                  제품 설명과 주요 사양, 모델 정보를
                  확인합니다.
                </p>
              </div>
            </li>

            <li className="discovery-flow__item">
              <span className="discovery-flow__number">
                03
              </span>

              <div>
                <p className="discovery-flow__label">
                  Resources
                </p>

                <h3>기술자료 확인</h3>

                <p>
                  제품 선택과 운영에 필요한 자료를
                  함께 검토합니다.
                </p>
              </div>
            </li>

            <li className="discovery-flow__item">
              <span className="discovery-flow__number">
                04
              </span>

              <div>
                <p className="discovery-flow__label">
                  Inquiry
                </p>

                <h3>제품 문의</h3>

                <p>
                  제품과 모델 정보를 포함해 상담을
                  요청합니다.
                </p>
              </div>
            </li>
          </ol>

          <div className="home-discovery__actions">
            <Link
              to="/products"
              className="button button--secondary"
            >
              제품 탐색 시작
            </Link>

            <Link
              to="/contact?type=product"
              className="button button--secondary"
            >
              제품 문의
            </Link>
          </div>
        </div>
      </section>

      <section className="home-support">
        <div className="page-container">
          <div className="section-heading">
            <div>
              <p className="section-heading__eyebrow">
                Support Services
              </p>

              <h2>제품 선정부터 운영까지 지원합니다.</h2>

              <p className="section-heading__description">
                연구환경과 사용 목적을 고려해 제품 검토,
                설치, 교육과 유지관리 과정을 지원합니다.
              </p>
            </div>

            <Link
              to="/contact?type=technical-support"
              className="section-heading__link"
            >
              기술지원 문의
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="support-service-grid">
            <article className="support-service-card">
              <div className="support-service-card__top">
                <span className="support-service-card__number">
                  01
                </span>

                <span
                  className="support-service-card__icon"
                  aria-hidden="true"
                >
                  ◇
                </span>
              </div>

              <div className="support-service-card__content">
                <p className="support-service-card__label">
                  Product Selection
                </p>

                <h3>제품 선정 지원</h3>

                <p>
                  사용 목적과 필요한 사양을 바탕으로
                  적합한 제품과 모델을 검토합니다.
                </p>
              </div>

              <Link to="/contact?type=product">
                제품 문의
                <span aria-hidden="true">→</span>
              </Link>
            </article>

            <article className="support-service-card">
              <div className="support-service-card__top">
                <span className="support-service-card__number">
                  02
                </span>

                <span
                  className="support-service-card__icon"
                  aria-hidden="true"
                >
                  □
                </span>
              </div>

              <div className="support-service-card__content">
                <p className="support-service-card__label">
                  Installation
                </p>

                <h3>설치 및 시운전</h3>

                <p>
                  장비 설치부터 초기 작동 확인까지
                  안정적인 도입 과정을 지원합니다.
                </p>
              </div>

              <Link to="/contact?type=installation-training">
                설치 문의
                <span aria-hidden="true">→</span>
              </Link>
            </article>

            <article className="support-service-card">
              <div className="support-service-card__top">
                <span className="support-service-card__number">
                  03
                </span>

                <span
                  className="support-service-card__icon"
                  aria-hidden="true"
                >
                  △
                </span>
              </div>

              <div className="support-service-card__content">
                <p className="support-service-card__label">
                  Technical Support
                </p>

                <h3>기술지원 및 교육</h3>

                <p>
                  제품 사용과 운영에 필요한 기술 안내와
                  사용자 교육을 제공합니다.
                </p>
              </div>

              <Link to="/contact?type=technical-support">
                기술지원 문의
                <span aria-hidden="true">→</span>
              </Link>
            </article>

            <article className="support-service-card">
              <div className="support-service-card__top">
                <span className="support-service-card__number">
                  04
                </span>

                <span
                  className="support-service-card__icon"
                  aria-hidden="true"
                >
                  ○
                </span>
              </div>

              <div className="support-service-card__content">
                <p className="support-service-card__label">
                  Maintenance
                </p>

                <h3>유지관리</h3>

                <p>
                  장비의 지속적인 운영을 위한 점검과
                  유지관리 관련 상담을 지원합니다.
                </p>
              </div>

              <Link to="/contact?type=calibration">
                유지관리 문의
                <span aria-hidden="true">→</span>
              </Link>
            </article>
          </div>
        </div>
      </section>

      <section className="home-resources">
        <div className="page-container">
          <div className="section-heading">
            <div>
              <p className="section-heading__eyebrow">
                Resources
              </p>

              <h2>제품 검토에 필요한 자료</h2>

              <p className="section-heading__description">
              제품 선택과 설치, 운영에 필요한 가이드와
              기술자료를 확인하세요.
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
                  <Link
                    to={`/contact?type=other&resource=${encodeURIComponent(
                      resource.titleKo
                    )}`}
                    className="resource-card__action"
                  >
                    자료 요청
                    <span aria-hidden="true">→</span>
                  </Link>

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
            <img
                src={siteImages.home.logistics}
                alt="연구장비와 실험대가 배치된 연구시설"
              />
            
            <div className="home-about__stat">
              <span>Integrated Support</span>
              <strong>
                제품 선정부터 설치와
                <br />
                운영 지원까지
              </strong>
            </div>
          </div>

          <div className="home-about__content">
            <p className="section-heading__eyebrow">
              About SLI Scientific
            </p>

            <h2>연구환경에 필요한 제품과
            <br />
            지원 서비스를 연결합니다.</h2>        
              
              <p className="home-about__description">
              SLI Scientific은 기초 실험장비부터 분석·측정장비,
              실험기구와 소모품까지 다양한 제품 정보를 제공하고,
              사용 목적에 맞는 제품 검토와 도입 과정을 지원합니다.
            </p>

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
              회사소개 보기<span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="home-final-cta">
        <div className="home-final-cta__inner page-container">
          <div>
            <p className="home-final-cta__eyebrow">
            Product Consultation
            </p>

            <h2>
            어떤 제품이 적합한지
            <br />
            결정하기 어려우신가요?
            </h2>

            <p className="home-final-cta__cont">
              사용 목적과 필요한 사양을 알려주시면
              적합한 제품과 기술자료를 안내해 드립니다.
            </p>
          </div>

          <div className="home-final-cta__actions">
          <Link
            to="/contact?type=product"
            className="button home-inquiry__primary"
          >
            제품 문의
            <span aria-hidden="true">→</span>
          </Link>

          <Link
            to="/resources"
            className="button home-inquiry__primary"
          >
            자료실 보기
            <span aria-hidden="true">→</span>
          </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;