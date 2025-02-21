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
let firstMerchantItem = "tr.rgRow:nth-child(1) td:nth-child(2) input" 
let loginAsDefaultLink = "//span[contains(text(),'Login as Default')]" 
let editMerchantButton = "//span[contains(text(),'Edit Merchant')]" 
let addUserButton = "//span[contains(text(),'Add User')]" 
let viewUsersButton = "//span[contains(text(),'View Users')]" 
let deleteMerchantButton = "//span[contains(text(),'Delete')]" 
let deactivateButton = "//span[contains(text(),'Deactivate')]" 
let activateButton = "//span[contains(text(),'Activate')]" 
let merchantInfo = "table.tableInner tr:nth-child(2) td:nth-child(2) p"
let merchantInfo2 = "table.tableInner tr:nth-child(2) td:nth-child(3) p" 
let merchantInfoHeader = ".tableHeader" 
let merchantInfoTab = "ul.rtsUL li:first-child" 
let validationsTab = "ul.rtsUL li:nth-child(2)" 
let processorsTab = "ul.rtsUL li:nth-child(3)" 
let additionalInfoValidation = "#AdditionalInfo"
let savedProcessorsTable= "#gridProfilesPanel"
let activeProcessorsTable= "#gridActiveProcessorPanel"
let confirmPopupButton = "div[style*='visible'] .rwDialog.rwConfirmDialog .rwDialogButtons .rwOkBtn"
let deleteProcessorButton= "//tr[1]//td[text()='Paysafe ACH']//..//button[@aria-label='DeleteProcessor']"
let addProfileButton= "#lbAddProfile"
let okPopButton = ".RadWindow_Default .rwDialogButtons .rwOkBtn" 
let updateMerchantButton = "#UpdateButton" 
let viewUsersTable = ".rgMasterTable"
let columnsItems = ".rgHeader"

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

    clickfirstMerchantItem(){
        cy.wait(7000)

        actionsPage.clickIframe(firstMerchantItem)
        
    }

    clickRefreshButton(){
        actionsPage.clickIframe(refreshButton)
    }

    clickLoginAsDefault(){
        cy.wait(10000)
        this.clickButtonWithText("Login as Default")
    }

    clickViewUsers(){ 
        actionsPage.clickIframeXpath(viewUsersButton)
    }

    checkViewUsersPage(){
        cy.wait(10000)
        actionsPage.isIframeElementVisible(viewUsersTable)
        actionsPage.checkForNumberOfElements(columnsItems, 8)
        
    }

    clickValidationTab(){
        cy.wait(5000)

        actionsPage.clickIframe(validationsTab)
    }

    clickProcessorsTab(){
        cy.wait(5000)

        actionsPage.clickIframe(processorsTab)
    }

    clickAddUserButton(){
        cy.wait(5000)

        actionsPage.clickIframeXpath(addUserButton)
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

    checkValidationTab(){
        actionsPage.elementIframeShouldContainText(merchantInfoHeader, "Validation")
        actionsPage.isIframeElementVisible(additionalInfoValidation)

    }

    checkProcessorsTab(){
        actionsPage.elementIframeShouldContainText(merchantInfoHeader, "Processors")
        actionsPage.isIframeElementVisible(savedProcessorsTable)
        actionsPage.isIframeElementVisible(activeProcessorsTable)

    }
    clickDeactivateMerchantButton(){
        this.clickButtonWithText("Deactivate")
        actionsPage.clickIframe(confirmPopupButton)
    }

    clickEditMerchantButton(){
        cy.wait(7000)
        this.clickButtonWithText("Edit Merchant")
        cy.wait(7000)
        actionsPage.isIframeElementVisible(updateMerchantButton)

    }

    clickUpdateMerchant(){
        actionsPage.clickIframe(updateMerchantButton)

    }

    checkDeactivatedMerchant(){
        cy.wait(4000)

        actionsPage.isXpathElementVisible(activateButton)
    }

    checkActivatedMerchant(){
        cy.wait(4000)

        actionsPage.isXpathElementVisible(deactivateButton)
        
    }

    clickActivateMerchantButton(){
        this.clickButtonWithText("Activate")
        actionsPage.clickIframe(confirmPopupButton)

    }

    clickButtonWithText(buttonText){
        cy.wait(7000) //span[text()='Activate']

        let button = `//li[@class='rtbLI rtbItem']//span[text()='${buttonText}']`
        actionsPage.clickIframeXpath(button)
    }

    deleteProcessor(){
        actionsPage.clickIframeXpath(deleteProcessorButton)
        cy.wait(3000) 

        actionsPage.clickIframe(okPopButton)
    }

    addProfile(){
        actionsPage.clickIframe(addProfileButton)
    }
}

export default new findEdit()