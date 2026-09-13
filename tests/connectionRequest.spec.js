import { test } from '@playwright/test';
import {linkedInData} from "../pages/linkedInData.js";

const LINKEDIN_SEARCH_URL = "https://www.linkedin.com/mynetwork/grow/";


test('send LinkedIn connection requests', async ({ page, context }) => {
  /*const cookies = JSON.parse(
     fs.readFileSync('cookies.json')
   );
   await context.addCookies(cookies);
 */
  await page.goto(LINKEDIN_SEARCH_URL);
  const linkedIn = new linkedInData(page);
  await linkedIn.sendConnectionRequests(10);

});
