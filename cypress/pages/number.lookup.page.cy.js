import Page from './page.cy'
const learnMoreInContactCenterLink='(//*[@href="/use-cases/contact-center"])[2]'
const contactCenterSolutionTitle='//*[text()="Contact Center Solutions"]'

class NumberLookup{
  clickLearnMoreInContactCenterLink(){
    Page.clickX(learnMoreInContactCenterLink)
  }
  getContactCenterSolutionTitle(){
    return contactCenterSolutionTitle
  }

}

module.exports = new NumberLookup();