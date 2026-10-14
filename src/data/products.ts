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
    storeUrl: "https://play.google.com/store/apps/details?id=com.collco.ditta&pcampaignid=web_share",
  },
  {
    id: "jangnal-gaja",
    name: "장날가자",
    subName: "전국 5일장 찾기",
    tagline: "전국 전통 오일장의 날짜와 위치를 한눈에 찾는 로컬 라이프 플랫폼",
    category: "Mobile App / Local Life",
    tags: ["Mobile App", "Local Life", "Google Play Release"],
    status: "Google Play 정식 배포",
    statusBadgeVariant: "success",
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
      title: "Google Play 스토어 정식 출시 및 로컬 라이프 안착",
      description:
        "복잡한 장날 계산 없이 오늘 열리는 5일장과 주말 장터를 한눈에 확인하는 로컬 필수 앱으로 구글 플레이스토어에 정식 출시되었습니다.",
      highlights: [
        "Google Play Console 정식 프로덕션 배포 완료 (com.jangnal.gaja)",
        "전국 450+ 전통 오일장 정밀 지오코딩 및 온누리상품권 가맹 정보 수록",
        "오늘 개장 및 주말 개장 1초 필터 & 실시간 GPS 내비게이션 연동",
      ],
    },
    techStack: ["React Native", "TypeScript", "Kakao Map API", "Public Data Portal", "Zustand"],
    metrics: [
      { label: "배포 상태", value: "Google Play 라이브" },
      { label: "등록 오일장", value: "450+ 개소" },
      { label: "위치 연산", value: "실시간 GPS" },
    ],
    icon: "MapPin",
    accentColor: "#f59e0b",
    gradient: "from-amber-500/20 via-orange-500/10 to-transparent",
    storeUrl: "https://play.google.com/store/apps/details?id=com.jangnal.gaja",
  },
  {
    id: "reptilog",
    name: "랩티로그",
    subName: "ReptiLog",
    tagline: "파충류·양서류 집사를 위한 스마트 사육일지 & 데일리 케어 매니저",
    category: "Mobile App / Pet Care",
    tags: ["Mobile App", "Pet Care", "Google Play Release"],
    status: "Google Play 정식 출시",
    statusBadgeVariant: "success",
    summary:
      "파충류·양서류 집사를 위한 원터치 1초 퀵-로깅, 사육 루틴 알림, 성장 다이어리 및 수의사용 병원 문진표를 제공하는 스마트 케어 앱",
    problem: {
      title: "복잡한 피딩 주기와 수의사 문진에 필요한 사육 데이터의 파편화",
      description:
        "파충류와 양서류는 개체마다 먹이 주기, 온·습도, UVB 램프 교체일, 탈피/배변 주기가 모두 달라 수기 기록이나 일반 메모로는 누락이 잦고, 아플 때 동물병원 수의사에게 정확한 사육 이력을 전달하기 어려웠습니다.",
      points: [
        "개체별 피딩 주기 및 칼슘 더스팅 기록의 번거로움",
        "온·습도 유지 및 UVB 교체 등 주기적 케어 루틴 알림 부재",
        "동물병원 방문 시 수의사용 사육 보고서(문진표) 작성 곤란",
      ],
    },
    solution: {
      title: "1초 퀵-로깅 & 스마트 사육 루틴 & 병원 문진표 자동 생성",
      description:
        "터치 한 번으로 피딩/배변을 1초 만에 기록하고, 온·습도와 청소/UVB 알림, 성장 그래프, OLED 최적화 야간 다크모드 및 수의사 제출용 사육 리포트를 제공합니다.",
      features: [
        "원터치 퀵-로깅: 피딩 / 배변 / 탈피 1초 즉시 기록",
        "사육 루틴: 온·습도, 청소 주기, UVB 램프 교체 스마트 알림",
        "성장 다이어리: 체중·체장 인터랙티브 그래프 및 변화 추적",
        "야간 다크모드: 야간 피딩 시 눈부심 없는 OLED 특화 블랙 테마",
        "병원 문진표: 수의사에게 즉시 제출 가능한 전문 사육 보고서 생성",
      ],
    },
    impact: {
      title: "Google Play 정식 출시 및 파충·양서류 필수 앱 안착",
      description:
        "수기 메모와 엑셀을 완벽히 대체하며, 글로벌 177개국 배포 및 구글 플레이 스토어 정식 등록을 통해 특수 반려동물 케어의 새로운 기준을 세웠습니다.",
      highlights: [
        "Google Play Console 정식 프로덕션 배포 완료 (kr.reptilog.app)",
        "수의사 문진표 생성으로 반려동물 질환 조기 진단 및 정확한 진료 기여",
        "도마뱀, 뱀, 개구리, 거북이 등 파충류·양서류 전종 케어 최적화",
      ],
    },
    techStack: ["React Native / Expo", "TypeScript", "Tailwind CSS", "Zustand", "Recharts", "Google Play Release"],
    metrics: [
      { label: "배포 상태", value: "Google Play 정식 출시" },
      { label: "기록 속도", value: "원터치 1초 로깅" },
      { label: "케어 지원", value: "파충·양서류 전종" },
    ],
    icon: "ShieldAlert",
    accentColor: "#8b5cf6",
    gradient: "from-purple-500/20 via-indigo-500/10 to-transparent",
    storeUrl: "https://play.google.com/store/apps/details?id=kr.reptilog.app&pcampaignid=web_share",
  },
  {
    id: "goldfur",
    name: "황금모피",
    subName: "HWANG GEUM ATELIER",
    tagline: "35년 부부 장인이 손끝으로 짓는 단 하나의 온기, 수제 모피 아틀리에",
    category: "Brand Web / Luxury Heritage",
    tags: ["Brand Web", "Luxury Heritage", "Bespoke Atelier"],
    status: "공식 사이트 운영",
    statusBadgeVariant: "success",
    summary:
      "1990년부터 동대문 공방을 지켜온 35년 부부 장인의 비스포크 헤리티지와 엄선된 원피, 정밀 손바느질 테일러메이드 가치를 전하는 공식 웹사이트",
    problem: {
      title: "35년 장인정신의 수제 맞춤(Bespoke) 가치 온라인 전달 한계",
      description:
        "동대문 공방 직영으로 최상급 모피를 수제작해 온 35년의 역사와 비스포크 맞춤 가치가 기존의 획일적인 쇼핑몰 구조에서는 온전히 표현되지 못했습니다.",
      points: [
        "장인 부부의 35년 역사(Since 1990)와 핸드크래프트 스토리텔링 부재",
        "100% 사전 예약제 직영 아틀리에 방문 및 맞춤 주문 프로세스 안내 부족",
        "타임리스 럭셔리 감성을 살린 고화질 비주얼 룩북 큐레이션 필요",
      ],
    },
    solution: {
      title: "타임리스 럭셔리 아틀리에 브랜딩 & 인터랙티브 헤리티지 룩북",
      description:
        "엄선된 원피의 질감과 손바느질의 디테일을 전달하는 비주얼 아틀리에 룩북, 35년 공방 히스토리, 100% 사전 예약제 방문 시스템을 유려한 반응형 웹으로 구축했습니다.",
      features: [
        "감각적인 타이포그래피와 모션이 결합된 헤리티지 룩북 쇼룸",
        "1990년부터 이어진 35년 부부 장인의 비스포크(Bespoke) 헤리티지 스토리텔링",
        "동대문 공장 직영 방문 예약(100% 사전 예약제) 연동 시스템",
        "모바일·데스크톱 최적화의 반응형 럭셔리 비주얼 인터페이스",
      ],
    },
    impact: {
      title: "브랜드 헤리티지 디지털 자산화 및 VIP 방문 예약 창구 구축",
      description:
        "공식 도메인 런칭을 통해 오프라인 공방의 신뢰도를 웹으로 확장하고, 프라이빗 100% 사전 예약 고객 접점을 확립했습니다.",
      highlights: [
        "공식 도메인 (www.goldfur.co.kr) 런칭 및 안정적 라이브 운영",
        "35년 공방의 독보적 장인정신을 디지털 공간에 성공적으로 브랜딩",
        "Bespoke 맞춤 제작 및 아틀리에 방문 상담 문의 활성화",
      ],
    },
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "SEO & OpenGraph"],
    metrics: [
      { label: "공방 역사", value: "35년 (Since 1990)" },
      { label: "방문 방식", value: "100% 사전 예약제" },
      { label: "제작 공정", value: "Bespoke 테일러메이드" },
    ],
    icon: "Crown",
    accentColor: "#d97706",
    gradient: "from-amber-600/20 via-yellow-600/10 to-transparent",
    demoUrl: "https://www.goldfur.co.kr/",
  },
  {
    id: "haneul-rauni",
    name: "하늘이 vs 라우니",
    subName: "배드민턴 게임 대결",
    tagline: "귀여운 다람쥐 라우니와 하늘다람쥐 하늘이의 스릴 넘치는 캐주얼 배드민턴 대결!",
    category: "Mobile Game / Casual Sports",
    tags: ["Mobile Game", "Casual Arcade", "Closed Beta"],
    status: "비공개 테스트 중",
    statusBadgeVariant: "warning",
    summary:
      "누구나 10초 만에 즐길 수 있는 직관적 원터치 스윙과 사랑스러운 캐릭터 모션 연출이 돋보이는 모바일 캐주얼 배드민턴 아케이드 게임",
    problem: {
      title: "모바일 스포츠 게임의 지나치게 복잡한 조작과 높은 진입 장벽",
      description:
        "배드민턴의 박진감 넘치는 랠리와 타구 쾌감을 즐기고 싶지만, 기존 스포츠 게임들은 수많은 가상 패드와 버튼으로 조작 피로도가 매우 높았습니다.",
      points: [
        "과도한 가상 패드 조작으로 인한 모바일 작은 화면에서의 컨트롤 미스",
        "남녀노소 누구나 가볍고 유쾌하게 즐길 수 있는 캐주얼 스포츠 게임의 부재",
        "셔틀콕의 타구 타이밍과 스매시 임팩트 손맛 구현의 난제",
      ],
    },
    solution: {
      title: "직관적인 타이밍 기반 원터치 스윙 엔진 & 사랑스러운 캐릭터 IP",
      description:
        "화면 터치 타이밍 하나로 하이클리어부터 드롭샷, 호쾌한 스매시까지 자유자재로 반응하는 셔틀콕 물리 엔진을 구축하고, 하늘이와 라우니 캐릭터의 아기자기한 모션을 결합했습니다.",
      features: [
        "원터치 타이밍 반응형 셔틀콕 궤적 및 다이내믹 랠리 물리 엔진",
        "사랑스러운 하늘다람쥐 '하늘이' & 줄무늬 다람쥐 '라우니' 캐릭터 애니메이션",
        "난이도별 AI 대전 모드 및 무한 랠리 스코어 어택 챌린지",
        "경쾌한 타구 사운드 효과와 손끝 햅틱 피드백 시스템",
      ],
    },
    impact: {
      title: "Google Play 비공개 테스트 진행 및 유저 피드백 기반 완성도 고도화",
      description:
        "구글 플레이 비공개 테스트(Closed Beta) 트랙을 통해 플레이어 피드백을 수렴하며 조작감과 랠리 밸런스를 집중 담금질하고 있습니다.",
      highlights: [
        "Google Play 패키지 등록 완료 (com.collco.haneulrauni)",
        "튜토리얼 없이도 10초 만에 랠리가 이어지는 직관적 조작성 입증",
        "캐주얼 게이머 대상 비공개 테스트를 통한 밸런스 최적화 진행 중",
      ],
    },
    techStack: ["React Native / Game Engine", "TypeScript", "Google Play Games API", "Haptic Feedback"],
    metrics: [
      { label: "개발 상태", value: "Google Play 비공개 테스트" },
      { label: "조작 방식", value: "직관적 원터치 스윙" },
      { label: "패키지명", value: "com.collco.haneulrauni" },
    ],
    icon: "Gamepad2",
    accentColor: "#38bdf8",
    gradient: "from-sky-500/20 via-blue-500/10 to-transparent",
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
