import actionsPage from '../../actions'


let codeInput = 'input[name="authCode"]' 
let rememberMeCheckbox = '#checkRememberDevice' 
let validateButton = 'button[type="submit"]' 



class AuthenticationPage {


    authenticate(code){
        actionsPage.inputText(codeInput, code)
        actionsPage.click(rememberMeCheckbox)
        actionsPage.click(validateButton)

    }

    

}

export default new AuthenticationPage()