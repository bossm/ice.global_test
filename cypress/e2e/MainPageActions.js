class MainPageActions {

  navigateElementsMenu() {
    return cy.get('h5').contains('Elements').scrollIntoView();
  }

  clickElementsMenu() {
    return cy.get('h5').contains('Elements').click();
  }

}

export default MainPageActions;