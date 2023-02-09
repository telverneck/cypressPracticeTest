import actionsPage from '../../actions'

let bannerFrame = '#bannerFrame'
let userinfo = '.bannerFlex div.user-info-container div:nth-child(1)'
let mainFrame = '#mainFrame'
let leftMenuFrame = '#menuFrame'

class HoginPage {

    get loadBannerIframe() {
        cy.frameLoaded(bannerFrame);
        return cy.iframe();
    }

    checkHomePage() {

        // const bannerIframe = cy.get('#bannerFrame')
        //     .its('0.contentDocument.body')
        //     .should('be.visible')
        //     .then(cy.wrap)

        // bannerIframe
        //     .find(userinfo)
        //     .should('contains.text', 'Welcome, ')


        // // actionsPage.isElementVisible(cy.iframe(bannerFrame)
        // // .find(userinfo)
        // // .should('contains.text', 'Welcome, '))
        // this.loadBannerIframe
        //     .find(userinfo)
        //     .should('contains.text', 'Welcome, ')
        // // cy.iframe(bannerFrame)

        cy.enter(bannerFrame).then(iframeBanner => {
            iframeBanner()
            .find(userinfo)
            .should('contains.text', 'Welcome, ')
        })
    }

    goToOption(optionMenu, subMenuOption) {
        // // const optionMenu = 'Reporting'
        // // const subMenuOption = 'ACH Return Thresholds'

        // cy.iframe(mainFrame).as('mainFrame').find('h2')
        // cy.iframe(leftMenuFrame).as('menuFrame').xpath(`//div[@id='Menu'][contains(@class,'RadPanelBar')]//*[contains(text(), '${optionMenu}')]`).click()
        // cy.get('@menuFrame').xpath(`//*[contains(@class,'rpGroup')]//*[contains(text(), '${subMenuOption}')]`).click()
        // cy.get('#mainFrame').its('0.contentDocument.body').then(cy.wrap).find('h2');

        cy.enter(leftMenuFrame).then(iframeBanner => {
            iframeBanner()
            .xpath(`//div[@id='Menu'][contains(@class,'RadPanelBar')]//*[contains(text(), '${optionMenu}')]`).click()
            .xpath(`//*[contains(@style,'visible')]//*[contains(@class,'rpGroup')]//*[contains(text(), '${subMenuOption}')]`).click()
        })

        cy.enter(mainFrame).then(iframeBanner => {
            iframeBanner()
            .find('h2');
        })
    }



}

export default new HoginPage()