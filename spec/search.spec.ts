import { expect } from "chai";

let searchBox: any;

describe("google search", () => {
  before(() => {
    browser.url("https://www.google.com/");
  });

  it("should be on google search page", () => {
    searchBox = $(".gLFyf.gsfi");
    searchBox.waitForDisplayed(5000);

    const title: string = browser.getTitle();
    expect(title).to.eq("Google");
  });

  it("should search for Cheese!", () => {
    expect(searchBox.isDisplayed()).to.eq(true);
    searchBox.addValue("Cheese!");

    const googleSearchButton = $(".gNO89b");
    googleSearchButton.waitForDisplayed(5000);
    googleSearchButton.click();
  });

  it('the page title should start with "Cheese!"', () => {
    const resultStats = $("#resultStats");
    resultStats.waitForDisplayed(5000);

    const title: string = browser.getTitle();
    const words = title.split(" ");
    expect(words[0]).to.eq("Cheese!");
  });
});
