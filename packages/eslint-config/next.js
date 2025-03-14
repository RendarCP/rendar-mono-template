/**
 * next.js
 *
 * Next.js 프레임워크 프로젝트를 위한 ESLint 설정
 * React 설정을 확장하고 Next.js 특화 규칙 추가
 */
module.exports = {
  // 확장할 설정
  extends: [
    "./react.js", // React 기본 설정 확장
    "next/core-web-vitals", // Next.js 코어 웹 바이탈 규칙 (성능 측정 지표)
  ],

  // Next.js 설정
  settings: {
    next: {
      rootDir: ["apps/*/", "packages/*/"], // 모노레포 구조의 루트 디렉토리 설정
    },
  },
};
