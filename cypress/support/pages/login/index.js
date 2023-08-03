import actionsPage from '../../actions'

let loginPage = "/login.aspx"

let loginInput = '#Login1_UserName'
let passwordInput = '#Login1_Password'
let loginButton = '#Login1_LoginButton'
let bannerImage = '#LogoImage'
let errorMessageToast = "td[style='color:Red;']"
let forgotPasswordLink = '#Login1_PasswordRecoveryLink' 
// private forgotPasswordLink2 = cy.get('#Login1_PasswordRecoveryLink')

class LoginPage {


    login(userLogin, userPassword) {
        cy.get(loginInput).type(userLogin);
        cy.get(passwordInput).type(userPassword);
        actionsPage.click(loginButton)
        // cy.get('#Login1_LoginButton').click();
    }

    goToLoginPage(){
        cy.visit(loginPage);

    }

    checkHomePage(){

        cy.iframe('#bannerFrame')
        .as('bannerFrame')
        .find('.bannerFlex div.user-info-container div:nth-child(1)')
        .should('contains.text', 'Welcome, ')
    }

    checkErrorLoginMessage(){

        actionsPage.elementShouldContainText(errorMessageToast, 'Your login attempt was not successful')
    }

    checkLoginPage(){
        actionsPage.pageTitleShouldBeEqual('REPAY')
        actionsPage.isElementVisible(bannerImage)
    }

    clickForgotPassword(){
        actionsPage.click(forgotPasswordLink)
        
    }

    

}

export default new LoginPage()