/// <reference types="Cypress" />

import actionsPage from '../../support/actions';
import loginPage from '../../support/pages/login'
import homePage from '../../support/pages/home' 
import authenticatePage from '../../support/pages/authentication'


import achAuthFormsPage from '../../support/pages/tools/achAuthForms' 


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
        const subMenuOption = 'ACH Auth Forms' 
        
        homePage.goToOption(optionMenu, subMenuOption)

        achAuthFormsPage.checkachAuthFormsPage()
    })
    
    it("Check Tools > ACH Auth Forms", () => {





    });
    

})

