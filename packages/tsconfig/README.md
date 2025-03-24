# @rendardev/tsconfig

Rendar Mono Template의 TypeScript 설정을 위한 공유 설정 패키지입니다.

## 설치 방법

```bash
pnpm add -D @rendardev/tsconfig
```

## 설정 파일 설명

### 1. base.json

기본 TypeScript 설정 파일로, 모든 프로젝트에서 공통으로 사용되는 기본 설정을 포함합니다.

주요 설정:

- `target`: "ES2020"
- `lib`: ["DOM", "DOM.Iterable", "ESNext"]
- `strict`: true
- `module`: "ESNext"
- `moduleResolution`: "node"
- `baseUrl`: "."
- `paths`: "@/\*" 경로 별칭 설정

### 2. next.json

Next.js 프로젝트를 위한 TypeScript 설정 파일입니다.

주요 설정:

- base.json을 상속
- Next.js 플러그인 지원
- JSX 보존 설정
- Next.js 타입 시스템 통합

사용 방법:

```json
{
  "extends": "@rendardev/tsconfig/next.json"
}
```

### 3. react.json

React 프로젝트를 위한 TypeScript 설정 파일입니다.

주요 설정:

- base.json을 상속
- React JSX 지원
- CSS 모듈 타입 지원
- React 관련 최적화 설정

사용 방법:

```json
{
  "extends": "@rendardev/tsconfig/react.json"
}
```

## 프로젝트에서 사용하기

### Next.js 프로젝트

프로젝트의 `tsconfig.json`에 다음과 같이 설정을 추가합니다:

```json
{
  "extends": "@rendardev/tsconfig/next.json",
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

### React 프로젝트

프로젝트의 `tsconfig.json`에 다음과 같이 설정을 추가합니다:

```json
{
  "extends": "@rendardev/tsconfig/react.json",
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["**/*.ts", "**/*.tsx"],
  "exclude": ["node_modules"]
}
```

## 의존성

- typescript: ^5.7.3

## 라이선스

MIT
