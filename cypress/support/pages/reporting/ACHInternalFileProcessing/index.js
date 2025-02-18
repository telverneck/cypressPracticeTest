import actionsPage from '../../../actions'

let ACHTransactionTitle = 'table#Table1 tr:nth-child(1)'
let startDateInput = '#dtStart_dateInput'
let endDateInput = 'input#dtEnd_dateInput'
let submitButton = '#btnSubmit'
let startDatePicker = '#dtStart_popupButton' 
let endDatePicker = '#dtEnd_popupButton' 
let startTimePicker = '#dtStart_timePopupLink' 
let endTimePicker = 'a#dtEnd_timePopupLink' 
let inforAlert = '.rg-alert-info'
let table = 'table#achFilesProcessedGrid_ctl00' 
let tableResults = '#achFilesProcessedGrid tbody tr:nth-child(1)' 
let tableNoResults = '.rgNoRecords div' 
let errorMessageDate = '#Message.errorText'



class achInternalFileProcessing {



    checkACHInternalFileProcessingPage() {

        cy.wait(2000) // waiting for spinner to disapears

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
        
        
    }

    checkResultsTable(){
        actionsPage.isIframeElementVisible(tableResults)

    }

    checkNoResultsTable(){
        cy.wait(2000) // waiting for spinner to disapears
        actionsPage.isIframeElementVisible(tableNoResults)


    }

    checkErrorMessage(){
        cy.wait(15000) // waiting for spinner to disapears

        actionsPage.isIframeElementVisible(errorMessageDate)

    }
    
    searchForDate(startDate, endDate){
        actionsPage.inputIframeText(startDateInput, startDate)
        actionsPage.inputIframeText(endDateInput, endDate)
        
        actionsPage.clickIframe(submitButton)
    }

    getCurrentDate() {
        const currentDate = new Date();
        const month = currentDate.getMonth() + 1; 
        const day = currentDate.getDate();
        const year = currentDate.getFullYear();
        const formattedDate = `${month.toString().padStart(2, '0')}/${day.toString().padStart(2, '0')}/${year}`;
        return formattedDate;
      }

    getDateThreeMonthsAgo() {
        const currentDate = new Date();
        currentDate.setMonth(currentDate.getMonth() - 3); 
        const month = currentDate.getMonth() + 1;
        const day = currentDate.getDate();
        const year = currentDate.getFullYear();
        const formattedDate = `${month.toString().padStart(2, '0')}/${day.toString().padStart(2, '0')}/${year}`;
        return formattedDate;
      }

      getDateTenYearsAgo() {
        const currentDate = new Date();
        currentDate.setFullYear(currentDate.getFullYear() - 10); 
        const month = currentDate.getMonth() + 1;
        const day = currentDate.getDate();
        const year = currentDate.getFullYear();
        const formattedDate = `${month.toString().padStart(2, '0')}/${day.toString().padStart(2, '0')}/${year}`;
        return formattedDate;
      }

      getDateMonthsAgo(monthsAgo = 0) {
        const currentDate = new Date();
        currentDate.setMonth(currentDate.getMonth() - monthsAgo); 
        const month = currentDate.getMonth() + 1;
        const day = currentDate.getDate();
        const year = currentDate.getFullYear();
        return `${month.toString().padStart(2, '0')}/${day.toString().padStart(2, '0')}/${year}`;
    }

}

export default new achInternalFileProcessing()