import actionsPage from '../../../actions'


let rebindButton = '#btnRebind' 
let firstResultRow = '.rgRow:nth-child(1)' 
let fromDatePicker = '#dtStart_dateInput' 
let toDatePicker = '#dtEnd_dateInput' 
let gridColumns = '#gridManualSettle_ctl00__0' 
let noResults = '.rgNoRecords' 



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
        cy.wait(3000) // waiting for spinner to disapears
        actionsPage.inputIframeText(toDatePicker, dateTo)
        this.clickRebindButton()


    }

    checkResults(){
        cy.wait(10000) // waiting for spinner to disapears
        actionsPage.isIframeElementVisible(firstResultRow)



    }

    checkNoResults(){
        cy.wait(10000) // waiting for spinner to disapears
        actionsPage.isIframeElementVisible(noResults)


    }

    uncheckAuditFilters(){
        actionsPage.clickIframe(showFiltersCheckbox)
        actionsPage.isIframeElementChecked(showFiltersCheckbox)
    }
    

    
    
    

}

export default new manualSettlementPage()