/// <reference types="Cypress" />

import actionsPage from '../../support/actions';
import loginPage from '../../support/pages/login'
import homePage from '../../support/pages/home' 
import authenticatePage from '../../support/pages/authentication'

import addMerchantPage from '../../support/pages/manageMerchants/add' 
import findMerchantPage from '../../support/pages/manageMerchants/find' 


describe("Manage Merchants Test Page - Add", () => {

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
        const optionMenu = 'Preferences'
        const subMenuOption = 'Two Factors'
       
    
        homePage.goToOption(optionMenu, subMenuOption)
        addMerchantPage.checkaddMerchantPage()
    })

    it("Check Manage Merchants > Add - Add Merchant", () => {

        addMerchantPage.createNewMerchant()


    });

    it("Check Manage Merchants > Add - Check invalid Email", () => {

        addMerchantPage.checkInvalidEmailError()


    });

    it("Check Manage Merchants > Add - Check required fields", () => {

        addMerchantPage.requiredFieldError()


    });

    

    

  

    


})

