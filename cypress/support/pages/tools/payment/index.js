import actionsPage from '../../../actions'


let paymentEnviromentScreen = '#content' 
let merchantIDtext =  "input[name='merchantId']" 
let fileTypeDropdown =  "div[name='fileType']" 
let submitButton =  "button.ui.button" 
let errorMessage =  ".ui.error.message" 
let importButton =  ".flex-row , .ui.button.primary" 
let selectMerchantDropdown =  ".selection.dropdown" 
let merchantFirstItem =  "div[role='listbox'] div[role='option']:nth-child(1)" 
let merchantSecondItem =  "div[role='listbox'] div[role='option']:nth-child(2)" 

class paymentPage {



    checkPaymentEnviromentPage() {

        cy.wait(2000) // waiting for spinner to disapears
        
        actionsPage.isIframeElementVisible(paymentEnviromentScreen)

    }

    
    checkPaymentExporterPage() {

        cy.wait(2000) // waiting for spinner to disapears
        
        actionsPage.isIframeElementVisible(merchantIDtext)
        actionsPage.isIframeElementVisible(fileTypeDropdown)
        
    }
    
    searchPaymentExporterByID(value){
        actionsPage.inputIframeText(merchantIDtext, value)
        actionsPage.clickIframe(fileTypeDropdown)
        cy.wait(2000) // waiting for spinner to disapears

        actionsPage.clickIframe(merchantIDtext)
        cy.wait(2000) // waiting for spinner to disapears

        actionsPage.clickIframe(submitButton)
        
        cy.wait(2000) // waiting for spinner to disapears


    }

    checkErrorMessage() {

        cy.wait(2000) // waiting for spinner to disapears
        
        actionsPage.isIframeElementVisible(errorMessage)
        
    }

    checkPaymentMethodImporterPage(){
        actionsPage.isIframeElementVisible(selectMerchantDropdown)


    }

    checkPaymentMethodValidationPage(){
        actionsPage.isIframeElementVisible(selectMerchantDropdown)

    }

    selectAnyMerchant(){
        actionsPage.clickIframe(selectMerchantDropdown)
        actionsPage.clickIframe(merchantFirstItem)


    }

    checkTableResults(){
        actionsPage.isIframeElementVisible(selectMerchantDropdown)

    }
    
    

}

export default new paymentPage()