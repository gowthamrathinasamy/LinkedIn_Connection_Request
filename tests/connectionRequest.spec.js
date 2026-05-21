import { test } from '@playwright/test';

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
  
  
});
