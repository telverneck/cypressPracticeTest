import actionsPage from '../../../actions'

let showFiltersCheckbox = '#ShowFilters' 
let generateReportButton = '#GenerateButton' 
let fromDatePicker = 'FromDt_dateInput)' 
let toDatePicker = "ToDt_dateInput" 
let currentUsernameInput = "CurrentUsername" 
let targetUsernameInput = 'TargetUsername' 
let gridColumns = '.gridHeader' 
let firstResultRow = '.gridHeader+ tr.gridRow' 







class auditTrailLogPage {

    checkAuditTrailLogPage() {

        cy.wait(2000) // waiting for spinner to disapears
        

        actionsPage.isIframeElementVisible(showFiltersCheckbox)
        actionsPage.isIframeElementChecked(showFiltersCheckbox)
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
        cy.wait(5000) // waiting for spinner to disapears
        actionsPage.isIframeElementVisible(gridColumns)
        actionsPage.isIframeElementVisible(firstResultRow)



    }

    checkNoResults(){
        cy.wait(5000) // waiting for spinner to disapears
        actionsPage.isIframeElementVisible(gridColumns)
        actionsPage.isIframeElementNotVisible(firstResultRow)


    }

    uncheckAuditFilters(){
        ctionsPage.clickIframe(showFiltersCheckbox)
        actionsPage.isIframeElementChecked(showFiltersCheckbox)
    }
    

}

export default new auditTrailLogPage()