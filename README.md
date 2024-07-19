## Description

**_This project contains UI Automation for Amazon Website**

   - Javascript is used as the programming language.
   - Playwright library for UI automation.


## Installation

1. Download and install NodeJs(https://nodejs.org/en/download/)
2. Install VS Code
3. Download/Clone the repo to your system.
4. Open the repo in VS code and open terminal
5. run `npm run install-dependency` -- this will install the dependencies and `node_modules` folder will be created


## Getting started with UI Automation

1. Approach to automate UI tests
    - We are using POM(Page object model) approach
    - Create Pages classes for respective features under Pages
    - Finally create a tests file that will have the test cases.
2. Folder structure as below:
    - We need to work on `root` folder:
        1. `PageObjects` folder - Declare all the pages classes related to feature.
        2. `tests` folder - Test cases divided differnet pages        


## Configuration
1. Update login.json with your Amazon test account credentials.
    - To update credentials:
        1.  Open `login.json from` from  `Data folder` present in root directry.
        2.  Replace `your_amazon_test_account_username` with your actual Amazon test account username.
        3.  Replace `your_amazon_test_account_password` with your actual Amazon test account password.
        4.  User should disable two step authentication

## Running Test Cases

1. Approach to execute only login test cases:
    - Command to execute the test case locally `npm run test-login`
2. Approach to execute only wishlist test cases:
    - Command to execute the test case locally `npm run test-wishlist`
3. Approach to execute only checkout test cases:
    - Command to execute the test case locally `npm run test-checkout`
4. Approach to execute only productSearchPage test cases:
    - Command to execute the test case locally `npm run test-productSearchPage`
5. Approach to execute all the test cases:
    - Command to execute all the test case locally `npm run test-all`


## Links for the Test Documentation

1. Automation Testing:
    -https://docs.google.com/spreadsheets/d/1sPdZTfx6CgYdfvfdUSIOypU7PdXSPpgI5PbMMW6hY0k/edit?gid=0#gid=0
2. Manual Testing:
    -https://docs.google.com/spreadsheets/d/17vfGTFr1fq2r-3fWFmiNT1Dzqtmr57oNNBOA1zrthrU/edit?gid=0#gid=0

