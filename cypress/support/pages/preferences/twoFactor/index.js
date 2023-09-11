import actionsPage from '../../../actions'

let alertInfo = '.rg-alert-info'
let heading = '.panel-heading'
let saveButton = '#SaveButton' 



class twoFactorPage {



    checkTwoFactorPage() {

        cy.wait(2000) // waiting for spinner to disapears
        actionsPage.elementIframeShouldContainText(heading, 'Authenticator Setup')
        actionsPage.elementIframeShouldContainText(alertInfo, 'Your account requires two factor authentication')

        
    }
    
    

}

export default new twoFactorPage()