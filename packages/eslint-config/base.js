/**
 * base.js
 *
 * 기본 ESLint 설정 파일
 * 프론트엔드와 백엔드 모두에서 사용할 수 있는 공통 규칙 정의
 *
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  // 실행 환경 설정
  env: {
    browser: true, // 브라우저 환경 지원
    es6: true, // ES6 문법 지원
    node: true, // Node.js 환경 지원
  },

  // TypeScript 파서 사용
  parser: "@typescript-eslint/parser",

  // 확장할 기본 규칙 설정
  extends: [
    "eslint:recommended", // ESLint 기본 권장 규칙
    "plugin:react/recommended", // React 권장 규칙
    "plugin:prettier/recommended", // Prettier 통합 지원
  ],

  // React 설정
  settings: {
    react: {
      version: "detect", // React 버전 자동 감지
    },
  },

  // 파서 옵션 설정
  parserOptions: {
    ecmaFeatures: {
      jsx: true, // JSX 문법 지원
    },
    ecmaVersion: "latest", // 최신 ECMAScript 버전 사용
    sourceType: "module", // ES 모듈 시스템 사용
  },

  // 사용할 플러그인
  plugins: [
    "react", // React 린트 규칙
    "react-hooks", // React Hooks 린트 규칙
    "@typescript-eslint", // TypeScript 규칙
    "prettier", // Prettier 통합
    "import", // import/export 문법 규칙
  ],

  // 세부 규칙 설정
  rules: {
    // React 관련 규칙
    "react-hooks/rules-of-hooks": "error", // Hooks 규칙 강제
    "react/jsx-no-useless-fragment": 0, // 불필요한 Fragment 검사 비활성화
    "react/prop-types": "off", // PropTypes 검사 비활성화 (TypeScript 사용 시)
    "react/function-component-definition": [
      2, // error
      {
        namedComponents: ["arrow-function", "function-declaration"], // 화살표 함수와 함수 선언식 모두 허용
      },
    ],
    "react/jsx-props-no-spreading": "off", // props 전개 연산자 사용 허용
    "react/react-in-jsx-scope": 0, // React import 필수 규칙 비활성화 (React 17+)
    "react/prefer-stateless-function": 0, // 상태 없는 컴포넌트 강제 비활성화
    "react/jsx-filename-extension": 0, // JSX 파일 확장자 제한 비활성화
    "react/jsx-one-expression-per-line": 0, // JSX 내 한 줄 한 표현식 규칙 비활성화

    // Import 관련 규칙
    "import/order": 0, // import 순서 규칙 비활성화
    "import/prefer-default-export": "off", // 기본 내보내기 선호 규칙 비활성화
    "import/extensions": 0, // 확장자 명시 규칙 비활성화
    "import/no-unresolved": 0, // 미해결 import 경로 검사 비활성화

    // JavaScript/TypeScript 관련 규칙
    "prefer-arrow-callback": "off", // 화살표 함수 콜백 선호 규칙 비활성화
    "no-var": "error", // var 대신 let/const 사용 강제
    "no-dupe-keys": "error", // 객체 내 중복 키 금지
    "no-nested-ternary": 0, // 중첩 삼항 연산자 허용

    // TypeScript 관련 규칙
    "@typescript-eslint/no-explicit-any": "error", // any 타입 사용 금지
  },

  // 전역 변수 설정
  globals: {
    React: "writable", // React를 전역 변수로 설정
  },
};
