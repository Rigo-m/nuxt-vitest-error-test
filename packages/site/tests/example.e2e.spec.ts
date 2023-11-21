import { expect, beforeAll, describe, test, it } from "vitest";
import { setup, createPage, $fetch } from "@nuxt/test-utils";
import { fileURLToPath } from "url";

describe("Example test", async () => {
  await setup({
    rootDir: fileURLToPath(new URL("../", import.meta.url)),
    server: true,
    browser: true,
  });

  test("ensure server", async () => {
    return expect(await $fetch("/")).toContain("<!DOCTYPE html>");
  });

  test("ensure browser", async () => {
    const page = await createPage("/");
    expect(await page.title()).toMatchInlineSnapshot('""');
  });
});
