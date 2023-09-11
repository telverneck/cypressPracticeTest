import actionsPage from '../../../actions'


let addButton = "div[style='display: flex; margin-bottom: 1em;'] .ui.positive.button" 
let rulesList = '.accordion ' 
let cancelButton = '.actions button:nth-child(1)' 
let SaveButton = '.actions button:nth-child(2)'  
let errorMessage = '.ui.negative.message'  




class binBlockingPage {

    checkbinBlockingPage() {

        actionsPage.isIframeElementVisible(addButton)
        actionsPage.isIframeElementVisible(rulesList)

    }

    clickAddRule(){
        actionsPage.clickIframe(addButton)
    }

    clickCancel(){
        actionsPage.clickIframe(cancelButton)
    }

    clickSave(){
        actionsPage.clickIframe(SaveButton)
    }

    checkErrorMessage(){
        actionsPage.isIframeElementVisible(errorMessage)

    }
}

export default new binBlockingPage()