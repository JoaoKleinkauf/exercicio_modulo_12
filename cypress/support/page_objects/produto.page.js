class ProdutoPage{
    selecaoDeProdutos(produto, tam, cor, quant) {
        cy.get('#primary-menu > .menu-item-629 > a').click()
        cy.get(':nth-child(2) > .page-numbers').click()
        cy.get('[class="product-block grid"]').contains(produto).click()
        cy.get('.button-variable-item-' + tam).click()
        cy.get('.button-variable-item-' + cor).click()
        cy.get('.input-text').clear().type(quant)
        cy.get('.single_add_to_cart_button').click()

        cy.get('.woocommerce-message').should('contain' , produto)
    }

    completaFaturamento(nome, sobrenome, empresa, rua, numero, cidade, estado, cep, telefone, email){
        cy.get('#billing_first_name').clear().type(nome)
        cy.get('#billing_last_name').clear().type(sobrenome)
        cy.get('#billing_company').clear().type(empresa)
        cy.get('#billing_address_1').clear().type(rua)
        cy.get('#billing_address_2').clear().type(numero)
        cy.get('#billing_city').clear().type(cidade)
        cy.get('#select2-billing_state-container').type(estado + '{enter}')
        cy.get('#billing_postcode').clear().type(cep)
        cy.get('#billing_phone').clear().type(telefone)
        cy.get('#billing_email').clear().type(email)
    }
}

export default new ProdutoPage()