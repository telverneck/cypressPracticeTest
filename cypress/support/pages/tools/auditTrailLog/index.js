import actionsPage from '../../../actions'

let showFiltersCheckbox = '#ShowFilters' 
let generateReportButton = '#GenerateButton' 
let fromDatePicker = '#FromDt_dateInput' 
let toDatePicker = "#ToDt_dateInput" 
let currentUsernameInput = "#CurrentUsername" 
let targetUsernameInput = '#TargetUsername' 
let gridColumns = '.gridHeader' 
let firstResultRow = '.gridHeader+ tr.gridRow' 

let errorMessageDate = '#Message.errorText'






class auditTrailLogPage {

    checkAuditTrailLogPage() {

        cy.wait(2000) // waiting for spinner to disapears
        

        actionsPage.isIframeElementVisible(showFiltersCheckbox)
        actionsPage.isIframeElementVisible(generateReportButton)
        actionsPage.isIframeElementVisible(fromDatePicker)
        actionsPage.isIframeElementVisible(toDatePicker)
        actionsPage.isIframeElementVisible(currentUsernameInput)
        actionsPage.isIframeElementVisible(targetUsernameInput)


        
    }

    clickGenerateButton(){
        actionsPage.clickIframe(generateReportButton)
    }

    

    
    searchByDate(dateFrom, dateTo){
        actionsPage.inputIframeText(fromDatePicker, dateFrom)
        actionsPage.inputIframeText(toDatePicker, dateTo)
        this.clickGenerateButton()


    }

    checkResults(){
        cy.wait(20000) // waiting for spinner to disapears
        actionsPage.isIframeElementVisible(gridColumns)
        actionsPage.isIframeElementVisible(firstResultRow)



    }
    checkErrorMessage(){
        cy.wait(15000) // waiting for spinner to disapears

        actionsPage.isIframeElementVisible(errorMessageDate)

    }

    checkNoResults(){
        cy.wait(15000) // waiting for spinner to disapears
        actionsPage.isIframeElementVisible(gridColumns)
        actionsPage.isIframeElementNotVisible(firstResultRow)


    }

    uncheckAuditFilters(){
        actionsPage.clickIframe(showFiltersCheckbox)
        actionsPage.isIframeElementChecked(showFiltersCheckbox)
    }
    

}

export default new auditTrailLogPage()