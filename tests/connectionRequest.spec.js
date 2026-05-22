import { test } from '@playwright/test';
import fs from 'fs';

const LINKEDIN_SEARCH_URL = "https://www.linkedin.com/mynetwork/grow/";


test('send LinkedIn connection requests in batches of 50 per page', async ({ page, context }) => {
  const cookies = JSON.parse(
    fs.readFileSync('cookies.json')
  );
  await context.addCookies(cookies);

  await page.goto(LINKEDIN_SEARCH_URL);
  const connectButton = pagßße.getByRole('button', { name: /to connect/i });
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
});
