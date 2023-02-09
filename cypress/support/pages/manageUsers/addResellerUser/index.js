import actionsPage from '../../../actions'

let userInfoTitle = '.tableHeader'
let firstNameInput = '#FirstName'
let lastNameInput = '#LastName'
let phoneNumberInput = '#PhoneNumber'
let emailInput = '#Email' 
let securityLevelSelect = '#SecurityLevel' 
let systemLevelSelect = '#SystemLevel' 
let saveButton = '#SaveButton' 
let messageInfoAlert = '#Message' 
let phoneRequiredFieldError = '#RequiredFieldValidator1' 
let firstNameRequiredFieldError = '#RequiredFieldValidator2' 
let lastNameRequiredFieldError = '#RequiredFieldValidator3' 
let emailRequiredFieldError = '#RequiredFieldValidator4' 
let emailInvalidFieldError = '#RegularExpressionValidator1' 






class addResellerUser {



    checkaddResellerUserPage() {

        cy.wait(2000) // waiting for spinner to disapears
        actionsPage.elementIframeShouldContainText(userInfoTitle, 'User Information')

        actionsPage.isIframeElementVisible(firstNameInput)
        actionsPage.isIframeElementVisible(lastNameInput)
        actionsPage.isIframeElementVisible(phoneNumberInput)
        actionsPage.isIframeElementVisible(emailInput)
        actionsPage.isIframeElementVisible(securityLevelSelect)
        actionsPage.isIframeElementVisible(systemLevelSelect)
        actionsPage.isIframeElementVisible(saveButton)
        
        
    }

    createNewUser(){
        this.fillMandatoryFields()
        this.clickSaveButton()
        this.checkSuccessMessage()
    }

    fillMandatoryFields(){
        actionsPage.inputIframeText(firstNameInput, "First Name Test")
        actionsPage.inputIframeText(lastNameInput, "Last Name Test")
        actionsPage.inputIframeText(phoneNumberInput, "555555555")
        actionsPage.inputIframeText(emailInput, "Test@Test.com")

    }


    clickSaveButton(){
        actionsPage.clickIframe(saveButton)
    }

    checkSuccessMessage(){
        cy.wait(5000) // TODO: refactor this to a better approuch
        actionsPage.elementIframeShouldContainText(messageInfoAlert, 'A new user account has been created successfully')
    }

    requiredFieldError(){
        actionsPage.isIframeElementVisible(phoneRequiredFieldError)
        actionsPage.isIframeElementVisible(firstNameRequiredFieldError)
        actionsPage.isIframeElementVisible(lastNameRequiredFieldError)
        actionsPage.isIframeElementVisible(emailRequiredFieldError)

        
    }

    checkInvalidEmailError(){
        actionsPage.inputIframeText(emailInput, "Test@Test.com")
        clickSaveButton()
        actionsPage.isIframeElementVisible(emailRequiredFieldError)


    }

    
    

}

export default new addResellerUser()