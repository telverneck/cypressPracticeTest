/// <reference types="Cypress" />

import actionsPage from '../../support/actions';
import loginPage from '../../support/pages/login'
import homePage from '../../support/pages/home' 
import authenticatePage from '../../support/pages/authentication'

import achReturnThresholdsPage from '../../support/pages/reporting/ACHreturnThresholds' 


describe("Reporting Test Page", () => {

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
        const subMenuOption = 'ACH Return Thresholds'
       
    
        homePage.goToOption(optionMenu, subMenuOption)
        achReturnThresholdsPage.checkAchReturnThresholdsPage()
    })

    it("Check Reporting > ACH Return Thresholds - Search for Valid content - Various date ranges, including reset and submit - CSV - One, several, all values", () => {

        achReturnThresholdsPage.searchForDate("01/01/2022", "02/02/2023")
        achReturnThresholdsPage.checkResultsTable()


    });

    it("Check Reporting > ACH Return Thresholds- Search for invalid content - empty values and other negative tests, including reset and submit", () => {

        achReturnThresholdsPage.searchForDate("01/01/2022", "02/02/2020")
        achReturnThresholdsPage.noResultsTable()


    });

    it("Check Reporting > ACH Return Thresholds - Valid Filter - Filter", () => {

        
        achReturnThresholdsPage.searchForDate("01/01/2022", "02/02/2023")
        achReturnThresholdsPage.checkResultsTable()
        achReturnThresholdsPage.searchForFilter("Merchant")
        achReturnThresholdsPage.checkResultsTable()


    });

    it("Check Reporting > ACH Return Thresholds - Invalid Filter - Filter clear values and negative testing - Sorting for all columns", () => {

        achReturnThresholdsPage.searchForDate("01/01/2022", "02/02/2023")
        achReturnThresholdsPage.checkResultsTable()
        achReturnThresholdsPage.searchForFilter("NoResults")
        achReturnThresholdsPage.noResultsTable()


    });

  

    


})

