import actionsPage from '../../../actions'

let refreshButton = "button[id*='Refresh']"
let gridTable = '#grid_find_user2, #table1' 
let userNameInput = "input[id*='Username'] , #RadGrid1_ctl00_ctl02_ctl03_FilterTextBox_column2"

let lastNameInput  = "input[id$='FilterTextBox_column']"
let firstNameInput = "input[id$='FilterTextBox_column1']"
let resellerDropdown = "input[id*='Reseller_Input']"
let statusDropdown = "input[id*='StatusFilter_Input']" 
let calendarButton = ".rcCalPopup" 
let filterButton = ".rgFilter" 
let firstItem = "tbody tr.rgRow a#grid_find_user2_ctl00_ctl04_UserLink , tbody tr.rgRow #RadGrid1_ctl00_ctl04_gbcViewMerchantButton" 

let loginAsDefaultLink = "//span[contains(text(),'Login as Default')]" 
let editMerchantButton = "//span[contains(text(),'Edit Merchant')]" 
let addUserButton = "//span[contains(text(),'Add User')]" 
let viewUsersButton = "//span[contains(text(),'View Users')]" 
let deleteMerchantButton = "//span[contains(text(),'Delete')]" 
let deactivateButton = "//span[contains(text(),'Deactivate')]" 

let merchantInfo = "table.tableInner tr:nth-child(2) td:nth-child(2) p"
let merchantInfo2 = "table.tableInner tr:nth-child(2) td:nth-child(3) p" 
let merchantInfoHeader = ".tableHeader" 

let merchantInfoTab = "ul.rtsUL li:first-child" 
let validationsTab = "ul.rtsUL li:nth-child(2)" 
let processorsTab = "ul.rtsUL li:nth-child(3)" 





class findEdit {

    checkFindEditPage() {

        cy.wait(20000) // waiting for spinner to disapears

        actionsPage.isIframeElementVisible(refreshButton)
        actionsPage.isIframeElementVisible(gridTable)
    
        actionsPage.isIframeElementVisible(userNameInput)
        actionsPage.isIframeElementVisible(firstNameInput)
        actionsPage.isIframeElementVisible(statusDropdown)
        actionsPage.isIframeElementVisible(calendarButton)
        actionsPage.isIframeElementVisible(filterButton)
        
        
    }

    searchByName(text){
        actionsPage.inputIframeText(userNameInput, text)
        actionsPage.submitIframe(userNameInput)
        cy.wait(10000)
    }

    clickFirstItem(){
        actionsPage.clickIframe(firstItem)
        
    }

    clickRefreshButton(){
        actionsPage.clickIframe(refreshButton)
    }

    clickLoginAsDefault(){
        cy.wait(10000)
        actionsPage.clickIframeXpath(loginAsDefaultLink)
    }

    clickViewUsers(){
        actionsPage.clickIframeXpath(viewUsersButton)
    }


    checkMerchantDetail(){
        cy.wait(10000)
        actionsPage.clickIframe(merchantInfoTab)
        actionsPage.elementIframeShouldContainText(merchantInfoHeader, "Merchant Info")
        actionsPage.isIframeElementVisible(validationsTab)
        actionsPage.isIframeElementVisible(processorsTab) 
        actionsPage.isIframeElementVisible(merchantInfo) 
        actionsPage.isIframeElementVisible(merchantInfo2) 
        actionsPage.isIframeElementVisible(merchantInfoHeader) 
        actionsPage.isXpathElementVisible(loginAsDefaultLink)
        actionsPage.isXpathElementVisible(addUserButton)
        actionsPage.isXpathElementVisible(viewUsersButton)
        actionsPage.isXpathElementVisible(deactivateButton)
        actionsPage.isXpathElementVisible(deleteMerchantButton)

    }
    

}

export default new findEdit()