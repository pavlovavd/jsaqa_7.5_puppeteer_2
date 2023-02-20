module.exports={
  clickElementBySelector: async(page, selector) => {
      try{
          await page.waitForSelector(selector);
          await page.click(selector);
      } catch(error) {
          throw new Error(`Selector is not clickable: ${selector}`);
      }
  },

  async getText(page, selector) {
      try {
          await page.waitForSelector(selector);
          return await page.$eval(selector, element => element.textContent);
      } catch(error) {
          throw new Error(`Can\'t get text from selector: ${selector}`);
      }
  }
}
