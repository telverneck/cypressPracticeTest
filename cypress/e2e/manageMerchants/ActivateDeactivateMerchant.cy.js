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
       
    
        homePage.goToOption(optionMenu, subMenuOption)
        findEditPage.checkFindEditPage()
        findEditPage.searchByName("Activate User Test")
        findEditPage.clickfirstMerchantItem() 
        findEditPage.clickfirstMerchantItem() 
    })

    
    it("Check Manage Merchants > findEditPage - Deactivate Merchant", () => {
        // findEditPage.clickfirstMerchantItem()  //Sometimes Repay takes too long to respond, it fixes by clicking twice
        findEditPage.clickDeactivateMerchantButton()
        findEditPage.checkDeactivatedMerchant()
        findEditPage.clickActivateMerchantButton()
        findEditPage.checkActivatedMerchant()
        
    });

    it("Check Manage Merchants > findEditPage - Edit Merchant", () => {
        findEditPage.clickEditMerchantButton()
        findEditPage.clickUpdateMerchant()
        findEditPage.checkMerchantDetail()
        
    });
    

 

})

