import e, * as express from 'express'

import { ApiMessagesEnum } from '../enums'
import { AuthenticateUser } from '../middlewares'
import {
  UsersController,
  CryptoController
} from '../controllers'
import { RSAInterface } from "../interfaces";

export const router = express.Router()

router.post('/sign-in', async (request, response) => {
  const userController: UsersController = new UsersController();
  if (!request.body.password || !request.body.email) {
    return response.status(404).send(ApiMessagesEnum.MissingParameters).end();
  }
  if (!userController.validateUser(request.body.email, request.body.password)) {
    return response.status(404).send(ApiMessagesEnum.MissingResources).end();
  }
  const token: string = userController.generateToken(request.body.email);
  if (!token) {
    return response.status(505).send(ApiMessagesEnum.TokenError).end();
  }

  return response.status(200).send(token);
})

router.post('/generate-key-pair',AuthenticateUser ,async (request, response) => {
  const userController: UsersController = new UsersController();
  const RSAPair: RSAInterface = userController.getRSAPair(request);
  if (!RSAPair) {
    return response.status(500).send(ApiMessagesEnum.RSAError).end();
  }

  return response.status(200).send(RSAPair).end();
})

router.post('/encrypt',AuthenticateUser , async (request, response) => {
  if (!request.files || !request.files.file) {
    return response.status(404).end(ApiMessagesEnum.FileError);
  }

  if (Array.isArray(request.files.file) && request.files.file.length > 0) {
    return response.status(404).end(ApiMessagesEnum.TooManyFiles);
  }

  if (!request.body.publicKey) {
    return response.status(404).end(ApiMessagesEnum.MissingPublicKey);
  }

  const file = request.files.file as undefined;
  const cryptoController: CryptoController = new CryptoController();
  const encryptedFile: string = cryptoController.signFile([file], request.body.publicKey)
  if(!encryptedFile) {
    return response.status(500).send(ApiMessagesEnum.CryptoError).end();
  }

  return response.status(200).send(encryptedFile).end();
})
