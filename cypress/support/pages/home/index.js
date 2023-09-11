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

       
        cy.enter(bannerFrame).then(iframeBanner => {
            iframeBanner()
            .find(userinfo)
            .should('contains.text', 'Welcome, ')
        })
    }

    goToOption(optionMenu, subMenuOption) {
      
        cy.enter(leftMenuFrame).then(iframeBanner => {
            iframeBanner()
            .xpath(`//div[@id='Menu'][contains(@class,'RadPanelBar')]//*[contains(text(), '${optionMenu}')]`).click()
            .xpath(`//*[contains(@style,'visible')]//*[contains(@class,'rpGroup')]//*[text()= '${subMenuOption}']`).click()
        })

        cy.enter(mainFrame).then(iframeBanner => {
            iframeBanner()
            .find('h2');
        })
        cy.wait(3000) // waiting for spinner to disapears

    }

   


    logout(){
        let optionMenu = "Logout"
        cy.enter(leftMenuFrame).then(iframeBanner => {
            iframeBanner()
            .xpath(`//div[@id='Menu'][contains(@class,'RadPanelBar')]//*[contains(text(), '${optionMenu}')]`).click()
        })
    }
   


}

export default new HoginPage()