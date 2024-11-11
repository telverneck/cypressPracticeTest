/// <reference types="Cypress" />

import actionsPage from '../../support/actions';
import loginPage from '../../support/pages/login'
import homePage from '../../support/pages/home' 
import authenticatePage from '../../support/pages/authentication'


import caDisbursementPage from '../../support/pages/reporting/caDisbursement' 


describe("Reporting Test Page - US Disbursement", () => {

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

        const optionMenu = 'Reporting'
        const subMenuOption = 'CA Disbursement'
        homePage.goToOption(optionMenu, subMenuOption)
        caDisbursementPage.checkcaDisbursementPage()
    })
    
    it("Check Reporting > US Disbursement - Search for Valid content", () => {
        

        caDisbursementPage.searchForDate("01/01/2022", "02/02/2023")
        caDisbursementPage.checkResultsTable()


    });

    

  

    


})

