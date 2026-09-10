import { Product } from "@/types";

export const PRODUCTS: Product[] = [
  {
    id: "ditta",
    name: "ditta",
    subName: "딛다",
    tagline: "배드민턴 동호인을 위한 실전 반응형 랜덤 풋워크 솔루션",
    category: "Mobile App / Sports Tech",
    tags: ["Mobile App", "Sports Tech", "Google Play Release"],
    status: "Google Play 정식 배포",
    statusBadgeVariant: "success",
    summary:
      "혼자서 훈련하기 어려운 배드민턴 풋워크의 무작위성과 실전 반응성을 강화하는 모바일 트레이닝 파트너",
    problem: {
      title: "혼자서는 훈련할 수 없는 '랜덤한 실전 랠리'",
      description:
        "배드민턴은 예측 불가능한 상대의 셔틀콕 궤적에 즉각 반응하는 스텝이 핵심입니다. 하지만 혼자 연습할 때는 정해진 코스만 반복해 실전 코트에서 반응 속도가 급격히 떨어지는 한계가 있었습니다.",
      points: [
        "파트너 없이는 코트 6방향 랜덤 반응 훈련 불가",
        "훈련 시간, 세트 수, 반응 딜레이를 정밀하게 통제하기 어려움",
        "훈련 성취도 및 주간 누적 운동량 추적 부재",
      ],
    },
    solution: {
      title: "실시간 시청각 신호와 맞춤형 랜덤 알고리즘",
      description:
        "사용자의 핸디캡과 숙련도에 맞춰 6방향 신호 딜레이, 훈련 시간, 인터벌 휴식을 자유롭게 세팅하고 실전 반응 속도를 끌어올릴 수 있는 스마트 트레이닝 시스템을 구축했습니다.",
      features: [
        "코트 전/후/좌/우 6개 포인트 실시간 랜덤 시각·음성 신호 큐레이션",
        "초심자부터 상급자까지 조절 가능한 반응 속도 (0.8초 ~ 3.0초 딜레이 조절)",
        "훈련 루틴 저장 및 세션 완료 후 누적 스텝·칼로리 소모 데이터 리포트",
        "음성 안내 엔진 탑재로 화면을 정면으로 보지 않고도 스텝 반응 가능",
      ],
    },
    impact: {
      title: "Google Play 스토어 런칭 및 실사용자 호평",
      description:
        "배드민턴 동호회 및 클럽 코치진 사이에서 입소문을 타며 실전 연습 필수 도구로 안착했습니다.",
      highlights: [
        "Google Play Console 정식 프로덕션 배포 완료 (com.collco.ditta)",
        "전국 배드민턴 동호인 실사용 트레이닝 세션 누적 기록",
        "스마트폰 거치대 하나로 완성되는 무인 개인 레슨 경험 제공",
      ],
    },
    techStack: ["React Native / Expo", "TypeScript", "Web Audio API", "AsyncStorage", "Tailwind"],
    metrics: [
      { label: "배포 상태", value: "Google Play 라이브" },
      { label: "지원 방향", value: "코트 6구역 전방위" },
      { label: "딜레이 제어", value: "0.1초 단위 커스텀" },
    ],
    icon: "Activity",
    accentColor: "#10b981",
    gradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
    storeUrl: "https://play.google.com/store/apps/details?id=com.collco.ditta",
  },
  {
    id: "jangnal-gaja",
    name: "장날가자",
    subName: "전국 5일장 찾기",
    tagline: "전국 전통 오일장의 날짜와 위치를 한눈에 찾는 로컬 라이프 플랫폼",
    category: "Mobile App / Local Life",
    tags: ["Mobile App", "Local Community", "Location Based"],
    status: "비공개 테스트 중",
    statusBadgeVariant: "warning",
    summary:
      "흩어져 있던 전국 400여 개 전통 5일장의 개장 일정과 위치, 장터 먹거리 정보를 스마트폰 하나로 쉽게 탐색",
    problem: {
      title: "검색해도 찾기 힘든 전국 오일장의 정확한 개장일",
      description:
        "전통 오일장은 끝자리 숫자에 따라 열리는 고유의 5일 주기(1/6, 2/7 등)를 따르지만, 인터넷 검색 시 오래된 블로그 정보나 잘못된 날짜로 인해 헛걸음하는 여행객과 로컬 주민들이 많았습니다.",
      points: [
        "지자체별로 파편화된 전통시장 개장 데이터",
        "오늘 내가 있는 여행지 주변에 열리는 장터 탐색 불가",
        "디지털 취약 계층(시니어)이 이용하기에 지나치게 복잡한 인터페이스",
      ],
    },
    solution: {
      title: "GPS 위치 기반 오늘 열리는 장날 실시간 자동 연산",
      description:
        "앱을 켜는 순간 GPS 기반으로 가장 가까운 장터의 오늘 개장 여부와 남은 일수를 직관적으로 계산해 주며, 큰 글씨 모드와 심플한 캘린더를 제공합니다.",
      features: [
        "현재 위치 기준 반경 N km 내 당일 개장 오일장 실시간 필터링",
        "전국 권역별(강원, 경기, 충청, 전라, 경상, 제주) 5일장 캘린더",
        "카카오맵/네이버지도 길찾기 원클릭 네비게이션 연동",
        "장터 대표 특산물 및 먹거리 큐레이션 정보 수록",
      ],
    },
    impact: {
      title: "비공개 테스트(Closed Beta) 진행 및 정식 출시 준비",
      description:
        "로컬 여행자 및 시니어 테스터 집단을 대상으로 사용자 편의성과 캘린더 연산 정확도를 고도화하고 있습니다.",
      highlights: [
        "전국 450+ 전통 오일장 정밀 지오코딩 데이터베이스 구축 완료",
        "비공개 파일럿 테스트를 통한 시니어 UX 최적화 피드백 반영 중",
        "공식 스토어 런칭을 위한 최종 안정화 단계",
      ],
    },
    techStack: ["React Native", "TypeScript", "Kakao Map API", "Public Data Portal", "Zustand"],
    metrics: [
      { label: "서비스 상태", value: "비공개 테스트 중" },
      { label: "등록 오일장", value: "450+ 개소" },
      { label: "위치 연산", value: "실시간 GPS" },
    ],
    icon: "MapPin",
    accentColor: "#f59e0b",
    gradient: "from-amber-500/20 via-orange-500/10 to-transparent",
  },
  {
    id: "reptile-log",
    name: "랩타일로그",
    subName: "ReptileLog",
    tagline: "파충류 온·습도, 피딩 주기, 성장 기록을 스마트하게 추적하는 데일리 케어 매니저",
    category: "Web App / Pet Care",
    tags: ["Web App", "Special Pet Care", "Data Tracking"],
    status: "서비스 운영 중",
    statusBadgeVariant: "success",
    summary:
      "도마뱀, 뱀, 거북이 등 특수 반려동물의 까다로운 사육 환경과 피딩 일정을 과학적으로 관리하는 웹 솔루션",
    problem: {
      title: "개체마다 다른 까다로운 피딩 주기와 탈피/온습도 관리",
      description:
        "파충류는 일반 반려동물과 달리 먹이 주기(3일, 7일, 격주 등), 칼슘 급여 여부, 탈피 주기, 사육장 온·습도 유지가 생명과 직결됩니다. 사육 개체가 늘어날수록 엑셀이나 수기 메모로는 누락이 잦았습니다.",
      points: [
        "사육 개체수 증가 시 먹이 급여일 및 칼슘 더스팅 혼선",
        "탈피 부전 및 몸무게 정체 시점을 시각적으로 파악하기 어려움",
        "사육 환경(핫존/쿨존 온도, 습도) 변화 기록의 번거로움",
      ],
    },
    solution: {
      title: "개체별 타임라인 로그 & 스마트 알림 대시보드",
      description:
        "개체 등록 한 번으로 피딩 타이머, 몸무게 성장 곡선 차트, 탈피 및 배변 기록을 한 화면에서 체계적으로 관리할 수 있도록 설계했습니다.",
      features: [
        "개체별 프로필 카드 및 다음 피딩 D-day 자동 카운트다운",
        "몸무게(g) 추이 인터랙티브 차트를 통한 성장 정체기 조기 발견",
        "칼슘제/비타민 급여 여부 원클릭 체크박스 로깅",
        "탈피 주기 히스토리 및 사진 첨부 기반 비주얼 성장 일지",
      ],
    },
    impact: {
      title: "특수반려동물 집사들의 실사용 및 관리 누락 제로화",
      description:
        "기존 종이 수첩이나 복잡한 범용 메모장을 대체하며 파충류 커뮤니티에서 실용성을 인정받았습니다.",
      highlights: [
        "크레스티드 게코, 레오파드 게코 등 인기 파충류 맞춤 템플릿 제공",
        "데이터 시각화를 통한 탈피 부전 및 식이 질환 예방 기여",
        "모바일 웹 반응형 지원으로 사육장 앞 스마트폰 원터치 기록",
      ],
    },
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Recharts", "Supabase", "PWA"],
    metrics: [
      { label: "서비스 상태", value: "라이브 운영 중" },
      { label: "관리 항목", value: "피딩/무게/온습도" },
      { label: "알림 연산", value: "D-Day 스마트 예측" },
    ],
    icon: "ShieldAlert",
    accentColor: "#8b5cf6",
    gradient: "from-purple-500/20 via-indigo-500/10 to-transparent",
    demoUrl: "https://reptilog.onrender.com",
  },
  {
    id: "fm-analyst",
    name: "FM 선수 데이터 분석기",
    subName: "Football Manager Role Scout",
    tagline: "풋볼매니저 전용 롤별 적합도 산출 및 선수 비교 레이더 차트 시각화 툴",
    category: "Web Service / Data Analytics",
    tags: ["Web Service", "Data Analytics", "Interactive Chart"],
    status: "라이브 서비스 (Live)",
    statusBadgeVariant: "info",
    summary:
      "복잡한 30여 개 능력치 속에서 전술에 딱 맞는 선수를 즉시 발굴하는 축구 시뮬레이션 게이머 전용 분석 도구",
    problem: {
      title: "능력치 30개 일일이 비교하다 끝나는 스카우팅 피로도",
      description:
        "Football Manager(FM) 게임에서는 감독이 원하는 전술 역할(예: 딥라잉 플레이메이커, 인버티드 윙어)에 필요한 핵심 능력치 가중치가 모두 다릅니다. 게임 내 기본 인터페이스로는 선수 간 비교와 가중치 환산이 번거로웠습니다.",
      points: [
        "특정 롤(Role)에 완벽 부합하는 숨은 꿀영입 선수 발굴의 한계",
        "동일 포지션 선수 2~3명의 레이더 차트 비교 불가",
        "단순 평점이 아닌 가중치 기반 '롤 적합도 지수(0~100점)' 부재",
      ],
    },
    solution: {
      title: "수학적 가중치 엔진 & 다각형 레이더 비교 분석",
      description:
        "선수 능력치를 입력하거나 프리셋을 선택하면 롤별 필수/권장 능력치에 가중치를 부여해 정확한 적합도 스코어를 산출하고 아름다운 레이더 차트로 시각화합니다.",
      features: [
        "공격수, 미드필더, 수비수 등 40여 개 전술 롤별 정밀 가중치 알고리즘",
        "2~4인 선수 동시 오버레이 레이더 차트 비교 렌더링",
        "선수 가성비(능력치 대비 주급/몸값) 티어 리스트 자동 산출",
        "전술 템플릿(게겐프레싱, 티키타카 등)에 최적화된 선수 추천",
      ],
    },
    impact: {
      title: "FM 게이머 커뮤니티 호평 및 스카우팅 시간 70% 단축",
      description:
        "데이터 기반 스쿼드 빌딩을 즐기는 전략 게이머들에게 필수 서포트 유틸리티로 환영받았습니다.",
      highlights: [
        "복잡한 계산 없이 3초 만에 롤 적합도 수치화",
        "SVG/Canvas 기반 고성능 반응형 다각형 차트 구현",
        "전술 빌더들이 애용하는 스카우팅 보조 도구로 자리매김",
      ],
    },
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Chart.js / Canvas", "Zustand"],
    metrics: [
      { label: "서비스 상태", value: "공식 도메인 운영" },
      { label: "지원 롤(Roles)", value: "40+ 개 전술 역할" },
      { label: "소요 시간", value: "스카우팅 70% 단축" },
    ],
    icon: "BarChart3",
    accentColor: "#06b6d4",
    gradient: "from-cyan-500/20 via-blue-500/10 to-transparent",
    demoUrl: "https://scout.soccerdatainsights.com/",
  },
  {
    id: "one-minute-quiz",
    name: "1분 퀴즈",
    subName: "Daily Mini Trivia",
    tagline: "출퇴근길 가볍게 상식을 넓히는 무설치·무로그인 데일리 퀴즈 플랫폼",
    category: "Interactive Web / Casual",
    tags: ["Interactive Web", "Gamification", "Casual App"],
    status: "정식 배포 (Live)",
    statusBadgeVariant: "success",
    summary:
      "바쁜 일상 속 단 60초, 군더더기 없는 인터랙션으로 매일 새로운 시사·상식·역사를 배우는 스낵 콘텐츠 웹앱",
    problem: {
      title: "퀴즈 한 번 풀려고 앱 다운로드와 회원가입을 해야 하는 불편함",
      description:
        "상식을 넓히고 두뇌를 깨우는 퀴즈를 즐기고 싶어도 기존 서비스들은 지나치게 많은 광고, 무거운 앱 설치, 복잡한 소셜 로그인을 요구해 출퇴근길 찰나의 순간에 즐기기 어려웠습니다.",
      points: [
        "지하철/버스에서 가볍게 즐기기엔 무거운 로딩과 로그인 절차",
        "불필요한 과금 유도와 화면을 가리는 무차별 배너 광고",
        "정답 여부만 알려주고 핵심 배경지식 해설이 부실한 퀴즈 콘텐츠",
      ],
    },
    solution: {
      title: "링크 클릭 즉시 시작되는 제로 허들 60초 인터랙션",
      description:
        "URL 접근 0.5초 만에 퀴즈가 시작되며, 즉각적인 햅틱 반응과 1줄 핵심 해설 카드, 카카오톡 퀴즈 챌린지 공유 기능을 통해 바이럴과 몰입감을 극대화했습니다.",
      features: [
        "무설치, 무로그인, 제로 레이턴시의 초경량 웹 인터페이스",
        "매일 자정 갱신되는 5문항 데일리 상식 팩 (역사, 과학, 시사, 대중문화)",
        "정답/오답 즉각 인터랙션 및 짧고 강력한 '오늘의 상식 팁' 제공",
        "친구에게 내 점수를 도전장 형태로 보낼 수 있는 소셜 공유 링크 생성",
      ],
    },
    impact: {
      title: "완료율(Completion Rate) 88% 달성과 자연스러운 바이럴",
      description:
        "가벼운 진입 장벽과 깔끔한 인터페이스 덕분에 스낵 컬처를 선호하는 2030 직장인/학생층의 높은 리텐션을 확보했습니다.",
      highlights: [
        "첫 진입 후 퀴즈 완료율 88% 기록 (업계 평균 대비 2배 이상)",
        "친구 대결 공유 링크를 통한 자발적 유저 유입 루프 구축",
        "초경량 번들링으로 모바일 저사양 네트워크 환경에서도 100% 쾌적",
      ],
    },
    techStack: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Web Share API", "Vercel Edge"],
    metrics: [
      { label: "서비스 상태", value: "공식 도메인 운영" },
      { label: "플레이 타임", value: "단 60초 소요" },
      { label: "완료율", value: "88% 이상 달성" },
    ],
    icon: "HelpCircle",
    accentColor: "#ec4899",
    gradient: "from-pink-500/20 via-rose-500/10 to-transparent",
    demoUrl: "https://1bun-quiz.kr/",
  },
];
