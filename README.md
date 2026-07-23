# SLI Scientific

제품 탐색과 기술 검토, 자료 요청 및 문의 흐름을 통합한 B2B 연구장비 정보 플랫폼 리디자인 프로젝트입니다.

<img
  src="./readme/hero.png"  alt="SLI Scientific platform hero preview"  width="100%"
/>

## Live Demo

https://platform-redesign-five.vercel.app/

## Links

- [Project Brief](./project-brief.md)
- [Content & Asset Guide](./docs/content-assets.md)

## Project Overview

SLI Scientific은 실제 B2B 과학장비 업무 환경에서 반복적으로 관찰한 
정보구조와 UX 문제를 비식별화해 재구성한 제품 중심 플랫폼 리디자인 프로젝트입니다.

회사소개와 카탈로그형 콘텐츠가 우선되던 구조를 
제품 탐색, 기술 검토, 자료 확인과 문의 중심의 흐름으로 재설계하고
React로 구현했습니다.

회사 식별 정보, 실제 제품 데이터와 기존 시각 자산은 사용하지 않았습니다.

## Preview

### Home Page

<img src="./readme/home.png" alt="SLI Scientific home page" width="100%" />

### Product

<img src="./readme/product.png" alt="SLI Scientific product page" width="100%" />

### Product Detail

<img src="./readme/productdetail.png" alt="SLI Scientific productdetail page" width="100%" />

## Problem

- 방대한 제품군에 비해 탐색 구조가 불명확함
- 제품 상세 정보와 기술 자료가 분산됨
- 문의 과정이 제품 검토 흐름과 단절됨
- 모바일 환경에서 제품 탐색이 어려움

## Solution

- 카테고리 중심 제품 탐색 구조
- 검색과 필터를 적용한 제품 목록
- 데이터 기반 제품 상세 템플릿
- 갤러리와 모델 선택 기능
- 주요 사양 비교
- 자료 요청 및 문의 페이지 연결
- 반응형 인터페이스

## Representative Product Detail

생물안전작업대를 대표 상세 사례로 선정하여 다음 경험을 심화 구현했습니다.

- 제품 이미지 갤러리
- 모델별 옵션 선택
- 주요 기능 콘텐츠
- 적용 분야
- 기술 사양 비교
- 자료 및 견적 문의 연결

## UI Foundation

Frame Design System 프로젝트에서 정리한 토큰과 컴포넌트 설계 원칙을 바탕으로, 
B2B 과학장비 플랫폼의 정보 구조와 사용 맥락에 맞는 UI Foundation을 구성했습니다.

<img
  src="./readme/design-system.png"
  alt="SLI Scientific UI foundation and design system application"
  width="100%"
/>

- Deep Blue, Slate, Muted Cyan 기반의 시각 체계
- 제품 정보 계층을 고려한 타이포그래피와 간격 규칙
- 공통 버튼, 카드와 컨테이너 패턴
- Desktop, Tablet, Mobile 반응형 기준

## Additional Screens

### About

<img src="./readme/about.png" alt="SLI Scientific about page" width="100%" />

### Resources

<img src="./readme/resources.png" alt="SLI Scientific resources page" width="100%" />

### Responsive

<img src="./readme/responsive.png" alt="SLI Scientific responsive page" width="100%" />

## My Role

- 문제 정의 및 정보구조 설계
- UI/UX 설계
- 반응형 웹 디자인
- React 컴포넌트 구현
- 제품 데이터 구조 설계
- HTML/CSS 퍼블리싱
- 이미지 및 콘텐츠 에셋 관리

## Tech Stack

- React
- React Router
- Vite
- CSS
- Vercel

## Key Pages

| Page | Purpose |
|---|---|
| Home | 제품 탐색 진입점과 플랫폼 전체 구조 제공 |
| Products | 검색과 카테고리 기반 제품 탐색 |
| Category | 제품군과 하위 카테고리 이해 |
| Product Detail | 모델·기능·사양 검토 및 문의 연결 |
| Resources | 카탈로그와 기술 자료 탐색 |
| Contact | 제품 정보가 연결된 문의 흐름 |

## Project Structure

- 공통 Layout과 페이지 라우팅
- 제품·카테고리·자료 데이터 분리
- 재사용 가능한 ProductCard
- 공통 제품 상세 템플릿
- 문의 정보 전달 구조

## Documentation

- [Project Brief](./project-brief.md)
- [Content & Asset Guide](./docs/content-assets.md)

---


