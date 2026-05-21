import { test } from '@playwright/test';
<<<<<<< HEAD
import fs from 'fs';

const LINKEDIN_SEARCH_URL = "https://www.linkedin.com/mynetwork/grow/";


test('send LinkedIn connection requests in batches of 50 per page', async ({ page, context }) => {
  const cookies = JSON.parse(
    fs.readFileSync('cookies.json')
  );
  await context.addCookies(cookies);

  await page.goto(LINKEDIN_SEARCH_URL);
  const connectButton = page.getByRole('button', { name: /to connect/i });
  //let counter = 0;
  //const count = await connectButton.count();
  let i = 0;
  for (let i = 0; i < 100; i++) {
    await connectButton.first().click();
    i++;
    if (page.getByText("Your invitation to Shenhav was not sent because you have reached the weekly limit for connection invitations. Please try again next week").isVisible()) {
      console.log("Reached weekly limit for connection invitations. Stopping further requests.");
      break;
    }
  }
  console.log(`Connection requests sent successfully! to ${i} users.`);
=======

const LINKEDIN_LOGIN_URL = 'https://www.linkedin.com/login';
const LINKEDIN_SEARCH_URL = "https://www.linkedin.com/mynetwork/grow/";


test('send LinkedIn connection requests in batches of 50 per page', async ({ page }) => {
  await page.goto(LINKEDIN_LOGIN_URL);
 const usernameInput = page.locator('input[type="email"]');
const passwordInput = page.locator('input[type="password"]');
  await usernameInput.fill(process.env.LINKEDIN_USERNAME);
  await passwordInput.fill(process.env.LINKEDIN_PASSWORD);
  await page.locator('button[type="submit"]').click();
  

  await page.goto(LINKEDIN_SEARCH_URL);
  const connectButton = page.getByRole('button', { name: /to connect/i });
  const connectButtonCount = await connectButton.count();

  for (let i = 0; i < connectButtonCount; i++) {
    const button = connectButton.nth(i);
    if (await button.isEnabled()) {
      await button.click();
      console.log(`Connect button ${i + 1} Clicked`);
    } else {
      console.log(`Connect button ${i + 1} is not clickable`);
    }
  } 
  
  
>>>>>>> 6336d44 (Send Connect to 1 memeber on LinkedIn)
});
