/// <reference types="Cypress" />

import actionsPage from '../../support/actions';
import loginPage from '../../support/pages/login'
import homePage from '../../support/pages/home' 
import authenticatePage from '../../support/pages/authentication'

import findEditResellers from '../../support/pages/manageResellers/findEdit' 


describe("Virtual Terminals Test Page", () => {

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
        const optionMenu = 'Manage Resellers'
        const subMenuOption = 'Find/Edit' 
        
        
        homePage.goToOption(optionMenu, subMenuOption)
        findEditResellers.checkFindEditResellersPage()
    })
    
    // WIP
    it("Check Virtual Terminals > Card", () => {

        findEditResellers.filterBy("EqualTo")
        findEditResellers.searchByName("test")
        findEditResellers.checkResultsTable()



    });

    

    

})

