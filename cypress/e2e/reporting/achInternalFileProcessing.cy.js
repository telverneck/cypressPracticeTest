/// <reference types="Cypress" />

import actionsPage from '../../support/actions';
import loginPage from '../../support/pages/login'
import homePage from '../../support/pages/home' 
import authenticatePage from '../../support/pages/authentication'

import achReturnThresholdsPage from '../../support/pages/reporting/ACHreturnThresholds' 


import ACHInternalFileProcessingPage from '../../support/pages/reporting/ACHInternalFileProcessing' 


describe("Reporting Test Page - ACH Internal File Processing", () => {

    beforeEach(function () {
        cy.fixture("gatewayCredentials").as('user')
        loginPage.goToLoginPage()

        
        loginPage.checkLoginPage()

        cy.get("@user").then((user) => {
            loginPage.login(user.login, user.password)
            authenticatePage.authenticate(user.code)
        })

        homePage.checkHomePage()

        // START: Due a bug in the system, this step is necessary in order to run the test
        const optionMenu = 'Reporting'
        const subMenuOption = 'ACH Return Thresholds'

        
        
        homePage.goToOption(optionMenu, subMenuOption)
        achReturnThresholdsPage.checkAchReturnThresholdsPage()

        // END: Due a bug in the system, this step is necessary in order to run the test
    })
    
    it("Check Reporting > ACH Internal File Processing - Search for Valid content", () => {
        
        const optionMenu = 'Reporting'
        const subMenuOption = 'ACH Internal File Processing'
        homePage.goToOption(optionMenu, subMenuOption)
        ACHInternalFileProcessingPage.checkACHInternalFileProcessingPage()

        ACHInternalFileProcessingPage.searchForDate("01/01/2022", "02/02/2023")
        ACHInternalFileProcessingPage.checkResultsTable()


    });

    

  

    


})

