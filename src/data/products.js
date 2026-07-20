import balance01 from "../assets/images/products/analytical-balance-01.jpg";
import balance02 from "../assets/images/products/analytical-balance-02.jpg";
import balance03 from "../assets/images/products/analytical-balance-03.jpg";
import balance04 from "../assets/images/products/analytical-balance-04.jpg";

import stirrer01 from "../assets/images/products/magnetic-stirrer-01.jpg";
import stirrer02 from "../assets/images/products/magnetic-stirrer-02.jpg";
import stirrer03 from "../assets/images/products/magnetic-stirrer-03.jpg";
import stirrer04 from "../assets/images/products/magnetic-stirrer-04.jpg";

import freezer01 from "../assets/images/products/ultra-low-freezer-01.jpg";
import freezer02 from "../assets/images/products/ultra-low-freezer-02.jpg";
import freezer03 from "../assets/images/products/ultra-low-freezer-03.jpg";
import freezer04 from "../assets/images/products/ultra-low-freezer-04.jpg";

import cabinet01 from "../assets/images/products/biological-safety-cabinet-01.jpg";
import cabinet02 from "../assets/images/products/biological-safety-cabinet-02.jpg";
import cabinet03 from "../assets/images/products/biological-safety-cabinet-03.jpg";
import cabinet04 from "../assets/images/products/biological-safety-cabinet-04.jpg";

import cleanbench01 from "../assets/images/products/clean-bench-01.jpg";
import cleanbench02 from "../assets/images/products/clean-bench-02.jpg";
import cleanbench03 from "../assets/images/products/clean-bench-03.jpg";
import cleanbench04 from "../assets/images/products/clean-bench-04.jpg";

import fumehood01 from "../assets/images/products/fume-hood-01.jpg";
import fumehood02 from "../assets/images/products/fume-hood-02.jpg";
import fumehood03 from "../assets/images/products/fume-hood-03.jpg";
import fumehood04 from "../assets/images/products/fume-hood-04.jpg";

