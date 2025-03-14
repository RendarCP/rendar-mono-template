/**
 * prettier.js
 *
 * ESLint와 Prettier 통합을 위한 설정
 * 코드 포맷팅 일관성 유지
 *
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  // Prettier 관련 설정 확장
  extends: ["prettier"], // ESLint와 Prettier 충돌 규칙 비활성화

  // Prettier와 함께 사용할 ESLint 규칙
  rules: {
    /**
     * prettier에서 기본적으로 비활성화하지만
     * 필요에 의해 다시 활성화하는 규칙
     */
    curly: ["error", "all"], // 모든 조건문에 중괄호 사용 강제
  },
};
