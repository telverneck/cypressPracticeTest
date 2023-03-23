/// <reference types="Cypress" />

import actionsPage from '../../support/actions';
import loginPage from '../../support/pages/login'
import homePage from '../../support/pages/home' 
import authenticatePage from '../../support/pages/authentication'


import ACHInternalFileProcessingPage from '../../support/pages/reporting/ACHInternalFileProcessing' 


describe("Reporting Test Page - US Disbursement", () => {

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

        const optionMenu = 'Reporting'
        const subMenuOption = 'CA Disbursement'
        homePage.goToOption(optionMenu, subMenuOption)
        ACHInternalFileProcessingPage.checkACHInternalFileProcessingPage()
    })
    
    it("Check Reporting > US Disbursement - Search for Valid content", () => {
        

        ACHInternalFileProcessingPage.searchForDate("01/01/2022", "02/02/2023")
        ACHInternalFileProcessingPage.checkResultsTable()


    });

    

  

    


})

