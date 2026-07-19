import { useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

import categories from "../data/categories";
import resources, {
  resourceSortOptions,
  resourceTypes,
} from "../data/resources";

import "./ResourcesPage.css";

function ResourcesPage() {
  const [searchParams, setSearchParams] = useSearchParams();

  const initialType = searchParams.get("type") ?? "all";

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState(initialType);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sort, setSort] = useState("latest");

  const filteredResources = useMemo(() => {
    const normalizedQuery = searchQuery.trim().toLowerCase();

    const filtered = resources.filter((resource) => {
      const typeMatch =
        selectedType === "all" ||
        resource.type === selectedType;

      const categoryMatch =
        selectedCategory === "all" ||
        resource.relatedCategoryId === selectedCategory;

      const searchableText = [
        resource.title,
        resource.titleKo,
        resource.typeLabel,
        resource.description,
      ]
        .join(" ")
        .toLowerCase();

      const searchMatch =
        !normalizedQuery ||
        searchableText.includes(normalizedQuery);

      return typeMatch && categoryMatch && searchMatch;
    });

    return [...filtered].sort((a, b) => {
      if (sort === "title") {
        return a.titleKo.localeCompare(b.titleKo, "ko");
      }

      if (sort === "type") {
        return a.typeLabel.localeCompare(b.typeLabel, "ko");
      }

      return (
        new Date(b.publishedAt).getTime() -
        new Date(a.publishedAt).getTime()
      );
    });
  }, [
    searchQuery,
    selectedType,
    selectedCategory,
    sort,
  ]);

  const updateTypeFilter = (type) => {
    setSelectedType(type);

    const nextSearchParams = new URLSearchParams(searchParams);

    if (type === "all") {
      nextSearchParams.delete("type");
    } else {
      nextSearchParams.set("type", type);
    }

    setSearchParams(nextSearchParams);
  };

  const resetFilters = () => {
    setSearchQuery("");
    setSelectedType("all");
    setSelectedCategory("all");
    setSort("latest");
    setSearchParams({});
  };

  return (
    <>
      <section className="resources-hero">
        <div className="resources-hero__inner page-container">
          <div className="resources-hero__content">
            <p className="resources-hero__eyebrow">
              Technical Resources
            </p>

            <h1>
              제품 선택과 운영에 필요한
              <br />
              자료를 확인해 보세요.
            </h1>

            <p className="resources-hero__description">
              브로셔, 기술 사양서, 사용설명서와 제품 선택
              가이드까지 제품 검토와 설치에 필요한 자료를
              제공합니다.
            </p>

            <dl className="resources-hero__summary">
              <div>
                <dt>전체 자료</dt>

                <dd>
                  {resources.length}
                  <span>개</span>
                </dd>
              </div>

              <div>
                <dt>자료 유형</dt>

                <dd>
                  {resourceTypes.length - 1}
                  <span>개</span>
                </dd>
              </div>

              <div>
                <dt>지원 카테고리</dt>

                <dd>
                  {categories.length}
                  <span>개</span>
                </dd>
              </div>
            </dl>
          </div>

          <div className="resources-hero__visual">
            <span>Technical Documents</span>
            <strong>Resource Visual</strong>
          </div>
        </div>
      </section>

      <section className="resources-search-section">
        <div className="page-container">
          <div className="resources-search-panel">
            <div className="resources-search-panel__heading">
              <p>Search Resources</p>
              <h2>필요한 자료를 검색해 보세요.</h2>
            </div>

            <div className="resources-search">
              <label
                htmlFor="resource-search-input"
                className="sr-only"
              >
                제품 자료 검색
              </label>

              <input
                id="resource-search-input"
                type="search"
                value={searchQuery}
                placeholder="제품명, 모델명 또는 자료 유형을 검색해 주세요."
                onChange={(event) =>
                  setSearchQuery(event.target.value)
                }
              />

              {searchQuery && (
                <button
                  type="button"
                  className="resources-search__clear"
                  aria-label="검색어 지우기"
                  onClick={() => setSearchQuery("")}
                >
                  ×
                </button>
              )}
            </div>

            <div className="resources-search-panel__keywords">
              <span>추천 검색어</span>

              {[
                "생물안전작업대",
                "냉동고",
                "설치 가이드",
                "교정",
              ].map((keyword) => (
                <button
                  key={keyword}
                  type="button"
                  onClick={() => setSearchQuery(keyword)}
                >
                  {keyword}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="resources-content">
        <div className="page-container">
          <div className="resources-layout">
            <aside className="resources-filter">
              <div className="resources-filter__header">
                <h2>필터</h2>

                <button
                  type="button"
                  onClick={resetFilters}
                >
                  초기화
                </button>
              </div>

              <fieldset className="resources-filter-group">
                <legend>자료 유형</legend>

                <div className="resources-filter-options">
                  {resourceTypes.map((type) => (
                    <label key={type.id}>
                      <input
                        type="radio"
                        name="resource-type"
                        value={type.id}
                        checked={selectedType === type.id}
                        onChange={() =>
                          updateTypeFilter(type.id)
                        }
                      />

                      <span>{type.label}</span>
                    </label>
                  ))}
                </div>
              </fieldset>

              <fieldset className="resources-filter-group">
                <legend>제품 카테고리</legend>

                <div className="resources-filter-options">
                  <label>
                    <input
                      type="radio"
                      name="resource-category"
                      value="all"
                      checked={selectedCategory === "all"}
                      onChange={() =>
                        setSelectedCategory("all")
                      }
                    />

                    <span>전체</span>
                  </label>

                  {categories.map((category) => (
                    <label key={category.id}>
                      <input
                        type="radio"
                        name="resource-category"
                        value={category.id}
                        checked={
                          selectedCategory === category.id
                        }
                        onChange={() =>
                          setSelectedCategory(category.id)
                        }
                      />

                      <span>{category.nameKo}</span>
                    </label>
                  ))}
                </div>
              </fieldset>
            </aside>

            <div className="resources-main">
              <div className="resources-list-header">
                <div>
                  <p>
                    총
                    <strong>
                      {filteredResources.length}
                    </strong>
                    개 자료
                  </p>

                  {(selectedType !== "all" ||
                    selectedCategory !== "all" ||
                    searchQuery) && (
                    <div className="resources-active-filters">
                      {selectedType !== "all" && (
                        <button
                          type="button"
                          onClick={() =>
                            updateTypeFilter("all")
                          }
                        >
                          {
                            resourceTypes.find(
                              (type) =>
                                type.id === selectedType,
                            )?.label
                          }
                          <span aria-hidden="true">×</span>
                        </button>
                      )}

                      {selectedCategory !== "all" && (
                        <button
                          type="button"
                          onClick={() =>
                            setSelectedCategory("all")
                          }
                        >
                          {
                            categories.find(
                              (category) =>
                                category.id ===
                                selectedCategory,
                            )?.nameKo
                          }
                          <span aria-hidden="true">×</span>
                        </button>
                      )}

                      {searchQuery && (
                        <button
                          type="button"
                          onClick={() => setSearchQuery("")}
                        >
                          “{searchQuery}”
                          <span aria-hidden="true">×</span>
                        </button>
                      )}
                    </div>
                  )}
                </div>

                <label className="resources-sort">
                  <span>정렬</span>

                  <select
                    value={sort}
                    onChange={(event) =>
                      setSort(event.target.value)
                    }
                  >
                    {resourceSortOptions.map((option) => (
                      <option
                        key={option.id}
                        value={option.id}
                      >
                        {option.label}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              {filteredResources.length > 0 ? (
                <div className="resources-list">
                  {filteredResources.map((resource) => (
                    <article
                      key={resource.id}
                      className="resources-list-item"
                    >
                      <div className="resources-list-item__type">
                        <span>{resource.typeLabel}</span>

                        <small>
                          {resource.fileType} ·{" "}
                          {resource.fileSize}
                        </small>
                      </div>

                      <div className="resources-list-item__content">
                        <p>{resource.title}</p>

                        <h3>{resource.titleKo}</h3>

                        <span>{resource.description}</span>

                        <div className="resources-list-item__meta">
                          {resource.relatedCategoryId && (
                            <span>
                              {
                                categories.find(
                                  (category) =>
                                    category.id ===
                                    resource.relatedCategoryId,
                                )?.nameKo
                              }
                            </span>
                          )}

                          <time
                            dateTime={resource.publishedAt}
                          >
                            {resource.publishedAt}
                          </time>
                        </div>
                      </div>

                      <Link
                        to={`/contact?type=other&resource=${encodeURIComponent(
                          resource.titleKo,
                        )}`}
                        className="resources-list-item__action"
                      >
                        자료 요청
                        <span aria-hidden="true">→</span>
                      </Link>
                    </article>
                  ))}
                </div>
              ) : (
                <div className="resources-empty">
                  <p className="resources-empty__eyebrow">
                    No Results
                  </p>

                  <h3>조건에 맞는 자료가 없습니다.</h3>

                  <p>
                    검색어나 필터를 변경하거나 전체 자료를
                    다시 확인해 보세요.
                  </p>

                  <button
                    type="button"
                    className="button button--secondary"
                    onClick={resetFilters}
                  >
                    필터 초기화
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="resources-guide">
        <div className="resources-guide__inner page-container">
          <div>
            <p>Resource Support</p>

            <h2>
              필요한 제품 자료를
              <br />
              찾지 못하셨나요?
            </h2>

            <span>
              제품명과 필요한 문서 유형을 알려주시면 관련
              자료를 안내해 드립니다.
            </span>
          </div>

          <div className="resources-guide__actions">
            <Link
              to="/contact?type=technical-support"
              className="button button--light"
            >
              자료 문의
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

export default ResourcesPage;