/// <reference types="cypress" />


import iniciarSessao from "../support/pages/Iniciar_Sessao"
import adicionarVeiculo from "../support/pages/Adicionar_veiculo"
require("cypress-xpath");


describe('qa_exercise_automation', () => {

    Cypress.on("uncaught:exception", (err, Runnable) => {
        return false;
    });

    beforeEach(() => {
        cy.visit('');
    });

    after(() => {
        cy.clearLocalStorage();
    });


    describe('', () => {

    })
    it('#6-Iniciar sessao com credenciais validas.', () => {
        iniciarSessao.loginValido();
    });

    
    it('#7-Iniciar sessao com credenciais validas, porém não cadastradas.', () => {
        iniciarSessao.loginSemCadastro();
    });

    it('#8-Iniciar sessao  com email inválido.', () => {
        iniciarSessao.loginEmailInvalido();
    });

    it('#9-Iniciar sessao com palavra-passe inválida.', () => {
        iniciarSessao.loginPalavraPasseInvalida();
    });

    it('#13-Adicionar veículo com valores validos e remover veiculo.', () => {
        adicionarVeiculo.cadastroDeVeiculo();
        adicionarVeiculo.removerVeiculo();
    });
});