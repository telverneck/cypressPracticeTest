import actionsPage from '../../../actions'


let processorDropdown = '#ProcessorList' 
let processorItem = '#SkinnedProcessorList' 

let optionProcessorrocessorDropdown = "select[name='ProcessorList']"
let saveProcessorButton = '#SaveProcessorButton' 
let optionProcessor = "select option:nth-child(2)" 




class processorSetupPage {



    checkProcessorSetupPagePage() {

        cy.wait(15000) // waiting for spinner to disapears
        
        actionsPage.isIframeElementVisible(processorItem)

    }

    selectFirstProcessor(){
        actionsPage.clickIframe(processorItem)
        cy.wait(2000) // waiting for spinner to disapears

        //WIP
        // actionsPage.selectValueFromList(optionProcessorrocessorDropdown, 'Cash')
        
        // actionsPage.clickIframe(optionProcessor)

        // cy.wait(15000) // waiting for spinner to disapears


    }

    clickSaveProcessor(){
        actionsPage.clickIframe(saveProcessorButton)

    }

   
    
    

}

export default new processorSetupPage()