const el = require("./elements.js").ELEMENTS;

class IniciarSessao {
    

    loginValido() {
    //#6-Iniciar sessao com credenciais validas.        
        cy.get(el.email).type("telparkteste@yopmail.com");
        cy.get(el.palavraPasse).type("Teste#12");
        cy.get(el.formEntrar).submit();
        cy.wait(2000);
        cy.get(el.titulo).contains("Reservar Lugar");
    }

    loginSemCadastro() {
        //#7-Iniciar sessao com credenciais validas, porém não cadastradas.
        cy.get(el.email).type("telparkt@yopmail.com");
        cy.get(el.palavraPasse).type("Teste#12");
        cy.get(el.formEntrar).submit();
        cy.get(el.labelDeErro).should('have.text', 'Email ou palavra-passe inválidos');
        
    }

    loginEmailInvalido() {
        //#8-Iniciar sessao  com email inválido.
        cy.get(el.email).type("telparktyopmail.com");
        cy.get(el.palavraPasse).type("Teste#12");
        cy.get(el.formEntrar).submit();
        cy.get(el.labelDeErro).should('have.text', 'Email inválido');
    }

    loginPalavraPasseInvalida() {
        //#9-Iniciar sessao com palavra-passe inválida.
        cy.get(el.email).type("telparkteste@yopmail.com");
        cy.get(el.palavraPasse).type("Tes");
        cy.get(el.formEntrar).submit();
        cy.get(el.labelDeErro).should('have.text', 'Email ou palavra-passe inválidos');
    }

}

export default new IniciarSessao();