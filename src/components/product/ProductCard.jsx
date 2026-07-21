import { useState } from "react";
import { Link } from "react-router-dom";

import { getCategoryById } from "../../data/categories";
import "./ProductCard.css";

function ProductCard({ product }) {
  const [imageError, setImageError] = useState(false);
  const category = getCategoryById(product.categoryId);

  const productPath = category
    ? `/products/${category.slug}/${product.slug}`
    : "/products";

  return (
    <article className="product-card">
      <Link
        to={productPath}
        className="product-card__image-link"
        aria-label={`${product.nameKo} 상세 보기`}
      >
     <div className="product-card__image">
        {product.image && !imageError ? (
          <img
            src={product.image}
            alt={product.imageAlt || `${product.nameKo} 제품 이미지`}
            loading="lazy"
            onError={() => setImageError(true)}
          />
        ) : (
          <div
            className="product-card__image-placeholder"
            aria-label={`${product.nameKo} 이미지 준비 중`}
          >
            <span aria-hidden="true">Product Image</span>
          </div>
        )}
        {product.isFeaturedDetail && (
          <span className="product-card__detail-badge">
            상세 설계 대표 사례
          </span>
        )}
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
        </div>
      </div>
    </article>
  );
}

export default ProductCard;