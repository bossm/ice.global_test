import BaseActions from './BaseActions';
import ElementsPageActions from './ElementsPageActions';
import MainPageActions from './MainPageActions';

describe('Add Web Tables', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
    });
    const BaseAction = new BaseActions();
    const MainPageAction = new MainPageActions();
    const ElementsPageAction = new ElementsPageActions();
    let USERS = {};
    before(() => {
        BaseAction.visitHomePage();
        cy.fixture('constants.json').then(($users) => USERS = $users);
    })
    it('TC01', () => {
        MainPageAction.navigateElementsMenu();
        MainPageAction.clickElementsMenu();
        ElementsPageAction.clickWebTablesMenu();
        ElementsPageAction.addNewElementRecord();
        ElementsPageAction.fillFirstName(USERS.firstName);
        ElementsPageAction.fillLastName(USERS.LastName);
        ElementsPageAction.fillAge(USERS.Age);
        ElementsPageAction.fillUserEmail(USERS.UserEmail);
        ElementsPageAction.fillSalary(USERS.Salary);
        ElementsPageAction.fillDepartment(USERS.Department);
        ElementsPageAction.submit();
        ElementsPageAction.checkNewRecordCell(USERS.firstName)
        ElementsPageAction.checkNewRecordCell(USERS.LastName)
        ElementsPageAction.checkNewRecordCell(USERS.Age)
        ElementsPageAction.checkNewRecordCell(USERS.UserEmail)
        ElementsPageAction.checkNewRecordCell(USERS.Salary)
        ElementsPageAction.checkNewRecordCell(USERS.Department)
    })
})