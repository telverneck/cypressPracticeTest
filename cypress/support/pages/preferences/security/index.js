import actionsPage from '../../../actions'

let changeSecurityButton = '#ChangeSecurity'
let resetButton = '.rfdDecorated'
let securityTable = '#table2' 
let securityInfoText = '.standardText' 




class securityPage {



    checkSecurityPage() {

        cy.wait(2000) // waiting for spinner to disapears
        actionsPage.isIframeElementVisible(changeSecurityButton)
        actionsPage.isIframeElementVisible(resetButton)
        actionsPage.isIframeElementVisible(securityTable)
        actionsPage.isIframeElementVisible(securityInfoText)

        
    }
    
    

}

export default new securityPage()