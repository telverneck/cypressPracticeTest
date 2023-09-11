/// <reference types="Cypress" />

import actionsPage from '../../support/actions';
import loginPage from '../../support/pages/login'
import homePage from '../../support/pages/home' 
import authenticatePage from '../../support/pages/authentication'


import settleMessagesPage from '../../support/pages/tools/settleMessages' 


describe("Tools Test Page - Settle Messages", () => {

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
        const subMenuOption = 'Settle Messages' 
        
        homePage.goToOption(optionMenu, subMenuOption)

        settleMessagesPage.checkSettleMessagesPage()
    })
    
    it("Check Tools > Settle Messages - Check error message", () => {

        settleMessagesPage.checkErrorMessage()

    });

    

})

