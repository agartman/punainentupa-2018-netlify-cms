const { port } = require("../jest-puppeteer.config").server;
const puppeteer = require("puppeteer");
const siteRoot = `http://localhost:${port}`;

describe("Punainen tupa site opens", () => {
  let browser = "";
  let page = "";
  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();

    page.emulate({
      viewport: {
        width: 500,
        height: 2400
      },
      userAgent: ""
    });

    await page.goto(siteRoot);
  });

  it('should be titled "Atte Gartman - Punainen Tupa Solutions Oy"', async () => {
    await expect(page.title()).resolves.toMatch(
      "Atte Gartman - Punainen Tupa Solutions Oy"
    );
  });
  afterAll(async () => {
    browser.close();
  });
});
