class Page {
   getElement(element) {
      return cy.get(element);
   }
   getElementX(element) {
      return cy.xpath(element);
   }
   isElementVisible(element){
      return this.getElement(element).should('be.visible');
   }
   isElementXIncludeText(element,text){
      return this.getElementX(element).should("include.text",text );
   }
   isElementXVisible(element){
      return this.getElementX(element).should('be.visible');
   }
   click(element) {
      this.getElement(element).click();
    }
    clickX(element) {
      this.getElementX(element).click();
    }
    clickForceTrue(element){//for fix click
       this.getElement(element).click({ force: true });
    }
    clickXForceTrue(element){//for fix click
      this.getElementX(element).click({ force: true });
    }
    clickWithDeleteTarget(element){//for fix click
      this.getElement(element).invoke('removeAttr', 'target')
      this.getElement(element).click()
    }
    
    type(element,value) {
      this.getElement(element).clear() 
      this.getElement(element).type(value);
    }
     typeX(element,value) {
     this.getElementX(element).type(value);
     }
     typeEndPressEnter(element,value) {
      this.getElement(element).type(value)
      .type("{enter}");
      }
    moveTo(element,trigger) {
       this.isElementVisible(element);
       this.getElement(element).trigger('mouseover');
    }
    moveToX(element,trigger) {
       this.isElementXVisible(element);
       this.getElementX(element).trigger('mouseover');
    }
    toContainsUrl(value){
     cy.url().should('include',value)
    }
    toHaveUrl(value){
       cy.url().should('eq', value);
    }
    visit(value){
      cy.visit(value)
    }
    elementContains(element,text){
      this.getElement(element).contains(text)
    }
    
}
module.exports = new Page();