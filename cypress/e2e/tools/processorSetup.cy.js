/// <reference types="Cypress" />

import actionsPage from '../../support/actions';
import loginPage from '../../support/pages/login'
import homePage from '../../support/pages/home' 
import authenticatePage from '../../support/pages/authentication'

import addMerchantPage from '../../support/pages/manageMerchants/add' 

import processorSetupPage from '../../support/pages/tools/processorSetup' 


describe("Tools Test Page - Processor Setup", () => {

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
        const subMenuOption = 'Processor Setup' 
        
        homePage.goToOption(optionMenu, subMenuOption)

        processorSetupPage.checkProcessorSetupPagePage()
    })
    
    it("Check Tools > Processor Setup - Valid Page", () => {

        processorSetupPage.selectFirstProcessor()
        // processorSetupPage.clickSaveProcessor()



    });


})

