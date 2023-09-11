import actionsPage from '../../../actions'


let transactionIDText = '#PNRef' 
let searchButton = '#OK' 
let resultsTable = '#DataGrid1' 
let errorMessage = '.errorText' 




class previousTrxLogPage {



    checkPreviousTrxLogPage() {

        cy.wait(1000) // waiting for spinner to disapears
        
        actionsPage.isIframeElementVisible(transactionIDText)
        actionsPage.isIframeElementVisible(searchButton)

    }

    searchByID(value){
        actionsPage.inputIframeText(transactionIDText, value)
        actionsPage.clickIframe(searchButton)
        cy.wait(3000) // waiting for spinner to disapears

        
        
    }
    
    checkResults(){
        actionsPage.isIframeElementVisible(resultsTable)

    }

    checkErrorMessage() {

        cy.wait(2000) // waiting for spinner to disapears
        
        actionsPage.isIframeElementVisible(errorMessage)

    }


   
    
    

}

export default new previousTrxLogPage()