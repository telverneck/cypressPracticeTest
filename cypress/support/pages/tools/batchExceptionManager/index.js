import actionsPage from '../../../actions'


let merchantSelect = '#cmbMerchant_Input' 
let moveSelectedButton = '#btnMoveToOpen_input' 
let submitSettlementButton = '#btnSendSettlement_input' 


class batchExceptionManagerPage {



    checkBatchExceptionManagerPage() {

        cy.wait(2000) // waiting for spinner to disapears
        

        actionsPage.isIframeElementVisible(merchantSelect)
        actionsPage.isIframeElementVisible(moveSelectedButton)
        actionsPage.isIframeElementVisible(submitSettlementButton)


        
    }

    clickMoveSelectedButton(){
        actionsPage.clickIframe(moveSelectedButton)
    }

    clickSubmitSettlementButton(){
        actionsPage.clickIframe(submitSettlementButton)
    }

    
    
    

}

export default new batchExceptionManagerPage()