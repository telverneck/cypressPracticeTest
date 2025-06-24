/// <reference types="Cypress" />

import loginPage from '../../support/pages/login'
import homePage from '../../support/pages/home'


describe("Login Test", () => {

    beforeEach(function () {
        cy.fixture("enviromentSettings").as('user')

        loginPage.goToLoginPage()
        
        loginPage.checkLoginPage()
        
    })
    
    it("Test case 1 - Positive Login test", () => {

        cy.get("@user").then((user) => {
            loginPage.login(user.login, user.password)
        })
        
        homePage.checkHomePage()

    });

    it("Test case 2 - Negative username test", () => {
       
        cy.get("@user").then((user) => {
            loginPage.login(user.wrongLogin, user.password)
        })
        
        loginPage.checkErrorLoginMessage('Your username is invalid!')

    });

    it("Test case 3 - Negative username test", () => {

        cy.get("@user").then((user) => {
            loginPage.login(user.login, user.wrongPassword)
        })
        
        loginPage.checkErrorLoginMessage('Your password is invalid!')

    });


})
