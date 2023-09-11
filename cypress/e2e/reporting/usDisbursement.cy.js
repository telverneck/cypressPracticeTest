/// <reference types="Cypress" />

import actionsPage from '../../support/actions';
import loginPage from '../../support/pages/login'
import homePage from '../../support/pages/home' 
import authenticatePage from '../../support/pages/authentication'

import achReturnThresholdsPage from '../../support/pages/reporting/ACHreturnThresholds' 


import usDisbursementPage from '../../support/pages/reporting/usDisbursement' 


describe("Reporting Test Page - US Disbursement", () => {

    beforeEach(function () {
        cy.fixture("gatewayCredentials").as('user')

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

        const optionMenu = 'Reporting'
        const subMenuOption = 'US Disbursement'
        homePage.goToOption(optionMenu, subMenuOption)
        usDisbursementPage.checkUsDisbursementPage()
    })
    
    it("Check Reporting > US Disbursement - Search for Valid content", () => {
        

        usDisbursementPage.searchForDate("01/01/2022", "02/02/2023")
        usDisbursementPage.checkResultsTable()


    });

    

  

    


})

