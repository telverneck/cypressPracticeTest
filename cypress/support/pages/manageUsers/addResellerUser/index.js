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
let requiredFieldError = '#RequiredFieldValidator2' 





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
        actionsPage.isIframeElementVisible(requiredFieldError)

        
    }

    
    

}

export default new addResellerUser()