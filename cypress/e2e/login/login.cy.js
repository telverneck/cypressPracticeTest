/// <reference types="Cypress" />

import actionsPage from '../../support/actions';
import loginPage from '../../support/pages/login'
import forgotPasswordPage from '../../support/pages/forgotPassword'
import authenticatePage from '../../support/pages/authentication'
import homePage from '../../support/pages/home'


describe("Login Test", () => {

    beforeEach(function () {
        cy.fixture("gatewayCredentials").as('user')

        loginPage.goToLoginPage()
        
        loginPage.checkLoginPage()
        
    })
    
    it("Should be able to Login and check the Dashboard Page - Standard and full admin", () => {
        
        cy.get("@user").then((user) => {
            loginPage.login(user.login, user.password)
            authenticatePage.authenticate(user.code)
        })
        
        homePage.checkHomePage()

    });

    it("Negative testing - Check Wrong login message", () => {

        loginPage.login('Wrong user', 'Wrong password')
        loginPage.checkErrorLoginMessage()

    });

    it("Login Page - check Forgot Password Link", () => {
        
        loginPage.clickForgotPassword()
        forgotPasswordPage.checkForgotPasswordPage()
        forgotPasswordPage.recoverPassword('email@test.com', 'username')

    });

    it("Login Page - check Mandatory fields", () => {
        
        loginPage.clickForgotPassword()
        forgotPasswordPage.checkForgotPasswordPage()
        forgotPasswordPage.clickSubmitButton()
        forgotPasswordPage.checkErrorMessages()

    });

    it("Login Page - check Wrong Email error", () => {
        
        loginPage.clickForgotPassword()
        forgotPasswordPage.checkForgotPasswordPage()
        forgotPasswordPage.clickSubmitButton()
        forgotPasswordPage.checkEmailErrorMessages()

    });

    it("Check logout", () => {
        
        cy.get("@user").then((user) => {
            loginPage.login(user.login, user.password)
            authenticatePage.authenticate(user.code)
        })
        
        homePage.checkHomePage()
        homePage.logout()
        loginPage.checkLoginPage()

    });
   


})
