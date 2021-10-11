import jwt from 'jsonwebtoken'

require('dotenv').config()
const { SECRET } = process.env

export const AuthenticateUser = (req, res, next) => {
  const authHeader: string = req.headers.authorization

  if (authHeader) {
    const token: string = authHeader.split(' ')[1];

    jwt.verify(token, SECRET, (error) => {
    if (error) {
      console.log(error)
      return res.status(403).end();
    }
    next()
    })
  }

  return res.status(401).end();
}
