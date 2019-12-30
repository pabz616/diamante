# Diamante

CodeceptJS Framework

## Scope

'```
The following is a javascript-based test framework built on selenium, employing page-object model method and is data-driven. While the codeceptjs website suggests using Puppeteer, this one is using WebDriver

```'

### Resources

'```
website: https://codecept.io/
page-objects: https://codecept.io/pageobjects
commands: https://codecept.io/commands
reporting plug-in: allure
to get details and current version -- npx codeceptjs info

```'

### Structure

'```
./tests - location of all test suites
./pages - where all actions for the tests occur
./locators - where the page objects are found for the actions on ./pages
./performace - where the performance test is located
./output - where the test results, screenshots, and allure reports go
./test-data - split into "environment.js", which stores the website urls (allowing to switch between test environments), and "keywords.js" for search
./codecept.conf.js - configuration file for all things relevant to the framework
./package.json (package-lock.json) - not something to interact with (DO NOT TOUCH!)

```'

### Getting Set up

'```

1. Verify you have the latet version of node & npm - node --version; npm --version (install / update to latest)
2. Create a directory on your desktop -- give it a good name
3. Navigate to the directory and proceed to install codeceptJS -- npm install --save-dev codeceptjs
4. Since we are using WebDriver, install it -- npm install webdriverio --save-dev
5. Initialize the project directory -- npm init -y
6. Initialize codeceptjs -- npx codeceptjs init
7. To create your first test -- npx codeceptjs gt -- follow the prompts
8. To create page-objects for each test -- npx codeceptjs gpo
9. To run tests -- npx codeceptjs run (add "--steps" if you wish to see step-by-step what was tested)
10. To run tests with Allure -- npx codeceptjs run --plugins allure (launch the server: allure serve output)
    to view the report -- allure serve output

```'

### API TESING

'```
Requires Axios - npm install axios
visit - https://codecept.io/helpers/REST/#rest

```'

### Peformance Testing

'```
Requires jmeter on the device (and Blazemeter chrome extension)
To run from the command line, cd to the directory and enter: sh jmeter -n -t [path to jmx file] -l [results file] -e -o [Path to web report folder]
```'
