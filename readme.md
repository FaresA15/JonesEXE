##### Jones Automation Exercise

# Overview
This project automates the ACME contact form using JavaScript and Playwright.

# Technologies
- JavaScript
- Node.js
- Playwright
- Chromium

# Automation Flow
1. Open https://test.netlify.app/
2. Fill in the Name, Email, Phone, Company, and Website fields.
3. Change the Number of Employees to 51-500 (Bonus).
4. Capture a full-page screenshot before submitting the form.
5. Click the "Request a call back" button.
6. Verify that the Thank You page is displayed.
7. Print a success message to the console.

# Installation

Install the dependencies:
1. npm install
2. Install the Chromium browser:
3. npx playwright install chromium


# Run the Automation

node automation.js


# Expected Result

The automation should complete successfully and print:

text:
Number of Employees changed to 51-500!
Screenshot saved successfully!
Successfully reached the Thank You page!

## Screenshot

The screenshot is saved as `before-submit.png` in the project directory before the form is submitted.