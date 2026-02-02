# Slack Voice Assistant (n8n)

A **Slack-based voice assistant** that listens to app mentions and triggers automated phone calls using a voice AI API. This project demonstrates **event-driven automation**, secure API handling, and natural language parsing.

---

## 🚀 Tech Stack
- **n8n** – Workflow automation platform
- **Slack API** – Slack app integration and triggers
- **JavaScript** – Logic in n8n Code nodes
- **Voice AI (Retell)** – Automated voice call generation

---

## 🔐 Security Design
- **No secrets stored in GitHub** – All API keys and credentials are injected via environment variables.  
- **Sanitized workflow JSON** – No API keys or phone numbers are hardcoded.  
- **Environment variables** – Used for Twilio, Slack, Retell, and user phone numbers.  

---

## 🛠 Features
- Triggered by Slack app mentions (`@bot call userX ...`).  
- Natural language parsing to extract **target user** and **message**.  
- Dynamic user lookup for phone numbers.  
- Integration with **Retell Voice API** to initiate calls.  
- Fully **modular and secure** workflow, separating logic from configuration.

---

## ⚙️ Setup Instructions

1. **Clone the repository**  
   ```bash
   git clone https://github.com/<your-username>/slack-voice-assistant.git
   cd slack-voice-assistant
Configure environment variables

Copy .env.example to .env

Fill in your Retell, Twilio, and Slack credentials.

cp .env.example .env
Import workflow into n8n

Go to n8n → Workflows → Import

Select n8n/slack-voice-assistant-workflow.json

Set up credentials in n8n

Slack Bot Token & Signing Secret

Retell API Key, Agent ID, and From Number

Twilio credentials if needed

Activate workflow

Turn on the workflow in n8n

Test by mentioning your Slack bot with a command like:

@bot call user1 and tell them hello
