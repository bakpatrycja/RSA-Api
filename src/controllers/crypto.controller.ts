import { RsaService } from '../services';

export class CryptoController {
    public signFile(file, publicKey: string): string {
    const rsaService: RsaService = new RsaService();

    return rsaService.encryptFile(file, publicKey)
  }
}
