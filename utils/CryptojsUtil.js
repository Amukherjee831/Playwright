//import { CryptoJS } from 'crypto-js'

/*let CryptoJSUtil=require("crypto-js")

const SALT=process.env.SALT || "defaultsalt"

export function encrypt(text){
    const cipherText=CryptojsUtil.AES.encrypt(text,SALT)
    return cipherText
}

export function decrypt(text){
    const originalText=CryptojsUtil.AES.decrypt(text,SALT).toString(CryptojsUtil.env.utf8)
    return originalText
}*/

const crypto = require('crypto');

// Function to encrypt a string
function encrypt(text, secretKey) {
    const algorithm = 'aes-256-cbc';
    const iv = crypto.randomBytes(16);
    const key = crypto.scryptSync(secretKey, 'salt', 32);
    const cipher = crypto.createCipheriv(algorithm, key, iv);
    let encrypted = cipher.update(text, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return iv.toString('hex') + ':' + encrypted;
}


// Function to decrypt a string
export function decrypt(encryptedText, secretKey) {
    const algorithm = 'aes-256-cbc';
    const [ivHex, encrypted] = encryptedText.split(':');
    const iv = Buffer.from(ivHex, 'hex');
    const key = crypto.scryptSync(secretKey, 'salt', 32);
    const decipher = crypto.createDecipheriv(algorithm, key, iv);
    let decrypted = decipher.update(encrypted, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
}
// Example usage
const secretKey = '0ae2e82f11458a311ee49b2068fdf939';
const textToEncrypt = 'admin123';

const encryptedText = encrypt(textToEncrypt, secretKey);
console.log('Encrypted:', encryptedText);

const decryptedText = decrypt(encryptedText, secretKey);
console.log('Decrypted:', decryptedText);