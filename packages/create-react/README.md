# Create Rendardev React

React + TypeScript + Vite 프로젝트를 생성하는 도구입니다.

## 사용 방법

```bash
# npm 사용
npm create rendardev-react my-app

# yarn 사용
yarn create rendardev-react my-app

# pnpm 사용
pnpm create rendardev-react my-app
```

## 생성되는 프로젝트 특징

- **React 19** - 최신 버전의 React 사용
- **TypeScript** - 타입 안정성 확보
- **Vite** - 빠른 개발 서버와 빌드 도구
- **React Router v7** - 최신 라우팅 시스템
- **ESLint** - 코드 품질 도구
- **Prettier** - 코드 포맷팅 도구
- **Playwright** - 엔드-투-엔드(E2E) 테스트 도구

## 패키지 구조

```
packages/
├── create-react/        # 이 패키지 (생성 도구)
├── react-template/      # 실제 템플릿
├── eslint-config/       # ESLint 설정
├── prettier-config/     # Prettier 설정
└── tsconfig/            # TypeScript 설정
```

## 개발 가이드

생성된 프로젝트의 더 자세한 정보는 생성된 프로젝트의 README.md 파일을 참조하세요.

## Playwright 테스트

생성된 프로젝트는 Playwright를 사용하여 테스트할 수 있습니다. 프로젝트를 생성한 후 다음 명령어로 Playwright 브라우저를 설치할 수 있습니다:

```bash
npx playwright install
```

테스트 실행:

```bash
# 모든 테스트 실행
npm run test

# UI 모드에서 테스트 실행
npm run test:ui

# 디버그 모드에서 테스트 실행
npm run test:debug
```

## 라이선스

MIT
