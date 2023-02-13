import actionsPage from '../../../actions'

let refreshButton = "button[id*='Refresh']"
let gridTable = '#grid_find_user2' 
let userNameInput = "input[id*='Username']"

let firstNameInput = "input[id$='FilterTextBox_column']"
let lastNameInput = "input[id$='FilterTextBox_column1']"
let resellerDropdown = "input[id*='Reseller_Input']"
let statusDropdown = "input[id*='StatusFilter_Input']" 
let calendarButton = ".rcCalPopup" 
let filterButton = ".rgFilter" 







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

    

    clickRefreshButton(){
        actionsPage.clickIframe(refreshButton)
    }

    
    

}

export default new findEdit()