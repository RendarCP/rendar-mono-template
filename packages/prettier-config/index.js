module.exports = {
  printWidth: 80, // 한 줄의 최대 길이를 80자로 제한
  tabWidth: 2, // 들여쓰기 시 탭 너비를 2칸으로 설정
  useTabs: false, // 들여쓰기에 탭 대신 스페이스 사용
  semi: true, // 문장 끝에 세미콜론 추가
  singleQuote: true, // 작은따옴표 사용
  jsxSingleQuote: true, // JSX에서도 작은따옴표 사용
  quoteProps: "as-needed", // 객체의 속성에 필요한 경우에만 따옴표 추가
  trailingComma: "es5", // ES5에서 유효한 후행 쉼표 추가 (객체, 배열 등)
  bracketSpacing: true, // 객체 리터럴의 중괄호 사이에 공백 추가 ({ foo: bar })
  arrowParens: "avoid", // 화살표 함수의 매개변수가 하나일 때 괄호 생략 (x => x)
  proseWrap: "preserve", // 마크다운 등의 prose 텍스트의 줄바꿈을 보존
  endOfLine: "auto", // 운영체제에 따라 자동으로 개행 문자 설정
  htmlWhitespaceSensitivity: "css", // CSS display 속성 값에 따라 HTML 공백 처리
  embeddedLanguageFormatting: "off", // 템플릿 리터럴 내부 등의 포매팅 비활성화
};
