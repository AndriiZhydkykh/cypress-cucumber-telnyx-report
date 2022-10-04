import Page from './page.cy'
const whatIsElasticSIPButton='//button[text()="What is SIP trunking?"]'
const textAboutWhatIsElasticSIP='//p//a[text()="SIP Trunking"]'

class ElasticSIPTrunkingPage{

clickWhatIsElasticSIPButton(){
    Page.clickX(whatIsElasticSIPButton);
    Page.clickXForceTrue(whatIsElasticSIPButton);
}
getTextAboutWhatIsElasticSIP(){
    return textAboutWhatIsElasticSIP
 }
}

module.exports = new ElasticSIPTrunkingPage();