/// <reference types="Cypress" />

import actionsPage from '../../support/actions';
import loginPage from '../../support/pages/login'
import homePage from '../../support/pages/home' 
import authenticatePage from '../../support/pages/authentication'

import systemInfoPage from '../../support/pages/tools/systemInfo' 


describe("Tools Test Page - System Info", () => {

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
        const subMenuOption = 'System Info' 
        
        homePage.goToOption(optionMenu, subMenuOption)

        systemInfoPage.checsystemInfoPage()
    })
    
    it("Check Tools > System Info - Valid System Info Page", () => {

        systemInfoPage.clickValidatePasswordButton()
        systemInfoPage.checkErrorMessage()


    });

    
    

    

})

