import Page from '../pages/page.cy'
class Expect{

     shouldContainUrl(value){
         Page.toContainsUrl(value)
     }
     toHaveUrl(value){
         Page.toHaveUrl(value)
     }
     shouldElementBeVisible(element){
         Page.isElementVisible(element)
     }
     shouldElementXBeVisible(element){
        Page.isElementXVisible(element);
     }
     shouldElementXIncludeText(element,text){
        Page.isElementXIncludeText(element,text);
     }
     shouldElementContains(element,text){
        Page.elementContains(element,text)
     }

 }

module.exports = new Expect();