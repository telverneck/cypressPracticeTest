import actionsPage from '../../../actions'


let searchButton = '#btnSearch' 
let merchantIdInput = '#cloneFromMid' 
let errorAlert = '.rg-alert-danger' 
let merchantNameDetailsResults = '#lblMerchantName' 
let gridDetailsResults = '.gridHeader' 



class cloneCustomFieldsPage {



    checkCloneCustomFieldsPage() {

        cy.wait(2000) // waiting for spinner to disapears
        

        actionsPage.isIframeElementVisible(searchButton)
        actionsPage.isIframeElementVisible(merchantIdInput)
        
        
        
    }
    
    clickSearchButton(){
        actionsPage.clickIframe(searchButton)
    }
    
    
    
    
    searchMerchantID(ID){
        actionsPage.inputIframeText(merchantIdInput, ID)
        this.clickSearchButton()
        cy.wait(5000) // waiting for spinner to disapears

        
        
    }
    
    checkResults(){
        actionsPage.isIframeElementVisible(merchantNameDetailsResults)
        actionsPage.isIframeElementVisible(gridDetailsResults)

    }

    checkNoResults(){
        actionsPage.isIframeElementVisible(errorAlert)

    }
    

    
    
    

}

export default new cloneCustomFieldsPage()