# gateway-cypress-ui-framework

## Cypress Software Requirement

    Node JS: Have Node.js 12 or 14 or else any higher version than this installed https://nodejs.org/en
    Yarn: You can also install cypress using yarn package manager.  https://yarnpkg.com/getting-started/install

Corepack is included by default with all Node.js installs, but is currently opt-in. To enable it, run the following command As ADMIN:

---

 `corepack enable` 

---


## Cypress Automation Test Framework
1. First clone the project from our (this) repository

YARN:

2. Run `yarn add -D` command 
3. And run `yarn add -D cypress`. Now, node package manager (npm) will download Cypress in your local machine.  
4. Run `yarn test` to start Cypress GUI.
--- 

NPM:
---

2. Run `npm install` command 
3. And run `npm install cypress --save-dev`. Now, node package manager (npm) will download Cypress in your local machine.  
4. Run `npx cypress open` to start Cypress GUI.
--- 

# Cypress-Automation-Framework
---
Cypress is a tool for testing modern web applications. It aims to address the pain points developers or QA engineers face while testing an application. Cypress is a more developer-friendly tool that uses a unique DOM manipulation technique and operates directly in the browser. Cypress is being used by more people every year and people with cypress are rising in demand. When starting a new project, the [Cypress Documentation](https://docs.cypress.io/guides/overview/why-cypress) is highly recommended as it will guide you with clear explanation and examples. 

## Some advantages of Cypress
1. Cypress is a modern tool
2. Cypress is simple and fast to set up
3. Has the capability to debug and implement vey faster
4. Cypress delivers quick test execution
5. Has an active community
6. Combines functional testing with API inspection

## Cypress limitations
+ Cypress commands run inside of a browser.
+ Each test is bound to a single origin.
+ There will never be support for multiple browser tabs.
+ Cypress is not a general purpose automation tool.
+ You cannot use Cypress to drive two browsers at the same time.


## E2E                                                               
+ /cypress.config.js 
+ /cypress/support/commands.js
+ /cypress/support/e2e.js

## Component:

+ /cypress.config.js
+ /cypress/support/commands.js
+ /cypress/support/component.js
+ /cypress/support/component-index.html


## Cypress folders


## e2e:
The main folder where we store our test files, the 'Cypress App' will look into this folder in order to locate test file(s).

## fixtures:
Fixture folder represents the place where you can store your JSON files and these JSON files will be used for their marks when you're going to work with APIs. Where we keep our test data objects, mocked objects and any other data which we need for our tests (mostly JSON files).

## support:
Support folder is for every other necessary stuff, files-folders, to execute your code. The under this folder we have two files: command.js and e2e.js.

## command.js:
This is the place where we will keep our custom commands or common commands. Some commands that can be shared across the framework, for example, log in function. This file is where you can add your methods and you can provide name for the code which will be reusable in different tests. Has the ability to override Cypress functions.

## cypress.config.js:
Created in the projects root directory, enables us to change/override settings. This is the place where we configure the behavior of the framework, different parameters and how to configure Cypress. 

## node_modules:
Used to house dependecies (packages).

## videos:
Used to store videos of test recordings.

## screenshots:
Used to store images of specific test(s).

## e2e.js:
The first file which Cypress investigates; any imports and additional libraries(Plugins).


## How to Configure external data file
Cypress allows you to pass in [--environment variables](https://docs.cypress.io/guides/guides/environment-variables#Option-4-env) as options when using CLI tool. Values here will overwrite all other conflicting environment variables. Multiple values must be separated by a comma, not a space. You can use the --env argument for [cypress run.](https://docs.cypress.io/guides/guides/command-line#cypress-run)

# How to run cypress test and get the Test Report

`npx cypress run` to run everything
`npx cypress run --spec=cypress/e2e/[ADD_FOLDER]`  to run a specific folder


# How to run cypress test in parallel mode

By Default, the project is already setup to run in parallel mode using Cypress-Parallel dependency and using the command "cypress-parallel -d cypress/e2e/[FOLDER] -t 2 -s run", you can lso use the shortcut bellow to run parallel tests after you choose the folder

`yarn cy:parallel` 

