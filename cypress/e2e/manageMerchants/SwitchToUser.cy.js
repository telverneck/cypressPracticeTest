/// <reference types="Cypress" />

import actionsPage from '../../support/actions';
import loginPage from '../../support/pages/login'
import homePage from '../../support/pages/home' 
import authenticatePage from '../../support/pages/authentication'

import findEditPage from '../../support/pages/manageUsers/findEdit' 


describe("Manage Users Test Page", () => {

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
        const optionMenu = 'Manage Merchants'
        const subMenuOption = 'Find/Edit'
       
    
        homePage.goToOption(optionMenu, subMenuOption)
        findEditPage.checkFindEditPage()
    })

    it("Check Manage Merchants > findEditPage - Search for User", () => {

        // findEditPage.clickRefreshButton()
        findEditPage.searchByName("E2E Tsys Test Merchant")
        findEditPage.clickFirstItem()
        findEditPage.clickLoginAsDefault()


    });

    

})

