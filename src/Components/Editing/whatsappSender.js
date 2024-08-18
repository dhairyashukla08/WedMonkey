const WhatsApp = require('whatsapp-web.js');

const SESSION_FILE_PATH = './session.json';

const client = new WhatsApp.Client({
  sessionFile: SESSION_FILE_PATH,
});

client.on('qr', (qr) => {
  console.log('QR code:', qr);
});

client.on('ready', () => {
  console.log('Client is ready');
});

async function sendPDF(whatsappClient, phoneNumber, pdfBuffer) {
  try {
    await whatsappClient.isRegistered();
    const pdfName = `card_${selectedCard.title}.pdf`;
    const media = await whatsappClient.uploadMedia(pdfBuffer, 'application/pdf', pdfName);
    await whatsappClient.sendMessage(phoneNumber, media);
    console.log('PDF sent successfully');
  } catch (error) {
    console.error('Error sending PDF:', error);
  }
}

module.exports = { sendPDF, client };