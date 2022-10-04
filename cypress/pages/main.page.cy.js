import Page from './page.cy'
const supportCenterLink='(//a[@href="https://support.telnyx.com/en/"])[1]'
const elasticSIPTrunkingDropdownProductHeaderMenuLink='(//*[text()="Elastic SIP Trunking"])[1]'
const logo='href="/"'
const numberLookUpProductHeaderMenuLink='(//*[text()="Number Lookup"])[1]'
const developerDocsResourcesHeaderMenuLink='(//*[text()="Developer Docs"])[1]'
const whatsappApiFooterLink='[href="/products/whatsapp-api"]'
const blogResourcesHeaderMenuLink='(//*[text()="Blog"])[1]'
const seeAllProductProductHeaderMenuLink='(//*[@href="/products"])[1]'


class MainPage{
  clickSupportCenterLink(){
    Page.clickX(supportCenterLink)
  }
  clickElasticSIPTrunkingDropdownProductHeaderMenuLink(){
    Page.clickXForceTrue(elasticSIPTrunkingDropdownProductHeaderMenuLink)
  }
  clickNumberLookUpProductHeaderMenuLink(){
    Page.clickXForceTrue(numberLookUpProductHeaderMenuLink)
  }
  clickDeveloperDocsResourcesHeaderMenuLink(){
    Page.clickXForceTrue(developerDocsResourcesHeaderMenuLink)
  }
  clickWhatsappApiFooterLink(){
    Page.clickForceTrue(whatsappApiFooterLink)
  }
  clickBlogResourcesHeaderMenuLink(){
    Page.clickXForceTrue(blogResourcesHeaderMenuLink)
  }
  clickSeeAllProductProductHeaderMenuLink(){
    Page.clickXForceTrue(seeAllProductProductHeaderMenuLink)
  }
  open(){
    Page.visit('https://telnyx.com/')
    }
  getLogo(){
    return logo
  }
}

module.exports = new MainPage();