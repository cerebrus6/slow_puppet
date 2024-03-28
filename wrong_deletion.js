// cerebrus6
const puppeteer = require('puppeteer'); // v22.0.0 or later

// Function to introduce a delay
function delay(time) {
    return new Promise(function(resolve) {
        setTimeout(resolve, time);
    });
}

(async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    const timeout = 5000;
    page.setDefaultTimeout(timeout);

    {
        const targetPage = page;
        await targetPage.setViewport({
            width: 986,
            height: 645
        })
}
await delay(500);
{        const targetPage = page;
        const promises = [];
        const startWaitingForEvents = () => {
            promises.push(targetPage.waitForNavigation());
        }
        startWaitingForEvents();
        await targetPage.goto('https://tester-task.vercel.app/');
        await Promise.all(promises);
}
await delay(500);
{        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(New task)'),
            targetPage.locator('#input-31'),
            targetPage.locator('::-p-xpath(//*[@id=\\"input-31\\"])'),
            targetPage.locator(':scope >>> #input-31')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 120.203125,
                y: 20.5,
              },
            });
}
await delay(500);
{        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(New task)'),
            targetPage.locator('#input-31'),
            targetPage.locator('::-p-xpath(//*[@id=\\"input-31\\"])'),
            targetPage.locator(':scope >>> #input-31')
        ])
            .setTimeout(timeout)
            .fill('tezt1');
}
await delay(500);
{        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria( appended action)'),
            targetPage.locator('div:nth-of-type(3) button'),
            targetPage.locator('::-p-xpath(//*[@id=\\"app\\"]/div/main/div/div/div[3]/div/div/div/div[2]/div/button)'),
            targetPage.locator(':scope >>> div:nth-of-type(3) button')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 16.8125,
                y: 13.5,
              },
            });
}
await delay(500);
{        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(New task)'),
            targetPage.locator('#input-31'),
            targetPage.locator('::-p-xpath(//*[@id=\\"input-31\\"])'),
            targetPage.locator(':scope >>> #input-31')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 150.203125,
                y: 17.5,
              },
            });
}
await delay(500);
{        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(New task)'),
            targetPage.locator('#input-31'),
            targetPage.locator('::-p-xpath(//*[@id=\\"input-31\\"])'),
            targetPage.locator(':scope >>> #input-31')
        ])
            .setTimeout(timeout)
            .fill('test2');
}
await delay(500);
{        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria( appended action)'),
            targetPage.locator('div:nth-of-type(3) button'),
            targetPage.locator('::-p-xpath(//*[@id=\\"app\\"]/div/main/div/div/div[3]/div/div/div/div[2]/div/button)'),
            targetPage.locator(':scope >>> div:nth-of-type(3) button')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 12.8125,
                y: 12.5,
              },
            });
}
await delay(500);
{        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(New task)'),
            targetPage.locator('#input-31'),
            targetPage.locator('::-p-xpath(//*[@id=\\"input-31\\"])'),
            targetPage.locator(':scope >>> #input-31')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 87.203125,
                y: 18.5,
              },
            });
}
await delay(500);
{        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(New task)'),
            targetPage.locator('#input-31'),
            targetPage.locator('::-p-xpath(//*[@id=\\"input-31\\"])'),
            targetPage.locator(':scope >>> #input-31')
        ])
            .setTimeout(timeout)
            .fill('tezt3');
}
await delay(500);
{        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria( appended action)'),
            targetPage.locator('div:nth-of-type(3) button'),
            targetPage.locator('::-p-xpath(//*[@id=\\"app\\"]/div/main/div/div/div[3]/div/div/div/div[2]/div/button)'),
            targetPage.locator(':scope >>> div:nth-of-type(3) button')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 8.8125,
                y: 11.5,
              },
            });
}
await delay(500);
{        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('span > div:nth-of-type(3)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"app\\"]/div/main/div/div/div[2]/span/div[3])'),
            targetPage.locator(':scope >>> span > div:nth-of-type(3)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 216.203125,
                y: 27.5,
              },
            });
}
await delay(500);
{        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div:nth-of-type(3) > button i'),
            targetPage.locator('::-p-xpath(//*[@id=\\"app\\"]/div/main/div/div/div[2]/span/div[3]/button/span/i)'),
            targetPage.locator(':scope >>> div:nth-of-type(3) > button i')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 13.8125,
                y: 12.5,
              },
            });
}
await delay(500);
{        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('span > div:nth-of-type(2)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"app\\"]/div/main/div/div/div[2]/span/div[2])'),
            targetPage.locator(':scope >>> span > div:nth-of-type(2)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 262.203125,
                y: 31.5,
              },
            });
}
await delay(500);
{        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div.tw-max-h-\\[300px\\] div:nth-of-type(2) > button i'),
            targetPage.locator('::-p-xpath(//*[@id=\\"app\\"]/div/main/div/div/div[2]/span/div[2]/button/span/i)'),
            targetPage.locator(':scope >>> div.tw-max-h-\\[300px\\] div:nth-of-type(2) > button i')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 9.8125,
                y: 13.5,
              },
            });
    }

await delay(2000);
await browser.close();

})().catch(err => {
    console.error(err);
    process.exit(1);
});
