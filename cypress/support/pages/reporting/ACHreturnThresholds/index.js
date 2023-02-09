import actionsPage from '../../../actions'

let startDatePicker = 'div[style*="float"]:nth-child(1) .react-datepicker-wrapper input[type=text]'
let endDatePicker = 'div[style*="float"]:nth-child(2) .react-datepicker-wrapper input[type=text]'
let resetButton = '//button[text()="Reset"]'
let submitButton = '//button[text()="Submit"]'
let csvButton = '//button[text()="CSV"]' 
let filterInput = 'input[placeholder="Filter"]' 
let table = 'table' 
let tableResults = '.transaction-table tbody tr' 
let mainFrame = '#mainFrame'



class AchReturnThresholdsPage {



    checkAchReturnThresholdsPage() {

        cy.wait(2000) // waiting for spinner to disapears
        actionsPage.isIframeElementVisible(startDatePicker)
        actionsPage.isIframeElementVisible(endDatePicker)
        actionsPage.isIframeElementVisible(filterInput)
        actionsPage.isIframeElementVisible(table)
        cy.iframe(mainFrame).xpath(resetButton)
        cy.iframe(mainFrame).xpath(submitButton)
        cy.iframe(mainFrame).xpath(csvButton)
        
    }

    searchForDate(startDate, endDate){
        actionsPage.inputIframeText(startDatePicker, startDate)
        actionsPage.inputIframeText(endDatePicker, endDate)
        
        actionsPage.clickIframeXpath(submitButton)
    }


    checkResultsTable(){
        actionsPage.isIframeElementVisible(tableResults)

    }

    noResultsTable(){
        actionsPage.isIframeElementNotVisible(tableResults)

    }

    searchForFilter(text){
        actionsPage.inputIframeText(filterInput,text)

    }

    

   



}

export default new AchReturnThresholdsPage()