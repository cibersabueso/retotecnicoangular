describe('Todo List', () => {
    beforeEach(() => {
      cy.visit('/');
    });
  
    it('should add a new task', () => {
      cy.get('input[formControlName="title"]').type('New Task');
      cy.get('button[type="submit"]').click();
      cy.contains('New Task').should('be.visible');
    });
  
    it('should toggle task completion', () => {
      cy.get('mat-checkbox').first().click();
      cy.get('mat-checkbox').first().should('be.checked');
    });
  
    it('should delete a task', () => {
      cy.get('button[aria-label="Delete task"]').first().click();
      cy.contains('New Task').should('not.exist');
    });
  
    it('should filter tasks', () => {
      cy.get('mat-tab-group').contains('Completed Tasks').click();
      cy.get('app-task-item').should('have.length', 0);
      cy.get('mat-tab-group').contains('All Tasks').click();
      cy.get('app-task-item').should('have.length.gt', 0);
    });
  
    it('should edit a task', () => {
      cy.get('button[aria-label="Edit task"]').first().click();
      cy.get('input[formControlName="title"]').clear().type('Updated Task');
      cy.get('button[aria-label="Save edited task"]').click();
      cy.contains('Updated Task').should('be.visible');
    });
  
    it('should not allow empty task title', () => {
      cy.get('input[formControlName="title"]').clear();
      cy.get('button[type="submit"]').should('be.disabled');
    });
  
    it('should not allow task title longer than 100 characters', () => {
      const longTitle = 'a'.repeat(101);
      cy.get('input[formControlName="title"]').type(longTitle);
      cy.get('button[type="submit"]').should('be.disabled');
    });
  });