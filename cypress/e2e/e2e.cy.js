/// <reference types="cypress" />

import ProdutoPage from '../support/page_objects/produto.page.js'

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
    /*  Como cliente 
        Quero acessar a Loja EBAC 
        Para fazer um pedido de 4 produtos 
        Fazendo a escolha dos produtos
        Adicionando ao carrinho
        Preenchendo todas opções no checkout
        E validando minha compra ao final */

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/')
    });

    it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
        //Quero acessar a Loja EBAC 
        cy.get('.icon-user-unfollow').click()
        cy.fixture('perfil').then((dados) => {
            cy.login(dados.usuario, dados.senha)
        })

        // Para fazer um pedido de 4 produtos
        // Fazendo a escolha dos produtos
        // Adicionando ao carrinho
        ProdutoPage.selecaoDeProdutos('Beaumont Summit Kit', 'M', 'Orange', 1)
        ProdutoPage.selecaoDeProdutos('Atlas Fitness Tank', 'M', 'Blue', 1)
        ProdutoPage.selecaoDeProdutos('Atomic Endurance Running Tee (V-neck)', 'XS', 'Green', 1)
        ProdutoPage.selecaoDeProdutos('Augusta Pullover Jacket', 'S', 'Orange', 1)
    });


})