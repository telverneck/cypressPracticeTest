import actionsPage from '../../actions'

let loginPage = "/practice-test-login"

let loginInput = '#username'
let passwordInput = '#password'
let loginButton = '#submit'
let errorMessageToast = "#error"
let pageTitle = "Test Login | Practice Test Automation"
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

    
    checkErrorLoginMessage(text){

        actionsPage.elementShouldContainText(errorMessageToast, text)
    }

    checkLoginPage(){
        actionsPage.pageTitleShouldBeEqual(pageTitle)
    }

}

export default new LoginPage()