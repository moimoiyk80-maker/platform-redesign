import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { getCategoryBySlug } from "../data/categories";
import {
  getProductBySlug,
  getRelatedProducts,
} from "../data/products";

import ProductCard from "../components/product/ProductCard";
import NotFoundPage from "./NotFoundPage";

import "./ProductDetailPage.css";

function ProductDetailPage() {
  const { categorySlug, productSlug } = useParams();

  const product = getProductBySlug(productSlug);
  const category = getCategoryBySlug(categorySlug);  

  const [selectedModel, setSelectedModel] = useState("");

  useEffect(() => {
    const defaultModel =
      product?.modelOptions?.[0]?.model ??
      product?.model ??
      "";

    setSelectedModel(defaultModel);
  }, [product]);

  if (
    !product ||
    !category ||
    product.categoryId !== category.id
  ) {
    return <NotFoundPage />;
  }

  const relatedProducts = getRelatedProducts(product);

  const selectedModelData = product.modelOptions?.find(
    (item) => item.model === selectedModel,
  );

  return (
    <>
      <section className="product-detail-hero">
        <div className="page-container">
          <nav
            className="breadcrumb"
            aria-label="현재 위치"
          >
            <Link to="/">Home</Link>

            <span aria-hidden="true">/</span>

            <Link to="/products">Products</Link>

            <span aria-hidden="true">/</span>

            <Link to={`/products/${category.slug}`}>
              {category.nameKo}
            </Link>

            <span aria-hidden="true">/</span>

            <span aria-current="page">
              {product.nameKo}
            </span>
          </nav>

          <div className="product-detail-hero__inner">
            <div className="product-detail-gallery">
              <div className="product-detail-gallery__main">
                <img
                  src={product.image}
                  alt={product.imageAlt}
                  onError={(event) => {
                    event.currentTarget.style.display = "none";
                  }}
                />

                <span>Product Image</span>
              </div>

              <div className="product-detail-gallery__thumbnails">
                {[1, 2, 3].map((item) => (
                  <button
                    key={item}
                    type="button"
                    aria-label={`제품 이미지 ${item}`}
                    className={
                      item === 1
                        ? "product-thumbnail product-thumbnail--active"
                        : "product-thumbnail"
                    }
                  >
                    Image {item}
                  </button>
                ))}
              </div>
            </div>

            <div className="product-detail-summary">
              <p className="product-detail-summary__category">
                {category.nameEn}
              </p>

              <h1>{product.nameEn}</h1>

              <p className="product-detail-summary__name-ko">
                {product.nameKo}
              </p>

              <p className="product-detail-summary__description">
                {product.description}
              </p>

              <div className="product-detail-summary__model">
                <span>Model</span>
                <strong>{selectedModel}</strong>
              </div>

              {product.modelOptions?.length > 0 && (
                <fieldset className="product-model-selector">
                  <legend>모델 선택</legend>

                  <div className="product-model-selector__options">
                    {product.modelOptions.map((item) => (
                      <button
                        key={item.model}
                        type="button"
                        className={
                          selectedModel === item.model
                            ? "product-model-option product-model-option--active"
                            : "product-model-option"
                        }
                        onClick={() =>
                          setSelectedModel(item.model)
                        }
                      >
                        <strong>{item.model}</strong>
                        <span>{item.workingWidth}</span>
                      </button>
                    ))}
                  </div>
                </fieldset>
              )}

              {selectedModelData && (
                <dl className="selected-model-summary">
                  <div>
                    <dt>작업 폭</dt>
                    <dd>
                      {selectedModelData.workingWidth}
                    </dd>
                  </div>

                  <div>
                    <dt>외부 폭</dt>
                    <dd>
                      {selectedModelData.exteriorWidth}
                    </dd>
                  </div>

                  <div>
                    <dt>소비전력</dt>
                    <dd>{selectedModelData.power}</dd>
                  </div>
                </dl>
              )}

              <div className="product-detail-summary__actions">
                <Link
                  to={`/contact?type=quotation&product=${product.id}&model=${selectedModel}`}
                  className="button button--primary"
                >
                  견적 문의
                </Link>

                <button
                  type="button"
                  className="button button--secondary"
                >
                  브로셔 다운로드
                </button>
              </div>

              <Link
                to={`/contact?type=product&product=${product.id}`}
                className="product-detail-summary__support"
              >
                제품 선택에 도움이 필요하신가요?
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {product.highlights?.length > 0 && (
        <section className="product-highlights">
          <div className="page-container">
            <div className="product-highlights__heading">
              <p>Product Highlights</p>
              <h2>주요 특징</h2>
            </div>

            <ul className="product-highlights__list">
              {product.highlights.map((highlight, index) => (
                <li key={highlight}>
                  <span>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <strong>{highlight}</strong>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {product.features?.length > 0 && (
        <section className="product-features">
          <div className="page-container">
            <div className="section-heading">
              <div>
                <p className="section-heading__eyebrow">
                  Key Features
                </p>

                <h2>제품 특징</h2>

                <p className="section-heading__description">
                  안정적인 실험과 안전한 작업 환경을 위한
                  주요 기능을 확인할 수 있습니다.
                </p>
              </div>
            </div>

            <div className="product-feature-grid">
              {product.features.map((feature, index) => (
                <article
                  key={feature.id}
                  className="product-feature-card"
                >
                  <div className="product-feature-card__visual">
                    <span>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <strong>Feature Image</strong>
                  </div>

                  <div className="product-feature-card__content">
                    <p>{feature.titleEn}</p>
                    <h3>{feature.titleKo}</h3>
                    <span>{feature.description}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {product.applications?.length > 0 && (
        <section className="product-applications">
          <div className="page-container">
            <div className="product-applications__inner">
              <div>
                <p className="section-heading__eyebrow">
                  Applications
                </p>

                <h2>적용 분야</h2>

                <span>
                  다양한 연구 및 검사 환경에서 안전한 시료
                  처리를 지원합니다.
                </span>
              </div>

              <ul>
                {product.applications.map(
                  (application, index) => (
                    <li key={application}>
                      <span>
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <strong>{application}</strong>
                    </li>
                  ),
                )}
              </ul>
            </div>
          </div>
        </section>
      )}

      {product.specifications?.length > 0 && (
        <section className="product-specifications">
          <div className="page-container">
            <div className="section-heading">
              <div>
                <p className="section-heading__eyebrow">
                  Technical Specifications
                </p>

                <h2>주요 사양</h2>

                <p className="section-heading__description">
                  모델별 크기와 성능 사양을 비교할 수
                  있습니다.
                </p>
              </div>
            </div>

            <div className="specification-table-wrapper">
              <table className="specification-table">
                <thead>
                  <tr>
                    <th scope="col">Specification</th>
                    <th scope="col">SLI BSC-1200</th>
                    <th scope="col">SLI BSC-1500</th>
                    <th scope="col">SLI BSC-1800</th>
                  </tr>
                </thead>

                <tbody>
                  {product.specifications.map((spec) => (
                    <tr key={spec.label}>
                      <th scope="row">{spec.label}</th>
                      <td>{spec.bsc1200}</td>
                      <td>{spec.bsc1500}</td>
                      <td>{spec.bsc1800}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="specification-notice">
              제품 사양은 성능 개선을 위해 사전 고지 없이
              변경될 수 있습니다.
            </p>
          </div>
        </section> 
      )}

      {product.downloads?.length > 0 && (
        <section className="product-downloads">
          <div className="page-container">
            <div className="section-heading">
              <div>
                <p className="section-heading__eyebrow">
                  Downloads
                </p>

                <h2>제품 자료</h2>

                <p className="section-heading__description">
                  제품 검토와 설치에 필요한 문서를
                  확인할 수 있습니다.
                </p>
              </div>
            </div>

            <div className="product-download-list">
              {product.downloads.map((download) => (
                <article
                  key={download.id}
                  className="product-download-item"
                >
                  <div>
                    <span>{download.type}</span>
                    <h3>{download.title}</h3>
                  </div>

                  <p>
                    {download.fileType} · {download.fileSize}
                  </p>

                  <button type="button">
                    {download.actionLabel}
                    <span aria-hidden="true">↓</span>
                  </button>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {relatedProducts.length > 0 && (
        <section className="related-products">
          <div className="page-container">
            <div className="section-heading">
              <div>
                <p className="section-heading__eyebrow">
                  Related Products
                </p>

                <h2>관련 제품</h2>

                <p className="section-heading__description">
                  함께 검토할 수 있는 관련 장비입니다.
                </p>
              </div>
            </div>

            <div className="related-products__grid">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard
                  key={relatedProduct.id}
                  product={relatedProduct}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="product-detail-inquiry">
        <div className="product-detail-inquiry__inner page-container">
          <div>
            <p>Product Consultation</p>

            <h2>
              실험 환경에 적합한
              <br />
              {product.nameKo}가 필요하신가요?
            </h2>

            <span>
              사용 목적, 작업 공간과 필요한 사양을 바탕으로
              적합한 모델을 안내해 드립니다.
            </span>
          </div>

          <div className="product-detail-inquiry__actions">
            <Link
              to={`/contact?type=quotation&product=${product.id}`}
              className="button button--light"
            >
              견적 문의
            </Link>

            <button
              type="button"
              className="button button--ghost-light"
            >
              브로셔 다운로드
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProductDetailPage;