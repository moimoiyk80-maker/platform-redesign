import { useEffect, useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

import categories from "../data/categories";
import products from "../data/products";

import "./ContactPage.css";

const inquiryTypes = [
  {
    id: "product",
    label: "제품 문의",
    description: "제품 선택과 사양에 대해 문의합니다.",
  },
  {
    id: "quotation",
    label: "견적 문의",
    description: "제품 가격과 공급 조건을 문의합니다.",
  },
  {
    id: "technical-support",
    label: "기술 지원",
    description: "제품 사용과 문제 해결을 문의합니다.",
  },
  {
    id: "installation-training",
    label: "설치 및 교육",
    description: "설치 조건과 사용자 교육을 문의합니다.",
  },
  {
    id: "procurement",
    label: "구매·조달 문의",
    description: "입찰, 일괄 구매와 조달을 문의합니다.",
  },
  {
    id: "rental",
    label: "렌탈 문의",
    description: "장비 렌탈 기간과 조건을 문의합니다.",
  },
  {
    id: "calibration",
    label: "교정 문의",
    description: "장비 교정과 검교정을 문의합니다.",
  },
  {
    id: "other",
    label: "기타 문의",
    description: "그 외 필요한 내용을 문의합니다.",
  },
];

const initialFormState = {
  inquiryType: "product",
  categoryId: "",
  productId: "",
  model: "",
  name: "",
  organization: "",
  email: "",
  phone: "",
  message: "",
  privacyAgreed: false,
};

function ContactPage() {
  const [searchParams] = useSearchParams();

  const queryInquiryType = searchParams.get("type");
  const queryCategory = searchParams.get("category") ?? "";
  const queryProduct = searchParams.get("product") ?? "";
  const queryModel = searchParams.get("model") ?? "";
  const queryResource = searchParams.get("resource") ?? "";

  const initialMessage = queryResource
  ? `다음 자료를 요청합니다.\n\n자료명: ${queryResource}`
  : "";

  const validInquiryType = inquiryTypes.some(
    (type) => type.id === queryInquiryType,
  )
    ? queryInquiryType
    : "product";
    
    const [formData, setFormData] = useState({
      ...initialFormState,
      inquiryType: validInquiryType,
      categoryId: queryCategory,
      productId: queryProduct,
      model: queryModel,
      message: initialMessage,
    });

    useEffect(() => {
      setFormData((currentFormData) => ({
        ...currentFormData,
        inquiryType: validInquiryType,
        categoryId: queryCategory,
        productId: queryProduct,
        model: queryModel,
        message:
          queryResource && !currentFormData.message.trim()
            ? `다음 자료를 요청합니다.\n\n자료명: ${queryResource}`
            : currentFormData.message,
      }));
    }, [
      validInquiryType,
      queryCategory,
      queryProduct,
      queryModel,
      queryResource,
    ]);

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const availableProducts = useMemo(() => {
    if (!formData.categoryId) {
      return products;
    }

    return products.filter(
      (product) => product.categoryId === formData.categoryId,
    );
  }, [formData.categoryId]);

  const selectedInquiry = inquiryTypes.find(
    (type) => type.id === formData.inquiryType,
  );

  const updateField = (field, value) => {
    setFormData((current) => ({
      ...current,
      [field]: value,
      ...(field === "categoryId"
        ? {
            productId: "",
            model: "",
          }
        : {}),
    }));

    setErrors((current) => ({
      ...current,
      [field]: "",
    }));
  };

  const validateForm = () => {
    const nextErrors = {};

    if (!formData.inquiryType) {
      nextErrors.inquiryType = "문의 유형을 선택해 주세요.";
    }

    if (!formData.name.trim()) {
      nextErrors.name = "이름을 입력해 주세요.";
    }

    if (!formData.organization.trim()) {
      nextErrors.organization = "회사 또는 기관명을 입력해 주세요.";
    }

    if (!formData.email.trim()) {
      nextErrors.email = "이메일을 입력해 주세요.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      nextErrors.email = "이메일 형식을 확인해 주세요.";
    }

    if (!formData.phone.trim()) {
      nextErrors.phone = "연락처를 입력해 주세요.";
    }

    if (!formData.message.trim()) {
      nextErrors.message = "문의 내용을 입력해 주세요.";
    }

    if (!formData.privacyAgreed) {
      nextErrors.privacyAgreed =
        "개인정보 수집 및 이용에 동의해 주세요.";
    }

    return nextErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const nextErrors = validateForm();

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);

      const firstErrorField = Object.keys(nextErrors)[0];

      document
        .querySelector(`[name="${firstErrorField}"]`)
        ?.focus();

      return;
    }

    setErrors({});
    setSubmitted(true);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const resetForm = () => {
    setFormData({
      ...initialFormState,
      inquiryType: validInquiryType,
      categoryId: queryCategory,
      productId: queryProduct,
      model: queryModel,
      message: queryResource
        ? `다음 자료를 요청합니다.\n\n자료명: ${queryResource}`
        : "",
    });
  
    setErrors({});
    setSubmitted(false);
  };

  if (submitted) {
    return (
      <section className="contact-success">
        <div className="contact-success__inner page-container">
          <div className="contact-success__icon" aria-hidden="true">
            ✓
          </div>

          <p className="contact-success__eyebrow">
            Inquiry Preview
          </p>

          <h1>문의 내용이 작성되었습니다.</h1>

          <p>
            입력한 문의 내용을 확인할 수 있는 포트폴리오용 데모 화면입니다.
            실제 문의는 서버로 전송되지 않습니다.
          </p>

          <dl className="contact-success__summary">
            <div>
              <dt>문의 유형</dt>
              <dd>{selectedInquiry?.label}</dd>
            </div>

            <div>
              <dt>이름</dt>
              <dd>{formData.name}</dd>
            </div>

            <div>
              <dt>회사·기관명</dt>
              <dd>{formData.organization}</dd>
            </div>

            <div>
              <dt>이메일</dt>
              <dd>{formData.email}</dd>
            </div>
          </dl>

          <div className="contact-success__actions">
          <button
            type="button"
            className="button button--primary"
            onClick={resetForm}
          >
            문의 내용 다시 작성
          </button>

            <Link
              to="/products"
              className="button button--secondary"
            >
              제품 둘러보기
            </Link>
          </div>

          {queryResource && (
            <div>
              <dt>요청 자료</dt>
              <dd>{queryResource}</dd>
            </div>
          )}

          <p className="contact-success__notice">
            이 화면은 포트폴리오용 데모이며 실제 문의가 전송되지는
            않습니다.
          </p>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="contact-hero">
        <div className="page-container">

         <div className="page-hero__inner ">

          <div className="page-hero__content">
            <p className="page-hero__eyebrow">
              Product & Technical Inquiry
            </p>

            <h1>
              제품과 서비스에 대해
              <br />
              문의해 주세요.
            </h1>

            <p className="contact-hero__description">
              제품 선택, 견적, 설치, 기술 지원 및 구매 관련 문의를
              접수합니다. 사용 목적과 필요한 사양을 함께 작성해
              주시면 더 정확한 안내가 가능합니다.
            </p>
          </div>

          <div className="contact-hero__information">
            <div>
              <span>Response</span>
              <strong>Business Hours</strong>
              <p>평일 09:00–18:00</p>
            </div>

            <div>
              <span>Support</span>
              <strong>Product & Technical</strong>
              <p>제품, 설치, 운영 및 기술 문의</p>
            </div>

            <div>
              <span>Notice</span>
              <strong>Portfolio Demo</strong>
              <p>실제 문의는 전송되지 않습니다.</p>
            </div>
          </div>

         </div>

        </div>
      </section>

      <section className="contact-content">
        <div className="contact-layout page-container">
          <aside className="contact-sidebar">
            <div className="contact-sidebar__heading">
              <p>Inquiry Guide</p>
              <h2>문의 전 확인해 주세요.</h2>
            </div>

            <ol className="contact-guide-list">
              <li>
                <span>01</span>

                <div>
                  <strong>문의 유형 선택</strong>
                  <p>
                    제품, 견적, 기술 지원 등 문의 목적을 선택합니다.
                  </p>
                </div>
              </li>

              <li>
                <span>02</span>

                <div>
                  <strong>제품 정보 입력</strong>
                  <p>
                    알고 있는 제품명이나 모델명을 함께 작성합니다.
                  </p>
                </div>
              </li>

              <li>
                <span>03</span>

                <div>
                  <strong>사용 환경 작성</strong>
                  <p>
                    사용 목적과 필요한 사양, 설치 환경을 설명합니다.
                  </p>
                </div>
              </li>
            </ol>

            <div className="contact-sidebar__notice">
              <strong>빠른 안내를 위한 정보</strong>

              <ul>
                <li>사용 목적과 실험 분야</li>
                <li>필요한 크기와 성능</li>
                <li>설치 공간과 전원 조건</li>
                <li>필요 수량과 희망 일정</li>
              </ul>
            </div>

            <Link
              to="/resources"
              className="contact-sidebar__resource-link"
            >
              제품 자료 먼저 확인하기
              <span aria-hidden="true">→</span>
            </Link>
          </aside>

          <div className="contact-form-section">
            <div className="contact-form-section__header">
              <p>Inquiry Form</p>
              <h2>문의 내용을 입력해 주세요.</h2>

              <span>
                <strong>*</strong> 표시는 필수 입력 항목입니다.
              </span>
            </div>

            <form
              className="contact-form"
              noValidate
              onSubmit={handleSubmit}
            >
              <fieldset className="contact-inquiry-types">
                <legend>
                  문의 유형 <strong>*</strong>
                </legend>

                <div className="contact-inquiry-type-grid">
                  {inquiryTypes.map((type) => (
                    <label key={type.id}>
                      <input
                        type="radio"
                        name="inquiryType"
                        value={type.id}
                        checked={
                          formData.inquiryType === type.id
                        }
                        onChange={() =>
                          updateField("inquiryType", type.id)
                        }
                      />

                      <span>
                        <strong>{type.label}</strong>
                        <small>{type.description}</small>
                      </span>
                    </label>
                  ))}
                </div>

                {errors.inquiryType && (
                  <p className="form-error">
                    {errors.inquiryType}
                  </p>
                )}
              </fieldset>

              <div className="contact-form__section">
                <div className="contact-form__section-heading">
                  <span>01</span>

                  <div>
                    <h3>제품 정보</h3>
                    <p>관심 제품을 알고 있다면 선택해 주세요.</p>
                  </div>
                </div>

                <div className="contact-form-grid">
                  <label className="form-field">
                    <span>제품 카테고리</span>

                    <select
                      name="categoryId"
                      value={formData.categoryId}
                      onChange={(event) =>
                        updateField(
                          "categoryId",
                          event.target.value,
                        )
                      }
                    >
                      <option value="">
                        제품 카테고리 선택
                      </option>

                      {categories.map((category) => (
                        <option
                          key={category.id}
                          value={category.id}
                        >
                          {category.nameKo}
                        </option>
                      ))}
                    </select>
                  </label>

                  <label className="form-field">
                    <span>관심 제품</span>

                    <select
                      name="productId"
                      value={formData.productId}
                      onChange={(event) =>
                        updateField(
                          "productId",
                          event.target.value,
                        )
                      }
                    >
                      <option value="">
                        제품 선택
                      </option>

                      {availableProducts.map((product) => (
                        <option
                          key={product.id}
                          value={product.id}
                        >
                          {product.nameKo} / {product.nameEn}
                        </option>
                      ))}
                    </select>
                  </label>

                  <label className="form-field contact-form-grid__full">
                    <span>모델명</span>

                    <input
                      type="text"
                      name="model"
                      value={formData.model}
                      placeholder="모델명을 알고 있다면 입력해 주세요."
                      onChange={(event) =>
                        updateField("model", event.target.value)
                      }
                    />
                  </label>
                </div>
              </div>

              <div className="contact-form__section">
                <div className="contact-form__section-heading">
                  <span>02</span>

                  <div>
                    <h3>문의자 정보</h3>
                    <p>답변을 받을 연락처를 입력해 주세요.</p>
                  </div>
                </div>

                <div className="contact-form-grid">
                  <label className="form-field">
                    <span>
                      이름 <strong>*</strong>
                    </span>

                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      aria-invalid={Boolean(errors.name)}
                      placeholder="이름을 입력해 주세요."
                      onChange={(event) =>
                        updateField("name", event.target.value)
                      }
                    />

                    {errors.name && (
                      <small className="form-error">
                        {errors.name}
                      </small>
                    )}
                  </label>

                  <label className="form-field">
                    <span>
                      회사·기관명 <strong>*</strong>
                    </span>

                    <input
                      type="text"
                      name="organization"
                      value={formData.organization}
                      aria-invalid={Boolean(errors.organization)}
                      placeholder="회사 또는 기관명을 입력해 주세요."
                      onChange={(event) =>
                        updateField(
                          "organization",
                          event.target.value,
                        )
                      }
                    />

                    {errors.organization && (
                      <small className="form-error">
                        {errors.organization}
                      </small>
                    )}
                  </label>

                  <label className="form-field">
                    <span>
                      이메일 <strong>*</strong>
                    </span>

                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      aria-invalid={Boolean(errors.email)}
                      placeholder="example@company.com"
                      onChange={(event) =>
                        updateField("email", event.target.value)
                      }
                    />

                    {errors.email && (
                      <small className="form-error">
                        {errors.email}
                      </small>
                    )}
                  </label>

                  <label className="form-field">
                    <span>
                      연락처 <strong>*</strong>
                    </span>

                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      aria-invalid={Boolean(errors.phone)}
                      placeholder="010-0000-0000"
                      onChange={(event) =>
                        updateField("phone", event.target.value)
                      }
                    />

                    {errors.phone && (
                      <small className="form-error">
                        {errors.phone}
                      </small>
                    )}
                  </label>
                </div>
              </div>

              <div className="contact-form__section">
                <div className="contact-form__section-heading">
                  <span>03</span>

                  <div>
                    <h3>문의 내용</h3>
                    <p>
                      사용 목적과 필요한 조건을 자세히 작성해
                      주세요.
                    </p>
                  </div>
                </div>

                <label className="form-field">
                  <span>
                    문의 내용 <strong>*</strong>
                  </span>

                  <textarea
                    name="message"
                    value={formData.message}
                    aria-invalid={Boolean(errors.message)}
                    rows="8"
                    maxLength={1000}
                    placeholder="사용 목적, 필요한 사양, 수량, 설치 환경 및 희망 일정을 함께 작성해 주세요."
                    onChange={(event) =>
                      updateField("message", event.target.value)
                    }
                  />

                  <span className="form-field__counter">
                    {formData.message.length} / 1,000
                  </span>

                  {errors.message && (
                    <small className="form-error">
                      {errors.message}
                    </small>
                  )}
                </label>

                <label className="privacy-agreement">
                  <input
                    type="checkbox"
                    name="privacyAgreed"
                    checked={formData.privacyAgreed}
                    onChange={(event) =>
                      updateField(
                        "privacyAgreed",
                        event.target.checked,
                      )
                    }
                  />

                  <span>
                    <strong>
                      개인정보 수집 및 이용에 동의합니다.
                    </strong>

                    <small>
                      문의 접수와 답변을 위해 이름, 회사명,
                      이메일 및 연락처를 수집합니다.
                    </small>
                  </span>
                </label>

                {errors.privacyAgreed && (
                  <p className="form-error">
                    {errors.privacyAgreed}
                  </p>
                )}
              </div>

              <div className="contact-form__actions">
                <button
                  type="submit"
                  className="button button--primary"
                >
                  문의 접수
                </button>

                <button
                  type="button"
                  className="button button--secondary"
                  onClick={resetForm}
                >
                  입력 초기화
                </button>
              </div>

              <p className="contact-form__demo-notice">
                포트폴리오용 데모 폼으로 실제 서버에는 전송되지
                않습니다.
              </p>
            </form>
          </div>
        </div>
      </section>

      <section className="contact-channels">
        <div className="page-container">
          <div className="section-heading">
            <div>
              <p className="section-heading__eyebrow">
                Contact Channels
              </p>

              <h2>문의 유형별 안내</h2>

              <p className="section-heading__description">
                문의 목적에 맞는 내용을 선택하면 더 빠르게
                안내받을 수 있습니다.
              </p>
            </div>
          </div>

          <div className="contact-channel-grid">
            <article>
              <span>01</span>
              <p>Product & Quotation</p>
              <h3>제품·견적 문의</h3>
              <strong>제품 선택, 사양 검토 및 견적 요청</strong>
            </article>

            <article>
              <span>02</span>
              <p>Technical Support</p>
              <h3>기술 지원</h3>
              <strong>제품 사용, 오류 확인 및 유지관리</strong>
            </article>

            <article>
              <span>03</span>
              <p>Installation & Training</p>
              <h3>설치·교육 문의</h3>
              <strong>설치 조건, 초기 운전 및 사용자 교육</strong>
            </article>

            <article>
              <span>04</span>
              <p>Procurement & Rental</p>
              <h3>조달·렌탈 문의</h3>
              <strong>일괄 구매, 입찰 및 장비 렌탈</strong>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactPage;