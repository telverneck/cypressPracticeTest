import actionsPage from '../../../actions'

let nameFilterInput = '#RadGrid1_ctl00_ctl02_ctl03_FilterTextBox_column2' 
let idFilterInput = '#RadGrid1_ctl00_ctl02_ctl03_FilterTextBox_column1'  
let filterButton = '#RadGrid1_ctl00_ctl02_ctl03_Filter_Creation_DT'  




class findMerchant {

    checkFindMerchantPage() {

        cy.wait(2000) // waiting for spinner to disapears
        
        actionsPage.isIframeElementVisible(nameFilterInput)
        actionsPage.isIframeElementVisible(idFilterInput)
        actionsPage.isIframeElementVisible(filterButton)

        
    }

    searchByName(text){
        actionsPage.inputIframeText(nameFilterInput, text)
        actionsPage.submitIframe(nameFilterInput)
        cy.wait(6000)
    }

    searchByID(text){

        actionsPage.inputIframeText(idFilterInput, text)
        actionsPage.submitIframe(idFilterInput)
        cy.wait(6000)
    }

    clickFilterButton(){
        actionsPage.clickIframe(filterButton)
        //li[contains(@class,'rmItem')]//span[contains(text(),'NotEqualTo')]
    }

    filterBy(option){
        this.clickFilterButton()
        cy.wait(2000) // waiting for spinner to disapears

        actionsPage.clickIframeXpath(`//li[contains(@class,'rmItem')]//span[text()='${option}']`)
    }

}

export default new findMerchant()