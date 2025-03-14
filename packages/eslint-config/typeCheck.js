/**
 * typeCheck.js
 *
 * 강력한 TypeScript 타입 체크를 위한 ESLint 설정
 * 타입 정보를 활용한 고급 규칙 적용
 *
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  // 특정 파일 패턴에만 적용되는 설정
  overrides: [
    {
      files: ["*.ts", "*.tsx"], // TypeScript 파일에만 적용

      // TypeScript 프로젝트 설정 연결
      parserOptions: {
        project: "tsconfig.json", // tsconfig.json 파일 참조 (타입 정보 활용)
      },

      // 타입 체킹이 필요한 규칙 확장
      extends: [
        "plugin:@typescript-eslint/recommended-requiring-type-checking", // 타입 정보를 필요로 하는 규칙 모음
      ],

      // 타입 관련 세부 규칙
      rules: {
        // 명명 규칙
        "@typescript-eslint/naming-convention": [
          "error",
          {
            selector: "typeLike", // 타입, 인터페이스, 클래스 등
            format: ["PascalCase"], // 파스칼 케이스 강제 (첫 글자 대문자)
          },
          {
            selector: "enumMember", // 열거형 멤버
            format: ["PascalCase"], // 파스칼 케이스 강제
          },
        ],

        // Promise 관련 규칙
        "@typescript-eslint/no-floating-promises": "off", // 처리되지 않은 Promise 경고 비활성화
        "@typescript-eslint/no-misused-promises": [
          "error",
          {
            checksVoidReturn: false, // void 반환 함수에서 Promise 전달 허용
          },
        ],
      },
    },
  ],
};
