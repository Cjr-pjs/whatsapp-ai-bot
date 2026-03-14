# 🤖 WhatsApp AI Bot com OpenAI

Bot para WhatsApp que responde mensagens utilizando Inteligência Artificial da OpenAI.

O bot responde apenas mensagens que começam com `!` e gera respostas automáticas usando IA.

---

## 🚀 Tecnologias Utilizadas

- whatsapp-web.js
- openai
- dotenv
- qrcode-terminal
- Node.js

---

## 📁 Estrutura do Projeto

```
whatsapp-bot/
│
├── index.js
├── package.json
├── package-lock.json
├── .gitignore
├── README.md
└── .env (não incluso no repositório)
```

---

## ⚙️ Instalação

### 1️⃣ Clone o repositório

```bash
git clone https://github.com/Cjr-pjs/whatsapp-ai-bot.git
```

### 2️⃣ Entre na pasta do projeto

```bash
cd whatsapp-bot
```

### 3️⃣ Instale as dependências

```bash
npm install
```

---

## 🔐 Configuração

Crie um arquivo `.env` na raiz do projeto:

```
OPENAI_API_KEY=sua_chave_aqui
```



## ▶️ Como Executar

```bash
node index.js
```

Após executar:

- Um QR Code será exibido no terminal
- Escaneie com o WhatsApp
- O bot ficará online

---

## 💬 Como Usar

O bot responde apenas mensagens que começam com `!`

Exemplo:

```
!Qual valor do Dolar hoje?
```

---

## 🧠 Como Funciona

1. O bot escuta novas mensagens
2. Se a mensagem começar com `!`
3. Ele envia o texto para a API da OpenAI
4. Recebe a resposta da IA
5. Responde automaticamente no WhatsApp

---

