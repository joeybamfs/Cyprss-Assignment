describe('Assignment Question 2', () => {
    it('Test Browser Windows', () => {
        cy.visit('https://demoqa.com/')
        cy.get('.category-cards > :nth-child(3)').click()
        cy.get(':nth-child(3) > .element-list > .menu-list > #item-0').click()
        cy.get('#tabButton').click()
        //Assertion

        cy.get('#windowButton').click()
        //Assertion

        cy.get('#messageWindowButton').click()
        //Assertion

    });

    it('Test Alerts', () => {
        cy.visit('https://demoqa.com/')
        cy.get('.category-cards > :nth-child(3)').click()
        cy.get(':nth-child(3) > .element-list > .menu-list > #item-1').click()

        cy.get('#alertButton').click()
        //Assertion
        cy.on('window:alert', (textWithoutTime) => {
            expect(textWithoutTime).to.contains('You clicked a button');
          });

        
    });

    it('Test Alert with Delay', () => {
        cy.visit('https://demoqa.com/')
        cy.get('.category-cards > :nth-child(3)').click()
        cy.get(':nth-child(3) > .element-list > .menu-list > #item-1').click()

        cy.get('#timerAlertButton').click()
        cy.wait(5000)
        //Assertion
        cy.on('window:alert', (textWithTime) => {
            expect(textWithTime).to.contains('This alert appeared after 5 seconds');
          });
        });

    it('Test Confirmation Alert', () => {
        cy.visit('https://demoqa.com/')
        cy.get('.category-cards > :nth-child(3)').click()
        cy.get(':nth-child(3) > .element-list > .menu-list > #item-1').click()
        cy.get('#confirmButton').click()
        //Assertion
        cy.on('window:confirm', (text) => {
            expect(text).to.contains('Do you confirm action?');
          });  
        cy.get('#confirmResult').contains('You selected Ok');

        
    });

    it('Test Prompt Box Alert', () => {
        cy.visit('https://demoqa.com/')
        cy.get('.category-cards > :nth-child(3)').click()
        cy.get(':nth-child(3) > .element-list > .menu-list > #item-1').click()
        cy.get('#promtButton').click()
        
        //Assertion
        cy.window().then(win => {
            cy.stub(win, 'prompt').returns('Please enter your name');
          });
          cy.get('#promptResult').contains('You entered Joel')
    });

    it('Test Frames', () => {
        cy.visit('https://demoqa.com/')
        cy.get('.category-cards > :nth-child(3)').click()
        cy.get(':nth-child(3) > .element-list > .menu-list > #item-2').click()
        cy.get('#frame1').its('0.contentDocument.body').should('be.visible').and('have.text','This is a sample page')
        
        cy.get('#frame2').its('0.contentDocument.body').should('be.visible').and('have.text','This is a sample page')
    });
      
    it('Test Nested Frames', () => {
        cy.visit('https://demoqa.com/')
        cy.get('.category-cards > :nth-child(3)').click()
        cy.get(':nth-child(3) > .element-list > .menu-list > #item-3').click()
        
        //Assertion to show the content in the Parent Frame
        cy.get('#frame1').its('0.contentDocument.body').should('be.visible').and('have.text','Parent frame')

        //Assertion of show the nested iFrame within in the Parent Frame
        cy.get('#frame1').its('0.contentDocument.body').find('iframe').its('0.contentDocument.body').should('be.visible').and('have.text','Child Iframe')
    });

    it('Test Modal dialogs', () => {
        cy.visit('https://demoqa.com/')
        cy.get('.category-cards > :nth-child(3)').click()
        cy.get(':nth-child(3) > .element-list > .menu-list > #item-4').click()
        cy.get('#showSmallModal').click()
        
        //Assertion to show smal; modal shows up
        cy.get('.modal-content').should('be.visible')
        cy.get('.modal-header').should('have.text','Small Modal×Close')
        cy.get('.modal-body').should('have.text','This is a small modal. It has very less content')
        // cy.get('.modal-footer').should('contain.value','button')

    });
    it('Test large Modal Dialog', () => {
        cy.visit('https://demoqa.com/')
        cy.get('.category-cards > :nth-child(3)').click()
        cy.get(':nth-child(3) > .element-list > .menu-list > #item-4').click()
        cy.get('#showLargeModal').click()

        //Assertion to show large modal shows up
        cy.get('.modal-content').should('be.visible')
        cy.get('.modal-header').should('have.text','Large Modal×Close')
        cy.get('.modal-body').should('have.text',"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.")
        
    });
});