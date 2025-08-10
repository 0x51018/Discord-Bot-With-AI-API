# Discord Bot With AI API (Discord.js v14)

간단한 Discord.js v14 기본 봇 프로젝트 템플릿입니다. 환경 변수로 토큰과 AI API 키를 관리합니다.

## 설치

```bash
npm install
```

## 환경 변수 설정

`.env.example`을 복사해 `.env` 파일을 만들고 값을 채워주세요.

```bash
cp .env.example .env
```

`.env` 파일 예시:

```
DISCORD_TOKEN=your_discord_bot_token
AI_API_KEY=your_ai_api_key_optional
```

메시지 콘텐츠 인텐트를 사용하므로, Discord 개발자 포털에서 Message Content Intent를 활성화해야 합니다.

## 실행

개발 모드(자동 재시작):

```bash
npm run dev
```

프로덕션 실행:

```bash
npm start
```

## 기능

- `ping` 메시지에 `Pong!`으로 응답
- `ai-key?` 메시지로 `AI_API_KEY` 설정 여부 확인
