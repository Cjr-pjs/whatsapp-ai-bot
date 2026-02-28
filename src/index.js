require("dotenv").config();

const { Client, LocalAuth } = require("whatsapp-web.js");
const qrcode = require("qrcode-terminal");
const OpenAI = require("openai");

const openAiClient = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const client = new Client({
  authStrategy: new LocalAuth(),
  puppeteer: {
    headless: true,
  },
});

client.on("qr", (qr) => {
  console.log("Escaneie o QR Code abaixo:");
  qrcode.generate(qr, { small: true });
});

client.on("ready", () => {
  console.log("Bot está online 🚀");
});

client.on("message", async (msg) => {
  if (!msg.body.startsWith("!")) return;

  try {
    const userMessage = msg.body.slice(1).trim();

    if (!userMessage) {
      return msg.reply("Digite algo após o !");
    }

    const response = await openAiClient.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: "Você é um assistente educado, direto e útil.",
        },
        {
          role: "user",
          content: userMessage,
        },
      ],
    });

    const aiReply = response.choices[0].message.content;

    await msg.reply(aiReply);

  } catch (error) {
    console.error("Erro:", error);
    msg.reply("❌ Ocorreu um erro ao processar sua mensagem.");
  }
});

client.initialize();