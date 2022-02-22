const el = require("./elements.js").ELEMENTS;

class AdicionarVeiculo {


    cadastroDeVeiculo() {
        //#13-Adicionar veículo com valores validos.        
            cy.get(el.email).type("telparkteste@yopmail.com");
            cy.get(el.palavraPasse).type("Teste#12");
            cy.get(el.formEntrar).submit();
            cy.get(el.titulo).contains("Reservar Lugar");
            cy.get(el.veiculo).click();
            cy.get(el.labelVeiculo).click();
            cy.wait(2000);
            cy.get(el.nome).type("toyota");
            cy.get(el.matricula).type('QX03QX')
            cy.get(el.btnGuardar).click();
            cy.get(el.placa).should('have.text', 'QX-03-QX');

        }

        removerVeiculo() {
            //Remover veículo registado.
            cy.get(el.btnEditar).click();
            cy.get(el.btnFechar).click();
            cy.get(el.btnRemover).click();
        }


}
export default new AdicionarVeiculo();