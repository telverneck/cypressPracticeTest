/// <reference types="Cypress" />

import actionsPage from '../../support/actions';
import loginPage from '../../support/pages/login'
import homePage from '../../support/pages/home' 
import authenticatePage from '../../support/pages/authentication'

import addMerchantPage from '../../support/pages/manageMerchants/add' 

import cloneCustomFieldsPage from '../../support/pages/tools/cloneCustomFields' 


describe("Tools Test Page - Clone Custom", () => {

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
        const subMenuOption = 'Clone Custom Fields' 
        
        homePage.goToOption(optionMenu, subMenuOption)

        cloneCustomFieldsPage.checkCloneCustomFieldsPage()
    })
    
    it("Check Tools > Clone Custom Fields - Valid Search", () => {

        cloneCustomFieldsPage.searchMerchantID("2")
        cloneCustomFieldsPage.checkResults()




    });

    it("Check Tools > Clone Custom Fields - invalid Search", () => {

        cloneCustomFieldsPage.searchMerchantID("-2")
        cloneCustomFieldsPage.checkNoResults()




    });

    

    

})

