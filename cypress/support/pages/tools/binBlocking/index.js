import actionsPage from '../../../actions'


let addButton = ".column button[role='button'][class*='ui button repay-green'][style*='margin: 0px 0px 0.5em;']" 
let rulesList = '.accordion ' 
let cancelButton = '.actions button:nth-child(1)' 
let SaveButton = '.actions button:nth-child(2)'  
let errorMessage = '.ui.negative.message'  
let availableMerchantInput = '.ui.fluid.input input[type=text]'  
let noResults = 'div[style="text-align: center;"]'  
let binSelect = 'div[role="combobox"]'  
let globalCheckbox = '.ui.checkbox'  
let firstBinOption = "div[role='listbox'] div[role='option']:nth-child(1)"  









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

    searchForMerchant(text){
        actionsPage.inputIframeText(availableMerchantInput, text)
    }

    noMerchantText(){
        actionsPage.isIframeElementVisible(noResults)

    }

    setGlobalBin(){
        actionsPage.clickIframe(binSelect)
        actionsPage.clickIframe(firstBinOption)
        actionsPage.clickIframe(globalCheckbox)

    }



}

export default new binBlockingPage()