# Use a Node.js base image
FROM node:19

# Set the working directory in the container
WORKDIR /app

# Copy the package.json file to the container
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application files to the container
COPY . .

# Expose the default Express.js port
EXPOSE 8080

# Set the command to start the Express.js server
CMD ["node", "index.js"]