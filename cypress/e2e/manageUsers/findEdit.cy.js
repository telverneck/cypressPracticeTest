/// <reference types="Cypress" />

import actionsPage from '../../support/actions';
import loginPage from '../../support/pages/login'
import homePage from '../../support/pages/home' 
import authenticatePage from '../../support/pages/authentication'

import findEditPage from '../../support/pages/manageUsers/findEdit' 


describe("Manage Users Test Page", () => {

    beforeEach(function () {
        cy.setCookie('rememberDevice_537194149','%241%248YsD9YlSwthVcWMKQn4tNw%3D%3D%24M7qyYxm5nHRVfxZ%2Fd4RVrWbvoQ8VzNsDYtr78ghjhoU%3D')

        cy.fixture("gatewayCredentials").as('user')
        loginPage.goToLoginPage()

        
        loginPage.checkLoginPage()

        cy.get("@user").then((user) => {
            loginPage.login(user.login, user.password)
            authenticatePage.authenticate(user.code)
        })

        homePage.checkHomePage()
        const optionMenu = 'Manage Users'
        const subMenuOption = 'Find/Edit'
       
    
        homePage.goToOption(optionMenu, subMenuOption)
        findEditPage.checkFindEditPage()
    })

    it("Check Manage Users > findEditPage - Search for User", () => {

        findEditPage.clickRefreshButton()


    });

    

})

