# Use an official Node.js runtime as a parent image
FROM cypress/browsers:node18.12.0-chrome106-ff106

# Set the working directory in the container to /app
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package.json ./
 
RUN npm init -y
RUN npm install cypress 
RUN npm i typescript
RUN npx tsc --init 

# Bundle app source inside the Docker image 
COPY . . 

# Run the app when the container launches
CMD [ "npm", "run", "start-headless" ]