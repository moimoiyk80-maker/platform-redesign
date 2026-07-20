import { Link, useParams } from "react-router-dom";

import {
  getCategoryBySlug,
} from "../data/categories";
import {
  getProductsByCategory,
} from "../data/products";
import {
  getResourcesByCategory,
} from "../data/resources";

import ProductCard from "../components/product/ProductCard";
import NotFoundPage from "./NotFoundPage";

import "./CategoryPage.css";
import siteImages from "../data/siteImages";

function CategoryPage() {
  const { categorySlug } = useParams();

  const category = getCategoryBySlug(categorySlug);

  if (!category) {
    return <NotFoundPage />;
  }

  const categoryProducts = getProductsByCategory(category.id);

  const categoryResources = getResourcesByCategory(category.id);

  return (
    <>
      <section className="category-hero">
        <div className="category-hero__inner page-container">
          <div className="category-hero__content">
            <nav
              className="breadcrumb"
              aria-label="현재 위치"
            >
              <Link to="/">Home</Link>

              <span aria-hidden="true">/</span>

              <Link to="/products">Products</Link>

              <span aria-hidden="true">/</span>

              <span aria-current="page">
                {category.nameKo}
              </span>
            </nav>

            <p className="category-hero__eyebrow">
              Product Category
            </p>

            <h1>{category.nameKo}</h1>

            <p className="category-hero__name-en">
              {category.nameEn}
            </p>            

            <p className="category-hero__description">
              {category.description}
            </p>

            <dl className="category-hero__summary">
              <div>
                <dt>취급 제품</dt>

                <dd>
                  {category.productCount.toLocaleString()}
                  <span>+ Items</span>
                </dd>
              </div>

              <div>
                <dt>하위 제품군</dt>

                <dd>
                  {category.subcategories.length}
                  <span>개</span>
                </dd>
              </div>

              <div>
                <dt>온라인 대표 제품</dt>

                <dd>
                  {categoryProducts.length}
                  <span>개</span>
                </dd>
              </div>
            </dl>
          </div>

          <div className="category-hero__visual">
            <span>{category.nameEn}</span>

            <img
              src={siteImages.category.hero}
              alt="연구장비 기업의 현대적인 연구시설"
            />
          </div>
        </div>
      </section>

      <section className="category-navigation">
        <div className="page-container">
          <div className="category-navigation__panel">
            <div className="category-navigation__heading">
              <p>Product Groups</p>

              <h2>제품군 바로가기</h2>
            </div>

            <div className="category-navigation__links">
              {category.subcategories.map(
                (subcategory, index) => (
                  <a
                    key={subcategory.id}
                    href={`#${subcategory.id}`}
                  >
                    <span>
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div>
                      <strong>{subcategory.nameKo}</strong>

                      <small>{subcategory.nameEn}</small>
                    </div>

                    <span aria-hidden="true">↓</span>
                  </a>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="category-groups">
        <div className="page-container">
          <div className="section-heading">
            <div>
              <p className="section-heading__eyebrow">
                Product Groups
              </p>

              <h2>{category.nameKo} 제품군</h2>

              <p className="section-heading__description">
                실험 목적과 장비 종류를 기준으로 세부
                제품군을 확인할 수 있습니다.
              </p>
            </div>
          </div>

          <div className="category-group-list">
            {category.subcategories.map(
              (subcategory, index) => {
                const matchedProducts =
                  categoryProducts.filter(
                    (product) =>
                      product.subcategoryId ===
                      subcategory.id,
                  );

                return (
                  <article
                    key={subcategory.id}
                    id={subcategory.id}
                    className="category-group"
                  >
                    <div className="category-group__header">
                      <div className="category-group__number">
                        {String(index + 1).padStart(2, "0")}
                      </div>

                      <div className="category-group__title">
                        <p>{subcategory.nameEn}</p>

                        <h3>{subcategory.nameKo}</h3>
                      </div>

                      <span className="category-group__count">
                        {matchedProducts.length > 0
                          ? `${matchedProducts.length} Products`
                          : "Products"}
                      </span>
                    </div>

                    <div className="category-group__body">
                      {matchedProducts.length > 0 ? (
                        <ul className="category-group__products">
                          {matchedProducts.map((product) => (
                            <li key={product.id}>
                              <Link
                                to={`/products/${product.categoryId}/${product.slug}`}
                              >
                                <span>
                                  <strong>{product.nameEn}</strong>

                                  <small>{product.nameKo}</small>
                                </span>

                                <span aria-hidden="true">→</span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <div className="category-group__examples">
                          {category.representativeProducts
                            .slice(index, index + 3)
                            .map((productName) => (
                              <span key={productName}>
                                {productName}
                              </span>
                            ))}

                          <p>
                            다양한 제조사와 규격의 제품을 취급합니다.
                          </p>

                          <p>
                            필요한 용도와 사양을 알려주시면
                            적합한 제품을 제안해 드립니다.
                          </p>
                        </div>
                      )}

                      <Link
                        to={`/contact?type=product&category=${category.id}`}
                        className="category-group__inquiry"
                      >
                        제품 문의
                        <span aria-hidden="true">→</span>
                      </Link>
                    </div>
                  </article>
                );
              },
            )}
          </div>
        </div>
      </section>

      <section className="category-products">
        <div className="page-container">
          <div className="section-heading">
            <div>
              <p className="section-heading__eyebrow">
                Featured Products
              </p>

              <h2>주요 제품</h2>

              <p className="section-heading__description">
                현재 카테고리에서 확인할 수 있는 주요 장비입니다.
              </p>
            </div>
          </div>

          {categoryProducts.length > 0 ? (
            <div className="category-products__grid">
              {categoryProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                />
              ))}
            </div>
          ) : (
            <div className="category-products__empty">
              <h3>등록된 대표 제품을 준비하고 있습니다.</h3>

              <p>
                필요한 제품명이나 사양을 알려주시면
                적합한 제품을 안내해 드립니다.
              </p>

              <Link
                to={`/contact?type=product&category=${category.id}`}
                className="button button--secondary"
              >
                제품 문의
              </Link>
            </div>
          )}
        </div>
      </section>

      <section className="category-resources">
        <div className="page-container">
          <div className="section-heading">
            <div>
              <p className="section-heading__eyebrow">
                Technical Resources
              </p>

              <h2>관련 제품 자료</h2>

              <p className="section-heading__description">
                제품 선택과 검토에 필요한 브로셔와
                기술자료를 확인할 수 있습니다.
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

          {categoryResources.length > 0 ? (
            <div className="category-resource-list">
              {categoryResources.slice(0, 4).map(
                (resource) => (
                  <article
                    key={resource.id}
                    className="category-resource-card"
                  >
                    <div className="category-resource-card__type">
                      <span>{resource.typeLabel}</span>

                      <small>
                        {resource.fileType} · {resource.fileSize}
                      </small>
                    </div>

                    <div className="category-resource-card__content">
                      <p>{resource.title}</p>

                      <h3>{resource.titleKo}</h3>

                      <span>{resource.description}</span>
                    </div>

                    <Link
                      to={`/contact?type=other&resource=${encodeURIComponent(
                        resource.titleKo,
                      )}`}
                      className="category-resource-card__action"
                    >
                      자료 요청
                      <span aria-hidden="true">→</span>
                    </Link>
                  </article>
                ),
              )}
            </div>
          ) : (
            <div className="category-resources__empty">
              <p>
                현재 카테고리의 제품 자료를 준비하고 있습니다.
              </p>
            </div>
          )}
        </div>
      </section>

      <section className="category-inquiry">
        <div className="category-inquiry__inner page-container">
          <div>
            <p>Product Consultation</p>

            <h2>
              {category.nameKo} 선택에
              <br />
              도움이 필요하신가요?
            </h2>

            <span>
              사용 목적, 필요한 사양과 설치 환경을 바탕으로
              적합한 제품을 안내해 드립니다.
            </span>
          </div>

          <div className="category-inquiry__actions">
            <Link
              to={`/contact?type=quotation&category=${category.id}`}
              className="button button--light"
            >
              견적 문의
            </Link>

            <Link
              to="/resources"
              className="button button--ghost-light"
            >
              제품 자료 보기
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default CategoryPage;