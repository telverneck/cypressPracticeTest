/// <reference types="Cypress" />

import actionsPage from '../../support/actions';
import loginPage from '../../support/pages/login'
import homePage from '../../support/pages/home' 
import authenticatePage from '../../support/pages/authentication'

import addMerchantPage from '../../support/pages/manageMerchants/add' 
import findMerchantPage from '../../support/pages/manageMerchants/find' 


describe("Manage Merchants Test Page - Find", () => {

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
        const optionMenu = 'Manage Merchants'
        const subMenuOption = 'Find/Edit'
       
    
        homePage.goToOption(optionMenu, subMenuOption)
        findMerchantPage.checkFindMerchantPage()
    })

    it("Check Manage Merchants > Find - valid search", () => {

        findMerchantPage.filterBy("EqualTo")
        findMerchantPage.searchByName("test")



    });

    it("Check Manage Merchants > Find 2 or more columns - valid search", () => {

        findMerchantPage.searchByName("test")
        findMerchantPage.searchByID("1")



    });

    it("Check Manage Merchants > Find 1 column - Search for no results", () => {

        findMerchantPage.searchByName("No results")


    });

    it("Check Manage Merchants > Find 2 or more columns- Search for no results", () => {

        findMerchantPage.searchByName("No results")
        findMerchantPage.searchByID("No results")


    });

    

    

    

  

    


})

