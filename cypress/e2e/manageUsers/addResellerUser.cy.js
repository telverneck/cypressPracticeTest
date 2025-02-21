/// <reference types="Cypress" />

import actionsPage from '../../support/actions';
import loginPage from '../../support/pages/login'
import homePage from '../../support/pages/home' 
import authenticatePage from '../../support/pages/authentication'

import addResellerUserPage from '../../support/pages/manageUsers/addResellerUser' 


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
        const optionMenu = 'Manage Users'
        const subMenuOption = 'Add Reseller User'
       
    
        homePage.goToOption(optionMenu, subMenuOption)
        addResellerUserPage.checkaddResellerUserPage()
    })

    it("Check Manage Users > Add Reseller User - Add User", () => {

        addResellerUserPage.createNewUser()


    });

    // Blocked due MFA
    it("Check Manage Users > Add Reseller User - Check Mandatory Fields", () => {

        addResellerUserPage.clickSaveButton()
        addResellerUserPage.requiredFieldError()
        addResellerUserPage.checkInvalidEmailError()


    });

    // Blocked due MFA
    it("Check Manage Users > Add Reseller User - Check email validation", () => {

        addResellerUserPage.checkInvalidEmailError()


    });

    

  

    


})

