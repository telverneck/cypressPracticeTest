import actionsPage from '../../../actions'


let rebindButton = '#btnRebind' 
let firstResultRow = '.rgRow:nth-child(1)' 
let fromDatePicker = '#dtStart_dateInput' 
let toDatePicker = '#dtEnd_dateInput' 


class manualSettlementPage {



    checkManualSettlementPage() {

        cy.wait(2000) // waiting for spinner to disapears
        

        actionsPage.isIframeElementVisible(rebindButton)


        
    }

    clickRebindButton(){
        actionsPage.clickIframe(rebindButton)
    }

    

    
    searchByDate(dateFrom, dateTo){
        actionsPage.inputIframeText(fromDatePicker, dateFrom)
        actionsPage.inputIframeText(toDatePicker, dateTo)
        this.clickRebindButton()


    }

    checkResults(){
        cy.wait(5000) // waiting for spinner to disapears
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

export default new manualSettlementPage()