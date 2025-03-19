# @rendardev/prettier-config

Rendar Mono Template 프로젝트를 위한 공유 Prettier 설정입니다.

## 설치

```bash
npm install --save-dev @rendardev/prettier-config
# 또는
yarn add -D @rendardev/prettier-config
# 또는
pnpm add -D @rendardev/prettier-config
```

## 사용 방법

`package.json`에 다음과 같이 추가하세요:

```json
{
  "prettier": "@rendardev/prettier-config"
}
```

또는 `.prettierrc.js` 파일을 생성하고 다음과 같이 설정하세요:

```js
module.exports = require("@rendardev/prettier-config");
```

## 설정 내용

이 설정은 다음과 같은 Prettier 규칙을 포함합니다:

- `printWidth`: 80 (한 줄의 최대 길이)
- `tabWidth`: 2 (들여쓰기 크기)
- `useTabs`: false (스페이스 사용)
- `semi`: true (세미콜론 사용)
- `singleQuote`: true (작은따옴표 사용)
- `quoteProps`: "as-needed" (필요한 경우에만 객체 속성에 따옴표 사용)
- `trailingComma`: "es5" (ES5 호환 후행 쉼표)
- `bracketSpacing`: true (객체 리터럴의 중괄호 내부 공백)
- `arrowParens`: "avoid" (단일 매개변수 화살표 함수의 괄호 생략)
- `proseWrap`: "preserve" (마크다운 텍스트 줄바꿈 보존)
- `endOfLine`: "auto" (자동 개행 문자 설정)
- `htmlWhitespaceSensitivity`: "css" (CSS 기반 HTML 공백 처리)
- `embeddedLanguageFormatting`: "off" (내장 언어 포매팅 비활성화)

## 요구사항

- Prettier 버전 3.0.0 이상

## 라이선스

MIT
