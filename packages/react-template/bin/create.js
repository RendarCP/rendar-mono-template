#!/usr/bin/env node

const { execSync } = require("child_process");
const path = require("path");
const fs = require("fs");

// 프로젝트 이름 가져오기
const projectName = process.argv[2];

if (!projectName) {
  console.error("프로젝트 이름을 입력해주세요.");
  console.error("예: yarn create rendardev-react my-app");
  process.exit(1);
}

const currentDir = process.cwd();
const projectDir = path.resolve(currentDir, projectName);

// 프로젝트 디렉토리 생성
if (fs.existsSync(projectDir)) {
  console.error(`'${projectName}' 디렉토리가 이미 존재합니다.`);
  process.exit(1);
}

fs.mkdirSync(projectDir, { recursive: true });

// 템플릿 파일들을 새 프로젝트로 복사
function copyTemplateFiles() {
  // 템플릿 파일 경로
  const templateDir = path.join(__dirname, "..");

  // 복사할 파일 목록
  const filesToCopy = [
    "index.html",
    "tsconfig.json",
    "vite.config.ts",
    ".eslintrc.json",
    ".prettierrc",
    "README.md",
  ];

  // src 디렉토리 복사
  fs.mkdirSync(path.join(projectDir, "src"), { recursive: true });
  copyDir(path.join(templateDir, "src"), path.join(projectDir, "src"));

  // 개별 파일 복사
  for (const file of filesToCopy) {
    const sourcePath = path.join(templateDir, file);
    const targetPath = path.join(projectDir, file);

    if (fs.existsSync(sourcePath)) {
      fs.copyFileSync(sourcePath, targetPath);
    }
  }
}

// 디렉토리 복사 함수
function copyDir(source, target) {
  // 디렉토리가 없으면 생성
  if (!fs.existsSync(target)) {
    fs.mkdirSync(target, { recursive: true });
  }

  // 소스 디렉토리의 모든 파일 가져오기
  const files = fs.readdirSync(source);

  // 각 파일 복사
  for (const file of files) {
    const sourcePath = path.join(source, file);
    const targetPath = path.join(target, file);

    const stats = fs.statSync(sourcePath);

    if (stats.isDirectory()) {
      // 디렉토리면 재귀적으로 복사
      copyDir(sourcePath, targetPath);
    } else {
      // 파일이면 복사
      fs.copyFileSync(sourcePath, targetPath);
    }
  }
}

// 새 package.json 생성
function createPackageJson() {
  const packageJson = {
    name: projectName,
    version: "0.1.0",
    type: "module",
    scripts: {
      dev: "vite",
      build: "tsc && vite build",
      preview: "vite preview",
      lint: "eslint src --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
      format: 'prettier --write "src/**/*.{ts,tsx,css,md}"',
    },
    dependencies: {
      react: "^19.0.0",
      "react-dom": "^19.0.0",
      "react-router-dom": "^7.4.1",
    },
    devDependencies: {
      "@vitejs/plugin-react": "^4.3.4",
      eslint: "^9.0.0",
      typescript: "^5.8.2",
      vite: "^6.0.7",
    },
  };

  fs.writeFileSync(
    path.join(projectDir, "package.json"),
    JSON.stringify(packageJson, null, 2),
  );
}

// 실행
console.log(`${projectName} 프로젝트를 생성하는 중...`);
copyTemplateFiles();
createPackageJson();

// 의존성 설치
console.log("의존성을 설치하는 중...");

try {
  execSync("npm install", { cwd: projectDir, stdio: "inherit" });
  console.log("npm을 사용하여 의존성 설치 완료");
} catch (error) {
  console.error("npm 설치 중 오류가 발생했습니다. yarn을 시도합니다...");
  try {
    execSync("yarn", { cwd: projectDir, stdio: "inherit" });
    console.log("yarn을 사용하여 의존성 설치 완료");
  } catch (error) {
    console.error("yarn 설치 중 오류가 발생했습니다. pnpm을 시도합니다...");
    try {
      execSync("pnpm install", { cwd: projectDir, stdio: "inherit" });
      console.log("pnpm을 사용하여 의존성 설치 완료");
    } catch (error) {
      console.error(
        "의존성 설치 중 오류가 발생했습니다. 수동으로 설치해주세요.",
      );
    }
  }
}

console.log(`
✅ ${projectName} 프로젝트가 성공적으로 생성되었습니다!

다음 명령어로 개발 서버를 실행할 수 있습니다:
  cd ${projectName}
  npm run dev
또는
  cd ${projectName}
  yarn dev
또는
  cd ${projectName}
  pnpm dev
`);