const products = [
    {
      id: "biological-safety-cabinet",
      slug: "biological-safety-cabinet",
      categoryId: "clean-safety-equipment",
      subcategoryId: "biological-safety",
  
      nameEn: "Biological Safety Cabinet",
      nameKo: "생물안전작업대",
      model: "SLI BSC-1500",
  
      featured: true,
      status: "featured",
  
      shortDescription:
        "미생물 및 세포 배양 환경을 위한 Class II 안전 작업 시스템",
  
      description:
        "작업자, 시료 및 실험 환경을 보호하도록 설계된 Class II Type A2 생물안전작업대입니다.",
  
        image: cabinet01,
        imageAlt: "생물안전작업대 제품 이미지",
        
        gallery: [
          {
            id: "cabinet-main",
            src: cabinet01,
            alt: "생물안전작업대 정면 이미지",
          },
          {
            id: "cabinet-angle",
            src: cabinet02,
            alt: "생물안전작업대 측면 이미지",
          },
          {
            id: "cabinet-plate",
            src: cabinet03,
            alt: "생물안전작업대 상판 상세 이미지",
          },
          {
            id: "cabinet-control",
            src: cabinet04,
            alt: "생물안전작업대 조작부 상세 이미지",
          },
        ],
  
      cardSpecs: [
        {
          label: "Working Width",
          value: "1,500 mm",
        },
        {
          label: "HEPA Filter",
          value: "H14",
        },
        {
          label: "Noise Level",
          value: "≤ 60 dB(A)",
        },
      ],
  
      modelOptions: [
        {
          model: "SLI BSC-1200",
          workingWidth: "1,200 mm",
          exteriorWidth: "1,340 mm",
          power: "1.2 kW",
        },
        {
          model: "SLI BSC-1500",
          workingWidth: "1,500 mm",
          exteriorWidth: "1,640 mm",
          power: "1.5 kW",
        },
        {
          model: "SLI BSC-1800",
          workingWidth: "1,800 mm",
          exteriorWidth: "1,940 mm",
          power: "1.8 kW",
        },
      ],
  
      highlights: [
        "Class II Type A2 구조",
        "H14 HEPA 급기 및 배기 필터",
        "평균 유입 풍속 0.5 m/s",
        "저소음 운전 설계",
        "UV 살균 기능",
        "전면 유리 높이 조절",
        "실시간 풍속 상태 표시",
        "필터 및 시스템 이상 알람",
      ],
  
      features: [
        {
          id: "protection",
          titleEn: "Personnel, Product and Environmental Protection",
          titleKo: "작업자·시료·환경 보호",
          description:
            "수직 층류와 전면 유입 기류를 통해 작업자, 시료 및 실험 환경을 동시에 보호합니다.",
        },
        {
          id: "hepa-filtration",
          titleEn: "HEPA Filtration System",
          titleKo: "HEPA 필터 시스템",
          description:
            "H14 등급 HEPA 필터를 적용하여 0.3 μm 입자에 대해 99.995% 이상의 집진 효율을 제공합니다.",
        },
        {
          id: "airflow-control",
          titleEn: "Stable Airflow Control",
          titleKo: "안정적인 기류 제어",
          description:
            "실시간 풍속 모니터링과 제어 시스템으로 작업 공간의 안정적인 기류 상태를 유지합니다.",
        },
        {
          id: "ergonomic-work-area",
          titleEn: "Ergonomic Work Area",
          titleKo: "인체공학적 작업 공간",
          description:
            "작업자의 시야와 접근성을 고려한 전면 개방 구조와 넓은 작업 공간을 제공합니다.",
        },
        {
          id: "easy-maintenance",
          titleEn: "Easy Cleaning and Maintenance",
          titleKo: "간편한 세척과 유지관리",
          description:
            "스테인리스 작업대와 분리 가능한 구조를 적용하여 세척과 유지관리가 용이합니다.",
        },
        {
          id: "safety-monitoring",
          titleEn: "Integrated Safety Monitoring",
          titleKo: "통합 안전 모니터링",
          description:
            "풍속, 필터 상태, 전면 유리 위치 및 시스템 이상 상태를 화면과 알람으로 안내합니다.",
        },
      ],
  
      applications: [
        "세포 배양",
        "미생물 연구",
        "임상 검사",
        "병원 및 진단검사실",
        "제약 및 바이오 연구",
        "식품·환경 미생물 시험",
        "교육 및 연구기관",
      ],
  
      specifications: [
        {
          label: "Type",
          bsc1200: "Class II A2",
          bsc1500: "Class II A2",
          bsc1800: "Class II A2",
        },
        {
          label: "Working Width",
          bsc1200: "1,200 mm",
          bsc1500: "1,500 mm",
          bsc1800: "1,800 mm",
        },
        {
          label: "Inflow Velocity",
          bsc1200: "0.5 m/s",
          bsc1500: "0.5 m/s",
          bsc1800: "0.5 m/s",
        },
        {
          label: "Downflow Velocity",
          bsc1200: "0.33 m/s",
          bsc1500: "0.33 m/s",
          bsc1800: "0.33 m/s",
        },
        {
          label: "HEPA Filter",
          bsc1200: "H14",
          bsc1500: "H14",
          bsc1800: "H14",
        },
        {
          label: "Filtration Efficiency",
          bsc1200: "99.995% at 0.3 μm",
          bsc1500: "99.995% at 0.3 μm",
          bsc1800: "99.995% at 0.3 μm",
        },
        {
          label: "Noise Level",
          bsc1200: "≤ 60 dB(A)",
          bsc1500: "≤ 60 dB(A)",
          bsc1800: "≤ 62 dB(A)",
        },
        {
          label: "Lighting",
          bsc1200: "LED",
          bsc1500: "LED",
          bsc1800: "LED",
        },
        {
          label: "UV Lamp",
          bsc1200: "Included",
          bsc1500: "Included",
          bsc1800: "Included",
        },
        {
          label: "Work Surface",
          bsc1200: "Stainless Steel",
          bsc1500: "Stainless Steel",
          bsc1800: "Stainless Steel",
        },
        {
          label: "Display",
          bsc1200: "7-inch Touch Display",
          bsc1500: "7-inch Touch Display",
          bsc1800: "7-inch Touch Display",
        },
        {
          label: "Power Supply",
          bsc1200: "AC 220 V, 60 Hz",
          bsc1500: "AC 220 V, 60 Hz",
          bsc1800: "AC 220 V, 60 Hz",
        },
      ],
  
      downloads: [
        {
          id: "bsc-brochure",
          title: "SLI BSC Series Brochure",
          type: "제품 브로셔",
          fileType: "PDF",
          fileSize: "4.2 MB",
          actionLabel: "브로셔 다운로드",
        },
        {
          id: "bsc-specification",
          title: "SLI BSC Series Technical Specification",
          type: "기술 사양서",
          fileType: "PDF",
          fileSize: "1.8 MB",
          actionLabel: "사양서 다운로드",
        },
        {
          id: "bsc-manual",
          title: "SLI BSC Series User Manual",
          type: "사용설명서",
          fileType: "PDF",
          fileSize: "6.4 MB",
          actionLabel: "사용설명서 다운로드",
        },
        {
          id: "bsc-installation-guide",
          title: "SLI BSC Installation Guide",
          type: "설치 가이드",
          fileType: "PDF",
          fileSize: "2.1 MB",
          actionLabel: "설치 가이드 다운로드",
        },
      ],
  
      relatedProductIds: [
        "clean-bench",
        "fume-hood",
        "laboratory-freezer",
      ],
  
      keywords: [
        "생물안전작업대",
        "BSC",
        "biological safety cabinet",
        "Class II",
        "Type A2",
        "세포 배양",
        "미생물 연구",
      ],
    },
  
    {
      id: "laboratory-freezer",
      slug: "laboratory-freezer",
      categoryId: "laboratory-equipment",
      subcategoryId: "cooling-storage",
  
      nameEn: "Laboratory Freezer",
      nameKo: "실험실 냉동고",
      model: "SLI LF-500",
  
      featured: true,
      status: "featured",
  
      shortDescription:
        "연구 시료의 안정적인 저온 보관을 위한 실험실 전용 냉동고",
  
      description:
        "정밀한 온도 제어와 알람 기능으로 연구 및 품질관리 환경의 시료 보관을 지원합니다.",
  
        image: freezer01,
        imageAlt: "실험실 냉동고 제품 이미지",
        
        gallery: [
          {
            id: "freezer-main",
            src: freezer01,
            alt: "실험실 냉동고 정면 이미지",
          },
          {
            id: "freezer-angle",
            src: freezer02,
            alt: "실험실 냉동고 측면 이미지",
          },
          {
            id: "freezer-plate",
            src: freezer03,
            alt: "실험실 냉동고 상판 상세 이미지",
          },
          {
            id: "freezer-control",
            src: freezer04,
            alt: "실험실 냉동고 조작부 상세 이미지",
          },
        ],
  
      cardSpecs: [
        {
          label: "Temperature",
          value: "-25°C to -10°C",
        },
        {
          label: "Capacity",
          value: "500 L",
        },
        {
          label: "Stability",
          value: "±1.0°C",
        },
      ],
  
      keywords: [
        "실험실 냉동고",
        "laboratory freezer",
        "lab freezer",
        "저온 보관",
        "시료 보관",
        "-20도 냉동고",
      ],
    },
  
    {
      id: "hotplate-stirrer",
      slug: "hotplate-stirrer",
      categoryId: "laboratory-equipment",
      subcategoryId: "heating-mixing",
  
      nameEn: "Hotplate Stirrer",
      nameKo: "핫플레이트 스터러",
      model: "SLI HPS-400",
  
      featured: true,
      status: "featured",
  
      shortDescription:
        "가열과 교반을 동시에 지원하는 정밀 실험실 장비",
  
      description:
        "정밀한 온도와 속도 제어를 통해 반복적인 혼합과 가열 작업을 안정적으로 수행합니다.",
  
        image: stirrer01,
        imageAlt: "마그네틱 스터러 제품 이미지",
        
        gallery: [
          {
            id: "stirrer-main",
            src: stirrer01,
            alt: "마그네틱 스터러 정면 이미지",
          },
          {
            id: "stirrer-angle",
            src: stirrer02,
            alt: "마그네틱 스터러 측면 이미지",
          },
          {
            id: "stirrer-plate",
            src: stirrer03,
            alt: "마그네틱 스터러 상판 상세 이미지",
          },
          {
            id: "stirrer-control",
            src: stirrer04,
            alt: "마그네틱 스터러 조작부 상세 이미지",
          },
        ],
  
      cardSpecs: [
        {
          label: "Temperature",
          value: "Up to 350°C",
        },
        {
          label: "Speed",
          value: "100–1,500 rpm",
        },
        {
          label: "Plate",
          value: "180 × 180 mm",
        },
      ],
  
      keywords: [
        "핫플레이트 스터러",
        "hotplate stirrer",
        "magnetic stirrer",
        "교반기",
        "가열 교반기",
      ],
    },
  
    {
      id: "analytical-balance",
      slug: "analytical-balance",
      categoryId: "analytical-instruments",
      subcategoryId: "weighing",
  
      nameEn: "Analytical Balance",
      nameKo: "분석용 전자저울",
      model: "SLI AB-220",
  
      featured: true,
      status: "featured",
  
      shortDescription:
        "연구 및 품질관리 환경을 위한 고해상도 정밀 계량 장비",
  
      description:
        "연구개발, 품질관리 및 시험 분석 환경에서 안정적인 정밀 계량을 지원합니다.",
  
        image: balance01,
        imageAlt: "전자분석저울 정면 제품 이미지",
      
        gallery: [
          {
            id: "balance-main",
            src: balance01,
            alt: "전자분석저울 정면 이미지",
          },
          {
            id: "balance-angle",
            src: balance02,
            alt: "전자분석저울 측면 이미지",
          },
          {
            id: "balance-detail",
            src: balance03,
            alt: "전자분석저울 계량부 상세 이미지",
          },
          {
            id: "balance-control",
            src: balance04,
            alt: "전자분석저울 조작 패널 상세 이미지",
          },
        ],
  
      cardSpecs: [
        {
          label: "Capacity",
          value: "220 g",
        },
        {
          label: "Readability",
          value: "0.1 mg",
        },
        {
          label: "Repeatability",
          value: "≤ 0.1 mg",
        },
      ],
  
      keywords: [
        "분석용 전자저울",
        "analytical balance",
        "정밀 저울",
        "전자저울",
        "0.1mg",
        "계량 장비",
      ],
    },
  
    {
      id: "clean-bench",
      slug: "clean-bench",
      categoryId: "clean-safety-equipment",
      subcategoryId: "clean-air",
  
      nameEn: "Clean Bench",
      nameKo: "클린벤치",
      model: "SLI CB-1200",
  
      featured: false,
      status: "related",
  
      shortDescription:
        "시료 보호가 필요한 일반 실험 환경을 위한 층류 작업대",
  
      description:
        "청정 공기를 일정하게 공급하여 시료와 작업 공간의 오염을 줄이는 실험실용 클린벤치입니다.",
  
        image: cleanbench01,
        imageAlt: "클린벤치 제품 이미지",
        
        gallery: [
          {
            id: "cleanbench-main",
            src: cleanbench01,
            alt: "클린벤치 정면 이미지",
          },
          {
            id: "cleanbench-angle",
            src: cleanbench02,
            alt: "클린벤치 측면 이미지",
          },
          {
            id: "cleanbench-plate",
            src: cleanbench03,
            alt: "클린벤치 상세 이미지",
          },
          {
            id: "cleanbench-control",
            src: cleanbench04,
            alt: "클린벤치 상세 이미지",
          },
        ],
  
      cardSpecs: [
        {
          label: "Working Width",
          value: "1,200 mm",
        },
        {
          label: "HEPA Filter",
          value: "H14",
        },
        {
          label: "Airflow",
          value: "Vertical",
        },
      ],
    },
  
    {
      id: "fume-hood",
      slug: "fume-hood",
      categoryId: "clean-safety-equipment",
      subcategoryId: "ventilation",
  
      nameEn: "Fume Hood",
      nameKo: "흄후드",
      model: "SLI FH-1500",
  
      featured: false,
      status: "related",
  
      shortDescription:
        "유해 가스와 증기를 안전하게 배출하는 실험실 국소 배기 장비",
  
      description:
        "화학 실험 과정에서 발생하는 유해 가스와 증기를 외부로 배출하여 작업자의 안전을 지원합니다.",
  
        image: fumehood01,
        imageAlt: "흄후드 제품 이미지",
        
        gallery: [
          {
            id: "fumehood-main",
            src: fumehood01,
            alt: "흄후드 정면 이미지",
          },
          {
            id: "fumehood-angle",
            src: fumehood02,
            alt: "흄후드 측면 이미지",
          },
          {
            id: "fumehood-plate",
            src: fumehood03,
            alt: "흄후드 상세 이미지",
          },
          {
            id: "fumehood-control",
            src: fumehood04,
            alt: "흄후드 상세 이미지",
          },
        ],
  
      cardSpecs: [
        {
          label: "Working Width",
          value: "1,500 mm",
        },
        {
          label: "Face Velocity",
          value: "0.5 m/s",
        },
        {
          label: "Control",
          value: "Digital",
        },
      ],
    },
  ];
  
  export const featuredProducts = products.filter(
    (product) => product.featured,
  );
  
  export const getProductBySlug = (slug) =>
    products.find((product) => product.slug === slug);
  
  export const getProductsByCategory = (categoryId) =>
    products.filter((product) => product.categoryId === categoryId);
  
  export const getRelatedProducts = (product) => {
    if (!product?.relatedProductIds) {
      return [];
    }
  
    return product.relatedProductIds
      .map((id) => products.find((item) => item.id === id))
      .filter(Boolean);
  };
  
  export default products;