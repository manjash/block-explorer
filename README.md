# block-explorer
Block Explorer for Iron Fish blockchain

## Dev setup
Run the Iron Fish Rosetta API
`cd ironfish/ironfish-rosetta-api`
`yarn start`
The Rosetta API is set to run on `localhost:8080`. If the port is different on your machine, update the `package.json` for CORS

Run a Full node
`cd ironfish/ironfish-cli`
`yarn start start`

Run the block explorer
`yarn dev`

## Available Scripts

In the project directory, you can run:

### `yarn dev`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

