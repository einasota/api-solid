<div align="center">
<h1>API SOLID</h1>

This is an app that was created to study the use of SOLID principles.
The structure of the app is based on these principles.
</div>


<div align="center"> 

[Technologies](#technologies) | [Requirements](#requirements) | [How to use](#how-to-use) | [License](#license)

</div>

## Technologies

* [NodeJS](https://nodejs.org/)
* [Express](https://expressjs.com/pt-br/)
* [TypeScript](https://www.typescriptlang.org/)
* [NodeMailer](https://nodemailer.com/)

## Requirements

- NodeJS >= 18.12.1(LTS)
- yarn or npm

## How to use

### Install the dependencies

```shell
npm install
or
yarn install
```
### Configure MailTrap

1. Create or Login [MAILTRAP](https://mailtrap.io/) Account
2. Create new Inbox
3. In the SMTP Settings option, in integrations look for NodeJS/NodeMailer and save the user and pass.
4. Rename the `.env.example` file in the root folder of the project and it leaves just `.env`. With the file renamed, just put the user and pass in their respective locations.

### Run the server e test

```shell
yarn dev
or 
npm run dev
```
---
> Video: [Princípios SOLID em uma API REST com Node.js e TypeScript | Code/Drops #44](https://www.youtube.com/watch?v=vAV4Vy4jfkc&ab_channel=Rocketseat)

## License
This project is licensed under the MIT license. See the [LICENSE](./LICENSE.md) file for more details.
