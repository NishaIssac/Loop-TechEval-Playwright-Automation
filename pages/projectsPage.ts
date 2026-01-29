import { Page, Locator } from '@playwright/test';
export class ProjectsPage{
    page: Page;
    constructor (page: Page){
       this.page = page;
    }
//Locator Strings
//Input fields
userNameField = '#username';
passwordField = '#password';
//Buttons
signInButton = '//button[@type="submit"]'; //button[text()='Sign in']
//Methods
//Navigate to the Demo App
async navigateTologin(){
    await this.page.goto( 'https://animated-gingersnap-8cf7f2.netlify.app/');
}
//Login into the App
async performLogin(username : string, password : string){
    await this.page.fill(this.userNameField,username);
    await this.page.fill(this.passwordField, password);
    await this.page.click(this.signInButton);
}
//To select any of the projects
navigateToApplication(appName: string) {
  return this.page.click(`//h2[contains(text(), "${appName}")]`);
}
//To select any of the columns
getColumn(columnName: string) {
  return this.page.locator(`//h2[text()="${columnName}"]/parent::div`);
 }
//To select any task
getTaskCard(columnName: string, taskName: string): Locator {
  return this.getColumn(columnName).locator(`//h3[text()="${taskName}"]/parent::div`);
}
  //To select any tag inside a task card
getTags(taskCard: Locator): Locator {
  return taskCard.locator('div.flex.flex-wrap.gap-2.mb-3 span');
  }
}

