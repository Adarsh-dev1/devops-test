# Use a lightweight Node.js image
FROM node:22-alpine

# Set the working directory
WORKDIR /app

# Copy package files first (for Docker layer caching)
COPY package*.json ./

# Install dependencies
RUN npm ci --omit=dev

# Copy the application source
COPY . .

# Expose the application port
EXPOSE 3000

# Start the application
CMD ["npm", "start"]