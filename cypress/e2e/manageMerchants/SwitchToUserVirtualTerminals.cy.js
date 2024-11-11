/// <reference types="Cypress" />

import actionsPage from '../../support/actions';
import loginPage from '../../support/pages/login'
import homePage from '../../support/pages/home' 
import authenticatePage from '../../support/pages/authentication'

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
        const masterCard = '5425233430109903'
        const optionMenu2 = 'Virtual Terminals'
        const subMenuOption2 = 'Card'
       
    
        homePage.goToOption(optionMenu, subMenuOption)
        findEditPage.checkFindEditPage()
        findEditPage.searchByName("E2E Tsys Test Merchant")
        findEditPage.clickFirstItem()
        findEditPage.clickLoginAsDefault()
        homePage.goToOption(optionMenu2, subMenuOption2)
    })

    it.skip("Switch To Merchants > Virtual Terminal - Sale", () => {

        // findEditPage.clickRefreshButton()

        findEditPage.goToSale()
        findEditPage.makeTransactionWithCard(masterCard)
        findEditPage.confirmTransaction()
        actionsPage.visit('https://yopmail.com/wm')
        actionsPage


    });


    it.skip("Switch To Merchants > Virtual Terminal - PreAuth", () => {

        // findEditPage.clickRefreshButton()
        findEditPage.goToPreAuth()
        findEditPage.makeTransactionWithCard(masterCard)
        findEditPage.confirmTransaction()


    });

    it.skip("Switch To Merchants > Virtual Terminal - Return", () => {

        // findEditPage.clickRefreshButton()
        findEditPage.goToReturn()
        findEditPage.makeTransactionWithCard(masterCard)
        findEditPage.confirmTransaction()


    });

    it.skip("Switch To Merchants > Virtual Terminal - ForceAuth", () => {

        findEditPage.goToForceAuth()
        findEditPage.makeTransactionWithCard(masterCard)
        findEditPage.confirmTransaction()


    });

    

})

