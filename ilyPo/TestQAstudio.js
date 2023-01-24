describe('сайn QAStudio', function (){
    it('Положить 2ух местную кровать в корзину', function () {
        cy.visit('https://testqastudio.me/');
        cy.get('.post-11342 > .product-inner > .product-thumbnail > .woocommerce-LoopProduct-link > .attachment-woocommerce_thumbnail').click();
        cy.get('.summary > .cart > .product-button-wrapper > .quantity > .increase').dblclick();
        cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click();
        cy.get('.cart-panel-content > .modal-header > .close-account-panel > .razzi-svg-icon > svg').click();
        cy.get('.post-11337 > .product-inner > .product-thumbnail > .woocommerce-LoopProduct-link > .attachment-woocommerce_thumbnail').click();
        cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click();
        cy.wait(4000)
        cy.get('.checkout');
        cy.get('.checkout').click();
        cy.get('#billing_first_name').type('Илья');
        cy.get('#billing_last_name').type('Полюдов')
        cy.get('#billing_address_1').type('проспект Октября 102');
        cy.get('#billing_city').type('Москва');
        cy.get('#billing_state').type('Москва');
        cy.get('#billing_postcode').type('444');
        cy.get('#billing_phone').type('89991239999');
        cy.get('#billing_email').type('ily.polydov@gmail.com');
        cy.get('#place_order').click();
        cy.contains('Ваш заказ принят. Благодарим вас.')


    })
})