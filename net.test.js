const { expect } = require("chai");
const { getText, clickElementBySelector } = require("./lib/commands");
const { generateRandomInt } = require("./lib/utils");
let page;

beforeEach(async () => {
    page = await browser.newPage();
});

afterEach(() => {
    page.close();
});

    describe("Booking movie tickets", () => {

        beforeEach(async () => {
            await page.goto("http://qamid.tmweb.ru/client/index.php");
        });

        test("Successful booking of a movie ticket", async () => {
            await clickElementBySelector(page, 'a:nth-child(4) > span.page-nav__day-week');
            await clickElementBySelector(page, '[data-seance-id="139"]');
            const select = generateRandomInt();
            await clickElementBySelector(page, `div:nth-child(${select.row}) > span:nth-child(${select.place})`);
            await clickElementBySelector(page, 'button');
            const titleSelectedTicket = await getText(page, '.ticket__check-title');
            expect(titleSelectedTicket).equal('Вы выбрали билеты:');
            // await clickElementBySelector(page, 'button');
            // const titleTicket = await getText(page, '.ticket__check-title');
            // expect(titleTicket).equal('Электронный билет');
        });

        test("successful booking of a movie ticket to a VIP place", async () => {
            await clickElementBySelector(page, 'a:nth-child(2) > span.page-nav__day-week');
            await clickElementBySelector(page, '[data-seance-id="94"]');
            await clickElementBySelector(page, '.buying-scheme__chair_vip');
            await clickElementBySelector(page, 'button');
            const titleSelectedTicket = await getText(page, '.ticket__check-title');
            expect(titleSelectedTicket).equal('Вы выбрали билеты:');
            // await clickElementBySelector(page, 'button');
            // const titleTicket = await getText(page, '.ticket__check-title');
            // expect(titleTicket).equal('Электронный билет');
        });

        test.only("Unsuccessful repeated booking of a movie ticket", async () => {
            await clickElementBySelector(page, 'a:nth-child(3) > span.page-nav__day-week');
            await clickElementBySelector(page, '[data-seance-id="129"]');
            const select = generateRandomInt();
            await clickElementBySelector(page, `div:nth-child(${select.row}) > span:nth-child(${select.place})`);
            await clickElementBySelector(page, 'button');
            const titleSelectedTicket = await getText(page, '.ticket__check-title');
            expect(titleSelectedTicket).equal('Вы выбрали билеты:');
            await clickElementBySelector(page, 'button');
            const titleTicket = await getText(page, '.ticket__check-title');
            expect(titleTicket).equal('Электронный билет');
            await page.goto("http://qamid.tmweb.ru/client/index.php");
            await clickElementBySelector(page, 'a:nth-child(3) > span.page-nav__day-week');
            await clickElementBySelector(page, '[data-seance-id="129"]');
            await clickElementBySelector(page, `div:nth-child(${select.row}) > span:nth-child(${select.place})`);
            await clickElementBySelector(page, 'button');
            await getText(page, '.ticket__check-title');
        });

    });
