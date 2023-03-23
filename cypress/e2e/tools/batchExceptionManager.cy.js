/// <reference types="Cypress" />

import actionsPage from '../../support/actions';
import loginPage from '../../support/pages/login'
import homePage from '../../support/pages/home' 
import authenticatePage from '../../support/pages/authentication'

import addMerchantPage from '../../support/pages/manageMerchants/add' 

import batchExceptionManagerPage from '../../support/pages/tools/batchExceptionManager' 


describe("Manage Merchants Test Page", () => {

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
        const subMenuOption = 'Manual Settlement' 
        
        
        homePage.goToOption("Manage Merchants", "Add")

        addMerchantPage.checkaddMerchantPage()
        
        homePage.goToOption(optionMenu, subMenuOption)

        batchExceptionManagerPage.checkBatchExceptionManagerPage()
    })
    
    it("Check Tools > Audit Trail Log - Valid Search", () => {

        batchExceptionManagerPage.searchByDate("2/1/2020", "2/1/2025")
        batchExceptionManagerPage.checkResults()




    });

    

    

    

})

