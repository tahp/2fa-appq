// 2fa.js
const { authenticator } = require('otplib');
const qrcode = require('qrcode-terminal');
const readline = require('readline-sync');

// Generate a new secret
const secret = authenticator.generateSecret();
console.log("Your secret:", secret);

// Show QR code for scanning
const otpauth = authenticator.keyuri('pugsy', 'My2FAApp', secret);
qrcode.generate(otpauth, { small: true });

// Show current code
const code = authenticator.generate(secret);
console.log("Current TOTP code:", code);

// Ask user to verify
const input = readline.question("Enter your 2FA code: ");
if (authenticator.check(input, secret)) {
  console.log("✅ Code is valid!");
} else {
  console.log("❌ Invalid code.");
}
