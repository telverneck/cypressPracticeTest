/// <reference types="Cypress" />

import actionsPage from '../../support/actions';
import loginPage from '../../support/pages/login'
import homePage from '../../support/pages/home' 
import authenticatePage from '../../support/pages/authentication'

import autoSettleLogPage from '../../support/pages/tools/autoSettlerLog' 


describe("Tools Test Page - Auto Settle Log", () => {

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
        const optionMenu = 'Tools'
        const subMenuOption = 'Auto Settle Log' 
        
        
        homePage.goToOption(optionMenu, subMenuOption)
        autoSettleLogPage.checkAutoSettlerLogPage()
    })
    
    it("Check Tools > Auto Settle Log - Valid Search", () => {

        autoSettleLogPage.searchByDate("10/10/2023", "10/10/2023")
        autoSettleLogPage.checkResults()




    });

    it("Check Tools > Auto Settle Log - invalid Search", () => {

        autoSettleLogPage.searchByDate("2/1/2023", "10/10/2023")
        // autoSettleLogPage.checkErrorMessage()



    });

    it("Check Tools > Auto Settle Log - uncheck audit Filters", () => {

        autoSettleLogPage.uncheckAuditFilters()




    });

    

})

