import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("/");
});

test.describe("기본 애플리케이션 테스트", () => {
  test("페이지 제목이 올바른지 확인", async ({ page }) => {
    // 제목이 "React + TypeScript + Vite"을 포함하는지 확인
    await expect(page).toHaveTitle(/React \+ TypeScript \+ Vite/);
  });

  test("네비게이션 링크가 올바르게 작동하는지 확인", async ({ page }) => {
    // 홈 페이지에서 시작
    await expect(
      page.getByRole("heading", { name: /홈 페이지/i }),
    ).toBeVisible();

    // About 페이지로 이동
    await page.getByRole("link", { name: /about/i }).click();
    await expect(page).toHaveURL(/\/about/);
    await expect(
      page.getByRole("heading", { name: /about 페이지/i }),
    ).toBeVisible();

    // 다시 홈으로 이동
    await page.getByRole("link", { name: /홈/i }).click();
    await expect(page).toHaveURL(/\/$/);
    await expect(
      page.getByRole("heading", { name: /홈 페이지/i }),
    ).toBeVisible();
  });
});

// 컴포넌트 테스트 예제
test.describe("카운터 컴포넌트 테스트", () => {
  test("카운터가 올바르게 증가하는지 확인", async ({ page }) => {
    // 카운터의 초기값 확인
    const counterElement = page.getByTestId("counter-value");
    await expect(counterElement).toHaveText("0");

    // 카운터 증가 버튼 클릭
    await page.getByRole("button", { name: /카운트 증가/i }).click();
    await expect(counterElement).toHaveText("1");

    // 다시 카운터 증가 버튼 클릭
    await page.getByRole("button", { name: /카운트 증가/i }).click();
    await expect(counterElement).toHaveText("2");
  });
});
