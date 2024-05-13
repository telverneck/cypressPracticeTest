/// <reference types="Cypress" />

import actionsPage from '../../support/actions';
import loginPage from '../../support/pages/login'
import homePage from '../../support/pages/home' 
import authenticatePage from '../../support/pages/authentication'

import paymentsPage from '../../support/pages/tools/payment' 


describe("Tools Test Page - Payment Method Exporter", () => {

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
        const subMenuOption = 'Payment Method Exporter' 
        
        homePage.goToOption(optionMenu, subMenuOption)

        paymentsPage.checkPaymentExporterPage()
    })
    
    it("Check Tools > Payment Method Exporter - Valid Search", () => {
        paymentsPage.searchPaymentExporterByID(1)

    });

    it("Check Tools > Payment Method Exporter - Invalid Search - numbers", () => {
        paymentsPage.searchPaymentExporterByID(3242343243243242344324)
        paymentsPage.searchPaymentExporterByID(3242343243243242344324) // to pass, this needs to run twice. 
        paymentsPage.checkErrorMessage()

    });

    it("Check Tools > Payment Method Exporter - Invalid Search - letters", () => {
        paymentsPage.searchPaymentExporterByID("aaaa")
        paymentsPage.searchPaymentExporterByID("aaaa")
        paymentsPage.checkErrorMessage()

    });
    it("Check Tools > Payment Method Exporter - Invalid Search - Special char", () => {
        paymentsPage.searchPaymentExporterByID("$%^&*(")
        paymentsPage.searchPaymentExporterByID("$%^&*(")
        paymentsPage.checkErrorMessage()

    });


    

})

