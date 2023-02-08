/// <reference types="Cypress" />

import actionsPage from '../../support/actions';
import loginPage from '../../support/pages/login'
import authenticatePage from '../../support/pages/authentication'
import homePage from '../../support/pages/home'


describe("Login Test", () => {

    beforeEach(function () {
        cy.fixture("gatewayCredentials").as('user')

        loginPage.goToLoginPage()
        
        loginPage.checkLoginPage()
        
    })
    
    it("Should be able to Login and check the Dashboard Page", () => {
        
        cy.get("@user").then((user) => {
            loginPage.login(user.login, user.password)
            authenticatePage.authenticate(user.code)
        })
        
        homePage.checkHomePage()

    });

    it("Check Wrong login message", () => {

        loginPage.login('Wrong user', 'Wrong password')
        loginPage.checkErrorLoginMessage()

    });
   


})
