# @rendardev/react-template

Vite 기반의 React 프로젝트 템플릿입니다.

## 프로젝트 생성

이 템플릿으로 새 프로젝트를 생성하려면:

```bash
# npm 사용
npm create rendardev-react my-app

# yarn 사용
yarn create rendardev-react my-app

# pnpm 사용
pnpm create rendardev-react my-app
```

## 직접 사용

이 템플릿을 직접 사용하려면:

```bash
# npm
npm install @rendardev/react-template

# yarn
yarn add @rendardev/react-template

# pnpm
pnpm add @rendardev/react-template
```

## 기술 스택

- React 19
- TypeScript
- Vite
- React Router v7
- ESLint
- Prettier

## 프로젝트 구조

```
src/
├── components/     # 재사용 가능한 컴포넌트
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── Layout.tsx
├── pages/         # 페이지 컴포넌트
│   ├── Home.tsx
│   ├── About.tsx
│   └── NotFound.tsx
├── routes/        # 라우터 설정
│   └── index.tsx
├── main.tsx       # 진입점
└── index.css      # 전역 스타일
```

## 주요 기능

### 라우팅

React Router v7을 사용한 라우팅 시스템이 구현되어 있습니다:

```tsx
// routes/index.tsx
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
```

### 레이아웃

공통 레이아웃이 구현되어 있습니다:

```tsx
// components/Layout.tsx
export default function Layout() {
  return (
    <div className="layout">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
```

## 스타일링

CSS 모듈을 사용하여 컴포넌트별 스타일링이 가능합니다:

```css
/* index.css */
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.header {
  background-color: #1a1a1a;
  padding: 1rem 2rem;
}
```

## 개발 가이드

### 새 컴포넌트 추가

1. `src/components` 디렉토리에 새 컴포넌트 파일 생성
2. TypeScript와 React 컴포넌트 규칙 준수
3. 필요한 경우 CSS 모듈 추가

### 새 페이지 추가

1. `src/pages` 디렉토리에 새 페이지 컴포넌트 생성
2. `routes/index.tsx`에 새 라우트 추가

## 라이선스

MIT

## 테스트

이 프로젝트는 [Playwright](https://playwright.dev/)를 사용하여 엔드-투-엔드(E2E) 테스트를 수행합니다.

### 테스트 설정

프로젝트에는 다음과 같은 테스트 관련 파일이 포함되어 있습니다:

```
e2e/              # 테스트 디렉토리
├── example.spec.ts   # 예제 테스트 파일
└── global.d.ts       # 타입 정의
playwright.config.ts  # Playwright 설정
playwright.d.ts       # 타입 선언
```

### 테스트 실행하기

```bash
# 브라우저 설치 (처음 한 번만 실행)
npx playwright install

# 모든 테스트 실행
npm run test

# UI 모드에서 테스트 실행
npm run test:ui

# 디버그 모드에서 테스트 실행
npm run test:debug

# 테스트 리포트 확인
npm run test:report
```

### 테스트 작성하기

새로운 테스트 파일은 `e2e` 디렉토리에 생성합니다. 파일 이름은 `.spec.ts` 확장자를 가져야 합니다.

테스트 예제:

```typescript
import { test, expect } from "@playwright/test";

test("기본 테스트", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle(/React/);
});
```

### 지원되는 브라우저

기본적으로 다음 브라우저에서 테스트를 실행할 수 있습니다:

- Chromium
- Firefox
- WebKit (Safari)
- 모바일 Chrome (Pixel 5)
- 모바일 Safari (iPhone 12)

자세한 내용은 [Playwright 문서](https://playwright.dev/docs/intro)를 참조하세요.
