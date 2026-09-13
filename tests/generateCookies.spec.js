import { test } from '@playwright/test';
import linkedInData from "../pages/linkedInData.js"

const LINKEDIN_LOGIN_URL = 'https://www.linkedin.com/login';


test('Generate Cookies', async ({ page, context }) => {
  await page.goto(LINKEDIN_LOGIN_URL);
  /*const linkedIn = new linkedInData(page);
  await linkedIn.login(Process.env.LINKEDIN_USERNAME, Process.env.LINKEDIN_PASSWORD);*/
  await page.pause();
  await context.storageState({ path: 'storageState.json' });
  /*const cookies = await context.cookies();
  fs.writeFileSync('cookies.json', JSON.stringify(cookies, null, 2)); */
}
)