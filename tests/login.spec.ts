import {test, expect} from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import loginData from '../data/loginData.json';
import { ProjectsPage} from '../pages/projectsPage';
test.describe('Demo App Login',()=>{
     for (const scenario of loginData){
test(scenario.name, async({ page })=>{
    const loginPage =new LoginPage(page);
    await loginPage.navigateTologin();
    await loginPage.performLogin(scenario.username , scenario.password);
    if (scenario.name === 'valid login') {
    await expect(page.getByText('Projects')).toBeVisible();
}
    if (scenario.name === 'invalid login') {
    await expect(page.getByText('Invalid username or password')).toBeVisible();
}
});   
}
});
test.describe('Verify task cards and tags across projects', () => {
  for (const scenario of loginData) {
    if (scenario.taskName && scenario.column && scenario.application) {
      test(scenario.name, async ({ page }) => {
        const loginPage = new LoginPage(page);
        const projectsPage = new ProjectsPage(page);
        await loginPage.navigateTologin();
        await loginPage.performLogin(scenario.username, scenario.password);
        await projectsPage.navigateToApplication(scenario.application);
        const taskCard = projectsPage.getTaskCard(scenario.column, scenario.taskName);
        await expect(taskCard).toBeVisible();
        const tags = projectsPage.getTags(taskCard);
        await expect(tags).toContainText(scenario.expectedTags);
      });
    }
  }
});
