# Use an official node runtime as a parent image
FROM node:14

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React application
RUN npm run build

# Use a simple server to serve the React application
RUN npm install -g serve

# Set the command to run the application
CMD ["serve", "-s", "build"]

# Expose the port the app runs on
EXPOSE 3000

