import { expect } from "chai";

describe("Sandbox", () => {
  before(() => {
    browser.url("https://e2e-boilerplates.github.io/sandbox/");
  });

  it("should be on Sandbox", () => {
    const title: string = browser.getTitle();
    const header: string = $("h1").getText();

    expect(title).to.eq("Sandbox");
    expect(header).to.eq("Sandbox");
  });
});
