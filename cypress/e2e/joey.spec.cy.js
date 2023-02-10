const { before } = require("lodash")

describe('template spec', () => {
  before('Before cypress starts', () => {
    cy.log('This is the beginning of the test')
  })
  it('passes', () => {
    cy.visit('https://www.amazon.com/?&tag=googleglobalp-20&ref=pd_sl_7nnedyywlk_e&adgrpid=82342659060&hvpone=&hvptwo=&hvadid=585475370855&hvpos=&hvnetw=g&hvrand=9387631925872574943&hvqmt=e&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9073673&hvtargid=kwd-10573980&hydadcr=2246_13468515&gclid=Cj0KCQiA2-2eBhClARIsAGLQ2RkQmzU6i77eIN8mQY6MKzYS70wVwHeDSj5O7E7BeHsU4jPlBfAHWlwaApZ_EALw_wcB')
    cy.get('#nav-link-accountList-nav-line-1').click()
    cy.get('input[type="email"]').type('joelbamfo08@gmail.com')
    cy.get('input[type="submit"][id="continue"]').click()
    cy.get('input[type="password"]').type('lionelmessi10AB__')
    cy.get('input[type="submit"][id="signInSubmit"]').click()
    // cy.get('.a-dropdown-prompt').select('GH +233')
    
  })
})