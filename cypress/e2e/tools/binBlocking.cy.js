/// <reference types="Cypress" />

import actionsPage from '../../support/actions';
import loginPage from '../../support/pages/login'
import homePage from '../../support/pages/home' 
import authenticatePage from '../../support/pages/authentication'

import addMerchantPage from '../../support/pages/manageMerchants/add' 

import binBlockingPage from '../../support/pages/tools/binBlocking' 


describe("Tools Test Page", () => {

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
        const subMenuOption = 'Bin Blocking' 
        
        homePage.goToOption(optionMenu, subMenuOption)

        binBlockingPage.checkbinBlockingPage()
    })
    
    it("Check Tools > Bin Blocking - Check Rules and mandatory fields", () => {

        binBlockingPage.clickAddRule()
        binBlockingPage.clickSave()
        binBlockingPage.checkErrorMessage()
        binBlockingPage.clickCancel()
       
        
    });

    

    

    

})

