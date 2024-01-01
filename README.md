
# Design Patterns Made Simple

This project is a demonstration of how to use design patterns in Cypress tests. The design patterns used in this project are designed to be easy to understand and use, even for beginners.

## Design Patterns

We have implemented the following design patterns in this project:

- Singleton: The `LoginCreatorSingleton` is an example of a Singleton. This ensures that only one instance of the login creator exists at any time.

- Factory Method

- Page Object Model


## Data-Driven Approach

We have implemented a data-driven approach in our tests. This means that our tests are designed to run with different sets of data. This is achieved by using fixtures in Cypress, which allows us to easily manage and use different sets of test data.






## Installation

Clone git repository and branch by using the following command:

```bash
  git clone --branch master https://github.com/josh-hrr/cypress-cucumber-playground.git 
```
Install Cypress

```bash
  npm install --save-dev cypress

```
Install TypeScript

```bash
    npm init -y
    npm i typescript
    npx tsc --init   
  ```   
 
Execute Cypress runner

```bash
  npx cypress open
```

## Running the Tests

You can run the tests in two ways:

- Open mode: This opens the Cypress Test Runner. You can watch the tests run in a browser. To run the tests in open mode, use the following command:

```bash
npm run start-open 

```

## Docker Usage

We use Docker to create a consistent testing environment for our Cypress tests. The Dockerfile in this project sets up a Node.js environment, installs the necessary dependencies, and runs the tests.

Here's a brief explanation of what each part of the Dockerfile does:

- `FROM cypress/browsers:node18.12.0-chrome106-ff106`: This line specifies the parent image that we're using. In this case, it's a Cypress image that includes Node.js, Chrome, and Firefox.

- `WORKDIR /app`: This line sets the working directory in the Docker container to `/app`.

- `COPY package.json ./`: This line copies the `package.json` file from your local environment into the Docker container.

- `RUN npm init -y`: This line initializes a new npm project in the Docker container.

- `RUN npm install cypress`: This line installs Cypress in the Docker container.

- `RUN npm i typescript`: This line installs TypeScript in the Docker container.

- `RUN npx tsc --init`: This line initializes a new TypeScript project in the Docker container.

- `COPY . .`: This line copies the rest of your local environment into the Docker container.

- `CMD [ "npm", "run", "start-headless" ]`: This line specifies the command that should be run when the Docker container is launched. In this case, it's running the tests in headless mode.

To build the Docker image, run the following command:

```bash
docker build -t my-cypress-app .
