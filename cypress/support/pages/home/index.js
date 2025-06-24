import actionsPage from '../../actions'

let loggedPostTitleLabel = '.post-title'
let logoutButton = "a[href*='test-login']" 


class HomePage {

    get loadBannerIframe() {
        cy.frameLoaded(bannerFrame);
        return cy.iframe();
    }

    checkHomePage() {
        actionsPage.isElementVisible(loggedPostTitleLabel)
        actionsPage.isElementVisible(logoutButton)
    }

    logout(){
        actionsPage.click(logoutButton)
    }
   
}

export default new HomePage()