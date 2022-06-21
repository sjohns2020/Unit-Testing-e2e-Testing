describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

  it('should have number buttons that update the display of the running total', () => {
    cy.get('#number2').click();
    cy.get('#number5').click();
    cy.get('#number7').click();
    cy.get('.display').should('contain', '257')
  })

  it('should have arithmetical operations that update the display of the running total', () => {
    cy.get('#number2').click();
    cy.get('#operator_add').click();
    cy.get('#number7').click();
    cy.get('#operator-multiply').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '18')
  })

  it('should have arithmetical operations that can be chained together', () => {
    cy.get('#number2').click();
    cy.get('#operator_add').click();
    cy.get('#number7').click();
    cy.get('#operator-multiply').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('#operator-multiply').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '36')
  })

  it('should have expected output for positive numbers', () => {
    cy.get('#number2').click();
    cy.get('#operator_add').click();
    cy.get('#number7').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '9')
  })

  it('should have expected output for negative numbers', () => {
    cy.get('#number2').click();
    cy.get('#operator-subtract').click();
    cy.get('#number7').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '-5')
  })

  it('should have expected output for decimal numbers', () => {
    cy.get('#number5').click();
    cy.get('#operator-divide').click();
    cy.get('#number4').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '1.25')
  })

  it('should have expected output for very large numbers', () => {
    cy.get('#number5').click();
    cy.get('#operator-multiply').click();
    cy.get('#number5').click();
    cy.get('#operator-equals').click();
    cy.get('#operator-multiply').click();
    cy.get('#running-total').click();
    cy.get('#operator-equals').click();
    cy.get('#operator-multiply').click();
    cy.get('#running-total').click();
    cy.get('#operator-equals').click();
    cy.get('#operator-multiply').click();
    cy.get('#running-total').click();
    cy.get('#operator-multiply').click();
    cy.get('#running-total').click();
    cy.get('.display').should('contain', '152587890625')
  })

it('should have expected output which equals 0 when divide by 0', () => {
    cy.get('#number5').click();
    cy.get('#operator-divide').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '0')
  })



})