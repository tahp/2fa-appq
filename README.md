# 2FA CLI App

A lightweight, terminal-based 2FA (Time-based One-Time Password) generator built for Termux and mobile-first workflows.

## 🔧 Features

- TOTP generation using shared secrets
- Modular CLI structure for easy extension
- Compatible with Termux and Linux environments
- Git versioned and ready for tagging (`v1.0.0`)

## 🚀 Getting Started

```bash
git clone https://github.com/tahp/2fa-appq.git
cd 2fa-appq
npm install
node index.js

## 🛡️ Usage

Run the CLI to generate a TOTP code or manage stored accounts.

### Generate a code

```bash
node index.js --account myemail@example.com
