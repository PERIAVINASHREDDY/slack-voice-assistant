# Architecture Overview

Slack → n8n → Voice Call API

## Flow
1. Slack app mention triggers workflow
2. Message is parsed to identify user and intent
3. Phone number is resolved
4. Retell API is called to initiate voice call

## Security
- No secrets stored in GitHub
- API keys injected at runtime
- Workflow uses credentials/env variables
