import actionsPage from '../../../actions'


let header = '.pageHeader' 
let loadMessageButton = '#btnLoadMessage' 
let saveButton = '#btnSave' 
let pnredText = '#txtPNRef' 

let errorMessage = '.errorText' 



class settleMessagesPage {



    checkSettleMessagesPage() {

        cy.wait(1000) // waiting for spinner to disapears
        
        actionsPage.isIframeElementVisible(header)
        actionsPage.isIframeElementVisible(loadMessageButton)
        actionsPage.isIframeElementVisible(pnredText)
        actionsPage.isIframeElementVisible(saveButton)


        
    }

   

    checkErrorMessage(){
        cy.wait(2000) // waiting for spinner to disapears
        this.clickSave()
        actionsPage.isIframeElementVisible(errorMessage)
    }

    clickSave(){
        actionsPage.clickIframe(saveButton)

    }
    

    
    
    

}

export default new settleMessagesPage()