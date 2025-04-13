#!/usr/bin/env node

import { execSync } from "child_process";
import path from "path";
import fs from "fs-extra";
import { fileURLToPath } from "url";
import chalk from "chalk";

// __dirname 구현 (ES 모듈에서는 기본적으로 제공되지 않음)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(chalk.blue("📦 rendardev React 프로젝트 생성기"));

// 프로젝트 이름 가져오기
const projectName = process.argv[2];

if (!projectName) {
  console.log(chalk.red("❌ 프로젝트 이름을 입력해주세요."));
  console.log(chalk.yellow("예: yarn create rendardev-react my-app"));
  process.exit(1);
}

const currentDir = process.cwd();
const projectDir = path.resolve(currentDir, projectName);

// 프로젝트 디렉토리 생성
if (fs.existsSync(projectDir)) {
  console.log(chalk.red(`❌ '${projectName}' 디렉토리가 이미 존재합니다.`));
  process.exit(1);
}

async function createProjectFiles() {
  try {
    console.log(chalk.green(`🚀 ${projectName} 프로젝트를 생성하는 중...`));

    // 빈 디렉토리 생성
    fs.mkdirSync(projectDir, { recursive: true });

    // 패키지 설치를 위한 임시 package.json 생성
    const tempPackageJson = {
      name: projectName,
      version: "0.1.0",
      private: true,
    };

    fs.writeFileSync(
      path.join(projectDir, "package.json"),
      JSON.stringify(tempPackageJson, null, 2)
    );

    // React 템플릿 패키지 설치
    console.log(chalk.yellow("📥 템플릿 패키지를 설치하는 중..."));

    try {
      execSync("npm install @rendardev/react-template@latest --no-save", {
        cwd: projectDir,
        stdio: "pipe",
      });
    } catch (error) {
      console.log(chalk.red("❌ 템플릿 패키지 설치 중 오류가 발생했습니다."));
      console.error(error.message);
      process.exit(1);
    }

    // 템플릿 파일 복사
    console.log(chalk.yellow("📋 템플릿 파일을 복사하는 중..."));

    const templateDir = path.join(
      projectDir,
      "node_modules",
      "@rendardev",
      "react-template"
    );
    const filesToCopy = [
      "index.html",
      "vite.config.ts",
      "tsconfig.json",
      ".eslintrc.js",
      ".prettierrc",
      "README.md",
    ];

    // src 디렉토리 복사
    fs.copySync(path.join(templateDir, "src"), path.join(projectDir, "src"));

    // 개별 파일 복사
    for (const file of filesToCopy) {
      if (fs.existsSync(path.join(templateDir, file))) {
        fs.copySync(path.join(templateDir, file), path.join(projectDir, file));
      }
    }

    // 최종 package.json 생성
    console.log(chalk.yellow("📝 package.json 생성 중..."));

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
        "@tanstack/react-query": "^5.24.1",
        "@tanstack/react-query-devtools": "^5.24.1",
        zustand: "^4.5.1",
        axios: "^1.6.7",
      },
      devDependencies: {
        "@rendardev/eslint-config": "^1.0.0",
        "@rendardev/prettier-config": "^1.0.0",
        "@rendardev/tsconfig": "^1.0.0",
        "@types/react": "^18.2.0",
        "@types/react-dom": "^18.2.0",
        "@vitejs/plugin-react": "^4.3.4",
        eslint: "^9.0.0",
        prettier: "^3.2.5",
        typescript: "^5.8.2",
        vite: "^6.0.7",
      },
    };

    fs.writeFileSync(
      path.join(projectDir, "package.json"),
      JSON.stringify(packageJson, null, 2)
    );

    // 임시 node_modules 삭제
    fs.removeSync(path.join(projectDir, "node_modules"));

    // 완료 메시지 출력
    console.log(
      chalk.green(`
✅ ${projectName} 프로젝트가 성공적으로 생성되었습니다!

다음 명령어로 의존성을 설치하고 개발 서버를 실행하세요:

  cd ${projectName}

  # npm 사용
  npm install
  npm run dev

  # 또는 yarn 사용
  yarn
  yarn dev

  # 또는 pnpm 사용
  pnpm install
  pnpm dev
    `)
    );
  } catch (error) {
    console.log(chalk.red("❌ 프로젝트 생성 중 오류가 발생했습니다:"));
    console.error(error);
    process.exit(1);
  }
}

createProjectFiles();
