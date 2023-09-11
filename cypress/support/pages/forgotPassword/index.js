import actionsPage from '../../actions'

let loginPage = "/login.aspx"

let returnToLoginPageLink = '#HyperLink1'
let emailInput = '#Email'
let usernameInput = '#Username'
let submitButton = '#Submit'
let successMessage = ".succeedText" 
let emailRequiredFieldError = "#RequiredFieldValidator1" 
let usernameRequiredFieldError = "#RequiredFieldValidator2" 
let wrongEmailError = "#Regularexpressionvalidator2" 




class ForgotPasswordPage {

    checkForgotPasswordPage() {

        cy.wait(2000) // waiting for spinner to disapears

        actionsPage.isElementVisible(returnToLoginPageLink)
        
    }

    clickReturnToLoginPageLink(){
        actionsPage.click(returnToLoginPageLink)

    }

    recoverPassword(email, username){
        this.fillMandatoryFields(email, username)
        this.clickSubmitButton()
        actionsPage.isElementVisible(successMessage)
    }

    fillMandatoryFields(email, username){
        actionsPage.inputText(emailInput, email)
        actionsPage.inputText(usernameInput, username)
    }

    clickSubmitButton(){
        actionsPage.click(submitButton)
    }

    checkErrorMessages(){
        actionsPage.isElementVisible(emailRequiredFieldError)
        actionsPage.isElementVisible(usernameRequiredFieldError)
    }

    checkEmailErrorMessages(){
        this.fillMandatoryFields("wron@email", "username")
        this.clickSubmitButton()
        actionsPage.isElementVisible(wrongEmailError)


    }


   

}

export default new ForgotPasswordPage()