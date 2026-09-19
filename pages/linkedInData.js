export class linkedInData {

    constructor(page) {
        this.page = page;
        this.connectButton = page.getByRole('button', { name: /to connect/i });
        this.usernameInput = page.locator('input[type="email"]');
        this.passwordInput = page.locator('input[type="password"]');
        this.submitButton = page.locator('button[type="submit"]');
    }

    //let counter = 0;
    //const count = await connectButton.count();
    async sendConnectionRequests(MaxRequests) {
        let i = 0;
        for (i = 0; i < MaxRequests; i++) {
            await this.connectButton.first().click();
            if (await this.page.getByText("Your invitation to Shenhav was not sent because you have reached the weekly limit for connection invitations. Please try again next week").isVisible()) {
                console.log("Reached weekly limit for connection invitations. Stopping further requests.");
                break;
            }
        }
        console.log(`Connection requests sent successfully! to ${i} users.`);
    }

    async login(username, password) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.submitButton.click();
    }
}