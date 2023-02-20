const {Given, When, Then, Before, After} = require("cucumber");
const puppeteer = require('puppeteer');
const {expect} = require('chai');
const {getText, clickElementBySelector} = require("../../lib/commands");
const { generateRandomInt } = require("../../lib/utils");

Before(async () => {
    const browser = await puppeteer.launch({
        headless: false,
        slowMo: 300
    });
    const page = await browser.newPage();
    this.browser = browser;
    this.page = page;
});

After(async () => {
    if (this.browser) {
        await this.browser.close();
    }
});

Given('The user opens the page {string}', {timeout: 10000}, async (string) => {
    return await this.page.goto(string);
});

When('The user selects the day of the week', {timeout: 10000}, async () => {
    return await clickElementBySelector(this.page, "a:nth-child(4) > span.page-nav__day-week");
  });

When('The user selects the time to watch the movie', {timeout: 10000}, async () => {
    return await clickElementBySelector(this.page, '[data-seance-id="139"]');
});

When('The user chooses a seat in the hall', {timeout: 10000}, async () => {
    const select = generateRandomInt();
    return await clickElementBySelector(this.page, `div:nth-child(${select.row}) > span:nth-child(${select.place})`);
});

When('The user selects and clicks the book button', {timeout: 10000}, async () => {
    return await clickElementBySelector(this.page, 'button');
});

When('The user selects the time to watch the movie in a hall with VIP seats', {timeout: 10000}, async () => {
    return await clickElementBySelector(this.page, '[data-seance-id="94"]');
});

When('The user chooses a VIP seat in the hall', {timeout: 10000}, async () => {
    return await clickElementBySelector(this.page, '.buying-scheme__chair_vip');
  });

Then('The user sees the selected tickets', {timeout: 10000}, async () => {
    const titleSelectedTicket = await getText(this.page, '.ticket__check-title');
    expect(titleSelectedTicket).equal('Вы выбрали билеты:'); 
});