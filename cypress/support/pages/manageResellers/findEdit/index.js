import actionsPage from '../../../actions'

let nameFilterInput = '#RadGrid1_ctl00_ctl02_ctl03_FilterTextBox_column1' 
let idFilterInput = '#RadGrid1_ctl00_ctl02_ctl03_FilterTextBox_column'  
let filterButton = '#RadGrid1_ctl00_ctl02_ctl03_Filter_Creation_DT'  
let tableResults = 'tbody .rgRow'  
let tableNoResults = 'tbody .rgNoRecords'






class findEditResellers {

    checkFindEditResellersPage() {

        cy.wait(2000) // waiting for spinner to disapears
        
        actionsPage.isIframeElementVisible(nameFilterInput)
        actionsPage.isIframeElementVisible(idFilterInput)
        actionsPage.isIframeElementVisible(filterButton)

        
    }

    searchByName(text){
        actionsPage.inputIframeText(nameFilterInput, text)
        actionsPage.submitIframe(nameFilterInput)
    }

    searchByID(text){

        actionsPage.inputIframeText(idFilterInput, text)
        actionsPage.submitIframe(idFilterInput)
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

    checkResultsTable(){
        cy.wait(5000) // waiting for spinner to disapears

        actionsPage.isIframeElementVisible(tableResults)

    }

    checkNoResultsTable(){
        cy.wait(5000) // waiting for spinner to disapears

        actionsPage.isIframeElementVisible(tableNoResults)

    }

}

export default new findEditResellers()