const supportServices = [
    {
      id: "laboratory-planning",
      nameKo: "실험실 구축 지원",
      nameEn: "Laboratory Planning",
      shortDescription:
        "공간 구성과 장비 배치를 고려한 실험실 구축 계획을 지원합니다.",
      description:
        "실험 목적, 작업 동선, 장비 규격과 설치 조건을 검토하여 효율적인 실험실 환경을 구성할 수 있도록 지원합니다.",
      supportScope: [
        "장비 배치 검토",
        "작업 동선 검토",
        "전기·급배기 조건 확인",
        "설치 환경 검토",
      ],
      actionLabel: "구축 상담",
      inquiryType: "laboratory-planning",
      featured: true,
    },
  
    {
      id: "procurement-support",
      nameKo: "구매·조달 지원",
      nameEn: "Procurement Support",
      shortDescription:
        "다양한 제품과 브랜드를 기반으로 구매와 조달 업무를 지원합니다.",
      description:
        "연구기관과 기업의 요구 사양을 검토하고 제품 제안, 견적, 입찰과 일괄 구매에 필요한 정보를 제공합니다.",
      supportScope: [
        "제품 사양 검토",
        "대체 제품 제안",
        "입찰 및 견적 지원",
        "일괄 구매 구성",
      ],
      actionLabel: "조달 문의",
      inquiryType: "procurement",
      featured: true,
    },
  
    {
      id: "rental-service",
      nameKo: "장비 렌탈",
      nameEn: "Rental Service",
      shortDescription:
        "단기 프로젝트와 제한된 예산을 위한 연구장비 렌탈을 지원합니다.",
      description:
        "장비를 일시적으로 사용해야 하는 프로젝트를 위해 기간과 운영 조건에 맞는 렌탈 방식을 안내합니다.",
      supportScope: [
        "단기·장기 렌탈",
        "설치 및 회수",
        "기본 사용 안내",
        "유지관리 지원",
      ],
      actionLabel: "렌탈 문의",
      inquiryType: "rental",
      featured: true,
    },
  
    {
      id: "calibration-support",
      nameKo: "교정·검교정 지원",
      nameEn: "Calibration Support",
      shortDescription:
        "정확한 측정과 품질관리를 위한 교정 절차를 지원합니다.",
      description:
        "측정 장비의 정확도와 신뢰성을 유지할 수 있도록 교정 일정, 외부 기관 연계와 성적서 관리 정보를 안내합니다.",
      supportScope: [
        "교정 일정 안내",
        "외부 교정기관 연계",
        "성적서 관리 안내",
        "정기 교정 상담",
      ],
      actionLabel: "교정 문의",
      inquiryType: "calibration",
      featured: false,
    },
  
    {
      id: "installation-training",
      nameKo: "설치 및 사용자 교육",
      nameEn: "Installation and Training",
      shortDescription:
        "제품 설치와 초기 운전에 필요한 사용 교육을 제공합니다.",
      description:
        "제품의 설치 조건을 확인하고 기본 운전, 안전 사용과 초기 유지관리에 필요한 내용을 안내합니다.",
      supportScope: [
        "설치 조건 확인",
        "제품 설치",
        "기본 운전 교육",
        "안전 사용 안내",
      ],
      actionLabel: "설치 문의",
      inquiryType: "installation-training",
      featured: true,
    },
  
    {
      id: "technical-support",
      nameKo: "기술 지원",
      nameEn: "Technical Support",
      shortDescription:
        "제품 사용과 유지관리에 필요한 기술 정보를 제공합니다.",
      description:
        "제품 사용 중 발생하는 문제와 오류 증상을 확인하고 소모품, 부품과 유지관리 방법을 안내합니다.",
      supportScope: [
        "제품 사용 문의",
        "오류 증상 확인",
        "소모품 및 부품 안내",
        "유지관리 상담",
      ],
      actionLabel: "기술 문의",
      inquiryType: "technical-support",
      featured: true,
    },
  ];
  
  export const featuredSupportServices = supportServices.filter(
    (service) => service.featured,
  );
  
  export const getSupportServiceById = (id) =>
    supportServices.find((service) => service.id === id);
  
  export default supportServices;