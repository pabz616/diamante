let demo = require('../test-data/environment')

const { I } = inject();

module.exports = {
  //LOCATORS
  loginForm:{
    title: "//h2[contains(.,'Login Page')]",
    usn: "#username",
    pwd: "#password",
    submit:"//button[@class='radius']"
  },
  
  //COMMANDS
  submitLogin(){
    I.waitForVisible(this.loginForm.title);
    I.fillField(this.loginForm.usn, demo.email_address);
    I.fillField(this.loginForm.pwd, demo.password);
    I.click(this.loginForm.submit);
  },
}
