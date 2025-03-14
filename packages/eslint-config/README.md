# @rendar-mono-template/eslint-config

ESLint 설정 모음으로, Rendar Mono Template 프로젝트에서 일관된 코드 스타일과 품질을 유지하기 위해 설계되었습니다.

## 설치

```bash
# NPM
npm install --save-dev @rendar/eslint-config

# Yarn
yarn add --dev @rendar/eslint-config

# PNPM
pnpm add -D @rendar/eslint-config
```

## 사용 방법

이 패키지는 다양한 개발 환경을 위한 여러 ESLint 설정을 제공합니다. 프로젝트의 루트에 `.eslintrc.js` 파일을 생성하고 필요한 설정을 확장하여 사용하세요.

### 기본 설정 (일반 JavaScript/TypeScript)

```javascript
// .eslintrc.js
module.exports = {
  extends: ["@rendar/eslint-config"],
};
```

### React 프로젝트

```javascript
// .eslintrc.js
module.exports = {
  extends: ["@rendar/eslint-config/react"],
};
```

### Next.js 프로젝트

```javascript
// .eslintrc.js
module.exports = {
  extends: ["@rendar/eslint-config/next"],
};
```

### 강화된 TypeScript 타입 체크

TypeScript 프로젝트에 더 강력한 타입 체크를 적용하려면:

```javascript
// .eslintrc.js
module.exports = {
  extends: ["@rendar/eslint-config", "@rendar/eslint-config/typeCheck"],
};
```

### Prettier 통합

Prettier와 함께 사용하려면:

```javascript
// .eslintrc.js
module.exports = {
  extends: [
    "@rendar-mono-template/eslint-config",
    "@rendar-mono-template/eslint-config/prettier",
  ],
};
```

## 제공되는 설정 파일

이 패키지는 다음과 같은 설정 파일을 제공합니다:

- **base.js** - 기본 ESLint 설정 (내부적으로 사용됨)
- **index.js** - 기본 JavaScript/TypeScript 규칙
- **react.js** - React 프로젝트를 위한 규칙
- **next.js** - Next.js 프로젝트를 위한 규칙
- **typeCheck.js** - 강화된 TypeScript 타입 체크 규칙
- **prettier.js** - ESLint와 Prettier 통합 설정

## 추천 사용 조합

### React + TypeScript 프로젝트

```javascript
module.exports = {
  extends: [
    "@rendar-mono-template/eslint-config",
    "@rendar-mono-template/eslint-config/react",
    "@rendar-mono-template/eslint-config/typeCheck",
    "@rendar-mono-template/eslint-config/prettier",
  ],
};
```

### Next.js + TypeScript 프로젝트

```javascript
module.exports = {
  extends: [
    "@rendar-mono-template/eslint-config",
    "@rendar-mono-template/eslint-config/next",
    "@rendar-mono-template/eslint-config/typeCheck",
    "@rendar-mono-template/eslint-config/prettier",
  ],
};
```

## 규칙 사용자 정의

기본 설정을 확장하면서 프로젝트 특정 규칙을 추가하거나 재정의할 수 있습니다:

```javascript
// .eslintrc.js
module.exports = {
  extends: ["@rendar-mono-template/eslint-config"],
  rules: {
    // 사용자 정의 규칙
    "no-console": "warn",
    "react/jsx-sort-props": "error",
  },
};
```
