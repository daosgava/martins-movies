import { test, expect } from "@playwright/test";

test("should have a title", async ({ page }) => {
	await page.goto("http://localhost:3000/");
	await expect(page.locator("h2")).toContainText("Martin's Movie Finder");
});

test("should return a list of movies", async ({ page }) => {
	await page.goto("http://localhost:3000/");
	await page.fill('input[placeholder="Search for movies"]', "pokemon");
	await page.waitForSelector("h3");
	await expect(page.locator("h3")).toHaveCount(20);
});

test("should return movies related to the search", async ({ page }) => {
	await page.goto("http://localhost:3000/");
	await page.fill('input[placeholder="Search for movies"]', "Pokémon");
	await page.waitForSelector("h3");
	const results = await page.locator("h3").all();
	for (const result of results) {
		await expect(result).toContainText("Pokémon");
	}
});
