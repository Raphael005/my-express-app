# my-app

An Express web application scaffolded with [express-generator](https://expressjs.com/en/starter/generator.html) using the EJS template engine.

## Prerequisites

- [Node.js](https://nodejs.org/) (v14+)
- npm

## Installation

```bash
npm install
```

## Running the App

```bash
DEBUG=my-app:* npm start
```

The app will be available at [http://localhost:3000](http://localhost:3000).

## Project Structure

```
my-app/
├── bin/
│   └── www           # HTTP server entry point
├── public/           # Static assets
│   ├── images/
│   ├── javascripts/
│   └── stylesheets/
├── routes/
│   ├── index.js      # Home route
│   └── users.js      # Users route
├── views/
│   ├── error.ejs     # Error page template
│   └── index.ejs     # Home page template
├── app.js            # Express app configuration
└── package.json
```

## License

ISC
