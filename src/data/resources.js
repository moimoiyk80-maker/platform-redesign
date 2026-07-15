const resources = [
    {
      id: "bsc-series-brochure",
      title: "SLI BSC Series Brochure",
      titleKo: "SLI BSC 시리즈 브로셔",
      type: "product-brochure",
      typeLabel: "제품 브로셔",
      relatedProductId: "biological-safety-cabinet",
      relatedCategoryId: "clean-safety-equipment",
      description:
        "SLI BSC Series의 모델별 특징과 주요 사양을 확인할 수 있습니다.",
      fileType: "PDF",
      fileSize: "4.2 MB",
      actionLabel: "브로셔 다운로드",
      featured: true,
      publishedAt: "2026-06-18",
      filePath: "/downloads/sli-bsc-series-brochure.pdf",
    },
  
    {
      id: "bsc-selection-guide",
      title: "Biological Safety Cabinet Selection Guide",
      titleKo: "생물안전작업대 선택 가이드",
      type: "selection-guide",
      typeLabel: "제품 선택 가이드",
      relatedProductId: "biological-safety-cabinet",
      relatedCategoryId: "clean-safety-equipment",
      description:
        "작업 목적, 안전 등급 및 설치 환경에 따른 생물안전작업대 선택 기준을 안내합니다.",
      fileType: "PDF",
      fileSize: "2.8 MB",
      actionLabel: "선택 가이드 보기",
      featured: true,
      publishedAt: "2026-06-10",
      filePath: "/downloads/bsc-selection-guide.pdf",
    },
  
    {
      id: "laboratory-freezer-specification",
      title: "Laboratory Freezer Technical Specification",
      titleKo: "실험실 냉동고 기술 사양서",
      type: "technical-specification",
      typeLabel: "기술 사양서",
      relatedProductId: "laboratory-freezer",
      relatedCategoryId: "laboratory-equipment",
      description:
        "온도 범위, 용량 및 설치 조건을 포함한 상세 사양을 제공합니다.",
      fileType: "PDF",
      fileSize: "1.6 MB",
      actionLabel: "사양서 다운로드",
      featured: true,
      publishedAt: "2026-05-28",
      filePath: "/downloads/laboratory-freezer-specification.pdf",
    },
  
    {
      id: "hotplate-stirrer-manual",
      title: "Hotplate Stirrer User Manual",
      titleKo: "핫플레이트 스터러 사용설명서",
      type: "user-manual",
      typeLabel: "사용설명서",
      relatedProductId: "hotplate-stirrer",
      relatedCategoryId: "laboratory-equipment",
      description:
        "제품 설치, 온도·속도 설정 및 안전 사용 방법을 안내합니다.",
      fileType: "PDF",
      fileSize: "3.4 MB",
      actionLabel: "사용설명서 다운로드",
      featured: true,
      publishedAt: "2026-05-20",
      filePath: "/downloads/hotplate-stirrer-manual.pdf",
    },
  
    {
      id: "analytical-balance-calibration-guide",
      title: "Analytical Balance Calibration Guide",
      titleKo: "분석용 전자저울 교정 가이드",
      type: "application-note",
      typeLabel: "응용 자료",
      relatedProductId: "analytical-balance",
      relatedCategoryId: "analytical-instruments",
      description:
        "정밀 계량 환경에서 반복성과 정확도를 유지하기 위한 교정 방법을 안내합니다.",
      fileType: "PDF",
      fileSize: "2.1 MB",
      actionLabel: "응용 자료 보기",
      featured: true,
      publishedAt: "2026-05-14",
      filePath: "/downloads/analytical-balance-calibration-guide.pdf",
    },
  
    {
      id: "laboratory-safety-equipment-guide",
      title: "Laboratory Safety Equipment Guide",
      titleKo: "실험실 안전장비 가이드",
      type: "selection-guide",
      typeLabel: "제품 선택 가이드",
      relatedProductId: null,
      relatedCategoryId: "clean-safety-equipment",
      description:
        "실험 환경과 취급 물질에 따른 안전장비 구성 기준을 제공합니다.",
      fileType: "PDF",
      fileSize: "3.6 MB",
      actionLabel: "가이드 보기",
      featured: true,
      publishedAt: "2026-04-30",
      filePath: "/downloads/laboratory-safety-equipment-guide.pdf",
    },
  
    {
      id: "clean-bench-specification",
      title: "Clean Bench Technical Specification",
      titleKo: "클린벤치 기술 사양서",
      type: "technical-specification",
      typeLabel: "기술 사양서",
      relatedProductId: "clean-bench",
      relatedCategoryId: "clean-safety-equipment",
      description:
        "클린벤치의 기류 방식, 필터 등급 및 설치 규격을 제공합니다.",
      fileType: "PDF",
      fileSize: "1.5 MB",
      actionLabel: "사양서 다운로드",
      featured: false,
      publishedAt: "2026-04-18",
      filePath: "/downloads/clean-bench-specification.pdf",
    },
  
    {
      id: "fume-hood-installation-guide",
      title: "Fume Hood Installation Guide",
      titleKo: "흄후드 설치 가이드",
      type: "user-manual",
      typeLabel: "사용설명서",
      relatedProductId: "fume-hood",
      relatedCategoryId: "clean-safety-equipment",
      description:
        "흄후드 설치 전 필요한 배기 조건과 공간 요구사항을 안내합니다.",
      fileType: "PDF",
      fileSize: "2.4 MB",
      actionLabel: "설치 가이드 다운로드",
      featured: false,
      publishedAt: "2026-04-09",
      filePath: "/downloads/fume-hood-installation-guide.pdf",
    },
  
    {
      id: "laboratory-equipment-catalog",
      title: "Laboratory Equipment Catalog",
      titleKo: "기초 실험장비 종합 카탈로그",
      type: "product-brochure",
      typeLabel: "제품 브로셔",
      relatedProductId: null,
      relatedCategoryId: "laboratory-equipment",
      description:
        "가열, 교반, 냉각, 배양 및 시료 처리 장비를 한눈에 확인할 수 있습니다.",
      fileType: "PDF",
      fileSize: "8.7 MB",
      actionLabel: "카탈로그 다운로드",
      featured: false,
      publishedAt: "2026-03-24",
      filePath: "/downloads/laboratory-equipment-catalog.pdf",
    },
  
    {
      id: "quality-certification-overview",
      title: "Quality Certification Overview",
      titleKo: "품질 및 인증 문서",
      type: "certificate",
      typeLabel: "인증 및 품질 문서",
      relatedProductId: null,
      relatedCategoryId: null,
      description:
        "제품 및 품질관리 체계와 관련된 주요 인증 정보를 제공합니다.",
      fileType: "PDF",
      fileSize: "1.2 MB",
      actionLabel: "인증 문서 보기",
      featured: false,
      publishedAt: "2026-03-10",
      filePath: "/downloads/quality-certification-overview.pdf",
    },
  ];
  
  export const resourceTypes = [
    {
      id: "all",
      label: "전체",
    },
    {
      id: "product-brochure",
      label: "제품 브로셔",
    },
    {
      id: "technical-specification",
      label: "기술 사양서",
    },
    {
      id: "user-manual",
      label: "사용설명서",
    },
    {
      id: "application-note",
      label: "응용 자료",
    },
    {
      id: "selection-guide",
      label: "제품 선택 가이드",
    },
    {
      id: "certificate",
      label: "인증 및 품질 문서",
    },
  ];
  
  export const resourceSortOptions = [
    {
      id: "latest",
      label: "최신순",
    },
    {
      id: "title",
      label: "제품명순",
    },
    {
      id: "type",
      label: "자료 유형순",
    },
  ];
  
  export const featuredResources = resources.filter(
    (resource) => resource.featured,
  );
  
  export const getResourceById = (id) =>
    resources.find((resource) => resource.id === id);
  
  export const getResourcesByType = (type) => {
    if (!type || type === "all") {
      return resources;
    }
  
    return resources.filter((resource) => resource.type === type);
  };
  
  export const getResourcesByCategory = (categoryId) => {
    if (!categoryId || categoryId === "all") {
      return resources;
    }
  
    return resources.filter(
      (resource) => resource.relatedCategoryId === categoryId,
    );
  };
  
  export const getResourcesByProduct = (productId) =>
    resources.filter(
      (resource) => resource.relatedProductId === productId,
    );
  
  export default resources;