/// <reference types="Cypress" />

import actionsPage from '../../support/actions';
import loginPage from '../../support/pages/login'
import homePage from '../../support/pages/home' 
import transactionReportsPage from '../../support/pages/transactionReports'

import findEditPage from '../../support/pages/manageUsers/findEdit' 


describe("Login as Merchant to test remaining pages ", () => {

    beforeEach(function () {
        cy.fixture("enviromentSettings").as('user')

        cy.get("@user").then((user) => {
            cy.setCookie(user.cookiesNameMerchant,user.cookiesValueMerchant)

        })
        loginPage.goToLoginPage()

        
        loginPage.checkLoginPage()

        cy.get("@user").then((user) => {
            loginPage.login(user.loginMerchant, user.passwordMerchant)
            // authenticatePage.authenticate(user.code)
        })

        homePage.checkHomePage()
        const optionMenu = 'Transaction Reports'
        const subMenuOption = 'Card'
       
    
        homePage.goToOption(optionMenu, subMenuOption)
        transactionReportsPage.checkTransactionReportsPage()
    })

    it("Check Manage Reports > Card - Valid Search", () => {

        transactionReportsPage.searchTransactions()
        transactionReportsPage.exportPDF()



    });

   


    

 

})

