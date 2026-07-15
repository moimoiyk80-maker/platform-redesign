const categories = [
    {
      id: "laboratory-equipment",
      slug: "laboratory-equipment",
      nameKo: "기초 실험장비",
      nameEn: "Laboratory Equipment",
      productCount: 684,
      shortDescription:
        "가열, 교반, 배양, 냉각 및 시료 처리를 위한 실험실 기본 장비",
      description:
        "실험 과정에서 반복적으로 사용되는 가열, 교반, 배양, 냉각 및 시료 처리 장비를 제공합니다. 연구실의 기본 작업부터 정밀한 조건 제어가 필요한 실험까지 폭넓게 활용할 수 있습니다.",
      subcategories: [
        {
          id: "heating-mixing",
          nameKo: "가열·교반",
          nameEn: "Heating & Mixing",
        },
        {
          id: "incubation",
          nameKo: "배양",
          nameEn: "Incubation",
        },
        {
          id: "cooling-storage",
          nameKo: "냉각·보관",
          nameEn: "Cooling & Storage",
        },
        {
          id: "sample-preparation",
          nameKo: "시료 전처리",
          nameEn: "Sample Preparation",
        },
        {
          id: "centrifugation",
          nameKo: "원심분리",
          nameEn: "Centrifugation",
        },
      ],
      representativeProducts: [
        "Hotplate Stirrer",
        "Laboratory Freezer",
        "Incubator",
        "Centrifuge",
        "Drying Oven",
        "Homogenizer",
      ],
      keywords: [
        "기초 실험장비",
        "핫플레이트",
        "교반기",
        "배양기",
        "냉동고",
        "원심분리기",
        "오븐",
        "laboratory equipment",
        "hotplate stirrer",
        "incubator",
        "freezer",
        "centrifuge",
      ],
    },
  
    {
      id: "analytical-instruments",
      slug: "analytical-instruments",
      nameKo: "분석·측정장비",
      nameEn: "Analytical & Measuring Instruments",
      productCount: 527,
      shortDescription:
        "시료의 물리적·화학적 특성을 분석하고 정밀하게 측정하는 장비",
      description:
        "시료의 질량, 산도, 전도도, 점도 및 광학적 특성을 분석하는 장비를 제공합니다. 연구개발과 품질관리 환경에서 정확하고 반복 가능한 측정을 지원합니다.",
      subcategories: [
        {
          id: "weighing",
          nameKo: "정밀 계량",
          nameEn: "Weighing",
        },
        {
          id: "electrochemical-measurement",
          nameKo: "전기화학 측정",
          nameEn: "Electrochemical Measurement",
        },
        {
          id: "spectroscopy",
          nameKo: "분광 분석",
          nameEn: "Spectroscopy",
        },
        {
          id: "physical-properties",
          nameKo: "물성 측정",
          nameEn: "Physical Property Measurement",
        },
        {
          id: "environmental-measurement",
          nameKo: "환경 측정",
          nameEn: "Environmental Measurement",
        },
      ],
      representativeProducts: [
        "Analytical Balance",
        "pH Meter",
        "Conductivity Meter",
        "Spectrophotometer",
        "Viscometer",
        "Moisture Analyzer",
      ],
      keywords: [
        "분석장비",
        "측정장비",
        "전자저울",
        "pH 미터",
        "전도도계",
        "분광광도계",
        "점도계",
        "analytical instruments",
        "analytical balance",
        "pH meter",
        "spectrophotometer",
      ],
    },
  
    {
      id: "clean-safety-equipment",
      slug: "clean-safety-equipment",
      nameKo: "클린·안전장비",
      nameEn: "Clean & Safety Equipment",
      productCount: 236,
      shortDescription:
        "작업자, 시료 및 실험 환경을 보호하는 클린·안전 시스템",
      description:
        "오염과 유해물질로부터 작업자, 시료 및 실험 환경을 보호하는 장비를 제공합니다. 실험 목적과 취급 물질에 따라 필요한 청정도와 안전 조건을 검토할 수 있습니다.",
      subcategories: [
        {
          id: "biological-safety",
          nameKo: "생물안전",
          nameEn: "Biological Safety",
        },
        {
          id: "clean-air",
          nameKo: "청정 작업",
          nameEn: "Clean Air",
        },
        {
          id: "ventilation",
          nameKo: "국소 배기",
          nameEn: "Ventilation",
        },
        {
          id: "chemical-storage",
          nameKo: "화학물질 보관",
          nameEn: "Chemical Storage",
        },
        {
          id: "personal-safety",
          nameKo: "개인 안전",
          nameEn: "Personal Safety",
        },
      ],
      representativeProducts: [
        "Biological Safety Cabinet",
        "Clean Bench",
        "Fume Hood",
        "Chemical Safety Cabinet",
        "Laminar Flow Cabinet",
        "Emergency Shower",
      ],
      keywords: [
        "클린장비",
        "안전장비",
        "생물안전작업대",
        "클린벤치",
        "흄후드",
        "시약장",
        "biological safety cabinet",
        "clean bench",
        "fume hood",
        "safety equipment",
      ],
    },
  
    {
      id: "labware",
      slug: "labware",
      nameKo: "실험기구",
      nameEn: "Labware",
      productCount: 1248,
      shortDescription:
        "시료 준비, 측정, 보관에 사용되는 유리·플라스틱 실험기구",
      description:
        "시료의 준비, 혼합, 측정 및 보관에 필요한 유리와 플라스틱 실험기구를 제공합니다. 용도와 재질, 용량에 따라 적합한 제품을 탐색할 수 있습니다.",
      subcategories: [
        {
          id: "glassware",
          nameKo: "유리기구",
          nameEn: "Glassware",
        },
        {
          id: "plasticware",
          nameKo: "플라스틱 기구",
          nameEn: "Plasticware",
        },
        {
          id: "liquid-handling",
          nameKo: "액체 취급",
          nameEn: "Liquid Handling",
        },
        {
          id: "sample-containers",
          nameKo: "시료 용기",
          nameEn: "Sample Containers",
        },
        {
          id: "measuring-tools",
          nameKo: "측정 기구",
          nameEn: "Measuring Tools",
        },
      ],
      representativeProducts: [
        "Beaker",
        "Erlenmeyer Flask",
        "Graduated Cylinder",
        "Reagent Bottle",
        "Pipette",
        "Desiccator",
      ],
      keywords: [
        "실험기구",
        "유리기구",
        "플라스틱웨어",
        "비커",
        "플라스크",
        "메스실린더",
        "시약병",
        "피펫",
        "labware",
        "glassware",
        "beaker",
        "flask",
      ],
    },
  
    {
      id: "consumables",
      slug: "consumables",
      nameKo: "실험 소모품",
      nameEn: "Laboratory Consumables",
      productCount: 1576,
      shortDescription:
        "반복적인 실험과 시료 처리에 필요한 튜브, 팁, 필터 및 바이알",
      description:
        "일상적인 실험과 시료 처리 과정에서 반복적으로 사용하는 소모품을 제공합니다. 규격, 재질, 멸균 여부 및 장비 호환성을 기준으로 제품을 선택할 수 있습니다.",
      subcategories: [
        {
          id: "tubes",
          nameKo: "튜브",
          nameEn: "Tubes",
        },
        {
          id: "pipette-tips",
          nameKo: "피펫 팁",
          nameEn: "Pipette Tips",
        },
        {
          id: "filters",
          nameKo: "필터",
          nameEn: "Filters",
        },
        {
          id: "vials",
          nameKo: "바이알",
          nameEn: "Vials",
        },
        {
          id: "syringes",
          nameKo: "시린지",
          nameEn: "Syringes",
        },
      ],
      representativeProducts: [
        "Centrifuge Tube",
        "Pipette Tip",
        "Syringe Filter",
        "Sample Vial",
        "Membrane Filter",
        "Microtube",
      ],
      keywords: [
        "실험 소모품",
        "튜브",
        "피펫 팁",
        "필터",
        "바이알",
        "시린지",
        "원심관",
        "laboratory consumables",
        "pipette tip",
        "syringe filter",
        "sample vial",
      ],
    },
  
    {
      id: "laboratory-supplies",
      slug: "laboratory-supplies",
      nameKo: "실험실 운영용품",
      nameEn: "Laboratory Supplies",
      productCount: 418,
      shortDescription:
        "보관, 라벨링, 세척 및 폐기물 관리를 위한 실험실 운영 제품",
      description:
        "실험실의 정리, 보관, 세척, 식별 및 폐기물 관리에 필요한 운영용품을 제공합니다. 안전하고 효율적인 연구환경을 유지하기 위한 보조 제품으로 구성됩니다.",
      subcategories: [
        {
          id: "storage",
          nameKo: "보관·정리",
          nameEn: "Storage & Organization",
        },
        {
          id: "labeling",
          nameKo: "라벨링",
          nameEn: "Labeling",
        },
        {
          id: "cleaning",
          nameKo: "세척",
          nameEn: "Cleaning",
        },
        {
          id: "waste-management",
          nameKo: "폐기물 관리",
          nameEn: "Waste Management",
        },
        {
          id: "workplace-supplies",
          nameKo: "작업 보조용품",
          nameEn: "Workplace Supplies",
        },
      ],
      representativeProducts: [
        "Storage Rack",
        "Cryogenic Label",
        "Laboratory Marker",
        "Wash Bottle",
        "Waste Container",
        "Cleaning Wipe",
      ],
      keywords: [
        "실험실 운영용품",
        "보관랙",
        "라벨",
        "마커",
        "세척병",
        "폐기물 용기",
        "laboratory supplies",
        "storage rack",
        "laboratory label",
        "waste container",
      ],
    },
  ];
  
  export const totalProductCount = categories.reduce(
    (total, category) => total + category.productCount,
    0,
  );
  
  export const getCategoryBySlug = (slug) =>
    categories.find((category) => category.slug === slug);
  
  export default categories;