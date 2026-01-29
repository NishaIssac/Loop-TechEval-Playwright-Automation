import { Page } from '@playwright/test';
export class LoginPage{
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
} 