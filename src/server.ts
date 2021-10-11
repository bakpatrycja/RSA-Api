import bodyParser from "body-parser";
import express from 'express'
const fileupload = require("express-fileupload");

import { ApiMessagesEnum} from "./enums"
import { router as appRouting } from './routes/app.routing'

export let app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileupload());

app.get('/', (request, response) => {
  response.status(200).send(ApiMessagesEnum.MainPage)
})

app.use('/api', appRouting)
