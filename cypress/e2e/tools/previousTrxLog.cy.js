/// <reference types="Cypress" />

import actionsPage from '../../support/actions';
import loginPage from '../../support/pages/login'
import homePage from '../../support/pages/home' 
import authenticatePage from '../../support/pages/authentication'

import addMerchantPage from '../../support/pages/manageMerchants/add' 

import cloneCustomFieldsPage from '../../support/pages/tools/cloneCustomFields' 


describe("Tools Test Page", () => {

    beforeEach(function () {
        cy.setCookie('rememberDevice_537194149','%241%248YsD9YlSwthVcWMKQn4tNw%3D%3D%24M7qyYxm5nHRVfxZ%2Fd4RVrWbvoQ8VzNsDYtr78ghjhoU%3D')

        cy.fixture("gatewayCredentials").as('user')
        loginPage.goToLoginPage()

        
        loginPage.checkLoginPage()

        cy.get("@user").then((user) => {
            loginPage.login(user.login, user.password)
            // authenticatePage.authenticate(user.code)
        })

        homePage.checkHomePage()
        const optionMenu = 'Tools'
        const subMenuOption = 'Previous Trx Log' 
        
        homePage.goToOption(optionMenu, subMenuOption)

        cloneCustomFieldsPage.checkCloneCustomFieldsPage()
    })
    
    it("Check Tools > Clone Custom Fields - Valid Search", () => {

        cloneCustomFieldsPage.searchMerchantID("2")
        cloneCustomFieldsPage.checkResults()




    });

    it("Check Tools > Clone Custom Fields - invalid Search", () => {

        cloneCustomFieldsPage.searchByDate("-2")
        cloneCustomFieldsPage.checkNoResults()




    });

    

    

})

