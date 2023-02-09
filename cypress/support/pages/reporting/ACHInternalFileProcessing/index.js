import actionsPage from '../../../actions'

let ACHTransactionTitle = 'table#Table1 tr:nth-child(1)'
let startDateInput = '#dtStart_dateInput'
let endDateInput = '#dtEnd_dateInput'
let submitButton = '#btnSubmit'
let startDatePicker = '#dtStart_popupButton' 
let endDatePicker = '#dtEnd_popupButton' 
let startTimePicker = '#dtStart_timePopupLink' 
let endTimePicker = '#dtEnd_timePopupLinkr' 
let inforAlert = '.rg-alert-info'
let table = 'table#achFilesProcessedGrid_ctl00' 
let tableResults = 'table#achFilesProcessedGrid_ctl00 tbody tr:nth-child(1)' 
let mainFrame = '#mainFrame'



class achInternalFileProcessing {



    checkACHInternalFileProcessingPage() {

        cy.wait(2000) // waiting for spinner to disapears
        actionsPage.elementIframeShouldContainText(ACHTransactionTitle, 'ACH Transactions')

        actionsPage.isIframeElementVisible(startDateInput)
        actionsPage.isIframeElementVisible(endDateInput)
        actionsPage.isIframeElementVisible(submitButton)
        actionsPage.isIframeElementVisible(startDatePicker)
        actionsPage.isIframeElementVisible(endDatePicker)
        actionsPage.isIframeElementVisible(startTimePicker)
        actionsPage.isIframeElementVisible(endTimePicker)
        actionsPage.isIframeElementVisible(endDatePicker)
        actionsPage.isIframeElementVisible(inforAlert)
        actionsPage.isIframeElementVisible(table)
        actionsPage.isIframeElementVisible(tableResults)
        
        
    }

    checkResultsTable(){
        actionsPage.isIframeElementVisible(tableResults)

    }
    
    searchForDate(startDate, endDate){
        actionsPage.inputIframeText(startDateInput, startDate)
        actionsPage.inputIframeText(endDateInput, endDate)
        
        actionsPage.clickIframe(submitButton)
    }

}

export default new achInternalFileProcessing()