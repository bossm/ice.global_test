class ElementsPageActions {

  clickWebTablesMenu() {
    return cy.get('span').contains('Web Tables').click();
  }

  addNewElementRecord() {
    return cy.get('#addNewRecordButton').click();
  }

  fillFirstName(value) {
    const field = cy.get('#firstName');
    field.clear();
    field.type(value);
    return this;
  }

  fillLastName(value) {
    const field = cy.get('#lastName');
    field.clear();
    field.type(value);
    return this;
  }

  fillAge(value) {
    const field = cy.get('#age');
    field.clear();
    field.type(value);
    return this;
  }

  fillUserEmail(value) {
    const field = cy.get('#userEmail');
    field.clear();
    field.type(value);
    return this;
  }

  fillSalary(value) {
    const field = cy.get('#salary');
    field.clear();
    field.type(value);
    return this;
  }

  fillDepartment(value) {
    const field = cy.get('#department');
    field.type(value);
    return this;
  }

  submit() {
    cy.get('#submit').click();
    
  }

  checkNewRecordCell(value) {
    cy.get('div').contains(value).should('exist');
    return this;
  }
}

export default ElementsPageActions;