/// <reference types="Cypress" />

import actionsPage from '../../support/actions';
import loginPage from '../../support/pages/login'
import homePage from '../../support/pages/home' 
import authenticatePage from '../../support/pages/authentication'

import auditTrailLogPage from '../../support/pages/tools/auditTrailLog' 


describe("Manage Merchants Test Page", () => {

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
        const subMenuOption = 'Audit Settle Log' 
        
        
        homePage.goToOption(optionMenu, subMenuOption)
        auditTrailLogPage.checkAuditTrailLogPage()
    })
    
    it("Check Tools > Audit Trail Log - Valid Search", () => {

        auditTrailLogPage.searchByDate("2/1/2020", "2/1/2025")
        auditTrailLogPage.checkResults()




    });

    it("Check Tools > Audit Trail Log - invalid Search", () => {

        auditTrailLogPage.searchByDate("2/1/2020", "2/1/2019")
        auditTrailLogPage.checkNoResults()




    });

    it("Check Tools > Audit Trail Log - uncheck audit Filters", () => {

        auditTrailLogPage.uncheckAuditFilters()




    });

    

})

