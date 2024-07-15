import actionsPage from '../../../actions'

let alertError = '.rg-alert-danger'
let heading = '.panel-heading'
let oldPasswordInput = 'input[name=oldPassword]' 
let newPasswordInput = 'input.ReactPasswordStrength-input' 
let confirmPasswordInput = 'input[name=confirmPassword]'  
let nextStepButton = '.rg-button' 
let authCodeInput = 'input[name=authCode]'  
let goodPassText = "//div[@class='ReactPasswordStrength-strength-desc'][text()='Good']"  
let strongPassText = "//div[@class='ReactPasswordStrength-strength-desc'][text()='Strong']"  
let weakPassText = "//div[@class='ReactPasswordStrength-strength-desc'][contains(text(),'Weak')]"  






class passwordPage {



    checkPasswordPage() {

        cy.wait(2000) // waiting for spinner to disapears
        actionsPage.elementIframeShouldContainText(heading, 'Change Password')
        actionsPage.isIframeElementVisible(oldPasswordInput)
        actionsPage.isIframeElementVisible(newPasswordInput)
        actionsPage.isIframeElementVisible(confirmPasswordInput)
        actionsPage.isIframeElementVisible(nextStepButton)

        
    }

    fillMandatoryFields(oldPassword, newPassword, confirmPassword){
        actionsPage.inputIframeText(oldPasswordInput, oldPassword)
        actionsPage.inputIframeText(newPasswordInput, newPassword)
        actionsPage.inputIframeText(confirmPasswordInput, confirmPassword)
    }
    checkForGoodPasswordText(){
        actionsPage.isXpathElementVisible(goodPassText)

    }
    checkForStrongPasswordText(){
        actionsPage.isXpathElementVisible(strongPassText)

    }
    checkForWeakPasswordText(){
        actionsPage.isXpathElementVisible(weakPassText)

    }

    clickNextButton(){
        actionsPage.clickIframe(nextStepButton)
    }

    checkAuthCodeField(){
        actionsPage.isIframeElementVisible(authCodeInput)

    }
    fillAuthCode(code){
        actionsPage.inputIframeText(authCodeInput, code)
        this.clickNextButton()
    }
    
    checkErrorAler(){
        
        actionsPage.isIframeElementVisible(alertError)

    }
    

}

export default new passwordPage()