/// <reference types= "Cypress"/>

import 'cypress-file-upload';

const { includes } = require("lodash");



describe('Assignment', () => {
  
  it('Test Textbox', () => {
    cy.visit('https://demoqa.com/')
    cy.get('.category-cards > :nth-child(1)').click()
    cy.get(':nth-child(1) > .element-list > .menu-list > #item-0').click()
    cy.get('#userName').type('Joel Kobby Bamfo')
    cy.get('#userEmail').type('joel.bamfo@amalitech.com')
    cy.get('#currentAddress').type('Hse No.1, Jasmine Street, Salem Estates')
    cy.get('#permanentAddress').type('Hse No.1, Jasmine Street, Salem Estates')
    cy.get('#submit').click()

    //Assertion to show all fields work
    cy.get('.border').should('exist')
    cy.get('#name').should('have.text',"Name:Joel Kobby Bamfo")
    cy.get('#email').should('have.text',"Email:joel.bamfo@amalitech.com")
    cy.get('.border > #currentAddress').should('have.text',"Current Address :Hse No.1, Jasmine Street, Salem Estates ")
    cy.get('.border > #permanentAddress').should('have.text',"Permananet Address :Hse No.1, Jasmine Street, Salem Estates")
  });

  it('Test Check box', () => {
    cy.visit('https://demoqa.com/')
    cy.get('.category-cards > :nth-child(1)').click()
    cy.get(':nth-child(1) > .element-list > .menu-list > #item-1').click()
    cy.get('.rct-collapse').click()
    cy.get('.rct-node-expanded > ol > :nth-child(1) > .rct-text > .rct-collapse').click()
    cy.get('#tree-node > :nth-child(2) > :nth-child(1) > :nth-child(2) > .rct-node-expanded > ol > :nth-child(1) > .rct-text > label > .rct-checkbox').click()

    //Assertion to show that the checkbox has been checked
    cy.get('#result').should('exist')
    
  });

  it('Test Radio Box', () => {
    cy.visit('https://demoqa.com/')
    cy.get('.category-cards > :nth-child(1)').click()
    cy.get(':nth-child(1) > .element-list > .menu-list > #item-2').click()
    cy.get("label[for='yesRadio']").click()

    //Assertion to show that the radio button has been clicked
    cy.get('.mt-3').should('exist')
  });

  it('Test Web Tables', () => {
    cy.visit('https://demoqa.com/') 
    cy.get('.category-cards > :nth-child(1)').click()
    cy.get(':nth-child(1) > .element-list > .menu-list > #item-3').click()
    cy.get('#addNewRecordButton').click()
    cy.get('#firstName').type("Joel")
    cy.get('#lastName').type("Bamfo")
    cy.get('#userEmail').type("joelbamfo08@gmail.com")
    cy.get('#age').type('22')
    cy.get('#salary').type("850")
    cy.get('#department').type("Quality Assurance")
    cy.get('#submit').click()

    //Assertion to show if new table entry was added
    cy.get(':nth-child(4) > .rt-tr > :nth-child(1)').should('exist')
    cy.get(':nth-child(4) > .rt-tr > :nth-child(2)').should('exist')
    cy.get(':nth-child(4) > .rt-tr > [style="flex: 40 0 auto; width: 40px; max-width: 40px;"]').should('exist')
    cy.get(':nth-child(4) > .rt-tr > :nth-child(4)').should('exist')
    cy.get(':nth-child(4) > .rt-tr > :nth-child(5)').should('exist')
    cy.get(':nth-child(4) > .rt-tr > :nth-child(6)').should('exist')


  });

  it('Test Buttons', () => {
    cy.visit('https://demoqa.com/')
    cy.get('.category-cards > :nth-child(1)').click()
    cy.get(':nth-child(1) > .element-list > .menu-list > #item-4').click()
    cy.get('#doubleClickBtn').dblclick()
    //Assertion 
    cy.get('#doubleClickMessage').should("have.text","You have done a double click")

    cy.get('#rightClickBtn').rightclick()
    //Assertion 
    cy.get('#rightClickMessage').should("have.text","You have done a right click")

    cy.contains('button','Click Me').click()  
  
  });

  it('Test Links', () => {
    cy.visit('https://demoqa.com/')
    cy.get('.category-cards > :nth-child(1)').click()
    cy.get(':nth-child(1) > .element-list > .menu-list > #item-5').click()
   

    //On-different Tab links
    cy.get('#simpleLink').click()
    //Assertion
    cy.get('#simpleLink').should('have.attr', 'href').and('equal','https://demoqa.com')

    cy.get('#dynamicLink').click()
    //Assertion
    cy.get('#dynamicLink').should('have.attr', 'href').and('equal','https://demoqa.com')


    //On-current Tab links
    cy.get('#created').click()
    //Assertion
    cy.get('#linkResponse').should('have.text','Link has responded with staus 201 and status text Created')

    cy.get('#no-content').click()
    //Assertion
    cy.get('#linkResponse').should('have.text','Link has responded with staus 204 and status text No Content')

    cy.get('#moved').click()
    //Assertion
    cy.get('#linkResponse').should('have.text','Link has responded with staus 301 and status text Moved Permanently')

    cy.get('#bad-request').click()
    //Assertion
    cy.get('#linkResponse').should('have.text','Link has responded with staus 400 and status text Bad Request')

    cy.get('#unauthorized').click()
    //Assertion
    cy.get('#linkResponse').should('have.text','Link has responded with staus 401 and status text Unauthorized')

    cy.get('#forbidden').click()
    //Assertion
    cy.get('#linkResponse').should('have.text','Link has responded with staus 403 and status text Forbidden')

    cy.get('#invalid-url').click()
    //Assertion
    cy.get('#linkResponse').should('have.text','Link has responded with staus 404 and status text Not Found')
    
  });

  it('Test Upload and Download', () => {
    
    cy.visit('https://demoqa.com/')
    cy.get('.category-cards > :nth-child(1)').click()
    cy.get(':nth-child(1) > .element-list > .menu-list > #item-7').click()

    cy.get('#downloadButton').click()
    //Assertion
    cy.verifyDownload('sampleFile.jpeg')
   
    cy.get('input[type="file"]').attachFile('Self_Reg_Email_Verification_Screen.png')
    //Assertion
    cy.get('#uploadedFilePath').should('exist')

  });

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
        cy.get('#promptResult').contains('You entered Joel') //Type in Joel
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