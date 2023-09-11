import actionsPage from '../../../actions'


let header = '.pageHeader' 
let validatePasswordButton = '#Login' 
let passwordText = '#LoginPassword' 
let errorMessage = '.errorText' 



class systemInfoPage {



    checsystemInfoPage() {

        cy.wait(1000) // waiting for spinner to disapears
        
        actionsPage.isIframeElementVisible(header)
        actionsPage.isIframeElementVisible(validatePasswordButton)
        actionsPage.isIframeElementVisible(passwordText)


        
    }

    clickValidatePasswordButton(){
        actionsPage.clickIframe(validatePasswordButton)
    }

    checkErrorMessage(){
        cy.wait(2000) // waiting for spinner to disapears

        actionsPage.isIframeElementVisible(errorMessage)
    }

    
    
    

}

export default new systemInfoPage()