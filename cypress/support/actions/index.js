let mainFrame = '#mainFrame'

const switchToIframe = function(){
    cy.frameLoaded(mainFrame)
    return cy
        .iframe(mainFrame)
}


class ActionsPage {

   

    click(webElement) {
        cy.get(webElement).click()
        
    }

    clickIframe(webElement) {
        switchToIframe().find(webElement).click()
    }

    clickXpath(webElement) {
        cy.xpath(webElement).click()
    }

    clickIframeXpath(webElement) {
        switchToIframe().xpath(webElement).click()
    }


    clickXpath(webElement) {
        cy.xpath(webElement).click()
    }

    isElementVisible(webElement) {
        cy.get(webElement).should('be.visible')
    }

    isIframeElementVisible(webElement) {
        switchToIframe().find(webElement).should('be.visible')
    }

    pageTitleShouldBeEqual(title) {
        cy.title().should('eq', title)
    }

    elementShouldContainText(webElement, text) {
        cy.get(webElement).should('contains.text', text)
    }

    inputText(webElement, text) {
        cy.get(webElement).type(text);
    }

    inputIframeText(webElement, text) {
        switchToIframe().find(webElement).clear();
        switchToIframe().find(webElement).type(text);
    }

}

export default new ActionsPage()