import actionsPage from '../../actions'

let dataRangeSelect = "//*[text()='Date Range']//..//select" 
let submitButton = "a[href*='/report'] button" 
let exportButton = "#toggleBtn" 
let pdfOption = "li.button-dropdown__li:nth-child(3)" 




class LoginPage {


    checkTransactionReportsPage(){
        actionsPage.isXpathElementVisible(dataRangeSelect)
        actionsPage.isIframeElementVisible(submitButton)
    }
    
    searchTransactions(){
        actionsPage.selectValueFromListXpath(dataRangeSelect, "12")
        actionsPage.clickIframe(submitButton)

    }

    exportPDF(){
        cy.intercept('GET', '**/*.pdf').as('pdfDownload')
        actionsPage.clickIframe(exportButton)
        actionsPage.clickIframe(pdfOption)
        cy.wait(10000) // waiting for spinner to disapears
        
        // const downloadsFolder = Cypress.config("downloadsFolder");
        // cy.readFile(Path.join(downloadsFolder, "export.pdf")).should("exist")
        const url = "https://api.uat.repayonline.com/rgapi/v1.0/transactions/card/query/export?customStartDateDifference=&customDateRange=&dateRangeSelection=12&startDate=2024-11-29T00%3A27%3A07.000Z&endDate=2025-02-27T00%3A27%3A07.000Z&merchantName=&merchantId=&username=&approvalCode=&trxType=&trxStatus=&cardHolder=&cardNumber=&paymentType=&result=&register=&transactionId=&invoiceNumber=&totalAmount=&poNumber=&batchNumber=&customerId=&excludeVoids=false&excludeCaptured=false&showOnlyAutoReversals=false&checkNumber=&nameOnCheck=&accountNumber=&customFields=&initialCustomFields=&name=&cardToken=&formForApi=%5Bobject%20Object%5D&lastFour=&status=&cardBrand=&trxTypes=&markAutoReversals=true&format=pdf"
        
        // cy.downloadFile(url, 'cypress/downloads', 'exported.pdf');

        // cy.readFile('cypress/downloads/exported.pdf', 'binary').then((pdfContent) => {
        //     expect(pdfContent.lenght).to.be.greaterThan(0);
        // })
        cy.get('@newTab').should('be.called').then((stub) => {
            const pdfUrl = stub.getCall(0).args[0]; // Captura a URL da nova aba
            cy.log('PDF URL:', pdfUrl);
          
            // Baixar e validar que o arquivo não está vazio
            cy.downloadFile(pdfUrl, 'cypress/downloads', 'exported.pdf');
          
            cy.readFile('cypress/downloads/exported.pdf', 'binary').then((pdfContent) => {
              expect(pdfContent.length).to.be.greaterThan(0); // Garante que o PDF não está vazio
            });
        
        })
    }
}

    



export default new LoginPage()