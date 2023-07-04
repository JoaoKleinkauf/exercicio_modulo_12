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
}

export default new ProdutoPage()