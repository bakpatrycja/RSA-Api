import crypto, { generateKeyPairSync } from 'crypto';
const { writeFileSync } = require('fs')

import { RSAInterface } from "../interfaces";

export class RsaService {
    public generateRSApair(data: string): RSAInterface {
        let { privateKey, publicKey } = generateKeyPairSync('rsa', {
            modulusLength: 512,
            publicKeyEncoding: {
                type: 'pkcs1',
                format: 'pem',
            },
            privateKeyEncoding: {
                type: 'pkcs1',
                format: 'pem',
                cipher: 'aes-256-cbc',
                passphrase: data,
            },
        })
        
        writeFileSync('private.pem', privateKey)
        writeFileSync('public.pem', publicKey)

        return { privateKey, publicKey }
    }

    public encryptFile(data: string, publicKey: string): string {
        const buffer = Buffer.from(data, 'utf8')
        const encrypted = crypto.publicEncrypt(publicKey, buffer);

        return encrypted.toString("base64");
    }
}
