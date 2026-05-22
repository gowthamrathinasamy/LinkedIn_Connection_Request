import { test } from '@playwright/test';
import fs from 'fs';

const LINKEDIN_LOGIN_URL = 'https://www.linkedin.com/login';


test('send LinkedIn connection requests in batches of 50 per page', async ({ page, context }) => {
  await page.goto(LINKEDIN_LOGIN_URL);
  const usernameInput = page.locator('input[type="email"]');
  const passwordInput = page.locator('input[type="password"]');
  await usernameInput.fill(process.env.LINKEDIN_USERNAME);
  await passwordInput.fill(process.env.LINKEDIN_PASSWORD);
  await page.locator('button[type="submit"]').click();
  const cookies = await context.cookies();
  fs.writeFileSync('cookißes.json', JSON.stringify(cookies, null, 2));
  console.log('Cookies saved to cookies.json');
}
)