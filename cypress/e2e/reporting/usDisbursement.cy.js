/// <reference types="Cypress" />

import actionsPage from '../../support/actions';
import loginPage from '../../support/pages/login'
import homePage from '../../support/pages/home' 
import authenticatePage from '../../support/pages/authentication'

import achReturnThresholdsPage from '../../support/pages/reporting/ACHreturnThresholds' 


import ACHInternalFileProcessingPage from '../../support/pages/reporting/ACHInternalFileProcessing' 


describe("Reporting Test Page - US Disbursement", () => {

    beforeEach(function () {
        cy.fixture("gatewayCredentials").as('user')
        loginPage.goToLoginPage()

        
        loginPage.checkLoginPage()

        cy.get("@user").then((user) => {
            loginPage.login(user.login, user.password)
            authenticatePage.authenticate(user.code)
        })

        homePage.checkHomePage()

        const optionMenu = 'Reporting'
        const subMenuOption = 'US Disbursement'
        homePage.goToOption(optionMenu, subMenuOption)
        ACHInternalFileProcessingPage.checkACHInternalFileProcessingPage()
    })
    
    it("Check Reporting > US Disbursement - Search for Valid content", () => {
        

        ACHInternalFileProcessingPage.searchForDate("01/01/2022", "02/02/2023")
        ACHInternalFileProcessingPage.checkResultsTable()


    });

    

  

    


})

