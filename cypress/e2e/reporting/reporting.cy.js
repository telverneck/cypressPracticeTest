/// <reference types="Cypress" />

import actionsPage from '../../support/actions';
import loginPage from '../../support/pages/login'
import homePage from '../../support/pages/home' 
import authenticatePage from '../../support/pages/authentication'

import achReturnThresholdsPage from '../../support/pages/reporting/ACHreturnThresholds' 


describe("Reporting Test Page", () => {

    beforeEach(function () {
        cy.fixture("gatewayCredentials").as('user')
        loginPage.goToLoginPage()

        
        loginPage.checkLoginPage()

        cy.get("@user").then((user) => {
            loginPage.login(user.login, user.password)
            authenticatePage.authenticate(user.code)
        })

        homePage.checkHomePage()
    })

    it("Check Reporting > ACH Return Thresholds", () => {

        const optionMenu = 'Reporting'
        const subMenuOption = 'ACH Return Thresholds'
       

        homePage.goToOption(optionMenu, subMenuOption)
        achReturnThresholdsPage.checkAchReturnThresholdsPage()
        achReturnThresholdsPage.searchForDate("01/01/2023", "02/02/2023")
        homePage.goToOption("Test should Fail here", subMenuOption)


    });

    it("Check  Preferences > Two Factor", () => {
        const optionMenu = 'Preferences'
        const subMenuOption = 'Two Factor'
        homePage.goToOption("Test should Fail here Too", subMenuOption)

    });

    it("Check  Preferences > Two Factor", () => {
        const optionMenu = 'Preferences'
        const subMenuOption = 'Two Factor'
        homePage.goToOption(optionMenu, subMenuOption)

    });

    


})

// describe("Test Gateway core flow", () => {

//     beforeEach(function () {
//         cy.fixture("gatewayCredentials").as('user')
//         loginPage.goToLoginPage()

        
//         loginPage.checkLoginPage()

//         cy.get("@user").then((user) => {
//             loginPage.login(user.login, user.password)
//             authenticatePage.authenticate(user.code)
//         })

//         homePage.checkHomePage()
//     })

    

//     it("Check  Preferences > Two Factor", () => {
//         const optionMenu = 'Preferences'
//         const subMenuOption = 'Two Factor'
//         homePage.goToOption(optionMenu, subMenuOption)

//     });

// });

// describe("Test Gateway core flow", () => {

//     beforeEach(function () {
//         cy.fixture("gatewayCredentials").as('user')
//         loginPage.goToLoginPage()

        
//         loginPage.checkLoginPage()

//         cy.get("@user").then((user) => {
//             loginPage.login(user.login, user.password)
//             authenticatePage.authenticate(user.code)
//         })

//         homePage.checkHomePage()
//     })

    

//     it("Check  Preferences > Two Factor", () => {
//         const optionMenu = 'Preferences'
//         const subMenuOption = 'Two Factor'
//         homePage.goToOption(optionMenu, subMenuOption)

//     });

// });

// describe("Test Gateway core flow", () => {

//     beforeEach(function () {
//         cy.fixture("gatewayCredentials").as('user')
//         loginPage.goToLoginPage()

        
//         loginPage.checkLoginPage()

//         cy.get("@user").then((user) => {
//             loginPage.login(user.login, user.password)
//             authenticatePage.authenticate(user.code)
//         })

//         homePage.checkHomePage()
//     })

    

//     it("Check  Preferences > Two Factor", () => {
//         const optionMenu = 'Preferences'
//         const subMenuOption = 'Two Factor'
//         homePage.goToOption(optionMenu, subMenuOption)

//     });

// });
