
FROM node:18

# Create app directory
WORKDIR /usr/src/app

# Copy package.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all files
COPY . .

# Expose port 8000
EXPOSE 8000

# Run app
CMD [ "node", "app.js" ]
