import { Link } from "react-router-dom";

import "./ProductCard.css";

function ProductCard({ product }) {
  const productPath = `/products/${product.categoryId}/${product.slug}`;

  return (
    <article className="product-card">
      <Link
        to={productPath}
        className="product-card__image-link"
        aria-label={`${product.nameKo} 상세 보기`}
      >
        <div className="product-card__image">
          <img
            src={product.image}
            alt={product.imageAlt}
            loading="lazy"
            onError={(event) => {
              event.currentTarget.style.display = "none";
            }}
          />

          <span className="product-card__image-placeholder">
            Product Image
          </span>
        </div>
      </Link>

      <div className="product-card__body">
        <div className="product-card__heading">
          <div>
            <p className="product-card__category">
              {product.model}
            </p>

            <h3>
              <Link to={productPath}>{product.nameEn}</Link>
            </h3>

            <p className="product-card__name-ko">
              {product.nameKo}
            </p>
          </div>

          <span
            className="product-card__arrow"
            aria-hidden="true"
          >
            ↗
          </span>
        </div>

        <p className="product-card__description">
          {product.shortDescription}
        </p>

        <dl className="product-card__specs">
          {product.cardSpecs.map((spec) => (
            <div key={spec.label}>
              <dt>{spec.label}</dt>
              <dd>{spec.value}</dd>
            </div>
          ))}
        </dl>

        <div className="product-card__actions">
          <Link
            to={productPath}
            className="product-card__detail-link"
          >
            제품 상세 보기
            <span aria-hidden="true">→</span>
          </Link>

          <button
            type="button"
            className="product-card__compare-button"
          >
            제품 비교
          </button>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;