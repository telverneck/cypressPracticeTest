import actionsPage from '../../actions'

let loggedPostTitleLabel = '.post-title'
let logoutButton = "a[href*='test-login']" 


class HomePage {

    checkHomePage() {
        actionsPage.isElementVisible(loggedPostTitleLabel)
        actionsPage.isElementVisible(logoutButton)
    }

    logout(){
        actionsPage.click(logoutButton)
    }
   
}

export default new HomePage()
