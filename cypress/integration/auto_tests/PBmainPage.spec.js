///<reference types="Cypress"/>

describe('Check default exchange and payments on PB', () => {
    it('Type on exchange inpute', () => {
      cy.visit('https://next.privat24.ua/')
      cy.get('[data-qa-node="amountA"]')
      .type("3000")
      .should('have.value', "3 000") 
      cy.get('[data-qa-node="amountB"]')
      .should('not.contain', '200')
    })

    it('Check default exchenge value', () => {
        cy.visit('https://next.privat24.ua/')
        cy.get('[data-qa-node="currencyA"][data-qa-value="USD"]')
        cy.get('[data-qa-node="currencyB"][data-qa-value="UAH"]')
        cy.get('[data-qa-node="swap"]')
        .click()  
        cy.get('[data-qa-node="currencyA"][data-qa-value="UAH"]')
        cy.get('[data-qa-node="currencyB"][data-qa-value="USD"]')
      })

    it('Check new payments page', () => {
      cy.visit('https://next.privat24.ua/')
      cy.get('div.heading_1geSzvl8uB > a')
      .click()
      cy. get('div.sc-cqCuEk.hXQotN')
      cy.contains('Платежі')
      .click()
      cy.get('div.sc-gqjmRU.kXOItR.marginTop3_n1esNY9haT > button')
      .click()
      cy.get('div.content_3J5-EE6yoa')
      cy.get('div.sc-dNLxif.jwXyMn > input')
      .should('have.value', "Київ")
    })
    
    it('Securities', () => {
      cy.visit('https://next.privat24.ua/')
      cy.contains('[rel="noreferrer noopener"]', 'Цінні папери')
      .click()
      cy.get('tbody').find('tr').eq('1').trigger('mouseover')
      cy.contains('tr:nth-child(2)', 'Прорахувати').click()
      cy.location('pathname')
      .should('include', '/bonds/purchase/UA4000218325');
      cy.get('input.sc-jwKygS.leeOUZ').type('100')
      cy.get('button.sc-VigVT.cQOKFU').click()
    })

    it('Check payments by parts', () => {
      cy.visit('https://next.privat24.ua/')
      cy.get('[href="/part-payment/order"]')
      .click()
      cy.get('[data-qa-node="query"]')
      .type('Comfy')
      cy.location('pathname', {timeout: 12000})
      .should('include', '/part-payment/order');
      cy.get('[href="http://comfy.ua"]')

      cy.get('div.sc-elJkPf.csxtVg', {timeout: 12000}).click()

      cy.get('[data-qa-node="query"]')
      .type('Moyo')
      cy.location('pathname', {timeout: 12000})
      .should('include', '/part-payment/order');
      cy.get('[href="http://www.moyo.ua/"]')

      cy.get('[href="/branches"]').click()
      cy.get('div.gm-style-pbc')
    })

  })