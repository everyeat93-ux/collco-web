export const SITE_URL = "https://collco-web.onrender.com";
export const SITE_NAME = "콜코 (COLLCO)";
export const CONTACT_EMAIL = "collcokorea@gmail.com";
export const CATALOG_UPDATED_LABEL = "2026.11 기준";

/**
 * 홈 화면 '대표 프로젝트' 첫 번째로 노출할 프로젝트 ID 및 슬라이드 목록.
 * src/data/products.ts 의 id 값으로 순서를 바꾸거나 추가할 수 있습니다.
 */
export const FEATURED_PROJECT_ID = "jangnal-gaja";
export const FEATURED_PROJECT_IDS = ["jangnal-gaja", "ditta", "cashbook"] as const;

export const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/collco_korea/",
  threads: "https://www.threads.net/@collco_korea",
  blog: "https://blog.naver.com/collco_kr",
  smartStore: "https://smartstore.naver.com/collco",
} as const;

/**
 * /studio 소규모 브랜드 웹사이트 제작 안내 상품 데이터 (단일 관리 지점)
 * 가격, 범위, 일정, 납품 항목을 이 객체 한 곳에서 수정하면 사이트 전체에 반영됩니다.
 */
export const STUDIO_OFFER = {
  productName: "소규모 브랜드 소개·문의 웹사이트",
  price: "상담 후 견적 안내",
  priceNote: "기본 범위와 자료 준비 상태에 맞춰 상담 시 투명하게 안내드립니다.",
  targetAudience:
    "SNS·스마트스토어에 흩어진 브랜드 소개, 작업 사례, 문의 안내를 한곳에 정리하려는 공방과 소규모 브랜드",
  summary:
    "브랜드의 이야기와 대표 작업, 찾아오는 길과 문의 방법을 한 페이지에 깔끔하게 정리해 첫 방문자가 신뢰하고 문의할 수 있도록 제작합니다.",
  includedScope: [
    "한국어 1페이지 구성 (최대 6개 섹션)",
    "모바일·데스크톱 반응형 화면 대응",
    "초안 확인 후 수정 2회 포함",
    "기본 검색 메타태그 및 SNS 공유 미리보기 설정",
  ],
  timeline: {
    proposed: "자료·범위 확정 및 착수금 확인 후 영업일 7일 (기존 제안 기준)",
    note: "실제 착수 가능일과 세부 일정은 상담 과정에서 확정합니다.",
  },
  deliverables: [
    "공개 웹사이트 (배포 연결 포함)",
    "전체 소스 코드 전달",
    "직접 문구·사진을 관리할 수 있는 운영 안내",
  ],
  separateDiscussion: [
    "유료 도메인·유료 호스팅 비용",
    "예약·결제·로그인·관리자(CMS) 기능",
    "추가 페이지 제작 및 정기 유지관리",
  ],
  caseStudyProductId: "goldfur",
} as const;

export const INQUIRY_GUIDE = {
  heading: "함께 만들 프로덕트가 있으신가요?",
  description:
    "공방·소규모 브랜드의 소개·문의 웹사이트 제작과 일상의 문제를 해결하는 웹·앱 협업을 진행합니다.",
  requestedItems: [
    "운영 중인 SNS 또는 스토어 주소",
    "웹사이트가 필요한 이유나 해결하고 싶은 문제",
    "희망 시기",
  ],
  mailtoNote:
    "버튼을 누르면 사용 중인 메일 앱에서 문의 초안이 열립니다. 메일 앱에서 직접 전송해 주세요.",
} as const;
