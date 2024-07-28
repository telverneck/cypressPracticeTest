/// <reference types="Cypress" />

import actionsPage from '../../support/actions';
import loginPage from '../../support/pages/login'
import homePage from '../../support/pages/home' 
import authenticatePage from '../../support/pages/authentication'

import addMerchantPage from '../../support/pages/manageMerchants/add' 

import paymentPage from '../../support/pages/tools/payment' 


describe("Tools Test Page - Payment Method Importer", () => {

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
        const subMenuOption = 'Payment Method Importer (Beta)' 
        
        homePage.goToOption(optionMenu, subMenuOption)

        paymentPage.checkPaymentMethodImporterPage()
    })
    
    it("Check Tools > Payment Method Importer - Import file", () => {

        paymentPage.checkPaymentMethodImporterPage()
        paymentPage.selectAnyMerchant()
        paymentPage.checkTableResults()
        
    });

    

})

