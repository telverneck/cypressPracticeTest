/// <reference types="Cypress" />

import actionsPage from '../../support/actions';
import loginPage from '../../support/pages/login'
import homePage from '../../support/pages/home' 
import authenticatePage from '../../support/pages/authentication'

import addMerchantPage from '../../support/pages/manageMerchants/add' 

import previousTrxLogPage from '../../support/pages/tools/previousTrxLog' 


describe("Tools Test Page - Previous Trx Log", () => {

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
        const optionMenu = 'Tools'
        const subMenuOption = 'Previous Trx Log' 
        
        homePage.goToOption(optionMenu, subMenuOption)

        previousTrxLogPage.checkPreviousTrxLogPage()
    })
    
    it("Check Tools > Previous Trx Log - Valid Search", () => {

        previousTrxLogPage.searchByID(1)
        previousTrxLogPage.checkResults()
    });

    it("Check Tools > Previous Trx Log - invalid Search", () => {
        previousTrxLogPage.searchByID("No Results")

        previousTrxLogPage.checkErrorMessage()

    });

    

    

})

