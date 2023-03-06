/// <reference types="Cypress" />

import actionsPage from '../../support/actions';
import loginPage from '../../support/pages/login'
import homePage from '../../support/pages/home' 
import authenticatePage from '../../support/pages/authentication'

import addMerchantPage from '../../support/pages/manageMerchants/add' 
import findMerchantPage from '../../support/pages/manageMerchants/find' 
import tokenSharingPage from '../../support/pages/manageMerchants/tokenSharing' 


describe("Manage Merchants Test Page - Token Sharing", () => {

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
        const optionMenu = 'Manage Merchants'
        const subMenuOption = 'Token Sharing' 
        
        
        homePage.goToOption(optionMenu, subMenuOption)
        tokenSharingPage.checkTokenSharingPage()
    })
    
    it("Check Manage Merchants > Token Sharing - Add", () => {
        const testName = 'Test Group Name' 

        tokenSharingPage.addNewMerchantGroup(testName)




    });

    it("Check Manage Merchants > Token Sharing - Add - Edit - Delete", () => {
        const testName = 'Test Group Name' 

        tokenSharingPage.addNewMerchantGroup(testName)
        tokenSharingPage.filterGroup(testName)
        tokenSharingPage.deleteNewMerchant()




    });

    

})

