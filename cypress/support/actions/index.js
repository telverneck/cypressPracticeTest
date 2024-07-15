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

    isIframeElementChecked(webElement) {
        switchToIframe().find(webElement).should('be.visible').and('not.be.checked');
    }

    

    isIframeElementNotVisible(webElement) {
        switchToIframe().find(webElement).should('not.exist')
    }

    isElementNotVisible(xpathLocater) {
        cy.xpath(xpathLocater).should('not.exist');
    };

    isXpathElementVisible(xpathLocater) {
        switchToIframe().xpath(xpathLocater).should('be.visible');
    };

    pageTitleShouldBeEqual(title) {
        cy.title().should('eq', title)
    }

    elementShouldContainText(webElement, text) {
        cy.get(webElement).should('contains.text', text)
    }

    elementIframeShouldContainText(webElement, text) {
        switchToIframe().find(webElement).should('contains.text', text)
    }

    inputText(webElement, text) {
        cy.get(webElement).type(text);
    }

    inputIframeText(webElement, text) {
        switchToIframe().find(webElement).clear();
        switchToIframe().find(webElement).type(text);
    }

    submitIframe(webElement) {
        switchToIframe().find(webElement).type('{enter}')
    }

    selectValueFromList(webElement, value) {
        switchToIframe().find(webElement).select(value)
    }

}

export default new ActionsPage()