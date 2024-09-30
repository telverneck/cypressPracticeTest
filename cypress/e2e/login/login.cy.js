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
    
    it("Login Page -  Standard and full admin", () => {
        cy.fixture("gatewayCredentials").as('user')

        cy.get("@user").then((user) => {
            cy.setCookie(user.cookiesName,user.cookiesValue)

        })

        cy.get("@user").then((user) => {
            loginPage.login(user.login, user.password)
            // authenticatePage.authenticate(user.code)
        })
        
        homePage.checkHomePage()
        // homePage.logout()
        // loginPage.checkLoginPage()

    });

    it("Login Page -  Standard and full admin2", () => {
        cy.fixture("gatewayCredentials").as('user')

        cy.get("@user").then((user) => {
            cy.setCookie(user.cookiesName,user.cookiesValue)

        })

        cy.get("@user").then((user) => {
            loginPage.login(user.login, user.password)
            // authenticatePage.authenticate(user.code)
        })
        
        homePage.checkHomePage()
        // homePage.logout()
        // loginPage.checkLoginPage()

    });

    it("Login Page - Negative testing - Check Wrong login message", () => {

        loginPage.login('Wrong user', 'Wrong password')
        loginPage.checkErrorLoginMessage()

    });

    it("Login Page - check Forgot Password Link", () => {
        
        loginPage.clickForgotPassword()
        forgotPasswordPage.checkForgotPasswordPage()
        forgotPasswordPage.recoverPassword('email@test.com', 'username')

    });

    it("Forgot Password Page - check Mandatory fields", () => {
        
        loginPage.clickForgotPassword()
        forgotPasswordPage.checkForgotPasswordPage()
        forgotPasswordPage.clickSubmitButton()
        forgotPasswordPage.checkErrorMessages()

    });

    it("Forgot Password Page - check Wrong Email error", () => {
        
        loginPage.clickForgotPassword()
        forgotPasswordPage.checkForgotPasswordPage()
        forgotPasswordPage.clickSubmitButton()
        forgotPasswordPage.checkEmailErrorMessages()

    });

    it("Forgot Password Page - Go to Forgot Password and return to login page", () => {
        
        loginPage.clickForgotPassword()
        forgotPasswordPage.checkForgotPasswordPage()
        forgotPasswordPage.clickReturnToLoginPageLink()
        loginPage.checkLoginPage()

    });

    // it("Login - Check logout", () => {
        
    //     cy.get("@user").then((user) => {
    //         loginPage.login(user.login, user.password)
    //         authenticatePage.authenticate(user.code)
    //     })
        
    //     homePage.checkHomePage()
    //     homePage.logout()
    //     loginPage.checkLoginPage()

    // });
   


})
