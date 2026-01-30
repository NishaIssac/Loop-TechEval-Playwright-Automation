import { Page, Locator } from '@playwright/test';
export class ProjectsPage{
    page: Page;
    constructor (page: Page){
       this.page = page;
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

