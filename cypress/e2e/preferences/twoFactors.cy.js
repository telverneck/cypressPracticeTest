/// <reference types="Cypress" />

import actionsPage from '../../support/actions';
import loginPage from '../../support/pages/login'
import homePage from '../../support/pages/home' 
import authenticatePage from '../../support/pages/authentication'

import twoFactorPage from '../../support/pages/preferences/twoFactor' 


describe("Manage Merchants Test Page - Add", () => {

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
        const optionMenu = 'Preferences'
        const subMenuOption = 'Two Factor'
       
    
        homePage.goToOption(optionMenu, subMenuOption)
    })

    it("Check Two Factor Page > Check Alert info", () => {

        twoFactorPage.checkTwoFactorPage()


    });

    

})

