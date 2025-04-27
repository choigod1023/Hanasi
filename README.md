# Hanasi (하나시) 💬

대화의 시작을 도와주는 AI 기반 대화 주제 추천 서비스입니다.  
어색한 침묵을 깨고, 더 깊은 대화를 나누고 싶을 때, Hanasi가 도와드립니다.

![Hanasi Preview](client/public/preview.png)

## ✨ 주요 기능

### 🎯 맞춤형 주제 추천

- **관계별 주제**: 썸, 연애, 친구, 어색한 사이 등 다양한 관계에 맞는 주제
- **기분별 주제**: 설렘, 기쁨, 슬픔, 화남 등 현재 기분에 맞는 주제
- **상황별 주제**: 일상, 여행, 식사, 운동 등 상황에 맞는 주제

### 🤖 AI 주제 생성

- GPT-3.5를 활용한 맞춤형 주제 생성
- 선택한 조건에 맞는 자연스러운 대화 주제 제공

### 💝 즐겨찾기 & 공유

- 마음에 드는 주제 저장
- 친구들과 주제 공유
- 히스토리 관리

## 🛠 기술 스택

### Frontend

- React 18
- TypeScript
- Tailwind CSS
- TanStack Query
- Zustand

### Backend

- Express.js
- TypeScript
- OpenAI GPT-3.5

## 🚀 시작하기

### 1. 환경 변수 설정

```env
# Server
PORT=3001
OPENAI_API_KEY=your_openai_api_key_here
```

### 2. 클라이언트 실행

```bash
cd client
npm install
npm run dev
```

### 3. 서버 실행

```bash
cd server
npm install
npm run dev
```

## 📁 프로젝트 구조

```
hanasi/
├── client/                 # React 클라이언트
│   ├── src/
│   │   ├── components/     # 재사용 가능한 컴포넌트
│   │   ├── pages/         # 페이지 컴포넌트
│   │   ├── hooks/         # 커스텀 훅
│   │   ├── store/         # Zustand 상태 관리
│   │   ├── types/         # TypeScript 타입 정의
│   │   ├── api/           # API 관련 로직
│   │   └── utils/         # 유틸리티 함수
│   └── ...
├── server/                 # Express 서버
│   ├── src/
│   │   ├── controllers/   # API 컨트롤러
│   │   ├── services/      # 비즈니스 로직
│   │   └── config/        # 환경 설정
│   └── ...
└── ...
```

## 🤝 기여하기

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 라이센스

MIT License - [LICENSE](LICENSE)

## 🙏 감사합니다

이 프로젝트는 다음과 같은 오픈소스 프로젝트를 사용합니다:

- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [OpenAI](https://openai.com/)
- [Zustand](https://github.com/pmndrs/zustand)
- [TanStack Query](https://tanstack.com/query/latest)
