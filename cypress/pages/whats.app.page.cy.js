const whatsAppTitle="//h1//span[contains(text(),'WhatsApp')]"


class WhatsAppPage{
  getWhatsAppTitle(){
    return whatsAppTitle
  }
}

module.exports = new WhatsAppPage();