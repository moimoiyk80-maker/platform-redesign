import { Link } from "react-router-dom";

import companyProfile, {
  companyCta,
} from "../data/company";

import "./AboutPage.css";

function AboutPage() {
  return (
    <>
      <section className="about-hero">
        <div className="about-hero__inner page-container">
          <div className="about-hero__content">
            <p className="about-hero__eyebrow">
              {companyProfile.hero.eyebrow}
            </p>

            <h1>{companyProfile.hero.title}</h1>

            <p className="about-hero__description">
              {companyProfile.hero.description}
            </p>

            <div className="about-hero__actions">
              <Link
                to={companyProfile.hero.primaryAction.href}
                className="button button--primary"
              >
                {companyProfile.hero.primaryAction.label}
              </Link>

              <Link
                to={companyProfile.hero.secondaryAction.href}
                className="button button--secondary"
              >
                {companyProfile.hero.secondaryAction.label}
              </Link>
            </div>
          </div>

          <div className="about-hero__visual">
            <span>Scientific Instruments & Laboratory Supplies</span>

            <strong>Company Visual</strong>

            <div className="about-hero__visual-card">
              <small>Business Scope</small>

              <p>
                제품 개발·제조
                <br />
                국내외 유통
                <br />
                기술 및 운영 지원
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-overview">
        <div className="about-overview__inner page-container">
          <div className="about-overview__heading">
            <p className="section-heading__eyebrow">
              Company Overview
            </p>

            <h2>{companyProfile.overview.title}</h2>
          </div>

          <div className="about-overview__content">
            {companyProfile.overview.paragraphs.map(
              (paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ),
            )}

            <dl className="about-overview__summary">
              <div>
                <dt>Business Type</dt>
                <dd>{companyProfile.businessType}</dd>
              </div>

              <div>
                <dt>Product Scope</dt>
                <dd>Equipment, Labware & Consumables</dd>
              </div>

              <div>
                <dt>Service Area</dt>
                <dd>{companyProfile.serviceArea}</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section className="about-business">
        <div className="page-container">
          <div className="section-heading">
            <div>
              <p className="section-heading__eyebrow">
                Business Areas
              </p>

              <h2>사업 영역</h2>

              <p className="section-heading__description">
                제품 개발과 공급부터 실험실 운영 지원까지
                연구환경에 필요한 업무를 연결합니다.
              </p>
            </div>
          </div>

          <div className="about-business-grid">
            {companyProfile.businessAreas.map(
              (business, index) => (
                <article
                  key={business.id}
                  className="about-business-card"
                >
                  <div className="about-business-card__top">
                    <span>
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span aria-hidden="true">↗</span>
                  </div>

                  <div>
                    <p>{business.nameEn}</p>

                    <h3>{business.nameKo}</h3>

                    <span>{business.description}</span>
                  </div>
                </article>
              ),
            )}
          </div>
        </div>
      </section>

      <section className="about-capabilities">
        <div className="page-container">
          <div className="about-capabilities__header">
            <div>
              <p className="section-heading__eyebrow">
                Key Capabilities
              </p>

              <h2>SLI Scientific의 운영 역량</h2>
            </div>

            <p>
              다양한 제품과 기술정보를 안정적으로 제공하기
              위한 운영 기반을 구성했습니다.
            </p>
          </div>

          <div className="about-capability-list">
            {companyProfile.capabilities.map(
              (capability, index) => (
                <article
                  key={capability.id}
                  className="about-capability-item"
                >
                  <span className="about-capability-item__number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div>
                    <p>{capability.titleEn}</p>
                    <h3>{capability.titleKo}</h3>
                  </div>

                  <span className="about-capability-item__description">
                    {capability.description}
                  </span>
                </article>
              ),
            )}
          </div>
        </div>
      </section>

      <section
        className="about-process"
        id="support"
      >
        <div className="page-container">
          <div className="section-heading">
            <div>
              <p className="section-heading__eyebrow">
                Operating Process
              </p>

              <h2>제품 공급과 운영 지원 과정</h2>

              <p className="section-heading__description">
                요구사항 확인부터 제품 선정, 배송과 설치,
                사용자 지원까지 하나의 흐름으로 연결합니다.
              </p>
            </div>
          </div>

          <ol className="about-process-list">
            {companyProfile.process.map((process) => (
              <li key={process.id}>
                <span>{process.step}</span>

                <div>
                  <p>{process.titleEn}</p>

                  <h3>{process.titleKo}</h3>

                  <span>{process.description}</span>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="about-information">
        <div className="about-information__inner page-container">
          <div className="about-information__visual">
            <span>Company & Logistics</span>
            <strong>Facility Image</strong>
          </div>

          <div className="about-information__content">
            <p className="section-heading__eyebrow">
              Company Information
            </p>

            <h2>연구환경을 위한 제품과 서비스를 제공합니다.</h2>

            <div className="about-information__groups">
              <div>
                <h3>주요 사업</h3>

                <ul>
                  {companyProfile.mainBusiness.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3>주요 고객</h3>

                <ul>
                  {companyProfile.customers.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <dl className="about-information__meta">
              <div>
                <dt>Company Name</dt>
                <dd>{companyProfile.name}</dd>
              </div>

              <div>
                <dt>Business Type</dt>
                <dd>{companyProfile.businessType}</dd>
              </div>

              <div>
                <dt>Service Area</dt>
                <dd>{companyProfile.serviceArea}</dd>
              </div>
            </dl>

            <p className="about-information__notice">
              {companyProfile.portfolioNotice}
            </p>
          </div>
        </div>
      </section>

      <section className="about-cta">
        <div className="about-cta__inner page-container">
          <div>
            <p>Product & Business Inquiry</p>

            <h2>{companyCta.title}</h2>

            <span>{companyCta.description}</span>
          </div>

          <div className="about-cta__actions">
            <Link
              to={companyCta.primaryAction.href}
              className="button button--light"
            >
              {companyCta.primaryAction.label}
            </Link>

            <Link
              to={companyCta.secondaryAction.href}
              className="button button--ghost-light"
            >
              {companyCta.secondaryAction.label}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutPage;