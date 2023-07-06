/// <reference types="cypress" />

import ProdutoPage from '../support/page_objects/produto.page.js'
import checkoutPage from '../support/page_objects/checkout.page.js';
const { faker } = require('@faker-js/faker');

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
        var nomeFaker = faker.internet.userName()
        var sobreFaker = faker.internet.userName()
        var emailFaker = faker.internet.email(nomeFaker)

        //Quero acessar a Loja EBAC 
        cy.get('.icon-user-unfollow').click()
        cy.fixture('perfil').then((dados) => {
            cy.login(dados.usuario, dados.senha)
        })
        cy.get('.page-title').should('contain', 'Minha conta')

        // Para fazer um pedido de 4 produtos
        // Fazendo a escolha dos produtos
        // Adicionando ao carrinho
        ProdutoPage.selecaoDeProdutos('Beaumont Summit Kit', 'M', 'Orange', 1)
        ProdutoPage.selecaoDeProdutos('Atlas Fitness Tank', 'M', 'Blue', 1)
        ProdutoPage.selecaoDeProdutos('Atomic Endurance Running Tee (V-neck)', 'XS', 'Green', 1)
        ProdutoPage.selecaoDeProdutos('Augusta Pullover Jacket', 'S', 'Orange', 1)
        
        // Preenchendo todas opções no checkout
        cy.get('.woocommerce-message > .button').click()
        cy.get('.checkout-button').click()

        checkoutPage.completaFaturamento(nomeFaker, sobreFaker, 'EBAC', 'Av.Brasil', '200', 'São Paulo', 'São Paulo', '12345678', '11 1 1111-1111', emailFaker) 

        cy.get('#terms').click()
        cy.get('#place_order').click()

        // E validando minha compra ao final
        cy.get('.woocommerce-notice').should('contain' , 'Obrigado. Seu pedido foi recebido.')
    
    });


})