import Page from './page.cy'
const emailInputLoginPage="[aria-label='loginForm']>div>div input[name='email']"
const passwordInputLoginPage="[name='password']"
const loginButtonLoginPage="[aria-label='loginForm'] button[type='submit']"
const flashNotice ='//*[contains(text(),"That email")]'

class LoginPage{
    clickEmailInputLoginPage(value){
        Page.type(emailInputLoginPage,value)
    }
    clickPasswordInputLoginPage(value){
        Page.type(passwordInputLoginPage,value)
    }
    clickLoginButtonLoginPage(){
        Page.click(loginButtonLoginPage)
    }
    submitLogin(name,password){
        Page.type(emailInputLoginPage,name)
        Page.type(passwordInputLoginPage,password)
        Page.click(loginButtonLoginPage)
    }
    open(){
        Page.visit('https://portal.telnyx.com/')
    }
    getFlashNotice(){
      return flashNotice
    }

}

module.exports = new LoginPage();