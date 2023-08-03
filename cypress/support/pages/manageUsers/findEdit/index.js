import actionsPage from '../../../actions'

let refreshButton = "button[id*='Refresh']"
let gridTable = '#grid_find_user2' 
let userNameInput = "input[id*='Username']"

let lastNameInput  = "input[id$='FilterTextBox_column']"
let firstNameInput = "input[id$='FilterTextBox_column1']"
let resellerDropdown = "input[id*='Reseller_Input']"
let statusDropdown = "input[id*='StatusFilter_Input']" 
let calendarButton = ".rcCalPopup" 
let filterButton = ".rgFilter" 
let firstItem = "tbody tr.rgRow a#grid_find_user2_ctl00_ctl04_UserLink" 








class findEdit {



    checkFindEditPage() {

        cy.wait(8000) // waiting for spinner to disapears

        actionsPage.isIframeElementVisible(refreshButton)
        actionsPage.isIframeElementVisible(gridTable)
    
        actionsPage.isIframeElementVisible(userNameInput)
        actionsPage.isIframeElementVisible(firstNameInput)
        actionsPage.isIframeElementVisible(lastNameInput)
        // actionsPage.isIframeElementVisible(resellerDropdown)  //TODO Check why this element is not properly loaded when running the automation script
        actionsPage.isIframeElementVisible(statusDropdown)
        actionsPage.isIframeElementVisible(calendarButton)
        actionsPage.isIframeElementVisible(filterButton)
        
        
    }

    searchByName(text){
        actionsPage.inputIframeText(userNameInput, text)
        actionsPage.submitIframe(userNameInput)
        cy.wait(10000)
        actionsPage.clickIframe(firstItem)
    }

    clickFirstItem(){
        
    }

    clickRefreshButton(){
        actionsPage.clickIframe(refreshButton)
    }

    
    

}

export default new findEdit()