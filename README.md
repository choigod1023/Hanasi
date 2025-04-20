# Hanasi (하나시)

대화 주제를 추천해주는 웹 애플리케이션입니다. 다양한 관계, 기분, 상황에 맞는 대화 주제를 제공합니다.

## 주요 기능

- 다양한 관계별 대화 주제 제공 (썸, 연애, 친구, 어색한 사이)
- 기분과 상황에 맞는 주제 필터링
- GPT를 활용한 맞춤형 주제 생성
- 좋아하는 주제 저장 및 공유

## 기술 스택

- Frontend: React, TypeScript, Tailwind CSS
- Backend: Express.js, TypeScript
- AI: OpenAI GPT-3.5

## 시작하기

### 환경 변수 설정

1. `.env` 파일을 프로젝트 루트에 생성
2. 다음 환경 변수를 설정:

```env
# Server
PORT=3001
OPENAI_API_KEY=your_openai_api_key_here
```

### 클라이언트 실행

```bash
cd client
npm install
npm run dev
```

### 서버 실행

```bash
cd server
npm install
npm run dev
```

## 프로젝트 구조

```
hanasi/
├── client/                 # React 클라이언트
│   ├── src/
│   │   ├── components/     # React 컴포넌트
│   │   ├── pages/         # 페이지 컴포넌트
│   │   ├── store/         # 상태 관리
│   │   └── types/         # 타입 정의
│   └── ...
├── server/                 # Express 서버
│   ├── src/
│   │   ├── controllers/   # API 컨트롤러
│   │   └── ...
│   └── ...
└── ...
```

## 라이센스

MIT
