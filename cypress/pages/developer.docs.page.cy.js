import Page from './page.cy'
const apiV1Button='(//button[text()="API v1"])[1]'
const messagingInSideBarLink='(//span[text()="Messaging"])[1]'
const headerMessagingAPIV1='//p[contains(text(),"API V1")]'
const messagingArticleTitle='#messaging'
const apiV1LeftSideBarLink='#docs-desktop-sidebar a'
const developmentInSideBarLink='(//span[text()="Development"])[1]'
const sdkSetupButton='(//*[@href="/docs/v2/development/dev-env-setup"])[3]'
const javaApiDocsLink='[href="/docs/api/v2/overview?lang=java&lang=java"]'
const developmentJavaButton='#tab-Java'

class DeveloperDocsPage{

clickApiV1Button(){
    Page.clickX(apiV1Button)
}
clickMessagingInSideBarLink(){
    Page.clickX(messagingInSideBarLink)
}
clickDevelopmentInSideBarLink(){
    Page.clickX(developmentInSideBarLink)
}
clickSdkSetupButton(){
    Page.clickX(sdkSetupButton)
}
clickDevelopmentJavaButton(){
    Page.click(developmentJavaButton)
}
getJavaApiDocsLink(){
    return javaApiDocsLink
}
getHeaderMessagingAPIV1(){
    return headerMessagingAPIV1
}
getMessagingArticleTitle(){
    return messagingArticleTitle
}
getApiV1LeftSideBarLink(){
    return apiV1LeftSideBarLink
}
}

module.exports = new DeveloperDocsPage();