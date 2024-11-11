/// <reference types="Cypress" />

import actionsPage from '../../support/actions';
import loginPage from '../../support/pages/login'
import homePage from '../../support/pages/home' 
import authenticatePage from '../../support/pages/authentication'

import passwordPage from '../../support/pages/preferences/password' 


describe("Preferences - Password", () => {

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
        const optionMenu = 'Preferences'
        const subMenuOption = 'Password'
       
    
        homePage.goToOption(optionMenu, subMenuOption)
        passwordPage.checkPasswordPage()

    })

    it("Check Preferences > Check Password Page and password complexity", () => {

        cy.get("@user").then((user) => {
            passwordPage.fillMandatoryFields(user.login,'Wexinc11111111','Wexinc11111111')
            passwordPage.checkForGoodPasswordText()
            passwordPage.fillMandatoryFields(user.login,user.login + '#22222222',user.login + '#22222222')
            passwordPage.checkForStrongPasswordText()
        })


    });

    it("Check Preferences > Password - wrong auth code", () => {

        cy.get("@user").then((user) => {
            passwordPage.fillMandatoryFields(user.login,'Wexinc11111111','Wexinc11111111')
            passwordPage.clickNextButton()
            passwordPage.checkAuthCodeField()
            passwordPage.fillAuthCode("123456")
            passwordPage.checkErrorAler()
        })


    });

    it("Check Preferences > Password - validate short password", () => {

        cy.get("@user").then((user) => {
            passwordPage.fillMandatoryFields(user.login,'We','We')
            passwordPage.checkForWeakPasswordText()

        })


    });

    it("Check Preferences > Password - validate wrong format password", () => {

        cy.get("@user").then((user) => {
            passwordPage.fillMandatoryFields(user.login,'012345678912','012345678912')
            passwordPage.checkForWeakPasswordText()

        })


    });


})

