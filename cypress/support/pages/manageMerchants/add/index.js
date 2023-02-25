import actionsPage from '../../../actions'

let merchantName = '#_MerchantName'
let firstNameInput = '#_FirstName'
let lastNameInput = '#_LastName'
let emailInput = '#_Email' 
let addressInput = '#_StreetAddress1' 
let cityInput = '#_City' 
let postalCodeInput = '#_Zip' 
let stateSelect = '#_StateList' 
let createMerchantButton = '#CreateButton' 
let resetButton = "input[value='Reset']"
let messageInfoAlert =  ".succeedText"
let requiredFieldError = "#_RequiredFieldValidator2" 
let emailRequiredFieldError = "#Regularexpressionvalidator4" 





class addMerchant {



    checkaddMerchantPage() {

        cy.wait(2000) // waiting for spinner to disapears
        

        actionsPage.isIframeElementVisible(merchantName)
        actionsPage.isIframeElementVisible(lastNameInput)
        actionsPage.isIframeElementVisible(emailInput)
        actionsPage.isIframeElementVisible(addressInput)
        actionsPage.isIframeElementVisible(cityInput)
        actionsPage.isIframeElementVisible(stateSelect)
        actionsPage.isIframeElementVisible(postalCodeInput)
        actionsPage.isIframeElementVisible(createMerchantButton)
        actionsPage.isIframeElementVisible(resetButton)


        
        
    }

    createNewMerchant(){
        this.fillMandatoryFields()
        this.clickSaveButton()
        this.checkSuccessMessage()
    }

    fillMandatoryFields(){
        actionsPage.inputIframeText(merchantName, "First Name Test")
        actionsPage.inputIframeText(firstNameInput, "First Name Test")
        actionsPage.inputIframeText(lastNameInput, "Last Name Test")
        actionsPage.inputIframeText(emailInput, "Test@Test.com")
        actionsPage.inputIframeText(addressInput, "Address")
        actionsPage.inputIframeText(cityInput, "City")
        actionsPage.selectValueFromList(stateSelect, "AL")
        actionsPage.inputIframeText(postalCodeInput, "99654")


    }


    clickSaveButton(){
        actionsPage.clickIframe(createMerchantButton)
    }

    checkSuccessMessage(){
        cy.wait(5000) // TODO: refactor this to a better approuch
        actionsPage.elementIframeShouldContainText(messageInfoAlert, 'A new merchant account has been created successfully.')
    }

    requiredFieldError(){
        this.clickSaveButton()
        actionsPage.isIframeElementVisible(requiredFieldError)

        
    }

    checkInvalidEmailError(){
        actionsPage.inputIframeText(emailInput, "TestWrongEmail")
        this.clickSaveButton()
        actionsPage.isIframeElementVisible(emailRequiredFieldError)


    }

    
    

}

export default new addMerchant()