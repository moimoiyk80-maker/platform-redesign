import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

import categories, {
  totalProductCount,
} from "../data/categories";
import products, {
  featuredProducts,
} from "../data/products";
import ProductCard from "../components/product/ProductCard";
import "./ProductsPage.css";
import siteImages from "../data/siteImages";

function ProductsPage() {
  const [searchInput, setSearchInput] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] =
    useState("all");

  const normalizedQuery = searchQuery
    .trim()
    .toLowerCase();

  const hasActiveFilter =
    normalizedQuery.length > 0 ||
    selectedCategory !== "all";

  const filteredProducts = useMemo(() => {
    if (!hasActiveFilter) {
      return [];
    }

    return products.filter((product) => {
      const category = categories.find(
        (item) => item.id === product.categoryId,
      );

      const subcategory = category?.subcategories?.find(
        (item) => item.id === product.subcategoryId,
      );

      const searchableText = [
        product.nameEn,
        product.nameKo,
        product.model,
        product.shortDescription,
        product.description,
        category?.nameKo,
        category?.nameEn,
        category?.shortDescription,
        subcategory?.nameKo,
        subcategory?.nameEn,
        ...(product.keywords ?? []),
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      const matchesSearch =
        normalizedQuery.length === 0 ||
        searchableText.includes(normalizedQuery);

      const matchesCategory =
        selectedCategory === "all" ||
        product.categoryId === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [
    hasActiveFilter,
    normalizedQuery,
    selectedCategory,
  ]);

  const handleSearch = (event) => {
    event.preventDefault();
    setSearchQuery(searchInput);
  };

  const handleKeywordClick = (keyword) => {
    setSearchInput(keyword);
    setSearchQuery(keyword);
  };

  const handleReset = () => {
    setSearchInput("");
    setSearchQuery("");
    setSelectedCategory("all");
  };

  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  return (
    <>
      <section className="products-hero">
        <div className="products-hero__inner page-container">
          <div className="products-hero__content">
            <p className="products-hero__eyebrow">
              Product Discovery
            </p>

            <h1>
              연구환경에 필요한 제품을 찾아보세요.
            </h1>

            <p className="products-hero__description">
              기초 실험장비부터 분석·측정장비,
              실험기구와 소모품까지 제품 종류와 사용
              목적을 기준으로 탐색할 수 있습니다.
              세부 제품과 규격은 상담을 통해
              안내합니다.
            </p>

            <dl className="products-hero__summary">
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
                <dt>온라인 대표 제품</dt>
                <dd>
                  {featuredProducts.length}
                  <span>개</span>
                </dd>
              </div>
            </dl>
          </div>

          <div className="products-hero__visual">
            <img
              src={siteImages.products.hero}
              alt="다양한 연구장비가 배치된 실험실"
            />
          </div>
        </div>
      </section>

      <section className="product-search-section">
        <div className="page-container">
          <div className="product-search-panel">
            <div className="product-search-panel__heading">
              <p>Search Products</p>
              <h2>무엇을 찾고 계신가요?</h2>
            </div>

            <form
              className="product-search"
              onSubmit={handleSearch}
            >
              <label
                htmlFor="product-search-input"
                className="sr-only"
              >
                제품 검색
              </label>

              <input
                id="product-search-input"
                type="text"
                value={searchInput}
                placeholder="제품명, 모델명 또는 카테고리를 검색해 주세요."
                onChange={(event) =>
                  setSearchInput(event.target.value)
                }
              />

              {searchInput && (
                <button
                  type="button"
                  className="product-search__clear"
                  aria-label="검색어 지우기"
                  onClick={() => {
                    setSearchInput("");
                    setSearchQuery("");
                  }}
                >
                  ×
                </button>
              )}

              <button
                type="submit"
                className="product-search__submit"
              >
                검색
              </button>
            </form>

            <div className="product-search-panel__keywords">
              <span>추천 검색어</span>

              {[
                "생물안전작업대",
                "실험실 냉동고",
                "핫플레이트",
                "전자저울",
              ].map((keyword) => (
                <button
                  key={keyword}
                  type="button"
                  onClick={() =>
                    handleKeywordClick(keyword)
                  }
                >
                  {keyword}
                </button>
              ))}
            </div>

            <div
              className="products-filter"
              aria-label="제품 카테고리 필터"
            >
              <button
                type="button"
                className={
                  selectedCategory === "all"
                    ? "products-filter__button products-filter__button--active"
                    : "products-filter__button"
                }
                onClick={() =>
                  handleCategoryChange("all")
                }
              >
                전체
              </button>

              {categories.map((category) => (
                <button
                  key={category.id}
                  type="button"
                  className={
                    selectedCategory === category.id
                      ? "products-filter__button products-filter__button--active"
                      : "products-filter__button"
                  }
                  onClick={() =>
                    handleCategoryChange(category.id)
                  }
                >
                  {category.nameKo}
                </button>
              ))}
            </div>
          </div>

          {hasActiveFilter && (
            <div className="product-search-results">
              <div className="product-search-results__header">
                <div>
                  <p>Search Results</p>

                  <h2>
                    검색 결과
                    <span>{filteredProducts.length}</span>
                  </h2>

                  <div className="product-search-results__conditions">
                    {normalizedQuery && (
                      <span>검색어: {searchQuery}</span>
                    )}

                    {selectedCategory !== "all" && (
                      <span>
                        카테고리:{" "}
                        {
                          categories.find(
                            (category) =>
                              category.id === selectedCategory,
                          )?.nameKo
                        }
                      </span>
                    )}
                  </div>
                </div>

                <button
                type="button"
                className="button button--secondary"
                onClick={handleReset}
              >
                검색 조건 초기화
              </button>
              </div>

              {filteredProducts.length > 0 ? (
                <div className="product-search-results__grid">
                  {filteredProducts.map((product) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                    />
                  ))}
                </div>
              ) : (
                <div className="product-search-empty">
                  <h3>검색 결과가 없습니다.</h3>

                  <p>
                    검색어나 선택한 제품 카테고리를
                    확인해 주세요.
                  </p>

                  <button
                    type="button"
                    className="button button--secondary"
                    onClick={handleReset}
                  >
                    제품군 둘러보기
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {!hasActiveFilter && (
        <>
          <section className="products-categories">
            <div className="page-container">
              <div className="section-heading">
                <div>
                  <p className="section-heading__eyebrow">
                    Product Categories
                  </p>

                  <h2>제품 카테고리</h2>

                  <p className="section-heading__description">
                    장비와 용품의 종류를 기준으로
                    전체 제품을 탐색할 수 있습니다.
                  </p>
                </div>
              </div>

              <div className="products-category-grid">
                {categories.map(
                  (category, index) => (
                    <Link
                      key={category.id}
                      to={`/products/${category.slug}`}
                      className="products-category-card"
                    >
                      <div className="products-category-card__visual">
                        <span>
                          {String(index + 1).padStart(
                            2,
                            "0",
                          )}
                        </span>

                        <img
                          src={category.image}
                          alt={category.imageAlt}
                        />
                      </div>

                      <div className="products-category-card__body">
                        <div className="products-category-card__heading">
                          <div>
                            <p>{category.nameEn}</p>
                            <h3>{category.nameKo}</h3>
                          </div>

                          <span aria-hidden="true">
                            ↗
                          </span>
                        </div>

                        <p className="products-category-card__description">
                          {category.description}
                        </p>

                        <ul className="products-category-card__groups">
                          {category.subcategories
                            .slice(0, 4)
                            .map((subcategory) => (
                              <li
                                key={
                                  subcategory.id
                                }
                              >
                                {
                                  subcategory.nameKo
                                }
                              </li>
                            ))}
                        </ul>

                        <div className="products-category-card__footer">
                          <span>
                            {category.productCount.toLocaleString()}
                            + Items
                          </span>

                          <span>
                            {
                              category
                                .subcategories
                                .length
                            }{" "}
                            Product Groups
                          </span>
                        </div>
                      </div>
                    </Link>
                  ),
                )}
              </div>
            </div>
          </section>

          <section className="products-featured">
            <div className="page-container">
              <div className="section-heading">
                <div>
                  <p className="section-heading__eyebrow">
                    Featured Products
                  </p>

                  <h2>주요 제품</h2>

                  <p className="section-heading__description">
                    연구와 실험 현장에서 자주 찾는
                    주요 장비를 확인해 보세요.
                  </p>
                </div>
              </div>

              <div className="products-featured__grid">
                {featuredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                  />
                ))}
              </div>
            </div>
          </section>

          <section className="products-inquiry">
            <div className="products-inquiry__inner page-container">
              <div>
                <p>Product Consultation</p>

                <h2>
                  어떤 제품이 적합한지
                  <br />
                  결정하기 어려우신가요?
                </h2>

                <span>
                  사용 목적과 필요한 사양을 바탕으로
                  적합한 제품을 안내해 드립니다.
                </span>
              </div>

              <Link
                to="/contact?type=product"
                className="button button--light"
              >
                제품 문의
              </Link>
            </div>
          </section>
        </>
      )}
    </>
  );
}

export default ProductsPage;