/// <reference types="Cypress" />

import actionsPage from '../../support/actions';
import loginPage from '../../support/pages/login'
import homePage from '../../support/pages/home' 
import authenticatePage from '../../support/pages/authentication'

import achReturnThresholdsPage from '../../support/pages/reporting/ACHreturnThresholds' 


import aCHInternalFileProcessingPage from '../../support/pages/reporting/ACHInternalFileProcessing' 


describe("Reporting Test Page - ACH Internal File Processing", () => {

    beforeEach(function () {
        cy.fixture("enviromentSettings").as('user')

        cy.get("@user").then((user) => {
            cy.setCookie(user.cookiesName,user.cookiesValue)

        })
        loginPage.goToLoginPage()

        
        loginPage.checkLoginPage()

        cy.get("@user").then((user) => {
            loginPage.login(user.login, user.password)
            // authenticatePage.authenticate(user.code)
        })

        homePage.checkHomePage()

        // START: Due a bug in the system, this step is necessary in order to run the test
        const optionMenu = 'Reporting'
        const subMenuOption = 'ACH Internal File Processing'

        
        
        homePage.goToOption(optionMenu, subMenuOption)
        aCHInternalFileProcessingPage.checkACHInternalFileProcessingPage()

        // END: Due a bug in the system, this step is necessary in order to run the test
    })
    
    it("Check Reporting > ACH Internal File Processing - Search for Valid content", () => {
        

        aCHInternalFileProcessingPage.searchForDate("01/01/2023", "10/10/2023")
        aCHInternalFileProcessingPage.checkResultsTable()


    });

    it("Check Reporting > ACH Internal File Processing - Search for inValid content", () => {
        

        aCHInternalFileProcessingPage.searchForDate("01/01/2023", "10/10/2023")
        // aCHInternalFileProcessingPage.checkNoResultsTable()
        aCHInternalFileProcessingPage.checkErrorMessage()



    });

    

  

    


})

