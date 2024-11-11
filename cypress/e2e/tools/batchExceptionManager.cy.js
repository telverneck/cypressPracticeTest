/// <reference types="Cypress" />

import actionsPage from '../../support/actions';
import loginPage from '../../support/pages/login'
import homePage from '../../support/pages/home' 
import authenticatePage from '../../support/pages/authentication'

import addMerchantPage from '../../support/pages/manageMerchants/add' 

import batchExceptionManagerPage from '../../support/pages/tools/batchExceptionManager' 


describe("Tools Test Page - Batch Exception Manager", () => {

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
        const subMenuOption = 'Batch Exception Manager' 
        
        
        homePage.goToOption(optionMenu, subMenuOption)

        batchExceptionManagerPage.checkBatchExceptionManagerPage()
    })
    
    it("Check Tools > Batch Exception Manager - Check Move Button", () => {

        batchExceptionManagerPage.clickMoveSelectedButton() // Currently is displaying error screen
        // TODO: Add Next behavior here


    });

    it("Check Tools > Batch Exception Manager - Check Settlement Button", () => {

        batchExceptionManagerPage.clickSubmitSettlementButton()
        // TODO: Add Next behavior here

    });

    

    

    

})

