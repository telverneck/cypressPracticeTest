import actionsPage from '../../../actions'

let showFiltersCheckbox = '#ShowFilters' 
let okButton = 'input[value="OK"]' 
let fromDatePicker = '#FromDt_dateInput' 
let toDatePicker = "#ToDt_dateInput" 
let usernameInput = "#Username" 
let gridColumns = '#DataGrid1' 
let firstResultRow = '.gridHeader+ tr.gridRow' 
let errorMessageDate = '#Message.errorText'







class AutoSettlerLogPage {

    checkAutoSettlerLogPage() {

        cy.wait(2000) // waiting for spinner to disapears

        actionsPage.isIframeElementVisible(showFiltersCheckbox)
        actionsPage.isIframeElementVisible(fromDatePicker)
        actionsPage.isIframeElementVisible(toDatePicker)
        actionsPage.isIframeElementVisible(usernameInput)
        
    }


    clickOkButton(){
        actionsPage.clickIframe(okButton)
    }

    

    
    searchByDate(dateFrom, dateTo){
        actionsPage.inputIframeText(fromDatePicker, dateFrom)
        actionsPage.inputIframeText(toDatePicker, dateTo)
        this.clickOkButton()


    }

    checkResults(){
        cy.wait(15000) // waiting for spinner to disapears
        actionsPage.isIframeElementVisible(gridColumns)
        // actionsPage.isIframeElementVisible(firstResultRow)



    }

    checkErrorMessage(){
        cy.wait(15000) // waiting for spinner to disapears

        actionsPage.isIframeElementVisible(errorMessageDate)

    }

    checkNoResults(){
        cy.wait(15000) // waiting for spinner to disapears
        actionsPage.isIframeElementVisible(gridColumns)
        // actionsPage.isIframeElementNotVisible(firstResultRow)


    }

    uncheckAuditFilters(){
        actionsPage.clickIframe(showFiltersCheckbox)
        actionsPage.isIframeElementChecked(showFiltersCheckbox)
    }
    

}

export default new AutoSettlerLogPage()