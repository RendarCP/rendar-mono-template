/**
 * react.js
 *
 * React 애플리케이션을 위한 ESLint 설정
 * React, JSX, 접근성(a11y) 관련 규칙을 정의
 *
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  // 브라우저 환경 설정
  env: {
    browser: true, // 브라우저 환경에서 실행
  },

  // 확장할 규칙 설정
  extends: [
    "plugin:react/recommended", // React 권장 규칙
    "plugin:react/jsx-runtime", // React 17+ JSX 변환 지원 (import React 불필요)
    "plugin:react-hooks/recommended", // React Hooks 권장 규칙
    "plugin:jsx-a11y/recommended", // JSX 접근성(a11y) 권장 규칙
    "standard-jsx", // JSX 표준 스타일
  ],

  // React 설정
  settings: {
    react: {
      version: "detect", // React 버전 자동 감지
    },
  },

  // React 관련 규칙
  rules: {
    // JSX 문법 관련 규칙
    "react/jsx-no-useless-fragment": ["error", { allowExpressions: true }], // 불필요한 Fragment 금지, 표현식은 허용
    "react/jsx-pascal-case": "error", // 컴포넌트 이름 파스칼 케이스 강제

    // 속성 관련 규칙
    "react/no-unknown-property": ["error", { ignore: ["css"] }], // 알 수 없는 속성 금지, css 속성은 허용 (CSS-in-JS)
    "react/prop-types": "off", // PropTypes 검사 비활성화 (TypeScript 사용 시)

    // 컴포넌트 스타일 규칙
    "react/self-closing-comp": [
      "error",
      {
        component: true, // 내용 없는 컴포넌트는 자체 닫는 태그 사용
        html: true, // HTML 요소도 적용
      },
    ],
    "jsx-quotes": ["error", "prefer-single"], // JSX에서 작은따옴표 사용 강제

    // 일반 코드 스타일 규칙
    curly: ["error", "all"], // 모든 조건문에 중괄호 사용 강제
  },
};
