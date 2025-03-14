/**
 * index.js
 *
 * 기본 ESLint 설정 - 주로 Node.js 환경에서 사용되는 설정
 * JavaScript/TypeScript 코드를 위한 핵심 규칙 정의
 *
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  // Node.js 환경 설정
  env: {
    node: true,
  },

  // 확장할 규칙 설정
  extends: [
    "eslint:recommended", // ESLint 기본 권장 규칙
    "plugin:import/recommended", // import 관련 권장 규칙
    "plugin:promise/recommended", // Promise 관련 권장 규칙
    "standard", // JavaScript Standard 스타일
  ],

  // 기본 규칙
  rules: {
    // 함수 스타일 규칙
    "func-style": ["error", "declaration", { allowArrowFunctions: true }], // 함수 선언식 강제, 화살표 함수 허용

    // 코드 품질 규칙
    "no-console": "error", // console.log() 등 사용 금지
    "no-empty-function": "off", // 빈 함수 허용
    "no-implicit-coercion": ["error", { allow: ["!!"] }], // 암시적 형변환 제한, !! 연산자는 허용
    "no-return-await": "error", // 불필요한 return await 금지
    "no-unused-expressions": [
      // 미사용 표현식 제한
      "error",
      {
        allowShortCircuit: true, // 단축 평가 허용
        allowTernary: true, // 삼항 연산자 허용
        allowTaggedTemplates: true, // 태그된 템플릿 허용
      },
    ],
    "no-unused-vars": [
      // 미사용 변수 제한
      "error",
      { ignoreRestSiblings: true, argsIgnorePattern: "^_+$" }, // rest 연산자 형제 무시, _ 시작 매개변수 무시
    ],
    "no-use-before-define": ["error", { functions: false }], // 정의 전 사용 금지, 함수는 예외
    "no-void": ["error", { allowAsStatement: true }], // void 연산자 제한, 문장으로는 허용
    "object-shorthand": ["error", "properties"], // 객체 속성 단축 문법 사용
    "require-atomic-updates": "off", // 원자적 업데이트 요구 비활성화

    // Import 관련 규칙
    "import/order": [
      // import 순서 규칙
      "error",
      {
        "newlines-between": "always", // 그룹 간 항상 새 줄 추가
        pathGroups: [
          {
            pattern: "@/**", // @ 경로 패턴
            group: "parent", // 부모 그룹에 포함
            position: "before", // 부모 그룹 앞에 배치
          },
        ],
        pathGroupsExcludedImportTypes: ["builtin"], // 내장 모듈은 제외
      },
    ],
    "import/newline-after-import": "error", // import 문 후 새 줄 강제

    // Promise 관련 규칙
    "promise/catch-or-return": ["error", { allowFinally: true }], // Promise는 catch 또는 return 필수, finally 허용
    "promise/prefer-await-to-callbacks": "error", // 콜백보다 await 선호
    "promise/prefer-await-to-then": "error", // then보다 await 선호
  },

  // TypeScript 파일을 위한 추가 설정
  overrides: [
    {
      files: ["*.ts", "*.tsx"], // TypeScript 파일 대상
      extends: [
        "plugin:@typescript-eslint/recommended", // TypeScript 권장 규칙
        "plugin:import/typescript", // TypeScript import 지원
      ],
      parser: "@typescript-eslint/parser", // TypeScript 파서 사용
      settings: {
        "import/resolver": {
          typescript: {
            alwaysTryTypes: true, // 항상 타입 정의 파일 시도
          },
        },
      },
      rules: {
        // TypeScript 관련 규칙
        "@typescript-eslint/consistent-type-assertions": "error", // 일관된 타입 단언 형식 사용
        "@typescript-eslint/consistent-type-definitions": "error", // 일관된 타입 정의 형식 사용
        "@typescript-eslint/explicit-member-accessibility": "error", // 명시적 접근 제한자 요구
        "@typescript-eslint/no-var-requires": "off", // require() 사용 허용
        "@typescript-eslint/no-empty-function": "off", // 빈 함수 허용
        "@typescript-eslint/no-empty-object-type": [
          // 빈 객체 타입 제한
          "error",
          { allowInterfaces: "always" }, // 인터페이스는 항상 허용
        ],

        // TypeScript로 재정의된 규칙
        "no-use-before-define": "off", // JS 버전 비활성화
        "@typescript-eslint/no-use-before-define": [
          // TS 버전 활성화
          "error",
          { functions: false }, // 함수는 정의 전 사용 허용
        ],
        "no-unused-expressions": "off", // JS 버전 비활성화
        "@typescript-eslint/no-unused-expressions": [
          // TS 버전 활성화
          "error",
          {
            allowShortCircuit: true, // 단축 평가 허용
            allowTernary: true, // 삼항 연산자 허용
            allowTaggedTemplates: true, // 태그된 템플릿 허용
          },
        ],
        "no-unused-vars": "off", // JS 버전 비활성화
        "@typescript-eslint/no-unused-vars": [
          // TS 버전 활성화
          "error",
          { ignoreRestSiblings: true, argsIgnorePattern: "^_+$" }, // rest 연산자 형제 무시, _ 시작 매개변수 무시
        ],
        // '@typescript-eslint/naming-convention': createNamingConventionConfig(), // 명명 규칙 (주석 처리됨)

        // TypeScript에서 불필요한 import 규칙 비활성화
        "import/named": "off", // TS가 이미 확인함
        "import/namespace": "off", // TS가 이미 확인함
        "import/default": "off", // TS가 이미 확인함
        "import/no-named-as-default-member": "off", // TS가 이미 확인함
      },
    },
  ],
};
