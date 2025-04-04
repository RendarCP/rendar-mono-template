# Rendar React Template

Vite 기반의 React 프로젝트 템플릿입니다.

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

## 시작하기

### 설치

```bash
# 의존성 설치
pnpm install

# React 프로젝트 의존성만 설치
pnpm install:react
```

### 개발 서버 실행

```bash
pnpm dev:react
```

### 빌드

```bash
pnpm build:react
```

### 미리보기

```bash
pnpm preview:react
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
