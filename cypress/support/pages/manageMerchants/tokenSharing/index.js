import actionsPage from '../../../actions'

let addGreenButton = '.ui.positive.button' 
let deleteButton = 'button[type=button]:nth-child(1)' 
let editButton = 'button[type=button]:nth-child(2)' 
let filterGroupInput = "input[placeholder='Filter groups']" 
let merchantGroupNameInput = ".rg-input.rg-input--full-width" 
let saveGreenButton = '.ui.green.button' 
let messageInfoAlert = '.ui.positive.message' 
let firstItemList = ".ui.divided.selection.list div[role='listitem']:nth-child(1)" 
let cancelButton = ".actions button:nth-child(1)" 
let confirmDeleteButton = ".actions button:nth-child(2)" 





class tokenSharing {



    checkTokenSharingPage() {

        cy.wait(2000) // waiting for spinner to disapears
        

        actionsPage.isIframeElementVisible(addGreenButton)
        actionsPage.isIframeElementVisible(deleteButton)
        actionsPage.isIframeElementVisible(editButton)
        actionsPage.isIframeElementVisible(filterGroupInput)

        
    }

    clickAddButton(){
        actionsPage.clickIframe(addGreenButton)
    }

    clickDeleteButton(){
        actionsPage.clickIframe(deleteButton)
        
    }

    deleteNewMerchant(){
        this.clickDeleteButton()
        actionsPage.clickIframe(confirmDeleteButton)

        this.checkSuccessMessage('Merchant group deleted.')
    }

    clickEditButton(){
        actionsPage.clickIframe(editButton)
    }

    clickSaveButton(){
        actionsPage.clickIframe(saveGreenButton)
    }

    

    filterGroup(text){
        actionsPage.inputIframeText(filterGroupInput, text)
        cy.wait(2000) //TODO wait for results, change this
        this.clickFirstItemList()


    }

    addNewMerchantGroup(groupName){
        this.clickAddButton()
        cy.wait(5000) //TODO wait for results, change this
        actionsPage.inputIframeText(merchantGroupNameInput, groupName)
        cy.wait(2000) //TODO wait for results, change this

        this.clickSaveButton()
        this.checkSuccessMessage('Merchant group created.')
        this.clickFirstItemList()

        
        
    }

    clickFirstItemList(){
        actionsPage.clickIframe(firstItemList)
    }

    checkSuccessMessage(text){
        cy.wait(5000) // TODO: refactor this to a better approuch
        actionsPage.elementIframeShouldContainText(messageInfoAlert, text)
    }




    
    

}

export default new tokenSharing()