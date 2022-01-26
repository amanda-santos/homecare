<h1 align="center">
 <img src="assets/HomeCare.png" />
</h1>

<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/amanda-santos/homecare">
  
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/amanda-santos/homecare">
  
  <a href="https://github.com/amanda-santos/homecare/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/amanda-santos/homecare">
  </a>
  
  <a href="https://github.com/amanda-santos/homecare/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/amanda-santos/homecare">
  </a>
  
  <img alt="GitHub" src="https://img.shields.io/github/license/amanda-santos/homecare">
</p>

<p align="center">
  <a href="#-about-the-project">About the project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-getting-started">Getting started</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-how-to-contribute">How to contribute</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-license">License</a>
</p>

## 📝 About the project

<p>HomeCare is an application with the goal of helping families to find caregivers specialized in helping patients, such as children and elders, on day-to-day life.</p>

## ⚙ Available Languages

<p>pt-BR: ✅ Available
<br />EN: 💬 In Progress</p>

## 👩🏻‍💻 Technologies

Technologies used to develop this project:

- Next.js
- React
- React Native
- Expo
- TypeScript
- Styled Components
- Node.js
- Knex
- SQLite

- NestJS (partially - only experimental)

## 🖥 Preview
https://user-images.githubusercontent.com/49074930/151217875-30a7db45-4f84-4baa-b263-4758cd336ed8.mp4

https://user-images.githubusercontent.com/49074930/151217880-34b5067e-7f8f-49b9-94e8-a2d7e0fb2e82.mp4

## ⌨ Getting started

Running the backend:

- Inside the backend folder, run `npm i` or `yarn` to install the dependencies
- Run `npm run knex:migrate` or `yarn knex:migrate` to run the migrations
- Run `npm run knex seed:run` or `yarn knex seed:run` to populate the databases
- Run the server with `npm start` or `yarn start`

Running the backend-nestjs (partial project - only experimental):

- Inside the backend folder, run `npm i` or `yarn` to install the dependencies
- Change `ormconfig.json`, adding the setup of your MySQL database
- Build with `npm run build` or `yarn build`
- Run the server with `npm start` or `yarn start`

Running the frontend (mobile):

- Inside the frontend folder, run `npm i` or `yarn` to install the dependencies
- Run with `expo start`

## 🤔 How to contribute

**Make a fork of this repository**

```bash
# Fork using GitHub official command line
# If you don't have the GitHub CLI, use the web site to do that.

$ gh repo fork amanda-santos/homecare
```

**Follow the steps below**

```bash
# Clone your fork
$ git clone your-fork-url && cd homecare

# Create a branch with your feature
$ git checkout -b my-feature

# Make the commit with your changes
$ git commit -m 'feat: My new feature'

# Send the code to your remote branch
$ git push origin my-feature
```

After your pull request is merged, you can delete your branch

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Made with ❤ by Amanda Santos <br />
