# Loop-TechEval-Playwright-Automation
This is a data- driven Playwright test suite that validates the Projects, Tasks and the Tags under them.
The project demonstrates the Page Object Model(POM) architecture, with dynamic locators and JSON-driven test execution.

How the Test Works:
The loginData.json has all the data to perform all the scenarios. 
The test runner loops through all the scenarios and performs
1.	 Login
2.	Navigate to the correct project
3.	Locate the correct column
4.	Locate the correct task card and
5.	Validate tags
So, there are no additional code changes needed when new test cases have been added

I have 2 POM files: loginPage and projectPage
The loginPage handles:
•	Navigation to login page
•	Filling username/password and 
•	Clicking Sign In

The projectPage handles:
•	Navigating to any project
• Selecting any column
•	Selecting any task card and
•	Confirming the tags


