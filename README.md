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

## Testing

```bash
npm test
```

Runs the Jest test suite.

## Continuous Integration

This project uses GitHub Actions for CI. The workflow automatically runs tests on:
- Every push to `main`
- Every pull request targeting `main`

View workflow runs at: [Actions](../../actions)

## Deployment

This app is configured for deployment on [Render](https://render.com/) using the included `render.yaml` configuration.

### Automatic Deployment Setup

1. **Connect to Render**
   - Go to [Render Dashboard](https://dashboard.render.com/)
   - Click "New +" → "Web Service"
   - Select "Build and deploy from a Git repository"

2. **Connect Repository**
   - Connect your GitHub account
   - Select this repository

3. **Auto-Configuration**
   - Render will automatically detect `render.yaml`
   - Service settings will be pre-populated:
     - Runtime: Node
     - Build Command: `npm install`
     - Start Command: `npm start`
     - Environment: `NODE_ENV=production`
     - Health Check: `/`

4. **Deploy**
   - Click "Create Web Service"
   - Your app will be built and deployed automatically
   - You'll receive a live URL (e.g., `https://my-express-app.onrender.com`)

### Continuous Deployment

Once connected, Render will automatically:
- Deploy on every push to the `main` branch
- Run health checks to monitor app status
- Rebuild if the deployment fails

### Manual Deployment Configuration

If you prefer manual setup, use these settings:
- **Build Command**: `npm install`
- **Start Command**: `npm start`
- **Environment Variables**: `NODE_ENV=production`
- **Health Check Path**: `/`

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
