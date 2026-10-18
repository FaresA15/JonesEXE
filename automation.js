
const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    headless: false,
    slowMo: 600
  });

  const page = await browser.newPage();

  try {
    await page.goto('https://test.netlify.app/');

    await page.getByRole('textbox', { name: 'Name' }).fill('Fares');
    await page.getByRole('textbox', { name: 'Email' }).fill('Faresan@example.com');
    await page.getByRole('textbox', { name: 'Phone' }).fill('0583212211');
    await page.getByRole('textbox', { name: 'Company' }).fill('FaresCO');
    await page.getByRole('textbox', { name: 'Website' }).fill('https://FaCompany.com');

    await page.getByLabel('Number of Employees').selectOption({ label: '51-500' });

    await page.screenshot({
      path: 'before-submit.png',
      fullPage: true
    });

    await page.getByRole('button', {name: 'Request a call back'}).click();

    await page.getByText('Thank You!',{exact: true}).waitFor({ state: 'visible' });

    console.log('Reached the Thank You page successfully');
  }
  
  catch (error) {
    console.log('Error:', error.message);
    process.exitCode = 1;} 
    finally {
    await browser.close();}
})();
