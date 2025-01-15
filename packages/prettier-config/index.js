module.exports = {
  printWidth: 80, // 한 줄의 최대 길이를 80자로 제한
  tabWidth: 2, // 들여쓰기 시 탭 너비를 2칸으로 설정
  useTabs: false, // 들여쓰기에 탭 대신 스페이스 사용
  semi: true, // 문장 끝에 세미콜론 추가
  singleQuote: true, // 작은따옴표 사용
  quoteProps: "as-needed", // 객체의 속성에 필요한 경우에만 따옴표 추가
  trailingComma: "es5", // ES5에서 유효한 후행 쉼표 추가 (객체, 배열 등)
  bracketSpacing: true, // 객체 리터럴의 중괄호 사이에 공백 추가 ({ foo: bar })
  arrowParens: "avoid", // 화살표 함수의 매개변수가 하나일 때 괄호 생략 (x => x)
  proseWrap: "preserve", // 마크다운 등의 prose 텍스트의 줄바꿈을 보존
  endOfLine: "auto", // 운영체제에 따라 자동으로 개행 문자 설정
  htmlWhitespaceSensitivity: "css", // CSS display 속성 값에 따라 HTML 공백 처리
  embeddedLanguageFormatting: "off", // 템플릿 리터럴 내부 등의 포매팅 비활성화

  // 플러그인 설정
  plugins: [
    "@trivago/prettier-plugin-sort-imports",
    "prettier-plugin-tailwindcss",
  ],

  // import 문 정렬 설정
  importOrder: [
    "^@/api/(.*)$", // API 관련 임포트
    "^@/ui/(.*)$", // UI 컴포넌트 임포트
    "^@/lib/(.*)$", // 라이브러리 임포트
    "^@/types/(.*)$", // 타입 정의 임포트
    "^@/states/(.*)$", // 상태 관리 관련 임포트
    "^@/utils/(.*)$", // 유틸리티 함수 임포트
    "^@/assets/(.*)$", // 에셋(이미지 등) 임포트
    "^@/components/(.*)$", // 일반 컴포넌트 임포트
    "^@/components/core/(.*)$", // 코어 컴포넌트 임포트
    "^@/hooks/(.*)$", // 커스텀 훅 임포트
    "^@/styles/(.*)$", // 스타일 관련 임포트
    "^[./]", // 상대 경로 임포트
  ],
  importOrderSeparation: true, // import 그룹 간 빈 줄 추가
  importOrderSortSpecifiers: true, // import 구문 내부의 요소들도 정렬
};
