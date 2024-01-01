class POLogin {
    login = { 
        username: cy.get("#user-name"),
        password: cy.get("#password"),
        loginBtn: cy.get("#login-button"),
    }

    inputUsername(username: string) {
        this.login.username.type(username);
    }

    inputPassword(password: string) {
        this.login.password.type(password);
    }

    clickLoginBtn() {
        this.login.loginBtn.click();
    }

    performLogin(username: string, password: string) {
        this.inputUsername(username);
        this.inputPassword(password);
        this.clickLoginBtn();
    }
}

export default POLogin;