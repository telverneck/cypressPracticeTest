/// <reference types="Cypress" />

import actionsPage from '../../support/actions';
import loginPage from '../../support/pages/login'
import homePage from '../../support/pages/home' 
import authenticatePage from '../../support/pages/authentication'
import addResellerUserPage from '../../support/pages/manageUsers/addResellerUser' 

import findEditPage from '../../support/pages/manageUsers/findEdit' 


describe("Manage Users Test Page", () => {

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
        const optionMenu = 'Manage Merchants'
        const subMenuOption = 'Find/Edit'
       
    
        homePage.goToOption(optionMenu, subMenuOption)
        findEditPage.checkFindEditPage()
        findEditPage.searchByName("E2E Tsys Test Merchant")
        findEditPage.clickfirstMerchantItem() 
        findEditPage.clickfirstMerchantItem() 
    })

    it("Check Manage Merchants > findEditPage - Validate Merchant Info tab", () => {

        // findEditPage.clickRefreshButton()
        findEditPage.checkMerchantDetail()
        findEditPage.clickViewUsers()
        findEditPage.checkViewUsersPage()

    });

    it("Check Manage Merchants > findEditPage - Check Validation tab", () => {

        findEditPage.clickValidationTab()
        findEditPage.checkValidationTab()

    });

    
    it("Check Manage Merchants > findEditPage - Check Processors tab", () => {

        findEditPage.clickProcessorsTab()
        findEditPage.checkProcessorsTab()
    });

    it("Check Manage Merchants > findEditPage - Add User", () => {

        findEditPage.clickAddUser()
        addResellerUserPage.checkaddResellerUserPage()
        addResellerUserPage.createNewUser()
    });

 

})

