# Sauce Demo Test Automation 🎉

Automated testing of the Sauce Demo page using the Playwright test framework with JavaScript. Test framework use translations with 2 dictionaries English and French. Locally can be run by choosing particulat process.env vairable, English translations, used by default.


## Tech/framework used 🔧

| Tech                                                    | Description                              |
| ------------------------------------------------------- | ---------------------------------------- |
| Playwright                  | Test Automation Framework   |
| JavaScript                  | Just JavaScript ;)   |

## Installation 💾

1. **Install Node.js:**
   Download and install Node.js from [https://nodejs.org/](https://nodejs.org/)

2. **Clone the repository:**
   ```bash
   git clone [repository_url]
   cd [repository_folder]
   npm init playwright@latest
## Available commands

| Script command / variable           | Comand                   |Description|
| ------------------------- | ----------------------------- | --- |
| `$env:LANGUAGE='en'`||Environment variable to select English translations, used by default.|
| `$env:LANGUAGE='fr'`||Environment variable to select French translations, will fail as expected, page is only displayed in English.|
| `npm test npxplaywright test` | npx playwright test|Runs the end-to-end tests.|
| `npm test_ui`| playwright test --ui|Starts the interactive UI mode.|
| `npx playwright test --debug`|npx playwright test --debug|Runs the tests in debug mode.|

## CI/CD 🔱
This project has CI/CD configured using GitHub Actions.

**Scheduled Run:**
Daily Schedule: The workflow is scheduled to run every day at midnight.

**Workflow Triggers:**
1. On Push: Triggered on every push to the main branch.
2. On Pull Request: Triggered on pull requests to the main branch.
3. Manual Trigger: Manually trigger the workflow with options to specify a particular test suite file.

**Test Job:** Runs Playwright tests on the latest version of Ubuntu with timeout: 60 minutes.

**Job Steps:**
1. Checkout the repository.
2. Set up Node.js.
3. Install project dependencies.
4. Install Playwright browsers.
5. Run Playwright tests. Optionally, specify a test suite file if provided in the manual trigger.
6. Upload Playwright test artifacts (reports).

## How to run test from CI/CD

1. Go to https://github.com/szymonszymon1/sauceDemoTestAutomation/actions
2. From Actions, left menu select Playwright test
3. On right site click on Run workflow button
4. Select file to run specific test suite or leave empty to run all
5. Click on green Run workflow button
6. After test execution test report will be available to download from latest workflow

## Project documentation
In the "documentation" folder, you'll find files named "ManualTestCases.txt," providing descriptions for basic functional tests. Additionally, there is a "TestStrategy.txt" file outlining the high-level test strategy for the saucedemo website. The tests are written following the Behavior-Driven Development (BDD) approach. In the initial tests, there is a tag associating the manual test with the automated test through a sample ID.