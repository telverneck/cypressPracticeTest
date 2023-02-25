/// <reference types="Cypress" />

import actionsPage from '../../support/actions';
import loginPage from '../../support/pages/login'
import homePage from '../../support/pages/home' 
import authenticatePage from '../../support/pages/authentication'

import findEditResellers from '../../support/pages/manageResellers/findEdit' 


describe("Manage Resellers Test Page", () => {

    beforeEach(function () {
        cy.fixture("gatewayCredentials").as('user')
        loginPage.goToLoginPage()

        
        loginPage.checkLoginPage()

        cy.get("@user").then((user) => {
            loginPage.login(user.login, user.password)
            authenticatePage.authenticate(user.code)
        })

        homePage.checkHomePage()
        const optionMenu = 'Manage Resellers'
        const subMenuOption = 'Find/Edit' 
        
        
        homePage.goToOption(optionMenu, subMenuOption)
        findEditResellers.checkFindEditResellersPage()
    })
    
    it("Check Manage Resellers > Find - valid search", () => {

        findEditResellers.filterBy("EqualTo")
        findEditResellers.searchByName("test")



    });

    it("Check Manage Resellers > Find 2 or more columns - valid search", () => {

        findEditResellers.searchByName("test")
        findEditResellers.searchByID("1")



    });

    it("Check Manage Resellers > Find 1 column - Search for no results", () => {

        findEditResellers.searchByName("No results")


    });

    it("Check Manage Resellers > Find 2 or more columns- Search for no results", () => {

        findEditResellers.searchByName("No results")
        findEditResellers.searchByID("No results")


    });

    

})

