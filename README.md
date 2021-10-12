  

# RSA API

  

It allows to sign-in, generate token, RSA keys and encrypt file.

  

## API Documentation

  
POST `api/sign-in` <br>
<br>
<strong>Summary: </strong> <br> Check if user exist in mock and returns JWT Token.
<br>
<strong>Request: </strong> <br>
 Body: <br>
`{ "email": "example.user@mail.com", "password":"pass" }` <br>
Headers:  <br>
`Content-Type: application/json` <br>
<strong> Response: </strong> <br>
string `example.token`<br> 


POST `api/generate-key-pair` <br>
<strong>Summary: </strong> Authenticate users's token and generate RSA keys pair based on user's email hidden in token.
   <br><strong>Request: </strong> <br>
   Headers:  <br>
   `Authorization: Bearer your_jwt_key`
   <br>
   <strong> Response: </strong> <br>
   json `{
   "privateKey": "-----BEGIN RSA PRIVATE KEY-----\nProc-Type: 4,ENCRYPTED\nDEK-Info: AES-256-CBC,some numbers=\n-----END RSA PRIVATE KEY-----\n",
   "publicKey": "-----BEGIN RSA PUBLIC KEY-----\some numbers=\n-----END RSA PUBLIC KEY-----\n"
   }`<br> <br>
 
POST `api/encrypt` <br>
<strong>Summary: </strong> Authenticate user's token and returns encrypted file using public key generated by second endpoint.
  <br>
 <br><strong>Request: </strong> <br>
      Headers:  <br>
      ```Authorization: Bearer your_jwt_key``` <br>
<br> Please use for example <strong>Postman</strong> <br> to send request type "form-data" with following settings: <br>
![image](https://user-images.githubusercontent.com/17851827/136826537-a5193431-24a6-410e-8376-d3352d86b4bf.png)

<br>
file as type "file"<br>
publicKey as "text"<br>
If public key returned by API will not work please use the same key generated in main directory of project. It's the same key but without new lines. <br>
<strong> Response: </strong> <br>
string base64 `some_numbers`

## Software requeriments and additional informations

  

You need to have `TypeScript`, `npm`, `node js` installed on your computer to run project. By default server will start on port `3000`.

  

## Run locally

  

Clone this repository and remove "example" from example.env. Please set your secret key.

  

Run this command to install all packages in cloned repository:

```
npm install
```

Run this command to start project: 
```
ts-node src/index.ts
```
or
```
npm start
```


## Users

  

Users stored in `src/database/users.mock.ts`


```

  {
    email: "example@mail.com",
    password: "1234",
  },
  {
    email: 'spider.debugger@mail.com',
    password: "1234",
  }

```

